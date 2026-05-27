import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export function Footer() {
  return (
    <footer className="bg-eden-forest text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Eden Counseling and Wellness
            </h3>
            <p className="leading-relaxed text-white/60 italic font-heading text-lg mb-4">
              &ldquo;Let&rsquo;s go back to the beginning.&rdquo;
            </p>
            <p className="text-sm leading-relaxed">
              <Link href="/about" className="hover:text-white transition-colors">
                Marissa Cooney, LPC-Associate
              </Link>
              <br />
              Supervised by Dr. Jennifer McCurrach, LPC-S
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">What We Do</Link></li>
              <li><Link href="/telehealth" className="hover:text-white transition-colors">Telehealth</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/areas" className="hover:text-white transition-colors">Areas Served</Link></li>
              <li><Link href="/therapy" className="hover:text-white transition-colors">Therapy Topics</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <NewsletterSignup variant="footer" />

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:5126018932" className="hover:text-white transition-colors">
                  (512) 601-8932
                </a>
              </li>
              <li>
                <a href="mailto:info@edencounselingandwellness.com" className="hover:text-white transition-colors">
                  info@edencounselingandwellness.com
                </a>
              </li>
              <li className="pt-1">Austin, Texas &middot; Telehealth Only</li>
            </ul>
            {/* Social links hidden until accounts are created */}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/60 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Eden Counseling and Wellness, PLLC. All rights reserved.
          </p>
          <p>
            If you are in crisis, please call 988 (Suicide &amp; Crisis Lifeline) or text HOME to 741741.
            If you are in immediate danger, call 911.
          </p>
        </div>
      </div>
    </footer>
  );
}
