import {isSupported} from '@github/browser-support'

if (!isSupported()) {
  const banner = document.getElementById('unsupported-browser')
  if (banner) {
    banner.removeAttribute('hidden')
  }
}
