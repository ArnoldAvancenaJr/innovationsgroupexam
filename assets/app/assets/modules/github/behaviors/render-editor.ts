import {markdownEnrichmentFailed, markdownEnrichmentSuccess} from './enrichable-markdown-render'
import {observe} from 'selector-observer'
import visible from '../visible'
interface RenderTiming {
  load?: number | null
  helloTimer?: number | null
  hello?: number | null
  loadTimer?: number | null
  untimed?: boolean
}

// These are the mutable state classes. They are to be wiped between transitions.
const stateClasses = ['is-render-pending', 'is-render-ready', 'is-render-loading', 'is-render-loaded']
// During a pjax navigation, we need to clear most of the mutable state classes, but preserve `is-render-pending`.
// We also want to clear out any of the failed state classes, since they prevent the user from viewing content
// which has otherwise rendered correctly
const pjaxStateClasses = [
  'is-render-ready',
  'is-render-loading',
  'is-render-loaded',
  'is-render-failed',
  'is-render-failed-fatally'
]
const timingData: WeakMap<Element, RenderTiming> = new WeakMap()
function resetTiming(where: Element) {
  const renderTiming = timingData.get(where)
  if (renderTiming == null) {
    return
  }
  renderTiming.load = renderTiming.hello = null
  if (renderTiming.helloTimer) {
    clearTimeout(renderTiming.helloTimer)
    renderTiming.helloTimer = null
  }
  if (renderTiming.loadTimer) {
    clearTimeout(renderTiming.loadTimer)
    renderTiming.loadTimer = null
  }
}

// Everything is broken, sink with the ship
function renderFailed(where: Element) {
  where.classList.remove(...stateClasses)
  where.classList.add('is-render-failed')
  markdownEnrichmentFailed(where as HTMLElement)

  resetTiming(where)
}

function timeoutWatchdog(where: Element, checkHello = false) {
  if (
    !visible(where as HTMLElement) ||
    where.classList.contains('is-render-ready') ||
    where.classList.contains('is-render-failed') ||
    where.classList.contains('is-render-failed-fatally') ||
    (checkHello && !timingData.get(where)?.hello)
  ) {
    return
  }

  renderFailed(where)
}

// Update each container with a potentially
// changed element every time a refresh or pjax
// triggers.
observe('.js-render-target', function (el) {
  const htmlEl = el as HTMLElement
  htmlEl.classList.remove(...pjaxStateClasses)
  htmlEl.style.height = 'auto'

  if (timingData.get(el)?.load) {
    return
  }

  resetTiming(el)

  if (timingData.get(el)) {
    return
  }

  timingData.set(el, {
    load: Date.now(),
    hello: null,
    helloTimer: window.setTimeout(timeoutWatchdog, 10_000, el, true),
    loadTimer: window.setTimeout(timeoutWatchdog, 45_000, el)
  })

  el.classList.add('is-render-automatic', 'is-render-requested')
})

interface RenderMessage {
  type: string
  body?: unknown
}

function postAsJson(renderWindow: Window | null | undefined, message: RenderMessage) {
  if (renderWindow && renderWindow.postMessage) {
    renderWindow.postMessage(JSON.stringify(message), '*')
  }
}

// Handle messages coming from the viewer iframe using `postMessage`.
// We throw away any message that doesn't look like it's coming from the render
// client.
window.addEventListener('message', function (event: MessageEvent) {
  let result = event.data
  if (!result) return

  if (typeof result === 'string') {
    try {
      result = JSON.parse(result) as unknown
    } catch {
      // Ignore parse errors
      return
    }
  }

  if (typeof result.type !== 'string' && result.type !== 'render') return

  if (typeof result.identity !== 'string') return
  const identity = result.identity

  if (typeof result.body !== 'string') return
  const body = result.body

  let container
  for (const target of document.querySelectorAll<HTMLElement>('.js-render-target')) {
    if (target.getAttribute('data-identity') === identity) {
      container = target
      break
    }
  }
  if (!container) return

  if (event.origin !== container.getAttribute('data-host')) {
    return
  }

  const payload = result.payload != null ? result.payload : undefined
  const iframe = container.querySelector('iframe')
  const renderWindow = iframe?.contentWindow

  function postData() {
    const data = iframe?.getAttribute('data-content')
    if (!data) {
      return
    }
    const msg = {
      type: 'render:cmd',
      body: {
        cmd: 'code_rendering_service:data:ready',
        'code_rendering_service:data:ready': JSON.parse(data)
      }
    }
    postAsJson(renderWindow, msg)
  }

  switch (body) {
    case 'hello':
      {
        const renderTiming = timingData.get(container) || {
          untimed: true
        }

        renderTiming.hello = Date.now()

        const ackmsg = {
          type: 'render:cmd',
          body: {
            cmd: 'ack',
            ack: true
          }
        }

        const msg = {
          type: 'render:cmd',
          body: {
            cmd: 'branding',
            branding: false
          }
        }

        if (!renderWindow) return
        postAsJson(renderWindow, ackmsg)
        postAsJson(renderWindow, msg)
      }
      break
    case 'error':
      renderFailed(container)
      break
    case 'error:fatal': {
      renderFailed(container)
      container.classList.add('is-render-failed-fatal')
      break
    }
    case 'error:invalid':
      renderFailed(container)
      container.classList.add('is-render-failed-invalid')
      break
    case 'loading':
      container.classList.remove(...stateClasses)
      container.classList.add('is-render-loading')
      break
    case 'loaded':
      container.classList.remove(...stateClasses)
      container.classList.add('is-render-loaded')
      break
    case 'ready':
      markdownEnrichmentSuccess(container)
      container.classList.remove(...stateClasses)
      container.classList.add('is-render-ready')

      if (payload && typeof payload.height === 'number') {
        container.style.height = `${payload.height}px`
      }

      break
    case 'resize':
      if (payload && typeof payload.height === 'number') {
        container.style.height = `${payload.height}px`
      }

      break
    case 'code_rendering_service:markdown:get_data':
      if (!renderWindow) return
      postData()
      break
    default:
      break
  }
})
