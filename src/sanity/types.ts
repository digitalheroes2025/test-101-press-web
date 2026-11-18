export type PressCategory = 'coverage' | 'release' | 'podcast'

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

export type PressAd = {
  alt?: string | null
  href?: string | null
  imageUrl?: string | null
} | null

export type PressPage = {
  agencyName: string
  contactName: string
  address?: ContactDetail
  phone?: ContactDetail
  email?: ContactDetail
  presseHeading: string
  presseSubheading?: string | null
  releasesHeading: string
  podcastsHeading: string
  bottomAd?: PressAd
  seoTitle?: string | null
  seoDescription?: string | null
  items?: PressItem[] | null
}
