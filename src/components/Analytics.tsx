"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-FKHHBBX2EF";

/**
 * Google Analytics 4 for edencounselingwellness.com.
 *
 * Page views come from the standard gtag config. On top of that we fire a
 * call_click / text_click event whenever someone taps a tel: or sms: link,
 * which is the closest thing this site has to a conversion signal.
 *
 * Only the link href and the page URL are sent. No form contents, no
 * client-entered text, nothing that could carry personal detail.
 */
export function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href^="tel:"], a[href^="sms:"]') as
        | HTMLAnchorElement
        | null;
      if (!link) return;

      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag !== "function") return;

      const href = link.getAttribute("href") || "";
      gtag("event", href.startsWith("sms:") ? "text_click" : "call_click", {
        link_url: href,
        page_location: window.location.href,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
