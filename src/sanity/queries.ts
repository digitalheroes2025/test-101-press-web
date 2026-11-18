import {defineQuery} from 'next-sanity'

export const PRESS_PAGE_QUERY = defineQuery(`
  coalesce(
    *[_type == "pressPage" && slug.current == $slug][0],
    *[_type == "pressPage" && edition == $edition && language == $language][0],
    *[_type == "pressPage"] | order(_updatedAt desc)[0]
  ){
    title,
    language,
    "slug": slug.current,
    edition,
    companyName,
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
    seo{
      metaTitle,
      metaDescription,
      "ogImageUrl": ogImage.asset->url,
      "ogImageAlt": ogImage.alt,
      keywords,
      canonicalUrl,
      noIndex
    },
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
