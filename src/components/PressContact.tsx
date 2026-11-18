import type {ContactDetail, PressPage} from '@/sanity/types'

type PressContactProps = {
  page: PressPage
}

function ContactItem({
  detail,
  fallbackSrc,
  href,
}: {
  detail?: ContactDetail
  fallbackSrc: string
  href?: string
}) {
  const text = detail?.text?.trim()
  if (!text) return null

  const iconSrc = detail?.iconUrl || fallbackSrc

  return (
    <div className="press-contact-item">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} alt="" />
      {href ? <a href={href}>{text}</a> : <span>{text}</span>}
    </div>
  )
}

export function PressContact({page}: PressContactProps) {
  const phoneText = page.phone?.text?.trim()
  const emailText = page.email?.text?.trim()
  const phoneHref = phoneText ? `tel:${phoneText.replace(/\s+/g, '')}` : undefined
  const emailHref = emailText ? `mailto:${emailText}` : undefined

  return (
    <>
      <section className="press-section--intro">
        <div className="site-container">
          <h1 className="press-heading">Pressekontakt</h1>
          <div className="press-contact-text">
            <p>{page.agencyName}</p>
            <p>{page.contactName}</p>
          </div>
        </div>
      </section>

      <section className="press-section">
        <div className="site-container">
          <div className="mx-[-12px] flex flex-wrap">
            <div className="w-full px-3 md:w-1/3">
              <ContactItem detail={page.address} fallbackSrc="/icons/location.svg" />
            </div>
            <div className="w-full px-3 md:w-1/3">
              <ContactItem
                detail={page.phone}
                fallbackSrc="/icons/phone.svg"
                href={phoneHref}
              />
            </div>
            <div className="w-full px-3 md:w-1/3">
              <ContactItem
                detail={page.email}
                fallbackSrc="/icons/email.svg"
                href={emailHref}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
