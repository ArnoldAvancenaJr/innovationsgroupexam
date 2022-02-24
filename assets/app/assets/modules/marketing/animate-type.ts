import {
  BUILDINCLASS,
  DEFAULTMARGINBOTTOM,
  DEFAULTMARGINTOP,
  DEFAULTTHRESHOLD,
  animationOptions,
  cancelAnimationsForElement,
  shouldReduceMotion
} from './animate-on-scroll'
import {observe} from 'selector-observer'

const DEFAULTTYPESPEED = 20
const DEFAULTROWSPEED = 200

observe('.js-type-in, .js-type-in-item', element => {
  if (shouldReduceMotion(element)) return
  resetText(element)
})

const defaultObserver = new IntersectionObserver(setAnimationState, {
  rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  threshold: DEFAULTTHRESHOLD
})

observe('.js-type-in, .js-type-in-trigger', element => {
  // Listen to prefers reduced motion, and cancel all animation if true
  if (shouldReduceMotion(element)) {
    cancelAnimationsForElement(element)
    return
  }

  const options = animationOptions(element)
  if (options.isDefault) return defaultObserver.observe(element)

  const customObserver = new IntersectionObserver(setAnimationState, {
    rootMargin: `-${options.marginTop}% 0% -${options.marginBottom}% 0%`,
    threshold: options.threshold
  })
  customObserver.observe(element)
})

function setAnimationState(entries: IntersectionObserverEntry[]) {
  for (const entry of entries) {
    entry.isIntersecting ? startTextAnimation(entry.target) : resetText(entry.target)
    if (!entry.target.classList.contains('js-type-in-trigger')) continue

    for (const item of entry.target.querySelectorAll('.js-type-in-item')) {
      entry.isIntersecting ? startTextAnimation(item) : resetText(item)
    }
  }
}

function resetText(element: Element) {
  const items = element.querySelectorAll<HTMLElement>('.js-type-row, .js-type-letters')
  for (const item of items) item.style.visibility = 'hidden'
  element.classList.remove(BUILDINCLASS)
}

function startTextAnimation(element: Element) {
  if (element.classList.contains(BUILDINCLASS)) return // Only trigger once
  element.classList.add(BUILDINCLASS)
  const items = element.querySelectorAll('.js-type-row, .js-type-letters')
  const delay = Number(element.getAttribute('data-type-delay') || DEFAULTTYPESPEED)
  const rowDelay = Number(element.getAttribute('data-type-row-delay') || DEFAULTROWSPEED)

  setTimeout(() => animateText(element, items, 0, '', rowDelay), delay)
}

function animateText(element: Element, elements: NodeListOf<Element>, index: number, text: string, rowDelay: number) {
  if (index >= elements.length) return

  const item = elements[index] as HTMLElement
  if (!element.classList.contains(BUILDINCLASS)) {
    if (text !== '') item.textContent = text
    return
  }
  // If it has class js-type-row, show it and continue
  if (item.classList.contains('js-type-row')) {
    item.style.visibility = 'visible'
    index++
    setTimeout(() => animateText(element, elements, index, '', rowDelay), rowDelay)
    return
    // We're here if it's the first time we're starting the animation of a letter animation
  } else if (item.style.visibility === 'hidden' && item.textContent != null) {
    text = item.textContent
    item.textContent = ''
    item.style.visibility = 'visible'
    item.classList.add('animation-is-typing')
  }

  if (item.textContent != null && text.length > item.textContent.length) {
    item.textContent = text.substr(0, item.textContent.length + 1)
  } else {
    index++
    if (index < elements.length) item.classList.remove('animation-is-typing')
  }

  setTimeout(() => animateText(element, elements, index, text, rowDelay), DEFAULTTYPESPEED)
}
