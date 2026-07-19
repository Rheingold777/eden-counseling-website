import type { Metadata } from "next";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Mental Health Resources & Crisis Help",
  description:
    "Mental health resources, crisis hotlines, recommended reading, and free wellness tools from Eden Counseling and Wellness in Austin, TX.",
  openGraph: {
    title: "Resources | Eden Counseling and Wellness",
    description:
      "Crisis hotlines, recommended reading, free guides, and mental health resources from Eden Counseling and Wellness.",
    url: "https://edencounselingwellness.com/resources",
    images: [
      {
        url: "/images/eden-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Eden Counseling and Wellness Resources",
      },
    ],
  },
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-4">
            Resources
          </h1>
          <p className="text-lg text-eden-forest/70 max-w-2xl mx-auto">
            Helpful tools, crisis information, and recommended reading to
            support your mental health journey.
          </p>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-eden-forest mb-3">
            Crisis Resources
          </h2>
          <p className="text-eden-forest/70 mb-8">
            If you or someone you know is in immediate danger, please call 911.
            For non-emergency crisis support, these resources are available 24/7:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <CrisisCard
              title="988 Suicide & Crisis Lifeline"
              desc="Call or text 988 for free, 24/7 confidential support."
              action="Call or text 988"
              href="tel:988"
            />
            <CrisisCard
              title="Crisis Text Line"
              desc="Free crisis counseling via text message, available 24/7."
              action="Text HOME to 741741"
              href="sms:741741?body=HOME"
            />
            <CrisisCard
              title="SAMHSA National Helpline"
              desc="Free, confidential treatment referrals and information, 24/7."
              action="1-800-662-4357"
              href="tel:1-800-662-4357"
            />
            <CrisisCard
              title="National Domestic Violence Hotline"
              desc="Confidential support for anyone affected by domestic violence."
              action="1-800-799-7233"
              href="tel:1-800-799-7233"
            />
          </div>
        </div>
      </section>

      {/* Lead Magnet / Grounding Guide */}
      <section className="bg-eden-mint py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-eden-forest mb-3">
            Free Guide: 5 Grounding Techniques for When Anxiety Hits
          </h2>
          <p className="text-eden-forest/70 mb-6 max-w-xl mx-auto">
            Simple, practical techniques you can use anywhere — at your desk, in
            your car, or at 2 a.m. when sleep won&rsquo;t come. Sign up below to
            get your free copy.
          </p>
          <NewsletterSignup variant="compact" />
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-eden-forest mb-3">
            Recommended Reading
          </h2>
          <p className="text-eden-forest/70 mb-8">
            Books and resources that align with our approach to faith, therapy,
            and whole-person wellness.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <BookCard
              title="The Body Keeps the Score"
              author="Bessel van der Kolk, MD"
              desc="A groundbreaking look at how trauma reshapes the body and brain — and how healing happens."
              category="Trauma & Recovery"
            />
            <BookCard
              title="Boundaries"
              author="Henry Cloud & John Townsend"
              desc="A faith-informed guide to setting healthy boundaries in relationships, work, and life."
              category="Relationships"
            />
            <BookCard
              title="Anxious for Nothing"
              author="Max Lucado"
              desc="Biblical wisdom and practical tools for finding calm in an anxious world."
              category="Faith & Anxiety"
            />
            <BookCard
              title="Attached"
              author="Amir Levine & Rachel Heller"
              desc="The science of adult attachment and how understanding your attachment style transforms relationships."
              category="Relationships"
            />
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-16 md:py-20 bg-eden-sage/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-eden-forest mb-3">
            Helpful Links
          </h2>
          <p className="text-eden-forest/70 mb-8">
            Trusted organizations for mental health support, faith-based care,
            and therapist directories.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <HelpfulLink
              title="Psychology Today"
              desc="Find therapists, psychiatrists, and support groups near you."
              href="https://www.psychologytoday.com/us"
            />
            <HelpfulLink
              title="Open Path Collective"
              desc="Affordable therapy sessions ($30–$80) for individuals and couples."
              href="https://openpathcollective.org"
            />
            <HelpfulLink
              title="AACC"
              desc="American Association of Christian Counselors — resources and directory."
              href="https://www.aacc.net"
            />
            <HelpfulLink
              title="NAMI Texas"
              desc="National Alliance on Mental Illness — education, support groups, and advocacy."
              href="https://namitexas.org"
            />
            <HelpfulLink
              title="GotQuestions.org"
              desc="Biblical answers to questions about faith, mental health, and life."
              href="https://www.gotquestions.org"
            />
            <HelpfulLink
              title="Integral Care (Austin)"
              desc="Austin&rsquo;s local mental health authority — crisis services and community programs."
              href="https://integralcare.org"
            />
          </div>
        </div>
      </section>

      {/* Authority Hubs */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-eden-forest mb-3">
            Local and Counseling Guides
          </h2>
          <p className="text-eden-forest/70 mb-8">
            Browse practical pages for local counseling searches, therapy topics,
            and common questions before starting care.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/areas"
              className="bg-white rounded-xl p-6 border border-eden-sage/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                Local Areas
              </h3>
              <p className="text-sm text-eden-forest/60">
                Buda, Kyle, South Austin, Circle C, Slaughter Lane, and nearby communities.
              </p>
            </Link>
            <Link
              href="/therapy"
              className="bg-white rounded-xl p-6 border border-eden-sage/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                Therapy Topics
              </h3>
              <p className="text-sm text-eden-forest/60">
                Anxiety, depression, grief, teen counseling, marriage counseling, and faith.
              </p>
            </Link>
            <Link
              href="/faqs"
              className="bg-white rounded-xl p-6 border border-eden-sage/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                FAQs
              </h3>
              <p className="text-sm text-eden-forest/60">
                Cost, insurance, telehealth, LPC-Associate supervision, scheduling, and crisis support.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-eden-forest mb-4">
            From the Blog
          </h2>
          <p className="text-eden-forest/70 mb-6 max-w-xl mx-auto">
            Explore articles on faith, mental health, and practical wellness
            tips written by{" "}
            <Link href="/about" className="text-eden-forest font-medium hover:text-eden-olive transition-colors">
              Marissa Cooney, LPC-Associate
            </Link>
            .
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
          >
            Read the Blog
          </Link>
        </div>
      </section>
    </>
  );
}

