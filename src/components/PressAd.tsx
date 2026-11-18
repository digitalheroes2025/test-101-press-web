import Image from 'next/image'
import Link from 'next/link'

import type {AdBannerSection, AdCreative, AdType} from '@/sanity/types'

type PressAdProps = {
  section: AdBannerSection
}

function AdSlot({
  label,
  adType,
  creative,
  className,
}: {
  label?: string | null
  adType?: AdType | null
  creative?: AdCreative
  className?: string
}) {
  const src = creative?.imageUrl
  if (!adType || !src) return null

  const image = (
    <Image
      src={src}
      alt={creative?.alt || label || 'Anzeige'}
      width={1400}
      height={280}
      className="h-auto w-full"
      unoptimized={src.endsWith('.svg') || src.includes('die-101-besten.de')}
    />
  )

  return (
    <div className={className}>
      {creative?.href ? (
        <Link href={creative.href} target="_blank" rel="noopener noreferrer">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export function PressAd({section}: PressAdProps) {
  const hasDesktop = Boolean(section.desktopAdType && section.desktopAd?.imageUrl)
  const hasMobile = Boolean(section.mobileAdType && section.mobileAd?.imageUrl)
  if (!hasDesktop && !hasMobile) return null

  return (
    <div className="press-section">
      <div className="site-container">
        {hasDesktop ? (
          <AdSlot
            label={section.desktopLabel}
            adType={section.desktopAdType}
            creative={section.desktopAd}
            className={hasMobile ? 'hidden md:block' : undefined}
          />
        ) : null}
        {hasMobile ? (
          <AdSlot
            label={section.mobileLabel}
            adType={section.mobileAdType}
            creative={section.mobileAd}
            className={hasDesktop ? 'md:hidden' : undefined}
          />
        ) : null}
      </div>
    </div>
  )
}
