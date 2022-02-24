import {observe} from 'selector-observer'
import {on} from 'delegated-events'

on('click', '.js-toggler-target-off', event => {
  if (event.button !== 0) return // Ignore right-click events.
  const container = event.currentTarget.closest('.js-toggler-container')
  if (container) container.classList.remove('on')
})

const screenFocusObserver = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      entry.isIntersecting ? entry.target.removeAttribute('tabindex') : entry.target.setAttribute('tabindex', '-1')
    }
  },
  {
    rootMargin: `0% 0% 0% 0%`,
    threshold: 0
  }
)

observe('.js-home-repo-card', element => {
  screenFocusObserver.observe(element)
})
