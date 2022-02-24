import {crc32} from '@allex/crc32'
import memoize from '@github/memoize'

interface FeaturesDatafileJSON {
  features: FeatureJSON[]
}

interface FeatureJSON {
  name: string
  enabled: boolean
  percentageOfActors: number
  actors: string[]
}

class Feature {
  name: string
  enabled: boolean
  percentageOfActors: number
  actors: string[]

  constructor(name: string, enabled: boolean, percentageOfActors: number, actors: string[]) {
    this.name = name
    this.enabled = enabled
    this.percentageOfActors = percentageOfActors
    this.actors = actors
  }

  isEnabled(actor: string | undefined): boolean {
    return this.enabled || this.actorGateOpen(actor) || this.percentageOfActorsGateOpen(actor)
  }

  // logic extracted from:
  // https://github.com/jnunemaker/flipper/blob/master/lib/flipper/gates/percentage_of_actors.rb
  private percentageOfActorsGateOpen(actor: string | undefined): boolean {
    if (!actor || this.percentageOfActors < 1) return false

    const id = `${this.name}${actor}`
    const scalingFactor = 1000
    const checksum = crc32(id) as number

    return checksum % (100 * scalingFactor) < this.percentageOfActors * scalingFactor
  }

  // logic extracted from:
  // https://github.com/jnunemaker/flipper/blob/master/lib/flipper/gates/actor.rb
  private actorGateOpen(actor: string | undefined): boolean {
    if (!actor || this.actors.length < 1) return false

    return this.actors.includes(actor)
  }
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
function isFeature(data: any): data is Feature {
  if (typeof data !== 'object' || !data) return false

  if (
    'name' in data &&
    typeof data.name === 'string' &&
    'enabled' in data &&
    typeof data.enabled === 'boolean' &&
    'percentageOfActors' in data &&
    typeof data.percentageOfActors === 'number' &&
    'actors' in data &&
    Array.isArray(data.actors)
  ) {
    return true
  }

  return false
}

class FeaturesDatafile {
  features: Feature[]

  constructor(datafile: FeaturesDatafileJSON) {
    this.features = (datafile.features || []).filter(isFeature).map(data => {
      return new Feature(data.name, data.enabled, data.percentageOfActors, data.actors)
    })
  }

  getFeature(featureName: string): Feature | void {
    return this.features.find(f => f.name === featureName)
  }
}

const featuresDatafile = memoize(loadFeaturesDatafile)

function loadFeaturesDatafile(): FeaturesDatafile {
  const datafileNode = document.head?.querySelector<HTMLMetaElement>('meta[name="features-datafile"]')
  const datafileText = datafileNode?.content || '{}'
  const datafile: FeaturesDatafileJSON = JSON.parse(datafileText)
  return new FeaturesDatafile(datafile)
}

export {featuresDatafile}
