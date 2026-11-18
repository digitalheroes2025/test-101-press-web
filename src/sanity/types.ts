export type PressLanguage = 'de' | 'en'
export type PressEdition = 'deutschland' | 'schweiz' | 'austria'
export type AdType = 'superbanner' | 'skyscraper' | 'rectangle'

export type PressItem = {
  _key: string
  title: string
  publishedAt: string
  outlet?: string | null
  linkType: 'url' | 'file'
  url?: string | null
  fileUrl?: string | null
}

export type ContactDetail = {
  text?: string | null
  iconUrl?: string | null
} | null

export type SeoSettings = {
  metaTitle?: string | null
  metaDescription?: string | null
  ogImageUrl?: string | null
  ogImageAlt?: string | null
  keywords?: string[] | null
  canonicalUrl?: string | null
  noIndex?: boolean | null
} | null

export type AdCreative = {
  alt?: string | null
  href?: string | null
  imageUrl?: string | null
} | null

export type PressContactSection = {
  _key: string
  _type: 'pressContactSection'
  heading?: string | null
  companyName: string
  contactName: string
  address?: ContactDetail
  email?: ContactDetail
}

export type PressListSection = {
  _key: string
  _type: 'pressListSection'
  heading: string
  subheading?: string | null
  items?: PressItem[] | null
}

export type AdBannerSection = {
  _key: string
  _type: 'adBannerSection'
  desktopLabel?: string | null
  desktopAdType?: AdType | null
  mobileLabel?: string | null
  mobileAdType?: AdType | null
  desktopAd?: AdCreative
  mobileAd?: AdCreative
}

export type PressComponent = PressContactSection | PressListSection | AdBannerSection

export type PressPage = {
  title: string
  language: PressLanguage
  slug?: string | null
  edition: PressEdition
  components?: PressComponent[] | null
  seo?: SeoSettings
}
