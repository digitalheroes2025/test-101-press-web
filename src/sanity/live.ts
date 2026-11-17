import {defineLive} from 'next-sanity/live'

import {client} from './client'

const token = process.env.SANITY_API_READ_TOKEN

export const {sanityFetch, SanityLive} = defineLive({
  client: client.withConfig({
    apiVersion: '2025-01-01',
  }),
  serverToken: token || false,
  browserToken: token || false,
})

export async function cachedSanityFetch<const Q extends string>(options: {
  query: Q
  params?: Record<string, unknown>
}) {
  'use cache'
  return sanityFetch({
    ...options,
    stega: false,
  })
}
