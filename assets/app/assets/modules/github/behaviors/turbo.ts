import {isFeatureEnabled} from '../features'
if (isFeatureEnabled('TURBO')) {
  import('@hotwired/turbo')
}
