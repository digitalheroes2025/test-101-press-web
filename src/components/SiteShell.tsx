import {PrivacyWidget} from '@/components/PrivacyWidget'
import {ScrollToTop} from '@/components/ScrollToTop'
import {SiteFooter} from '@/components/SiteFooter'
import {SiteHeader} from '@/components/SiteHeader'
import type {SiteSettings} from '@/sanity/types'

type SiteShellProps = {
  settings?: SiteSettings | null
  children: React.ReactNode
}

export function SiteShell({settings, children}: SiteShellProps) {
  return (
    <div className="flex min-h-full flex-col bg-paper text-ink">
      <SiteHeader mainNav={settings?.mainNav} />
      <main className="flex-1">{children}</main>
      <SiteFooter settings={settings} />
      <ScrollToTop />
      <PrivacyWidget />
    </div>
  )
}
