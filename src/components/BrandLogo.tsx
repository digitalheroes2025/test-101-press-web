import Link from 'next/link'

type BrandLogoProps = {
  compact?: boolean
  className?: string
}

export function BrandLogo({compact = false, className = ''}: BrandLogoProps) {
  return (
    <Link
      href="/presse"
      className={`relative inline-flex h-[82px] w-[170px] items-center justify-center ${className}`}
      aria-label="Die 101 Besten"
    >
      <span
        className={`absolute left-1/2 top-1/2 block w-[170px] -translate-x-1/2 transition duration-300 ${
          compact ? '-translate-y-[120px] opacity-0' : '-translate-y-1/2 opacity-100'
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-full.svg"
          alt=""
          width={170}
          height={70}
          className="block h-[70px] w-[170px] max-w-none"
        />
      </span>
      <span
        className={`absolute left-1/2 top-1/2 block w-[85px] -translate-x-1/2 transition duration-300 ${
          compact ? '-translate-y-1/2 opacity-100' : 'translate-y-[55px] opacity-0'
        }`}
        aria-hidden={!compact}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-mark.svg"
          alt=""
          width={85}
          height={40}
          className="mx-auto block h-10 w-[85px] max-w-none"
        />
      </span>
    </Link>
  )
}
