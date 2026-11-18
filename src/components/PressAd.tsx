import Image from 'next/image'
import Link from 'next/link'

import type {PressAd as PressAdType} from '@/sanity/types'

type PressAdProps = {
  ad?: PressAdType | null
}

export function PressAd({ad}: PressAdProps) {
  const src = ad?.imageUrl
  if (!src) return null

  const image = (
    <Image
      src={src}
      alt={ad?.alt || 'Anzeige'}
      width={1400}
      height={280}
      className="h-auto w-full"
      unoptimized={src.endsWith('.svg') || src.includes('die-101-besten.de')}
    />
  )

  return (
    <div className="press-section">
      <div className="site-container">
        {ad?.href ? (
          <Link href={ad.href} target="_blank" rel="noopener noreferrer">
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
    </div>
  )
}
