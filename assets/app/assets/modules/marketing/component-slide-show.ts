import {shouldReduceMotion} from './animate-on-scroll'

class SlideShow extends HTMLElement {
  bullets: NodeListOf<Element>
  gotos: NodeListOf<Element>
  slideIds: string[]
  interval: number | null
  current: number
  intervalTime: number
  currentSlideId: string | null
  swipeArea: HTMLElement | null
  touchStartX: number
  touchEndX: number
  swipeLengthMod: number

  constructor() {
    super()

    const autoplayAttribute = this.getAttribute('data-slide-show-autoplay')
    const threshold = this.getAttribute('data-threshold') || '0.2'
    this.intervalTime = 6000

    this.bullets = this.querySelectorAll('.js-slide-show-bullet[aria-controls]')
    this.gotos = this.querySelectorAll('.js-slide-show-goto[aria-controls]')
    this.slideIds = []
    this.interval = null
    this.current = 0
    this.currentSlideId = null

    this.swipeArea = this.querySelector('.js-slide-show-swipe-area')
    this.touchStartX = 0
    this.touchEndX = 0
    this.swipeLengthMod = 20

    if (autoplayAttribute && !shouldReduceMotion(this)) {
      const intervalAttributeParsed = parseInt(autoplayAttribute, 10)
      if (!isNaN(intervalAttributeParsed)) this.intervalTime = intervalAttributeParsed

      // NOTE: each GitHubslide-show instance will have it's own IntersectionObserver instance - if there are more than one on the page, consider global observer
      const observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            const target: SlideShow = <SlideShow>entry.target
            entry.isIntersecting ? target.play() : target.pause()
          }
        },
        {threshold: Number(threshold)}
      )

      observer.observe(this)
    }

    for (let i = 0; i < this.bullets.length; i++) {
      const bullet = this.bullets[i]
      const slideId = bullet.getAttribute('aria-controls')
      const currentBullet = bullet.getAttribute('aria-selected')

      if (slideId) this.slideIds.push(slideId)

      if (currentBullet) {
        this.current = i
        this.currentSlideId = slideId
      }

      bullet.addEventListener('click', this.bulletOnClick.bind(this))
    }

    for (let i = 0; i < this.gotos.length; i++) {
      const goto = this.gotos[i]
      const slideId = goto.getAttribute('aria-controls')

      if (this.currentSlideId === slideId) {
        goto.setAttribute('aria-selected', 'true')
      }

      goto.addEventListener('click', this.bulletOnClick.bind(this))
    }

    if (this.swipeArea) {
      this.swipeArea.addEventListener('touchstart', this.onTouchStart.bind(this), {passive: true})
      this.swipeArea.addEventListener('touchend', this.onTouchEnd.bind(this))
    }
  }

  /* eslint-disable-next-line custom-elements/no-method-prefixed-with-on */
  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.changedTouches[0].screenX
  }

  /* eslint-disable-next-line custom-elements/no-method-prefixed-with-on */
  onTouchEnd(e: TouchEvent): void {
    this.touchEndX = e.changedTouches[0].screenX

    if (this.touchEndX < this.touchStartX - this.swipeLengthMod) {
      this.pause()
      this.nextSlide()
    }

    if (this.touchEndX > this.touchStartX + this.swipeLengthMod) {
      this.pause()
      this.prevSlide()
    }
  }

  pause(): void {
    if (this.interval) window.clearInterval(this.interval)
  }

  play(): void {
    this.pause()
    this.interval = window.setInterval(this.nextSlide.bind(this), this.intervalTime)
  }

  nextSlide(): void {
    this.current++

    if (this.current > this.slideIds.length - 1) {
      this.current = 0
    }

    this.goToSlide(this.slideIds[this.current])
  }

  prevSlide(): void {
    this.current--

    if (this.current < 0) {
      this.current = this.slideIds.length - 1
    }

    this.goToSlide(this.slideIds[this.current])
  }

  bulletOnClick(e: Event): void {
    e.preventDefault()
    const target = e.target as HTMLElement
    const nextSlideId = target?.getAttribute('aria-controls')
    if (nextSlideId) this.goToSlide(nextSlideId)
    this.pause()
  }

  goToSlide(slideId: string): void {
    const nextSlide = this.querySelector(`.js-slide-show-slide[id="${slideId}"]`)
    const nextBullet = this.querySelector(`.js-slide-show-bullet[aria-controls="${slideId}"]`)
    const nextGoTos = this.querySelectorAll(`.js-slide-show-goto[aria-controls="${slideId}"]`)
    const currentSlide = this.querySelector('.js-slide-show-slide:not([aria-hidden="true"])')
    const currentBullet = this.querySelector('.js-slide-show-bullet[aria-selected="true"]')
    const currentGoTos = this.querySelectorAll('.js-slide-show-goto[aria-selected="true"]')

    currentSlide?.setAttribute('aria-hidden', 'true')
    currentBullet?.setAttribute('aria-selected', 'false')

    for (let i = 0; i < currentGoTos.length; i++) {
      const goto = currentGoTos[i]
      goto.setAttribute('aria-selected', 'false')
    }

    nextSlide?.removeAttribute('aria-hidden')
    nextBullet?.setAttribute('aria-selected', 'true')

    for (let i = 0; i < nextGoTos.length; i++) {
      const goto = nextGoTos[i]
      goto.setAttribute('aria-selected', 'true')
    }
  }
}

if (window && 'customElements' in window) window.customElements.define('slide-show', SlideShow)
