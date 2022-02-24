import {AnalyticsClient, getOptionsFromMeta} from '@github/hydro-analytics-client'
import type {Context} from '@github/hydro-analytics-client'

const dimensionPrefix = 'dimension_'
let hydroAnalyticsClient: AnalyticsClient | undefined

try {
  const options = getOptionsFromMeta('octolytics')

  if (options.baseContext) {
    delete options.baseContext.app_id
    delete options.baseContext.event_url
    delete options.baseContext.host

    for (const key in options.baseContext) {
      // some octolytics meta tags are prefixed with dimension-, which we don't need with the new hydro-analytics-client
      if (key.startsWith(dimensionPrefix)) {
        options.baseContext[key.replace(dimensionPrefix, '')] = options.baseContext[key]
        delete options.baseContext[key]
      }
    }
  }

  const visitorMeta = document.querySelector<HTMLMetaElement>('meta[name=visitor-payload]')
  if (visitorMeta) {
    const visitorHash = JSON.parse(atob(visitorMeta.content))
    const baseContext = options.baseContext || {}
    Object.assign(baseContext, visitorHash)
    options.baseContext = baseContext
  }

  hydroAnalyticsClient = new AnalyticsClient(options)
} catch (_) {
  // Failed to get options from meta tags.  This most likely means analytics are disabled.
}

export function sendPageView(context?: Context) {
  hydroAnalyticsClient?.sendPageView(context)
}

export function sendEvent(type: string, context: Record<string, string | number | boolean | undefined | null>) {
  const service = document.head?.querySelector<HTMLMetaElement>('meta[name="current-catalog-service"]')?.content

  const cleanContext: Context = service ? {service} : {}

  for (const [key, value] of Object.entries(context)) {
    if (value !== undefined && value !== null) {
      cleanContext[key] = `${value}`
    }
  }

  hydroAnalyticsClient?.sendEvent(type || 'unknown', cleanContext)
}
