import type { Metadata } from "next";
import Link from "next/link";
import { CalEmbed } from "./CalEmbed";

export const metadata: Metadata = {
  title: "Request a Free 15-Minute Consultation",
  description:
    "Request a free 15-minute consultation with Marissa Cooney, LPC-Associate. Faith-based telehealth counseling across Texas, confirmed within 24 hours.",
  alternates: {
    canonical: "/book",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PHONE_DISPLAY = "(512) 601-8932";
const PHONE_TEL = "+15126018932";

export default function BookPage() {
  return (
    <>
      <section className="bg-eden-sage/40 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-heading text-eden-olive text-base italic mb-2">
            &ldquo;Let&rsquo;s go back to the beginning.&rdquo;
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-eden-forest leading-tight mb-5">
            Request a Free 15-Minute Consultation
          </h1>
          <p className="text-lg text-eden-forest/70 leading-relaxed mb-6 max-w-xl mx-auto">
            Pick a time that works for you. Marissa personally reviews every request and confirms within 24 hours.
            No pressure — this call is just for you to see if we&rsquo;re a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
            <span className="inline-flex items-center justify-center gap-2 text-eden-forest/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free, no commitment
            </span>
            <span className="inline-flex items-center justify-center gap-2 text-eden-forest/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Confirmed within 24 hours
            </span>
            <span className="inline-flex items-center justify-center gap-2 text-eden-forest/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Phone or video — your choice
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <CalEmbed />
        </div>
      </section>

      <section className="bg-eden-sage/20 py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-3">
            Prefer to talk first?
          </h2>
          <p className="text-eden-forest/70 mb-6">
            Some people want to hear a voice before they book. Totally understandable —
            leave a message and Marissa returns calls within 24 hours.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            data-cta="book-page-call"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-eden-forest text-white font-semibold rounded-lg hover:bg-eden-forest/90 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-eden-forest/60">
            Or email{" "}
            <Link
              href="/contact"
              className="underline hover:text-eden-forest transition-colors"
            >
              through the contact form
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
