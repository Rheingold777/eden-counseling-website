"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "What We Do" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const PHONE_DISPLAY = "(512) 601-8932";
const PHONE_TEL = "+15126018932";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-eden-cream/95 backdrop-blur-sm sticky top-0 z-50 border-b border-eden-sage">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/eden-logo.jpeg"
              alt="Eden Counseling and Wellness"
              width={50}
              height={50}
              className="rounded object-contain"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="hidden sm:block">
              <span className="font-heading text-eden-forest text-lg font-semibold leading-tight block">
                Eden Counseling
              </span>
              <span className="font-heading text-eden-forest/70 text-sm leading-tight block">
                and Wellness
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-eden-forest/80 hover:text-eden-forest hover:bg-eden-sage/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              data-cta="header-call"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-eden-forest text-white text-sm font-semibold rounded-lg hover:bg-eden-forest/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
            </a>
          </nav>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <a
              href={`tel:${PHONE_TEL}`}
              data-cta="header-call-mobile"
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="p-2.5 text-eden-forest"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-eden-forest"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-eden-sage bg-eden-cream">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-eden-forest/80 hover:text-eden-forest hover:bg-eden-sage/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              data-cta="header-mobile-menu-call"
              className="block mt-3 px-5 py-3 bg-eden-forest text-white text-center font-semibold rounded-lg"
            >
              Call {PHONE_DISPLAY}
            </a>
            <p className="text-center text-xs text-eden-forest/60 pt-2">
              Leave a message — Marissa returns calls within 24 hours
            </p>
            <a
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-5 py-2.5 text-center text-sm text-eden-forest/80 underline"
            >
              Or book online via Psychology Today →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
