import type { Metadata } from "next";
import Image from "next/image";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About Marissa Cooney, LPC-Associate",
  description:
    "Meet Marissa Cooney, LPC-Associate and founder of Eden Counseling and Wellness, serving Texas clients online and in Buda on Saturdays.",
  openGraph: {
    title: "About Marissa Cooney | Eden Counseling and Wellness",
    description:
      "Meet Marissa Cooney, LPC-Associate and founder of Eden Counseling and Wellness in Buda, Texas.",
    url: "https://edencounselingwellness.com/about",
    images: [
      {
        url: "/images/marissa-headshot.jpg",
        width: 1200,
        height: 1500,
        alt: "Marissa Cooney, LPC-Associate at Eden Counseling and Wellness",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-6">
                About Eden Counseling and Wellness
              </h1>
              <p className="text-lg text-eden-forest/70 leading-relaxed">
                Eden Counseling and Wellness was created with the idea that everyone
                can use a fresh start. Our vision is to see each client living with
                purpose, secure in their identity, and transformed by a renewed mindset.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto md:mx-0">
              <Image
                src="/images/marissa-headshot.jpg"
                alt="Marissa Cooney, LPC-Associate providing Christian telehealth counseling in Austin, Texas"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            Meet Marissa
          </h2>
          <p className="text-lg text-eden-forest/80 leading-relaxed mb-6">
            Welcome. I&rsquo;m Marissa Cooney, an Austin, Texas original and an
            LPC-Associate providing affordable counseling across Texas. I have
            wanted to be a therapist since I was a child, and I achieved that dream
            when I graduated from Liberty University with my Master of Arts in
            Clinical Mental Health Counseling and became licensed in 2025.
          </p>
          <div className="prose prose-lg text-eden-forest/70 space-y-4">
            <p>
              Stories have always fascinated me. Second Corinthians 3 describes
              people as &ldquo;living stories,&rdquo; which is how I see them, too.
            </p>
            <p>
              My interests outside counseling include spending time with family and
              friends and reading a good book. When the weather permits, I also love
              to climb Enchanted Rock. The Texas Hill Country is not just home; it is
              my favorite place to be.
            </p>
            <p>
              It is my honor to be a counselor and to hear each person&rsquo;s life
              story as it unfolds.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-5">
              Educational Background
            </h2>
            <div className="space-y-5 text-eden-forest/70">
              <div>
                <h3 className="font-semibold text-eden-forest">Texas State University</h3>
                <p>Bachelor&rsquo;s in Healthcare Administration</p>
              </div>
              <div>
                <h3 className="font-semibold text-eden-forest">Liberty University</h3>
                <p>Master of Arts in Clinical Mental Health Counseling</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-5">
              Professional Affiliations
            </h2>
            <ul className="space-y-4 text-eden-forest/70 list-disc pl-5">
              <li>Christian Counselors of Texas</li>
              <li>Secretary and Board Member, Foundations: Learning and Culture Center</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust strip — verified external profiles */}
      <section className="py-12 md:py-14 border-y border-eden-sage/40 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-center text-xs uppercase tracking-wider font-medium text-eden-forest/50 mb-6">
            Also Listed On
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <a
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eden-forest/70 hover:text-eden-forest transition-colors font-heading text-base sm:text-lg"
            >
              Psychology Today
            </a>
            <a
              href="https://www.zocdoc.com/professional/marissa-cooney-lpc-associate-671460"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eden-forest/70 hover:text-eden-forest transition-colors font-heading text-base sm:text-lg"
            >
              Zocdoc <span className="text-sm text-eden-olive">(reviews)</span>
            </a>
            <a
              href="https://www.conciergecounselingservice.com/marissa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-eden-forest/70 hover:text-eden-forest transition-colors font-heading text-base sm:text-lg"
            >
              Concierge Counseling Services
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <NewsletterSignup
            variant="compact"
            heading="Stay Connected with Marissa"
            description="Monthly reflections on faith, mental health, and fresh starts. Plus a free anxiety grounding guide when you sign up."
          />
        </div>
      </section>
    </>
  );
}
