import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/posts";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

interface BlogLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export function BlogLayout({ post, children }: BlogLayoutProps) {
  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />
      {/* Hero */}
      <section className="bg-eden-sage/40 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-eden-olive hover:text-eden-forest mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="inline-block text-xs font-medium text-eden-olive bg-eden-sage/60 px-2.5 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.6rem] font-semibold text-eden-forest leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-eden-forest/60">
            <span>Marissa Cooney, LPC-Associate</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-2">
        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-eden">{children}</div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="border-t border-eden-sage py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-eden-sage">
              <Image
                src="/images/marissa-headshot.jpg"
                alt="Marissa Cooney, LPC-Associate"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <p className="font-heading text-lg font-semibold text-eden-forest">
                Marissa Cooney, LPC-Associate
              </p>
              <p className="text-sm text-eden-forest/60 mt-1">
                Supervised by Dr. Jennifer McCurrach, LPC-S
              </p>
              <p className="text-sm text-eden-forest/70 mt-2 leading-relaxed">
                Marissa is the founder of Eden Counseling and Wellness, PLLC. She provides
                faith-informed telehealth therapy to individuals, adolescents, and couples
                throughout Texas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-eden-forest py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-3">
            Ready to Take the Next Step?
          </h2>
          <p className="text-eden-sage/80 mb-6">
            You don&rsquo;t have to figure this out alone. Book a free consultation and
            let&rsquo;s talk about where you are and where you want to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-eden-olive text-white font-medium rounded-lg hover:bg-eden-olive/90 transition-colors"
            >
              Book on Psychology Today
            </a>
            <a
              href="tel:5125432852"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Call (512) 543-2852
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
