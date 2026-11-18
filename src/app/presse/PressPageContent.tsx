import {PressAd} from '@/components/PressAd'
import {PressContact} from '@/components/PressContact'
import {PressList} from '@/components/PressList'
import {cachedSanityFetch} from '@/sanity/live'
import {PRESS_PAGE_QUERY} from '@/sanity/queries'
import type {PressPage} from '@/sanity/types'

export async function PressPageContent() {
  const {data} = await cachedSanityFetch({query: PRESS_PAGE_QUERY})
  const pressPage = data as PressPage | null

  if (!pressPage) {
    return (
      <div className="site-container py-24 text-center">
        <h1 className="press-heading">Presse</h1>
        <p className="press-contact-text">
          Press content is not available yet. Open Sanity Studio and publish the Press Page
          singleton.
        </p>
      </div>
    )
  }

  const items = pressPage.items || []
  const coverage = items.filter((item) => item.category === 'coverage')
  const releases = items.filter((item) => item.category === 'release')
  const podcasts = items.filter((item) => item.category === 'podcast')

  return (
    <div className="min-h-full bg-paper text-ink">
      <PressContact page={pressPage} />

      <div className="press-section">
        <div className="site-container">
          <div className="section-separator" />
        </div>
      </div>

      <PressList
        heading={pressPage.presseHeading}
        subheading={pressPage.presseSubheading}
        items={coverage}
      />

      <div className="press-section">
        <div className="site-container">
          <div className="section-separator" />
        </div>
      </div>

      <PressList heading={pressPage.releasesHeading} items={releases} />

      <div className="press-section">
        <div className="site-container">
          <div className="section-separator" />
        </div>
      </div>

      <PressList heading={pressPage.podcastsHeading} items={podcasts} />

      <PressAd ad={pressPage.bottomAd} />
    </div>
  )
}
