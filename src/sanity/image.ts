import {createImageUrlBuilder, type SanityImageSource} from '@sanity/image-url'

import {dataset, projectId} from './env'

const builder = createImageUrlBuilder({projectId, dataset})
export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

type ImageLike = {
  asset?: {_ref?: string; _id?: string} | null
  externalImageUrl?: string | null
} | null | undefined

export function resolveImageUrl(image: ImageLike): string | null {
  if (image?.asset?._ref || image?.asset?._id) {
    return urlForImage(image).url()
  }
  return image?.externalImageUrl || null
}
