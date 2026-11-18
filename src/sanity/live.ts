import {cacheLife, cacheTag} from 'next/cache'
import {defineLive} from 'next-sanity/live'

import {client} from './client'

const token = process.env.SANITY_API_READ_TOKEN

export const {SanityLive} = defineLive({
  client: client.withConfig({
    apiVersion: '2025-01-01',
  }),
  serverToken: token || false,
  browserToken: token || false,
})

type CachedFetchOptions = {
  query: string
  params?: Record<string, unknown>
  perspective: 'published' | 'drafts' | 'raw' | 'previewDrafts'
  stega: boolean
}

/**
 * Shared `'use cache'` fetch that avoids next-sanity/sanityFetch's interaction
 * with Next's module-scoped fetch dedupe Map (which breaks Cache Components).
 */
export async function cachedSanityFetch(options: CachedFetchOptions) {
  'use cache'

  const {query, params = {}, perspective, stega} = options
  const useToken = perspective !== 'published' || stega

  const {result, syncTags} = await client.fetch(query, params, {
    filterResponse: false,
    perspective,
    stega,
    useCdn: perspective === 'published',
    token: useToken && token ? token : undefined,
    // Prevent Next from sharing an in-flight fetch Promise across cache boundaries.
    cache: 'no-store',
  })

  const tags = ['sanity', 'sanity:pressPage', ...(syncTags || []).map((tag) => `sanity:${tag}`)]
  cacheTag(...tags)
  cacheLife('minutes')

  return {data: result}
}
