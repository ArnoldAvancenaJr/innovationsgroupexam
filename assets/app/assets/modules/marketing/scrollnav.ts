import {observe} from 'selector-observer'

// Shows which section a user is in by adding a class to its corresponding nav item.
//
// Used on github.com/features icon nav.

const observer = new IntersectionObserver(
  function (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        for (const item of document.querySelectorAll<HTMLAnchorElement>('.js-scrollnav-item')) {
          item.classList.toggle('selected', item.getAttribute('href') === `#${entry.target.id}`)
        }
      }
    }
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }
)

observe('.js-section', el => observer.observe(el))
