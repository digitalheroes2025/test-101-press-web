import type {PressItem} from '@/sanity/types'

type PressListProps = {
  heading: string
  subheading?: string | null
  items: PressItem[]
}

function formatDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return value
  const [, year, month, day] = match
  const date = new Date(Number(year), Number(month) - 1, Number(day))
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

function resolveHref(item: PressItem) {
  if (item.linkType === 'file') return item.fileUrl || item.url || '#'
  return item.url || item.fileUrl || '#'
}

export function PressList({heading, subheading, items}: PressListProps) {
  if (!items.length) return null

  return (
    <>
      <section className="mb-[120px]">
        <div className="mx-auto w-full max-w-[1320px] px-3">
          <h2 className="mb-[5px] text-center font-display text-[43px] font-light leading-[49.88px] text-ink max-md:text-[38px] max-md:leading-[44px]">
            {heading}
          </h2>
          {subheading ? (
            <p className="mb-[17px] text-center font-body text-[33px] font-light leading-[38.28px] text-ink max-md:text-[28px] max-md:leading-[32.5px]">
              {subheading}
            </p>
          ) : null}
        </div>
      </section>

      <section className="mb-[120px]">
        <div className="mx-auto w-full max-w-[1320px] px-3">
          <ul className="m-0 list-none p-0">
            {items.map((item) => (
              <li
                key={item._id}
                className="mb-[15px] grid grid-cols-[120px_minmax(0,1fr)] items-start gap-x-[30px] p-0 font-body text-[21px] font-light leading-[25.2px] text-ink max-md:grid-cols-[108px_minmax(0,1fr)] max-md:gap-x-4 max-md:text-[18px] max-md:leading-[21.6px]"
              >
                <span className="whitespace-nowrap">{formatDate(item.publishedAt)}:</span>
                <span className="min-w-0">
                  <a
                    href={resolveHref(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper underline decoration-copper underline-offset-[2px]"
                  >
                    {item.title}
                  </a>
                  {item.outlet ? <span> ({item.outlet})</span> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
