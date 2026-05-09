import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { posts } from "@/content/posts";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Articles, insights, and resources on faith-based counseling, mental health, and wellness from Eden Counseling and Wellness in Austin, TX.",
  openGraph: {
    title: "Resources | Eden Counseling and Wellness",
    description:
      "Mental health resources, crisis information, and wellness articles from Eden Counseling and Wellness in Austin, TX.",
    url: "https://eden-counseling-website.vercel.app/resources",
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
            Resources &amp; Blog
          </h1>
          <p className="text-lg text-eden-forest/70 max-w-2xl mx-auto">
            Insights on faith, mental health, and wellness to support your journey
            — whether or not you&rsquo;re a current client.
          </p>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-semibold text-eden-forest">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-eden-olive hover:text-eden-forest transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(0, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-eden-sage/30 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-eden-olive bg-eden-sage/50 px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2 group-hover:text-eden-olive transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-eden-forest/60 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
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

      {/* Crisis Resources */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-6">
            Crisis Resources
          </h2>
          <p className="text-eden-forest/70 mb-6">
            If you or someone you know is in immediate danger, please call 911. For
            non-emergency crisis support, these resources are available 24/7:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <ResourceLink
              title="988 Suicide & Crisis Lifeline"
              desc="Call or text 988 for 24/7 support"
            />
            <ResourceLink
              title="Crisis Text Line"
              desc="Text HOME to 741741"
            />
            <ResourceLink
              title="SAMHSA National Helpline"
              desc="1-800-662-4357 — free treatment referrals"
            />
            <ResourceLink
              title="Psychology Today Therapist Finder"
              desc="Find additional therapists in your area"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ResourceLink({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-eden-mint rounded-xl p-5 border border-eden-sage">
      <h3 className="font-heading text-base font-semibold text-eden-forest mb-1">{title}</h3>
      <p className="text-sm text-eden-forest/60">{desc}</p>
    </div>
  );
}
