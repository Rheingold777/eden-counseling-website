"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Cal.com inline embed for the free 15-min consultation event.
 *
 * Booking URL is read from env so it can be swapped without a redeploy
 * once Marissa shares her Cal.com link:
 *   NEXT_PUBLIC_CALCOM_URL = "eden-counseling/consult"  (no leading slash)
 *
 * Until that env var is set, this component shows a graceful fallback
 * that still drives the visitor to phone or contact form.
 */

const FALLBACK_PHONE_DISPLAY = "(512) 601-8932";
const FALLBACK_PHONE_TEL = "+15126018932";

// Lightweight type for the Cal.com global. The Cal.com embed script
// (loaded via next/script below) installs window.Cal at runtime.
type CalApi = ((...args: unknown[]) => void) & {
  ns?: Record<string, (...args: unknown[]) => void>;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

export function CalEmbed() {
  const calLink = process.env.NEXT_PUBLIC_CALCOM_URL;

  useEffect(() => {
    if (!calLink) return;
    // Wait for embed script to load and install window.Cal
    const init = () => {
      const Cal = window.Cal;
      if (!Cal) {
        // Try again on next tick — script may not have run yet
        setTimeout(init, 100);
        return;
      }
      Cal("init", "consult", { origin: "https://cal.com" });
      Cal.ns?.consult?.("inline", {
        elementOrSelector: "#cal-embed-consult",
        config: { layout: "month_view" },
        calLink,
      });
      Cal.ns?.consult?.("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#133817" },
          dark: { "cal-brand": "#133817" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    init();
  }, [calLink]);

  if (!calLink) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-eden-forest/20 bg-white p-10 text-center">
        <h3 className="font-heading text-xl font-semibold text-eden-forest mb-3">
          Online booking is launching soon
        </h3>
        <p className="text-eden-forest/70 mb-6 max-w-md mx-auto">
          The fastest way to reach Marissa right now is by phone.
          Leave a message and she returns calls within 24 hours.
        </p>
        <a
          href={`tel:${FALLBACK_PHONE_TEL}`}
          data-cta="book-page-fallback-call"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-eden-forest text-white font-semibold rounded-lg hover:bg-eden-forest/90 transition-colors"
        >
          Call {FALLBACK_PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
      />
      <div
        id="cal-embed-consult"
        style={{ width: "100%", minHeight: 720, overflow: "hidden" }}
      />
    </>
  );
}
