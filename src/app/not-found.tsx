import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-6xl font-heading font-semibold text-eden-sage mb-4">
          404
        </p>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold text-eden-forest mb-4">
          Page Not Found
        </h1>
        <p className="text-eden-forest/60 text-lg mb-8">
          It looks like this page doesn&rsquo;t exist. But every journey has
          unexpected turns &mdash; let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-eden-forest/20 text-eden-forest font-medium rounded-lg hover:bg-eden-sage/50 transition-colors"
          >
            Read the Blog
          </Link>
        </div>
        <p className="text-sm text-eden-forest/40 mt-10">
          Looking for something specific?{" "}
          <Link href="/contact" className="text-eden-olive hover:text-eden-forest underline underline-offset-2 transition-colors">
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
