import {featuresDatafile} from './github/datafile-features'
import {getOrCreateClientId} from '@github/hydro-analytics-client'
import {isFeatureEnabled} from './github/features'
import {observe} from 'selector-observer'
import {sendData} from './github/hydro-tracking'

// Toggle elements using Feature Flags
// Usage: add a 'data-feature' attribute to the element(s) you want to hide/show with the name of
// the feature flag as the value. Elements with the 'hidden' attribute will be shown when the
// feature is enabled. Elements without the 'hidden' attribute will be hidden when the feature is
// enabled.
//
// Example:
//  <div id="old-feature-div" data-feature="new_feature" data-show-when-feature-enabled="false" hidden>
//    Hidden when feature enabled / Visible when feature disabled
//  </div>
//  <div id="new-feature-div" data-feature="new_feature" data-show-when-feature-enabled="true" hidden>
//    Visible when feature enabled / Hidden when feature disabled
//  </div>
//
function toggleFeatureFlaggedElement(element: HTMLElement) {
  const featureName = element.getAttribute('data-feature')
  const showElementIfFeatureEnabled = element.getAttribute('data-show-when-feature-enabled') === 'true'

  if (!featureName) return

  const featureEnabled = isFeatureEnabled(featureName) || isDatafileFeatureEnabled(featureName)
  if (featureEnabled) {
    element.hidden = !showElementIfFeatureEnabled
  } else {
    element.hidden = showElementIfFeatureEnabled
  }

  sendHydroEvent(element, featureEnabled)
}

function isDatafileFeatureEnabled(featureName: string): boolean {
  const feature = featuresDatafile().getFeature(featureName)
  if (!feature) return false
  const actor = `User::CurrentVisitorActor:${octolyticsId()}`
  return feature.isEnabled(actor)
}

// Send hydro event for when we've checked logged out feature flag
// to `browser.feature_flag_decision`
// For logged out cached pages we don't know until we check the flag
// above which event we want to send out
function sendHydroEvent(element: HTMLElement, featureEnabled: boolean) {
  if (!element.hasAttribute('data-feature-hydro') || !element.hasAttribute('data-feature-hydro-hmac')) {
    return
  }

  const payload = element.getAttribute('data-feature-hydro') || ''
  const hmac = element.getAttribute('data-feature-hydro-hmac') || ''

  sendData(
    payload,
    hmac,
    JSON.stringify({
      octolytics_id: octolyticsId(),
      feature_flag_enabled: featureEnabled
    })
  )
}

function octolyticsId() {
  const rawOctolyticsId = getOrCreateClientId()
  return `GH1.1.${rawOctolyticsId}`
}

observe('[data-feature]', {
  add(el) {
    toggleFeatureFlaggedElement(el as HTMLElement)
  }
})
