import {PressContact} from '@/components/PressContact'
import {PressList} from '@/components/PressList'
import {SiteShell} from '@/components/SiteShell'
import {cachedSanityFetch} from '@/sanity/live'
import {PRESS_ITEMS_QUERY, PRESS_PAGE_QUERY, SITE_SETTINGS_QUERY} from '@/sanity/queries'
import type {PressItem, PressPage, SiteSettings} from '@/sanity/types'

export async function PressPageContent() {
  const [{data: settings}, {data: page}, {data: items}] = await Promise.all([
    cachedSanityFetch({query: SITE_SETTINGS_QUERY}),
    cachedSanityFetch({query: PRESS_PAGE_QUERY}),
    cachedSanityFetch({query: PRESS_ITEMS_QUERY}),
  ])

  const siteSettings = settings as SiteSettings | null
  const pressPage = page as PressPage | null
  const pressItems = (items as PressItem[] | null) || []

  if (!pressPage) {
    return (
      <SiteShell settings={siteSettings}>
        <div className="site-container py-24 text-center">
          <h1 className="font-display text-[43px] font-light">Presse</h1>
          <p className="mt-[30px] font-body text-[21px] font-light text-ink/70">
            Press content is not available yet. Open Sanity Studio and publish the Press Page
            singleton.
          </p>
        </div>
      </SiteShell>
    )
  }

  const coverage = pressItems.filter((item) => item.category === 'coverage')
  const releases = pressItems.filter((item) => item.category === 'release')
  const podcasts = pressItems.filter((item) => item.category === 'podcast')

  return (
    <SiteShell settings={siteSettings}>
      <PressContact page={pressPage} />

      <div className="site-container mb-[120px]">
        <div className="section-separator" />
      </div>

      <PressList
        heading={pressPage.presseHeading}
        subheading={pressPage.presseSubheading}
        items={coverage}
      />

      <div className="site-container mb-[120px]">
        <div className="section-separator" />
      </div>

      <PressList heading={pressPage.releasesHeading} items={releases} />

      <div className="site-container mb-[120px]">
        <div className="section-separator" />
      </div>

      <PressList heading={pressPage.podcastsHeading} items={podcasts} />
    </SiteShell>
  )
}
