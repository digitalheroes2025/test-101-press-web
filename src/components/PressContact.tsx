import type {ContactDetail, PressContactSection} from '@/sanity/types'

type PressContactProps = {
  section: PressContactSection
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

export function PressContact({section}: PressContactProps) {
  const emailText = section.email?.text?.trim()
  const emailHref = emailText ? `mailto:${emailText}` : undefined

  return (
    <>
      <section className="press-section--intro">
        <div className="site-container">
          <h1 className="press-heading">{section.heading || 'Pressekontakt'}</h1>
          <div className="press-contact-text">
            <p>{section.companyName}</p>
            <p>{section.contactName}</p>
          </div>
        </div>
      </section>

      <section className="press-section">
        <div className="site-container">
          <div className="mx-[-12px] flex flex-wrap justify-center">
            <div className="w-full px-3 md:w-1/2">
              <ContactItem detail={section.address} fallbackSrc="/icons/location.svg" />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <ContactItem
                detail={section.email}
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
