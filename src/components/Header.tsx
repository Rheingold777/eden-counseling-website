"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "What We Do" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

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
              className="rounded"
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
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-eden-forest text-white text-sm font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
            >
              Book a Session
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-eden-forest"
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
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 px-5 py-3 bg-eden-forest text-white text-center font-medium rounded-lg"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
