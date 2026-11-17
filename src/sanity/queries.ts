import {defineQuery} from 'next-sanity'

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]{
    logo,
    mainNav[]{
      _key,
      label,
      href,
      children[]{
        _key,
        label,
        href
      }
    },
    footerHeading,
    footerLogos[]{
      _key,
      alt,
      href,
      externalImageUrl,
      image
    },
    footerLinks[]{
      _key,
      label,
      href
    },
    footerAd{
      alt,
      href,
      externalImageUrl,
      image
    }
  }
`)

export const PRESS_PAGE_QUERY = defineQuery(`
  *[_id == "pressPage"][0]{
    agencyName,
    contactName,
    addressLabel,
    phone,
    email,
    presseHeading,
    presseSubheading,
    releasesHeading,
    podcastsHeading,
    seoTitle,
    seoDescription
  }
`)

export const PRESS_ITEMS_QUERY = defineQuery(`
  *[_type == "pressItem"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    category,
    outlet,
    linkType,
    url,
    "fileUrl": file.asset->url
  }
`)
