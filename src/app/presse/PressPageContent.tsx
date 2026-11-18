import {PressAd} from '@/components/PressAd'
import {PressContact} from '@/components/PressContact'
import {PressList} from '@/components/PressList'
import {cachedSanityFetch} from '@/sanity/live'
import {PRESS_PAGE_QUERY} from '@/sanity/queries'
import type {PressComponent, PressPage} from '@/sanity/types'

const DEFAULT_PARAMS = {
  slug: 'presse',
  edition: 'deutschland',
  language: 'de',
}

function Separator() {
  return (
    <div className="press-section">
      <div className="site-container">
        <div className="section-separator" />
      </div>
    </div>
  )
}

function renderComponent(component: PressComponent, index: number, total: number) {
  const nodes = []

  switch (component._type) {
    case 'pressContactSection':
      nodes.push(<PressContact key={component._key} section={component} />)
      break
    case 'pressListSection':
      nodes.push(
        <PressList
          key={component._key}
          heading={component.heading}
          subheading={component.subheading}
          items={component.items || []}
        />,
      )
      break
    case 'adBannerSection':
      nodes.push(<PressAd key={component._key} section={component} />)
      break
    default: {
      const _exhaustive: never = component
      return _exhaustive
    }
  }

  if (index < total - 1 && component._type !== 'adBannerSection') {
    nodes.push(<Separator key={`${component._key}-separator`} />)
  }

  return nodes
}

export async function PressPageContent() {
  const {data} = await cachedSanityFetch({
    query: PRESS_PAGE_QUERY,
    params: {...DEFAULT_PARAMS},
    perspective: 'published',
    stega: false,
  })
  const pressPage = data as PressPage | null

  if (!pressPage) {
    return (
      <div className="site-container py-24 text-center">
        <h1 className="press-heading">Presse</h1>
        <p className="press-contact-text">
          Press content is not available yet. Open Sanity Studio and publish a Press Page.
        </p>
      </div>
    )
  }

  const components = pressPage.components || []

  return (
    <div className="min-h-full bg-paper text-ink">
      {components.flatMap((component, index) =>
        renderComponent(component, index, components.length),
      )}
    </div>
  )
}
