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
    components[]{
      _key,
      _type,
      _type == "pressContactSection" => {
        heading,
        companyName,
        contactName,
        address{
          text,
          "iconUrl": icon.asset->url
        },
        email{
          text,
          "iconUrl": icon.asset->url
        }
      },
      _type == "pressListSection" => {
        heading,
        subheading,
        items[]{
          _key,
          title,
          publishedAt,
          outlet,
          linkType,
          url,
          "fileUrl": file.asset->url
        }
      },
      _type == "adBannerSection" => {
        desktopLabel,
        desktopAdType,
        mobileLabel,
        mobileAdType,
        "desktopAd": *[
          _type == "ad" &&
          active != false &&
          edition == ^.^.edition &&
          format == ^.desktopAdType
        ] | order(_updatedAt desc)[0]{
          alt,
          href,
          "imageUrl": coalesce(image.asset->url, externalImageUrl)
        },
        "mobileAd": *[
          _type == "ad" &&
          active != false &&
          edition == ^.^.edition &&
          format == ^.mobileAdType
        ] | order(_updatedAt desc)[0]{
          alt,
          href,
          "imageUrl": coalesce(image.asset->url, externalImageUrl)
        }
      }
    },
    seo{
      metaTitle,
      metaDescription,
      "ogImageUrl": ogImage.asset->url,
      "ogImageAlt": ogImage.alt,
      keywords,
      canonicalUrl,
      noIndex
    }
  }
`)
