import Link from "next/link";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import {
  type AuthorityPage,
  getAuthorityPagesByKind,
  getAuthorityPath,
} from "@/content/authorityPages";

const kindLabels = {
  area: "Local Counseling",
  therapy: "Therapy Topic",
  faq: "Client FAQ",
};

const kindHubs = {
  area: "/areas",
  therapy: "/therapy",
  faq: "/faqs",
};

export function AuthorityPageTemplate({ page }: { page: AuthorityPage }) {
  const related = getAuthorityPagesByKind(page.kind)
    .filter((item) => item.slug !== page.slug)
    .slice(0, 4);

  return (
    <>
      <FAQSchema faqs={page.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: kindLabels[page.kind], url: kindHubs[page.kind] },
          { name: page.shortTitle, url: getAuthorityPath(page) },
        ]}
      />

      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-medium text-eden-olive mb-3">{kindLabels[page.kind]}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-5">
            {page.title}
          </h1>
          <p className="text-lg leading-relaxed text-eden-forest/70 max-w-3xl">
            {page.metaDescription}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white rounded-xl border border-eden-sage/60 p-5 shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                Primary Search
              </h2>
              <p className="text-sm text-eden-forest/70">{page.primaryKeyword}</p>
            </div>
            <div className="bg-white rounded-xl border border-eden-sage/60 p-5 shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                Who This Helps
              </h2>
              <p className="text-sm text-eden-forest/70">{page.audience}</p>
            </div>
            <div className="bg-white rounded-xl border border-eden-sage/60 p-5 shadow-sm">
              <h2 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                Search Intent
              </h2>
              <p className="text-sm text-eden-forest/70">{page.intent}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose-eden">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          {page.localSignals && page.localSignals.length > 0 && (
            <div className="mt-10 rounded-xl bg-white border border-eden-sage/60 p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-3">
                Local Signals Mentioned
              </h2>
              <div className="flex flex-wrap gap-2">
                {page.localSignals.map((signal) => (
                  <span
                    key={signal}
                    className="rounded-full bg-eden-sage/70 px-3 py-1 text-sm text-eden-forest/80"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 rounded-xl bg-eden-mint border border-eden-sage/70 p-6">
            <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-3">
              Related Searches
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 text-sm text-eden-forest/70">
              {page.secondaryKeywords.map((keyword) => (
                <li key={keyword} className="flex gap-2">
                  <span className="text-eden-olive">+</span>
                  <span>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            Questions People Ask
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-eden-sage/60 p-5">
                <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                  {faq.question}
                </h3>
                <p className="text-eden-forest/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-eden-forest p-8 md:p-10 text-white">
            <h2 className="font-heading text-3xl font-semibold mb-3">
              Ready to ask about fit?
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mb-6">
              Eden Counseling and Wellness offers telehealth counseling for clients physically
              located in Texas. Reach out to ask about availability, fit, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-eden-forest font-medium rounded-lg hover:bg-eden-sage transition-colors"
              >
                Book a Session
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Eden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
              Related {kindLabels[page.kind]} Pages
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={getAuthorityPath(item)}
                  className="rounded-xl bg-white border border-eden-sage/60 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                    {item.shortTitle}
                  </h3>
                  <p className="text-sm text-eden-forest/65">{item.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function AuthorityHub({
  title,
  description,
  pages,
}: {
  title: string;
  description: string;
  pages: AuthorityPage[];
}) {
  return (
    <>
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-5">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-eden-forest/70 max-w-3xl">{description}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={getAuthorityPath(page)}
                className="bg-white rounded-xl border border-eden-sage/60 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-eden-olive mb-2">
                  {page.primaryKeyword}
                </p>
                <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-3">
                  {page.shortTitle}
                </h2>
                <p className="text-sm leading-relaxed text-eden-forest/65">
                  {page.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
