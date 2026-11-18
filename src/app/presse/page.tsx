import type {Metadata} from 'next'
import {Suspense} from 'react'

import {cachedSanityFetch} from '@/sanity/live'
import {PRESS_PAGE_QUERY} from '@/sanity/queries'
import type {PressPage} from '@/sanity/types'

import {PressPageContent} from './PressPageContent'

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await cachedSanityFetch({query: PRESS_PAGE_QUERY})
  const page = data as PressPage | null

  return {
    title: page?.seoTitle || 'Presse - Die 101 Besten',
    description:
      page?.seoDescription ||
      'Pressekontakt und Berichterstattung zu Die 101 besten Hotels Deutschlands.',
  }
}

function PresseFallback() {
  return (
    <div className="flex min-h-full flex-col bg-paper">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center md:px-10">
        <p className="font-display text-2xl font-light text-ink">Presse</p>
        <p className="mt-3 font-body font-light text-ink/60">Inhalt wird geladen…</p>
      </div>
    </div>
  )
}

export default function PressePage() {
  return (
    <Suspense fallback={<PresseFallback />}>
      <PressPageContent />
    </Suspense>
  )
}
