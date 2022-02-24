import {observe} from 'selector-observer'

/*
 * Used to override url parameters of a link element with url parameters
 * found in `location.search` query string
 *
 * Link elements should have the `.js-override-utm-params` in order for
 * their utm URL parameters (utm_campaign, utm_source, utm_medium) to be
 * overwritten:
 *
 * <a
 *   href="https://enterprise.github.com?utm_campaign=original_campaign&utm_source=original_source&utm_media=original_media"
 *   class="js-override-utm-params"
 * >
 *  Contact Sales
 * </a>
 *
 * This means that if the rendering page is visited with the
 * `utm_campaign`, `utm_media` and/or `utm_source` URL parameters, they
 * will be overwritten to the parameters in the URL being visited.
 */
observe('.js-override-utm-params', element => {
  let href = element.getAttribute('href')
  const queryString = document.location.search
  const PARAMS_TO_OVERRIDE = ['utm_campaign', 'utm_medium', 'utm_source']

  if (!href || !queryString) {
    return
  }

  for (const paramName of PARAMS_TO_OVERRIDE) {
    const re = new RegExp(`${paramName}=([^=&]*)`)
    const matches = re.exec(queryString)
    re.lastIndex = 0

    if (!matches) {
      continue
    }

    href = href.replace(re, `${paramName}=${matches[1]}`)
    element.setAttribute('href', href)
  }
})
