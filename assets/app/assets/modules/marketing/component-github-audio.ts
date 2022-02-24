type GitHubAudioComponentEvent = () => void
class GitHubAudio extends HTMLElement {
  defaultSkipStep: number
  playToggleButton: HTMLElement | null
  playToggleButtonLabel: HTMLElement | null
  currentTimeLabel: HTMLElement | null
  totalTimeLabel: HTMLElement | null
  scrubber: HTMLInputElement | null
  scrubberProgress: HTMLElement | null
  skipBackwardButton: HTMLElement | null
  skipForwardButton: HTMLElement | null
  downloadLink: HTMLElement | null
  requestedAnimationFrame: number
  ready: boolean
  audio: HTMLAudioElement

  constructor() {
    super()

    const src = this.getAttribute('src')

    if (!src) {
      // console.error('GitHub Audio: no `src` attribute provided.')
      return this
    }

    this.defaultSkipStep = 10
    this.playToggleButton = this.querySelector('.js-github-audio-play-toggle')
    this.playToggleButtonLabel = this.querySelector('#play-toggle-label')
    this.currentTimeLabel = this.querySelector('.js-github-audio-current-time')
    this.totalTimeLabel = this.querySelector('.js-github-audio-total-time')
    this.scrubber = this.querySelector('.js-github-audio-scrubber')
    this.scrubberProgress = this.querySelector('.js-github-audio-scrubber-progress')
    this.skipBackwardButton = this.querySelector('.js-github-audio-skip-backward')
    this.skipForwardButton = this.querySelector('.js-github-audio-skip-forward')

    this.requestedAnimationFrame = 0
    this.ready = false

    this.audio = this.createAudioElement(src, this.onLoadedMetaData, null, this.onEnded)
  }

  createAudioElement(
    src: string,
    onLoadedMetaData: GitHubAudioComponentEvent | undefined | null,
    onCanPlay: GitHubAudioComponentEvent | undefined | null,
    onEnded: GitHubAudioComponentEvent | undefined | null
  ) {
    const audio = new Audio()
    audio.preload = 'metadata'

    if (onLoadedMetaData) {
      audio.addEventListener('loadedmetadata', () => {
        onLoadedMetaData.bind(this)()
      })
    }

    if (onEnded) {
      audio.addEventListener('ended', () => {
        onEnded.bind(this)()
      })
    }

    if (onCanPlay) {
      audio.addEventListener('canplay', () => {
        onCanPlay.bind(this)()
      })
    }

    audio.src = src
    return audio
  }

