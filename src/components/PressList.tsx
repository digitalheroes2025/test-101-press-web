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
      <section className="press-section">
        <div className="site-container">
          <h2 className="press-heading">{heading}</h2>
          {subheading ? <p className="press-subheading">{subheading}</p> : null}
        </div>
      </section>

      <section className="press-section">
        <div className="site-container">
          <ul className="press-list">
            {items.map((item) => (
              <li key={item._key}>
                {formatDate(item.publishedAt)}:
                <a href={resolveHref(item)} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                {item.outlet ? ` (${item.outlet})` : null}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
