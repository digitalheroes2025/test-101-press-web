export type PressCategory = 'coverage' | 'release' | 'podcast'
export type PressLanguage = 'de' | 'en'
export type PressEdition = 'deutschland' | 'schweiz' | 'austria'

export type PressItem = {
  _key: string
  title: string
  publishedAt: string
  category: PressCategory
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

export type PressAd = {
  alt?: string | null
  href?: string | null
  imageUrl?: string | null
} | null

export type PressPage = {
  title: string
  language: PressLanguage
  slug?: string | null
  edition: PressEdition
  companyName: string
  contactName: string
  address?: ContactDetail
  phone?: ContactDetail
  email?: ContactDetail
  presseHeading: string
  presseSubheading?: string | null
  releasesHeading: string
  podcastsHeading: string
  bottomAd?: PressAd
  seo?: SeoSettings
  items?: PressItem[] | null
}
