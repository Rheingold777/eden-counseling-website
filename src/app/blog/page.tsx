import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/content/posts";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on faith-based counseling, mental health, and wellness from Marissa Cooney, LPC-Associate, at Eden Counseling and Wellness in Austin, TX.",
  openGraph: {
    title: "Blog | Eden Counseling and Wellness",
    description:
      "Insights on faith, mental health, and wellness to support your journey — from Marissa Cooney, LPC-Associate in Austin, TX.",
    url: "https://edencounselingwellness.com/blog",
    images: [
      {
        url: "/images/eden-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Eden Counseling and Wellness Blog",
      },
    ],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-4">
            Blog
          </h1>
          <p className="text-lg text-eden-forest/70 max-w-2xl mx-auto">
            Insights on faith, mental health, and wellness to support your journey
            — whether or not you&rsquo;re a current client.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-eden-sage/30 hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[16/9] bg-eden-sage/30 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block text-xs font-medium text-eden-olive bg-eden-sage/50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-eden-forest/50">{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-eden-forest mb-2 group-hover:text-eden-olive transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-eden-forest/60 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-sm font-medium text-eden-olive group-hover:text-eden-forest transition-colors">
                    Read article &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup
        heading="Join Fresh Start"
        description="Sign up for monthly encouragement on faith, mental health, and wellness. Plus get a free guide: 5 Grounding Techniques for When Anxiety Hits. No spam, unsubscribe anytime."
      />
    </>
  );
}
