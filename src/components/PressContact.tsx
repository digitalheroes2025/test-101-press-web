import type {PressPage} from '@/sanity/types'

import {IconEmail, IconPhone, IconPin} from './icons'

type PressContactProps = {
  page: PressPage
}

export function PressContact({page}: PressContactProps) {
  return (
    <>
      <section className="mb-[120px] mt-[60px] md:mt-[100px]">
        <div className="mx-auto w-full max-w-[1320px] px-3">
          <h1 className="mb-[5px] text-center font-display text-[43px] font-light leading-[49.88px] text-ink max-md:text-[38px] max-md:leading-[44px]">
            Pressekontakt
          </h1>
          <div className="mt-[30px] text-center font-body text-[18px] font-light leading-[21.6px] text-ink md:text-[21px] md:leading-[25.2px]">
            <p className="m-0">{page.agencyName}</p>
            <p className="m-0 mt-1">{page.contactName}</p>
          </div>
        </div>
      </section>

      <section className="mb-[60px] md:mb-[120px]">
        <div className="mx-auto w-full max-w-[1320px] px-3">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
            <div className="flex items-center justify-center gap-3 text-center text-[16px] font-light tracking-[0.4px] text-ink">
              <IconPin className="h-[23px] w-[18px] shrink-0 text-copper" />
              <span>{page.addressLabel}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-center text-[16px] font-light tracking-[0.4px] text-ink">
              <IconPhone className="h-[22px] w-[22px] shrink-0 text-copper" />
              <a href={`tel:${page.phone.replace(/\s+/g, '')}`} className="text-ink hover:text-copper">
                {page.phone}
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-center text-[16px] font-light tracking-[0.4px] text-ink">
              <IconEmail className="h-4 w-6 shrink-0 text-copper" />
              <a href={`mailto:${page.email}`} className="text-ink hover:text-copper">
                {page.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
