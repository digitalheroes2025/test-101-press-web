'use client'

import {useEffect, useState} from 'react'

export function ScrollToTop() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Nach oben"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className={`fixed right-5 bottom-10 z-50 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-black bg-white transition-transform duration-300 min-[1200px]:h-auto min-[1200px]:w-max min-[1200px]:border-0 min-[1200px]:bg-transparent ${
        active ? 'translate-x-0' : 'translate-x-[70px]'
      }`}
    >
      <svg
        width="17"
        height="9"
        viewBox="0 0 17 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-[15px] rotate-180 min-[1200px]:w-10"
        aria-hidden="true"
      >
        <path
          d="M15.0625 1L8.3625 7.69937C8.31902 7.74291 8.26739 7.77745 8.21055 7.80102C8.15371 7.82459 8.09278 7.83672 8.03125 7.83672C7.96972 7.83672 7.90879 7.82459 7.85195 7.80102C7.79511 7.77745 7.74348 7.74291 7.7 7.69937L1 1"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
