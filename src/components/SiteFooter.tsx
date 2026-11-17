'use client'

import Image from 'next/image'
import Link from 'next/link'

import {resolveImageUrl} from '@/sanity/image'
import type {SiteSettings} from '@/sanity/types'

type SiteFooterProps = {
  settings?: SiteSettings | null
}

export function SiteFooter({settings}: SiteFooterProps) {
  const adUrl = resolveImageUrl(settings?.footerAd)
  const logos = settings?.footerLogos || []
  const links = settings?.footerLinks || []

  return (
    <footer className="bg-paper pb-12 pt-4">
      {adUrl ? (
        <div className="site-container mb-14">
          {settings?.footerAd?.href ? (
            <Link href={settings.footerAd.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={adUrl}
                alt={settings.footerAd.alt || 'Anzeige'}
                width={1400}
                height={280}
                className="h-auto w-full"
              />
            </Link>
          ) : (
            <Image
              src={adUrl}
              alt={settings?.footerAd?.alt || 'Anzeige'}
              width={1400}
              height={280}
              className="h-auto w-full"
            />
          )}
        </div>
      ) : null}

      <div className="site-container">
        <div className="flex flex-col items-center border-t-2 border-copper pt-[30px]">
          {settings?.footerHeading ? (
            <p className="mb-[70px] text-center font-body text-[18px] font-normal leading-[1.2] text-copper">
              {settings.footerHeading}
            </p>
          ) : null}

          {logos.length > 0 ? (
            <div className="mb-14 grid w-full grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3">
              {logos.map((logo) => {
                const src = resolveImageUrl(logo)
                if (!src) return null
                return (
                  <Link key={logo._key} href={logo.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={src}
                      alt={logo.alt || '101 Ranking'}
                      width={240}
                      height={180}
                      className="h-auto w-[200px] object-contain"
                    />
                  </Link>
                )
              })}
            </div>
          ) : null}

          {links.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {links.map((link) => (
                <Link
                  key={link._key}
                  href={link.href}
                  className="font-body text-[16px] font-light text-copper underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
