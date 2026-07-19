import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About Marissa Cooney, LPC-Associate",
  description:
    "Meet Marissa Cooney, LPC-Associate. Affordable, faith-based telehealth counseling in Austin and across Texas, with sliding-scale rates.",
  openGraph: {
    title: "About Marissa Cooney | Eden Counseling and Wellness",
    description:
      "Meet Marissa Cooney, LPC-Associate — a compassionate, faith-based counselor helping individuals and families heal and grow in Austin, TX.",
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
                Eden Counseling and Wellness was created with the idea that everybody
                can use a fresh start. At ECW, my goal is to help you heal from the
                past, understand your life&rsquo;s purpose in a new way, and begin again.
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
          {/* BOFU-optimized intro: blends high-intent search terms (Christian anxiety
              therapist in Austin, affordable couples therapist online, sliding-scale
              therapy) into natural welcoming copy. Sturm method, no keyword stuffing. */}
          <p className="text-lg text-eden-forest/80 leading-relaxed mb-6">
            Welcome. I&rsquo;m Marissa Cooney, an Austin, Texas original and a
            licensed LPC-Associate providing affordable telehealth counseling
            across Texas. Finding the right support shouldn&rsquo;t feel out of
            reach. Whether you are searching for a Christian anxiety therapist in
            Austin, navigating a difficult life transition, or looking for an
            affordable couples therapist online, I offer a safe, collaborative
            space tailored to your journey. By blending professional clinical
            mental health strategies with optional faith-based principles, my goal
            is to help you heal and begin again, with flexible sliding-scale
            options designed to fit your budget.
          </p>
          <div className="prose prose-lg text-eden-forest/70 space-y-4">
            <p>
              My name is Marissa Cooney and I am an Austin, Texas original! I
              graduated with my master&rsquo;s degree in Clinical Mental Health
              Counseling from Liberty University in 2025.
            </p>
            <p>
              I am passionate about wellness and health, both mental and physical.
              Being active in my local community and beyond is incredibly important
              to me. I serve as a board member for Foundations Culture and Learning
              Center and I am an active member in Loving Austin Ministries.
            </p>
            <p>
              Outside my clinical or volunteer hours, you can find me outdoors at
              Enchanted Rock, spending time with my family, or reading.
            </p>
            <p>
              I am passionate about helping individuals with a variety of mental
              health concerns, including anxiety, trauma, depression, and struggles
              with life transitions. I primarily serve adults over the age of 18,
              but I also work with adolescents and couples on a case-by-case basis.
            </p>
            <p>
              I am a Christian and will incorporate faith-based principles into your
              counseling sessions if you would like this, but I will also respect
              your wishes if you are not interested. My hope is to walk alongside
              you as you work toward healing and wholeness.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            Mission &amp; Vision
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="font-heading text-2xl text-eden-forest italic leading-relaxed mb-6">
              &ldquo;Let&rsquo;s go back to the beginning.&rdquo;
            </p>
            <p className="text-eden-forest/70 leading-relaxed">
              Eden Counseling and Wellness was created with the idea that everybody
              can use a fresh start. At ECW, my goal is to help you heal from the
              past, understand your life&rsquo;s purpose in a new way, and begin
              again. Whether you are walking through anxiety, navigating a life
              transition, processing trauma, or simply searching for clarity, this
              is a safe space to start that journey.
            </p>
          </div>
        </div>
      </section>

      {/* LPC Associate Explainer */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            What Is an LPC-Associate?
          </h2>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              Becoming a licensed counselor in Texas is a rigorous process. LPCs
              and LMFTs must first earn a master&rsquo;s degree in counseling,
              which includes specific coursework and a substantial amount of
              hands-on clinical experience. From there, they must pass the NCE
              (National Counselor Exam), a comprehensive national licensing
              examination.
            </p>
            <p>
              After completing their degree and passing the NCE, candidates apply
              to the state of Texas for a provisional license. Once approved, they
              are designated as an LPC-Associate or LMFT-Associate and may begin
              seeing clients professionally.
            </p>
            <p>
              To earn full licensure, Associates must accumulate 3,000 hours of
              supervised counseling experience, during which they meet weekly with
              a supervisor for mentorship and case consultation.
            </p>
          </div>

          <div className="mt-8 bg-eden-mint rounded-xl p-6 border border-eden-sage">
            <h3 className="font-heading text-lg font-semibold text-eden-forest mb-3">
              My Credentials
            </h3>
            <ul className="space-y-2 text-eden-forest/70">
              <li className="flex items-start gap-2">
                <span className="text-eden-olive mt-1">&#10003;</span>
                <span>LPC-Associate, Texas License #100160</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eden-olive mt-1">&#10003;</span>
                <span>Supervised by Dr. Jennifer McCurrach, LPC-S</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eden-olive mt-1">&#10003;</span>
                <span>MA Clinical Mental Health Counseling, Liberty University (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-eden-olive mt-1">&#10003;</span>
                <span>National Counselor Exam (NCE) — Passed</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 bg-eden-forest text-white text-sm font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
              >
                View Marissa&rsquo;s Psychology Today profile
              </a>
              <Link
                href="/faqs/what-is-an-lpc-associate"
                className="inline-flex items-center justify-center px-5 py-3 border border-eden-forest/20 text-eden-forest text-sm font-medium rounded-lg hover:bg-white/70 transition-colors"
              >
                Learn about LPC-Associate supervision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance / Fees */}
      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            Fees &amp; Insurance
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <FeeCard title="Individual Session" rate="$75" duration="50 minutes" />
            <FeeCard title="Adolescent Session" rate="$60" duration="45 minutes" />
            <FeeCard title="Couples Session" rate="$100" duration="50 minutes" />
          </div>
          <div className="mt-8 text-eden-forest/70 space-y-3">
            <p>
              Eden Counseling and Wellness does not currently accept insurance.
              Payment is accepted via credit or debit card (Visa, Mastercard,
              American Express, Discover).
            </p>
            <p>
              A sliding scale is available based on income. If cost is a barrier,
              please reach out — we want to make counseling accessible.
            </p>
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

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FAQ
              q="Do I have to be Christian to work with you?"
              a="Not at all. While I am a Christian and can incorporate faith-based principles if you'd like, I welcome clients of all backgrounds and will always respect your beliefs and preferences."
            />
            <FAQ
              q="How do I schedule an appointment?"
              a="The fastest way is to call (512) 881-6560 — leave a message and I return calls within 24 hours, including a free 15-minute consultation. You can also request a time at edencounselingwellness.com/book."
            />
            <FAQ
              q="What issues do you help with?"
              a="I work with anxiety, depression, trauma, life transitions, relationship concerns, stress, and emotional wellness. I'm here to help you navigate whatever you're facing."
            />
            <FAQ
              q="Do you offer in-person sessions?"
              a="Currently, all sessions are conducted via telehealth (secure video). I hope to add an office location in the Austin area in the future."
            />
            <FAQ
              q="What is a sliding scale?"
              a="A sliding scale means your session fee may be adjusted based on your income. If cost is a concern, please let me know when you reach out."
            />
            <FAQ
              q="How long are sessions?"
              a="Individual sessions are 50 minutes, adolescent sessions are 45 minutes, and couples sessions are 50 minutes."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function FeeCard({ title, rate, duration }: { title: string; rate: string; duration: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center">
      <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2">{title}</h3>
      <p className="font-heading text-3xl font-bold text-eden-forest mb-1">{rate}</p>
      <p className="text-sm text-eden-forest/50">{duration}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-eden-sage/50 pb-6">
      <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2">{q}</h3>
      <p className="text-eden-forest/70 leading-relaxed">{a}</p>
    </div>
  );
}
