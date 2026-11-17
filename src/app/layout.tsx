import type {Metadata} from 'next'
import {Cormorant_Garamond, Figtree} from 'next/font/google'
import {Suspense} from 'react'

import {SanityLive} from '@/sanity/live'

import './globals.css'

/* Closest licensed stand-ins for live Ogg (serif) + GT Eesti Text (sans) */
const display = Cormorant_Garamond({
  variable: '--font-display-face',
  subsets: ['latin'],
  weight: ['300', '400'],
})

const body = Figtree({
  variable: '--font-body-face',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Presse - Die 101 Besten',
  description: 'Pressekontakt und Berichterstattung zu Die 101 besten Hotels Deutschlands.',
}

export default function RootLayout({children}: LayoutProps<'/'>) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full">
        {children}
        <Suspense fallback={null}>
          <SanityLive />
        </Suspense>
      </body>
    </html>
  )
}