function CrisisCard({
  title,
  desc,
  action,
  href,
}: {
  title: string;
  desc: string;
  action: string;
  href: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-eden-sage/30 shadow-sm">
      <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2">
        {title}
      </h3>
      <p className="text-sm text-eden-forest/60 mb-3">{desc}</p>
      <a
        href={href}
        className="inline-flex items-center text-sm font-medium text-eden-olive hover:text-eden-forest transition-colors"
      >
        {action}
        <svg
          className="w-3.5 h-3.5 ml-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
}

function BookCard({
  title,
  author,
  desc,
  category,
}: {
  title: string;
  author: string;
  desc: string;
  category: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-eden-sage/30 shadow-sm">
      <span className="inline-block text-xs font-medium text-eden-olive bg-eden-sage/50 px-2.5 py-1 rounded-full mb-3">
        {category}
      </span>
      <h3 className="font-heading text-lg font-semibold text-eden-forest mb-1">
        {title}
      </h3>
      <p className="text-sm text-eden-olive mb-2">by {author}</p>
      <p className="text-sm text-eden-forest/60">{desc}</p>
    </div>
  );
}

function HelpfulLink({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl p-5 border border-eden-sage/30 shadow-sm hover:shadow-md transition-shadow block"
    >
      <h3 className="font-heading text-base font-semibold text-eden-forest mb-1 group-hover:text-eden-olive transition-colors">
        {title}
        <svg
          className="w-3.5 h-3.5 inline-block ml-1.5 opacity-40 group-hover:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </h3>
      <p className="text-sm text-eden-forest/60">{desc}</p>
    </a>
  );
}
