import type { Metadata } from "next";
import Link from "next/link";
import { FAQSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Telehealth Counseling",
  description:
    "Online counseling throughout Texas. Learn what telehealth is, how it works, and what to expect from your virtual session with Eden Counseling.",
  openGraph: {
    title: "Telehealth Counseling | Eden Counseling and Wellness",
    description:
      "Professional online counseling from the comfort of your own space. Secure, HIPAA-compliant video sessions available throughout Texas.",
    url: "https://edencounselingwellness.com/telehealth",
    images: [
      {
        url: "/images/eden-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Eden Counseling and Wellness - Telehealth Counseling",
      },
    ],
  },
  alternates: {
    canonical: "/telehealth",
  },
};

const telehealthFAQs = [
  {
    question: "What is telehealth counseling?",
    answer:
      "Telehealth counseling allows you to meet with your counselor through a secure, HIPAA-compliant video platform from wherever you are. All you need is a private space, a reliable internet connection, and a device with a camera and microphone.",
  },
  {
    question: "Is telehealth counseling as effective as in-person therapy?",
    answer:
      "Yes. Research shows telehealth counseling is just as effective as in-person sessions. You receive the same evidence-based therapeutic approaches, confidentiality protections, and personal attention.",
  },
  {
    question: "Who can use telehealth counseling in Texas?",
    answer:
      "Telehealth counseling is available to anyone who is physically located in the state of Texas at the time of the session. This is based on where you are during the session, not where you live permanently.",
  },
  {
    question: "How do I schedule a telehealth session?",
    answer:
      "You can schedule through Psychology Today, call (512) 881-6560, or use the contact form on this site. You'll receive a link to a secure video platform before your appointment.",
  },
  {
    question: "What do I need for a telehealth session?",
    answer:
      "You need a quiet, private space with a reliable internet connection and a device with a camera and microphone (smartphone, tablet, or computer).",
  },
];

export default function TelehealthPage() {
  return (
    <>
      <FAQSchema faqs={telehealthFAQs} />
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-4">
            Telehealth Counseling
          </h1>
          <p className="text-lg text-eden-forest/70 max-w-2xl mx-auto">
            Professional counseling from the comfort of your own space — available
            to clients throughout the state of Texas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            What Is Telehealth?
          </h2>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              Telehealth counseling — also called online therapy or virtual
              counseling — allows you to meet with your counselor through a
              secure, HIPAA-compliant video platform from wherever you are. All
              you need is a private space, a reliable internet connection, and a
              device with a camera and microphone.
            </p>
            <p>
              Telehealth offers the same quality of care as in-person sessions. You
              receive the same evidence-based therapeutic approaches, the same
              confidentiality protections, and the same personal attention — just
              through a screen instead of across a room.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-8">
            Benefits of Telehealth
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Convenience",
                desc: "No commute, no waiting room. Connect from your home, office, or anywhere private.",
              },
              {
                title: "Accessibility",
                desc: "Available to clients throughout Texas, regardless of your location.",
              },
              {
                title: "Comfort",
                desc: "Many clients feel more at ease opening up from their own familiar environment.",
              },
              {
                title: "Flexibility",
                desc: "Easier to fit into your schedule, especially for busy professionals and parents.",
              },
              {
                title: "Privacy",
                desc: "No chance of running into someone in a waiting room. Complete discretion.",
              },
              {
                title: "Same Quality",
                desc: "Research shows telehealth counseling is just as effective as in-person sessions.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-eden-forest/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            What to Expect
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Schedule Your Session",
                desc: "Reach out through Psychology Today, call (512) 881-6560, or use the contact form on this site.",
              },
              {
                step: "2",
                title: "Get Set Up",
                desc: "You'll receive a link to a secure video platform before your appointment. Find a quiet, private space with good internet.",
              },
              {
                step: "3",
                title: "Meet Your Counselor",
                desc: "Your first session is about getting to know each other, understanding your goals, and building a plan that works for you.",
              },
              {
                step: "4",
                title: "Begin the Journey",
                desc: "We'll work together session by session, at your pace, toward the healing and growth you're looking for.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 bg-eden-forest text-white rounded-full flex items-center justify-center font-heading font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-eden-forest mb-1">
                    {item.title}
                  </h3>
                  <p className="text-eden-forest/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-eden-sage/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-6">
            Who Can Use Telehealth?
          </h2>
          <div className="text-eden-forest/70 space-y-4 leading-relaxed">
            <p>
              Telehealth counseling is available to anyone who is physically
              located in the state of Texas at the time of the session. This is a
              Texas licensing requirement — it is based on where you are sitting
              during the session, not where you live permanently.
            </p>
            <p>
              Telehealth is a great fit for most counseling concerns. However,
              if you are experiencing a mental health crisis or emergency, please
              call 988 (Suicide &amp; Crisis Lifeline), text HOME to 741741, or
              call 911.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-4">
            Ready to Try Telehealth?
          </h2>
          <p className="text-eden-forest/60 mb-8">
            Getting started is simple. Reach out today and we&rsquo;ll guide you
            through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
            >
              Book Your First Session
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-eden-forest/20 text-eden-forest font-medium rounded-lg hover:bg-eden-sage/50 transition-colors"
            >
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
