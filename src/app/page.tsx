import Image from "next/image";
import Link from "next/link";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { posts } from "@/content/posts";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-eden-sage/40 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-heading text-eden-olive text-lg italic mb-2">
                &ldquo;Let&rsquo;s go back to the beginning.&rdquo;
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-eden-forest leading-tight mb-6">
                Compassionate, Faith-Based Counseling in Austin, TX
              </h1>
              <p className="text-lg text-eden-forest/70 leading-relaxed mb-8 max-w-lg">
                Eden Counseling and Wellness was created with the idea that everybody
                can use a fresh start. My goal is to help you heal from the past,
                understand your life&rsquo;s purpose in a new way, and begin again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+15126018932"
                  data-cta="hero-call"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-eden-forest text-white font-semibold rounded-lg hover:bg-eden-forest/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Call (512) 601-8932
                </a>
                <a
                  href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-eden-forest/20 text-eden-forest font-medium rounded-lg hover:bg-eden-sage/50 transition-colors"
                >
                  Book Online
                </a>
              </div>
              <p className="mt-4 text-sm text-eden-forest/60">
                Leave a message — Marissa returns calls within 24 hours. Free 15-minute consult.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/marissa-headshot.jpg"
                  alt="Marissa Cooney, LPC-Associate"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-6 py-4">
                <Link
                  href="/about"
                  className="font-heading text-eden-forest font-semibold hover:text-eden-olive transition-colors"
                >
                  Marissa Cooney
                </Link>
                <p className="text-sm text-eden-forest/60">LPC-Associate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-eden-forest mb-4">
              What We Do
            </h2>
            <p className="text-eden-forest/60 max-w-2xl mx-auto">
              Offering compassionate care rooted in faith, clinical expertise, and a
              genuine desire to help you move forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              }
              title="Individual Counseling"
              description="Support for adults and adolescents (13+) navigating anxiety, depression, trauma, life transitions, and emotional wellness."
              href="/services#individual"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              }
              title="Marriage Counseling"
              description="Helping couples rebuild communication, deepen connection, and restore trust in their relationship."
              href="/services#couples"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
                </svg>
              }
              title="Faith-Based Care"
              description="Christian counseling that integrates faith and therapy — honoring your beliefs while providing evidence-based support."
              href="/services#faith"
            />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-24 bg-eden-sage/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-eden-forest mb-6">
                Meet Marissa
              </h2>
              <p className="text-eden-forest/70 leading-relaxed mb-4">
                I&rsquo;m{" "}
                <Link href="/about" className="text-eden-forest font-medium hover:text-eden-olive transition-colors">
                  Marissa Cooney
                </Link>
                , an Austin, Texas original. I graduated with
                my master&rsquo;s degree in Clinical Mental Health Counseling from
                Liberty University in 2025.
              </p>
              <p className="text-eden-forest/70 leading-relaxed mb-4">
                I am passionate about wellness and health, both mental and physical.
                I serve as a board member for Foundations Culture and Learning Center
                and am an active member of Loving Austin Ministries.
              </p>
              <p className="text-eden-forest/70 leading-relaxed mb-6">
                I am a Christian and will incorporate faith-based principles into your
                counseling sessions if you would like, but I will also respect your
                wishes if you prefer a different approach.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-eden-forest font-medium hover:text-eden-olive transition-colors group"
              >
                Read more about my background
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-4">
                <InfoRow label="Credential" value="LPC-Associate (TX #100160)" />
                <InfoRow label="Supervisor" value="Dr. Jennifer McCurrach, LPC-S" />
                <InfoRow label="Education" value="MA Clinical Mental Health Counseling, Liberty University" />
                <InfoRow label="Serves" value="Adults, Adolescents (13+), Couples" />
                <InfoRow label="Format" value="Telehealth (all of Texas)" />
                <InfoRow label="Faith" value="Christian — integrated on request" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup
        heading="Join Fresh Start"
        description="Sign up for monthly encouragement on faith, mental health, and wellness. Plus get a free guide: 5 Grounding Techniques for When Anxiety Hits."
      />

      {/* Latest from the Blog */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-eden-forest mb-4">
              Latest from the Blog
            </h2>
            <p className="text-eden-forest/60 max-w-2xl mx-auto">
              Insights on faith, mental health, and wellness to support your
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-eden-olive bg-eden-sage/50 px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2 group-hover:text-eden-olive transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-eden-forest/60 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center text-eden-forest font-medium hover:text-eden-olive transition-colors group"
            >
              View all articles
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-eden-forest mb-4">
            Ready to Begin?
          </h2>
          <p className="text-eden-forest/60 text-lg mb-8 max-w-xl mx-auto">
            Taking the first step can feel like the hardest part. You don&rsquo;t
            have to have it all figured out — just a willingness to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15126018932"
              data-cta="footer-call"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-eden-forest text-white font-semibold rounded-lg hover:bg-eden-forest/90 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call (512) 601-8932
            </a>
            <a
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-eden-forest/20 text-eden-forest font-medium rounded-lg hover:bg-eden-sage/50 transition-colors text-lg"
            >
              Book Online
            </a>
          </div>
          <p className="mt-5 text-sm text-eden-forest/60">
            Leave a message — Marissa returns calls within 24 hours. Free 15-minute consult.
          </p>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="w-14 h-14 bg-eden-sage rounded-xl flex items-center justify-center text-eden-forest mb-5 group-hover:bg-eden-forest group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-eden-forest mb-3">{title}</h3>
      <p className="text-eden-forest/60 leading-relaxed">{description}</p>
    </Link>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 py-2 border-b border-eden-sage/50 last:border-0">
      <span className="text-sm font-medium text-eden-forest/50 sm:w-28 shrink-0">{label}</span>
      <span className="text-eden-forest">{value}</span>
    </div>
  );
}
