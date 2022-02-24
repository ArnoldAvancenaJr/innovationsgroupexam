import {observe} from 'selector-observer'

export const BUILDINCLASS = 'build-in-animate'
const BUILDINCLASSREDUCED = 'build-in-reduced'
export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0

observe('.js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]', element => {
  const stagger = parseInt(element.getAttribute('data-build-in-stagger')!)
  const items = element.querySelectorAll<HTMLElement>('.js-build-in-item')

  for (let i = 0; i < items.length; i++) items[i].style.transitionDelay = `${i * stagger}ms`
})

const defaultObserver = new IntersectionObserver(toggleAnimationClasses, {
  rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  threshold: DEFAULTTHRESHOLD
})

observe('.js-build-in-item[data-build-delay]', element => {
  const delay = Number(element.getAttribute('data-build-delay') || 0)
  if (!(element instanceof HTMLElement)) return
  element.style.transitionDelay = `${delay}ms`
})

observe('.js-build-in, .js-build-in-trigger', element => {
  // Listen to prefers reduced motion, and cancel all animation if true
  if (shouldReduceMotion(element)) {
    cancelAnimationsForElement(element)
    return
  }

  const options = animationOptions(element)
  if (options.isDefault) return defaultObserver.observe(element)

  const customObserver = new IntersectionObserver(toggleAnimationClasses, {
    rootMargin: `-${options.marginTop}% 0% -${options.marginBottom}% 0%`,
    threshold: options.threshold
  })
  customObserver.observe(element)
})

function toggleAnimationClasses(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    entry.target.classList.toggle(BUILDINCLASS, entry.isIntersecting)
    if (!entry.target.classList.contains('js-build-in-trigger')) continue

    for (const item of entry.target.querySelectorAll('.js-build-in-item')) {
      item.classList.toggle(BUILDINCLASS, entry.isIntersecting)
    }
  }
}

export function shouldReduceMotion(element: Element) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  // If the animation serves a non-decorative purpose, don't cancel it
  const nonDecorative = element.getAttribute('data-build-non-decorative') || 'false'
  // Reduce if it reduce motion is turned on, and if the animation is decorative
  return mediaQuery.matches && nonDecorative === 'false'
}

export function cancelAnimationsForElement(element: Element) {
  element.classList.add(BUILDINCLASSREDUCED)
  element.classList.add(BUILDINCLASS)
  for (const item of element.querySelectorAll('.js-build-in-item, .js-type-in-item')) {
    item.classList.add(BUILDINCLASSREDUCED)
    item.classList.add(BUILDINCLASS)
  }
}

export function animationOptions(element: Element) {
  const marginBottom = Number(element.getAttribute('data-build-margin-bottom') || DEFAULTMARGINBOTTOM)
  const marginTop = Number(element.getAttribute('data-build-margin-top') || DEFAULTMARGINTOP)
  const threshold = Number(element.getAttribute('data-build-threshold') || DEFAULTTHRESHOLD)

  return {
    marginBottom,
    marginTop,
    threshold,
    isDefault: marginBottom === DEFAULTMARGINBOTTOM && marginTop === DEFAULTMARGINTOP && threshold === DEFAULTTHRESHOLD
  }
}

observe('.js-viewport-aware-video', {
  constructor: HTMLMediaElement,
  add(video) {
    video.addEventListener('click', () => {
      video.classList.toggle('looping-paused-mktg', !video.paused)
      video.paused ? video.play() : video.pause()
    })

    if (shouldReduceMotion(video)) {
      video.pause()
      video.classList.add('looping-paused-mktg')
      return
    }

    const threshold = video.getAttribute('data-threshold') || '0.2'
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) entry.isIntersecting ? video.play() : video.pause()
      },
      {threshold: Number(threshold)}
    )

    observer.observe(video)
  }
})
