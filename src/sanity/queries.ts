import {defineQuery} from 'next-sanity'

export const PRESS_PAGE_QUERY = defineQuery(`
  *[_id == "pressPage"][0]{
    agencyName,
    contactName,
    address{
      text,
      "iconUrl": icon.asset->url
    },
    phone{
      text,
      "iconUrl": icon.asset->url
    },
    email{
      text,
      "iconUrl": icon.asset->url
    },
    presseHeading,
    presseSubheading,
    releasesHeading,
    podcastsHeading,
    bottomAd{
      alt,
      href,
      "imageUrl": coalesce(image.asset->url, externalImageUrl)
    },
    seoTitle,
    seoDescription,
    items[]{
      _key,
      title,
      publishedAt,
      category,
      outlet,
      linkType,
      url,
      "fileUrl": file.asset->url
    }
  }
`)
