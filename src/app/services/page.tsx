import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Counseling Services",
  description:
    "Faith-based individual counseling, marriage counseling, and adolescent counseling offered through telehealth across Texas by Marissa Cooney, LPC-Associate.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-4">
            What We Do
          </h1>
          <p className="text-lg text-eden-forest/70 max-w-2xl mx-auto">
            Compassionate, evidence-based counseling rooted in faith and delivered
            with genuine care for your well-being.
          </p>
        </div>
      </section>

      {/* Individual */}
      <section id="individual" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-eden-sage rounded-xl flex items-center justify-center text-eden-forest shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-eden-forest">
              Individual Counseling
            </h2>
          </div>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              Individual counseling provides a safe, confidential space for adults
              and adolescents (ages 13 and up) to explore their thoughts, feelings,
              and experiences with a compassionate professional.
            </p>
            <p>
              Whether you are navigating anxiety, processing trauma, working through
              depression, managing stress, or facing a major life transition, I will
              meet you where you are and walk alongside you toward healing and growth.
            </p>
            <h3 className="font-heading text-xl font-semibold text-eden-forest pt-4">
              Common Concerns
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Anxiety & worry",
                "Depression",
                "Trauma & PTSD",
                "Life transitions",
                "Grief & loss",
                "Stress & burnout",
                "Self-esteem",
                "Relationship concerns",
                "Emotional regulation",
                "Coping skills",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-eden-olive">&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-eden-forest/50">
            <span className="font-medium">$75</span>
            <span>&middot;</span>
            <span>50-minute session</span>
            <span>&middot;</span>
            <span>Telehealth</span>
          </div>
        </div>
      </section>

      <hr className="border-eden-sage/50 max-w-3xl mx-auto" />

      {/* Couples */}
      <section id="couples" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-eden-sage rounded-xl flex items-center justify-center text-eden-forest shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-eden-forest">
              Marriage Counseling
            </h2>
          </div>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              Marriage counseling offers couples a structured, supportive
              environment to address challenges, rebuild communication, and
              strengthen their relationship. Sessions are available on a
              case-by-case basis.
            </p>
            <p>
              Whether you are navigating conflict, rebuilding trust after a
              difficult season, or simply want to deepen your connection, counseling
              can help you and your partner find a healthier path forward together.
            </p>
            <h3 className="font-heading text-xl font-semibold text-eden-forest pt-4">
              We Can Help With
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {[
                "Communication breakdown",
                "Trust & rebuilding",
                "Conflict resolution",
                "Emotional disconnection",
                "Life transitions as a couple",
                "Pre-marital preparation",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-eden-olive">&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-eden-forest/50">
            <span className="font-medium">$100</span>
            <span>&middot;</span>
            <span>50-minute session</span>
            <span>&middot;</span>
            <span>Telehealth</span>
          </div>
        </div>
      </section>

      <hr className="border-eden-sage/50 max-w-3xl mx-auto" />

      {/* Adolescent */}
      <section id="adolescent" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-eden-sage rounded-xl flex items-center justify-center text-eden-forest shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-eden-forest">
              Adolescent Counseling
            </h2>
          </div>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              Adolescence is a season of enormous change. Counseling can provide
              teenagers (ages 13 and up) with a safe space to explore their
              emotions, build coping skills, and develop a stronger sense of who
              they are.
            </p>
            <p>
              I work with teens on a range of concerns including anxiety, academic
              pressure, family dynamics, self-esteem, and navigating social
              relationships. Sessions are collaborative, age-appropriate, and
              designed to meet your teen where they are.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-eden-forest/50">
            <span className="font-medium">$60</span>
            <span>&middot;</span>
            <span>45-minute session</span>
            <span>&middot;</span>
            <span>Telehealth</span>
          </div>
        </div>
      </section>

      <hr className="border-eden-sage/50 max-w-3xl mx-auto" />

      {/* Faith-Based */}
      <section id="faith" className="py-16 md:py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-eden-sage rounded-xl flex items-center justify-center text-eden-forest shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl font-semibold text-eden-forest">
              Faith-Based Counseling
            </h2>
          </div>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              For clients who want it, I offer counseling that integrates
              Christian faith with evidence-based therapeutic approaches. This
              means your sessions can include prayer, Scripture, and spiritual
              reflection alongside clinical techniques like CBT, ACT, narrative
              therapy, and trauma-focused care.
            </p>
            <p>
              Faith-based counseling is always optional and client-directed. If
              you prefer a secular approach, I will absolutely respect that. If
              faith is an important part of your healing, I am honored to walk
              that road with you.
            </p>
            <p>
              You do not have to be Christian to work with me. My door is open to
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-eden-forest/60 mb-8">
            You don&rsquo;t have to navigate this alone. Reach out today and
            let&rsquo;s take the first step together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
            >
              Book Through Psychology Today
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-eden-forest/20 text-eden-forest font-medium rounded-lg hover:bg-eden-sage/50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
