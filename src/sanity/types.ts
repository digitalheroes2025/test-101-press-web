export type NavChild = {
  _key: string
  label: string
  href: string
}

export type NavItem = {
  _key: string
  label: string
  href?: string | null
  children?: NavChild[] | null
}

export type FooterLink = {
  _key: string
  label: string
  href: string
}

export type FooterLogo = {
  _key: string
  alt?: string | null
  href: string
  externalImageUrl?: string | null
  image?: {
    asset?: {_ref?: string; _id?: string} | null
  } | null
}

export type FooterAd = {
  alt?: string | null
  href?: string | null
  externalImageUrl?: string | null
  image?: {
    asset?: {_ref?: string; _id?: string} | null
  } | null
}

export type SiteSettings = {
  logo?: {
    asset?: {_ref?: string; _id?: string} | null
  } | null
  mainNav?: NavItem[] | null
  footerHeading?: string | null
  footerLogos?: FooterLogo[] | null
  footerLinks?: FooterLink[] | null
  footerAd?: FooterAd | null
}

export type PressPage = {
  agencyName: string
  contactName: string
  addressLabel: string
  phone: string
  email: string
  presseHeading: string
  presseSubheading?: string | null
  releasesHeading: string
  podcastsHeading: string
  seoTitle?: string | null
  seoDescription?: string | null
}

export type PressCategory = 'coverage' | 'release' | 'podcast'

export type PressItem = {
  _id: string
  title: string
  publishedAt: string
  category: PressCategory
  outlet?: string | null
  linkType: 'url' | 'file'
  url?: string | null
  fileUrl?: string | null
}
