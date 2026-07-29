"use client";

const PHONE_DISPLAY = "(512) 881-6560";
const PHONE_TEL = "+15128816560";

/**
 * Sticky bottom-of-viewport tap-to-call bar.
 * Mobile only. Always visible. Primary conversion lever.
 */
export function MobileCallBar() {
  return (
    <>
      {/* Spacer so content isn't hidden behind the fixed bar */}
      <div className="md:hidden h-16" aria-hidden="true" />
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-eden-forest/10 bg-white/95 backdrop-blur-sm shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <div className="px-3 py-2.5 flex items-stretch gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            data-cta="mobile-bar-call"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-eden-forest text-white font-semibold rounded-lg active:bg-eden-forest/80"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>Call {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </>
  );
}
