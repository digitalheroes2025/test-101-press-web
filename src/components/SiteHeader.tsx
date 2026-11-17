'use client'

import Link from 'next/link'
import {useEffect, useState} from 'react'

import type {NavItem} from '@/sanity/types'

import {BrandLogo} from './BrandLogo'

type SiteHeaderProps = {
  mainNav?: NavItem[] | null
}

export function SiteHeader({mainNav}: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="relative z-40 bg-paper">
      <div className="relative flex h-[82px] items-center px-[15px]">
        <button
          type="button"
          className="relative z-50 flex h-[22px] w-[42px] flex-col justify-between py-px"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-px w-full transition ${open ? 'translate-y-[9px] rotate-45 bg-copper' : 'bg-ink'}`} />
          <span className={`block h-px w-full transition ${open ? 'opacity-0 bg-copper' : 'bg-ink'}`} />
          <span
            className={`block h-px w-full transition ${open ? '-translate-y-[9px] -rotate-45 bg-copper' : 'bg-ink'}`}
          />
        </button>

        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
          <div className="pointer-events-auto">
            <BrandLogo tone={open ? 'light' : 'dark'} />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-nav transition duration-300 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none invisible opacity-0'
        }`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav className="mx-auto flex min-h-full max-w-xl flex-col items-center justify-center gap-6 px-6 py-28 text-center">
          {(mainNav || []).map((item) => {
            const hasChildren = Boolean(item.children?.length)
            const isExpanded = expanded === item._key

            if (!hasChildren && item.href) {
              return (
                <Link
                  key={item._key}
                  href={item.href}
                  className="font-body text-[18px] font-light text-copper underline underline-offset-[6px] transition hover:opacity-80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <div key={item._key} className="flex w-full flex-col items-center gap-3">
                <button
                  type="button"
                  className="font-body text-[18px] font-light text-copper underline underline-offset-[6px]"
                  onClick={() => setExpanded(isExpanded ? null : item._key)}
                >
                  {item.label}
                </button>
                {isExpanded ? (
                  <div className="flex flex-col items-center gap-2.5 pb-1">
                    {(item.children || []).map((child) => (
                      <Link
                        key={child._key}
                        href={child.href}
                        className="font-body text-[0.95rem] font-light text-copper/90 underline underline-offset-4"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
