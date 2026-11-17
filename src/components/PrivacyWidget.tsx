'use client'

/**
 * Privacy preference control (bottom-left).
 * Uses the live Borlabs-style fingerprint/shield mark only — no Next.js badge.
 */
export function PrivacyWidget() {
  return (
    <button
      type="button"
      aria-label="Datenschutz-Präferenz öffnen"
      className="fixed bottom-0 left-0 z-[9999] flex h-24 w-24 cursor-pointer items-center justify-center p-5"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/privacy-widget.svg"
        alt=""
        width={56}
        height={56}
        className="block h-14 w-14 drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
      />
    </button>
  )
}