  static zeroFormat(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

  static formatTime(value: number): string {
    const min = Math.floor(value / 60)
    const sec = Math.floor(value % 60)

    return `${this.zeroFormat(min)}:${this.zeroFormat(sec)}`
  }

  setTotalTimeLabel(value: number): void {
    if (!this.totalTimeLabel) return
    this.totalTimeLabel.textContent = GitHubAudio.formatTime(value)
  }

  setCurrentTimeLabel(value: number): void {
    if (!this.currentTimeLabel) return
    this.currentTimeLabel.textContent = GitHubAudio.formatTime(value)
  }

  getTotalTimeLabel(): string | null {
    if (!this.totalTimeLabel) return ''
    return this.totalTimeLabel.textContent
  }

  getCurrentTimeLabel(): string | null {
    if (!this.currentTimeLabel) return ''
    return this.currentTimeLabel.textContent
  }

  updateScrubberAria(): void {
    if (!this.scrubber) return
    this.scrubber.setAttribute('aria-valuenow', this.scrubber.value)
  }

  calculatePercentagePostion(current: number, max: number): number {
    return (current * 100) / max
  }

  setScrubberPosition(value: number): void {
    if (!this.scrubber || !this.scrubberProgress) return
    this.scrubber.value = `${Math.floor(value)}`
    const max: number = parseInt(this.scrubber.max)
    this.scrubberProgress.style.width = `${this.calculatePercentagePostion(value, max)}%`
    this.updateScrubberAria()
  }

  updateStateWhilePlaying(): void {
    this.setCurrentTimeLabel(this.audio.currentTime)
    this.setScrubberPosition(this.audio.currentTime)

    this.requestedAnimationFrame = requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
  }

  initScrubber(): void {
    if (!this.scrubber) return
    this.scrubber.min = `0`
    this.scrubber.max = `${Math.floor(this.audio.duration)}`
    this.scrubber.setAttribute('aria-valuemin', this.scrubber.min)
    this.scrubber.setAttribute('aria-valuemax', this.scrubber.max)

    this.scrubber.addEventListener('change', () => {
      if (!this.scrubber) return
      this.audio.currentTime = parseInt(this.scrubber.value, 10)

      if (!this.audio.paused) {
        requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
      }
    })

    this.scrubber.addEventListener('input', () => {
      if (!this.scrubber || !this.scrubberProgress) return
      const value = parseInt(this.scrubber.value, 10)
      const max = parseInt(this.scrubber.max, 10)
      this.setCurrentTimeLabel(value)
      this.scrubberProgress.style.width = `${this.calculatePercentagePostion(value, max)}%`
      this.updateScrubberAria()

      if (!this.audio.paused) {
        cancelAnimationFrame(this.requestedAnimationFrame)
      }
    })

    this.scrubber.addEventListener('keyup', e => {
      if (e.code === 'Space') {
        this.togglePlay()
      }
    })
  }

  play(): void {
    this.audio.play()
    if (this.playToggleButtonLabel)
      this.playToggleButtonLabel.textContent = this.playToggleButtonLabel.getAttribute('data-label-pause')
    if (this.playToggleButton) this.playToggleButton.setAttribute('data-play-state', 'playing')
    requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
  }

  pause(): void {
    this.audio.pause()
    if (this.playToggleButtonLabel)
      this.playToggleButtonLabel.textContent = this.playToggleButtonLabel.getAttribute('data-label-play')
    if (this.playToggleButton) this.playToggleButton.setAttribute('data-play-state', 'paused')
    cancelAnimationFrame(this.requestedAnimationFrame)
  }

  stop(): void {
    this.pause()
    this.audio.currentTime = 0
    this.setScrubberPosition(0)
  }

  togglePlay(): void {
    if (this.audio.paused) {
      this.play()
      return
    }

    this.pause()
  }

  skipForward(skipStep?: number): void {
    skipStep = skipStep || this.defaultSkipStep
    this.audio.currentTime = this.audio.currentTime + skipStep

    if (this.audio.paused) {
      this.setCurrentTimeLabel(this.audio.currentTime)
      this.setScrubberPosition(this.audio.currentTime)
    }
  }

  skipBackward(skipStep?: number): void {
    skipStep = skipStep || this.defaultSkipStep
    this.audio.currentTime = this.audio.currentTime - skipStep

    if (this.audio.paused) {
      this.setCurrentTimeLabel(this.audio.currentTime)
      this.setScrubberPosition(this.audio.currentTime)
    }
  }

  /* eslint-disable-next-line custom-elements/no-method-prefixed-with-on */
  onLoadedMetaData(): void {
    this.setTotalTimeLabel(this.audio.duration)
    this.initScrubber()
    this.onCanPlay()
  }

  /* eslint-disable-next-line custom-elements/no-method-prefixed-with-on */
  onEnded(): void {
    this.pause()
  }

  /* eslint-disable-next-line custom-elements/no-method-prefixed-with-on */
  onCanPlay(): void {
    if (!this.ready) {
      if (this.playToggleButton) {
        this.playToggleButton.addEventListener('click', this.togglePlay.bind(this))
        this.playToggleButton.removeAttribute('disabled')
      }

      if (this.skipForwardButton) {
        this.skipForwardButton.addEventListener('click', () => {
          this.skipForward()
        })
        this.skipForwardButton.removeAttribute('disabled')
      }

      if (this.skipBackwardButton) {
        this.skipBackwardButton.addEventListener('click', () => {
          this.skipBackward()
        })
        this.skipBackwardButton.removeAttribute('disabled')
      }

      if (this.scrubber) this.scrubber.removeAttribute('disabled')

      this.ready = true
    }
  }
}

if (window && 'customElements' in window) window.customElements.define('github-audio', GitHubAudio)
