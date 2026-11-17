import Link from 'next/link'

export function BrandLogo({tone = 'dark'}: {tone?: 'dark' | 'light'}) {
  const color = tone === 'light' ? 'text-copper' : 'text-ink'

  return (
    <Link
      href="/presse"
      className={`inline-flex flex-col items-center gap-0.5 ${color}`}
      aria-label="Die 101 Besten"
    >
      <span className="flex items-center gap-[3px]" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((index) => (
          <svg key={index} width="11" height="11" viewBox="0 0 24 24" fill={index === 2 ? 'currentColor' : 'none'}>
            <path
              d="M12 2.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 15.8 6.7 18.6l1-5.8L3.5 8.7l5.9-.9L12 2.5z"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        ))}
      </span>
      <span className="text-center font-display text-[18px] font-light leading-none tracking-[0.06em] md:text-[22px]">
        DIE 101 BESTEN
      </span>
      <span className="text-center font-body text-[10px] font-light uppercase tracking-[0.2em] md:text-[11px]">
        Hotels Deutschlands
      </span>
    </Link>
  )
}
