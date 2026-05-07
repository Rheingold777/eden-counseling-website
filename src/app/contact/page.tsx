import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Eden Counseling and Wellness. Schedule a counseling session, ask a question, or learn more about faith-based telehealth counseling in Austin, TX.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-eden-sage/40 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-eden-forest mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-eden-forest/70 max-w-2xl mx-auto">
            Whether you&rsquo;re ready to schedule or just have a question,
            I&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  }
                  label="Phone"
                  value="(512) 543-2852"
                  href="tel:5125432852"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  }
                  label="Email"
                  value="info@edencounselingandwellness.com"
                  href="mailto:info@edencounselingandwellness.com"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  }
                  label="Location"
                  value="Austin, Texas — Telehealth Only"
                />
                <ContactItem
                  icon={
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  }
                  label="Scheduling"
                  value="Book through Psychology Today"
                  href="https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944"
                  external
                />
              </div>

              <div className="mt-10 p-6 bg-eden-mint rounded-xl border border-eden-sage">
                <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2">
                  Crisis Resources
                </h3>
                <p className="text-sm text-eden-forest/60 mb-3">
                  If you or someone you know is in crisis, please use these
                  resources immediately:
                </p>
                <ul className="text-sm text-eden-forest/70 space-y-1">
                  <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text 988</li>
                  <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                  <li><strong>Emergency:</strong> Call 911</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-6">
                Send a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-eden-forest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-eden-sage bg-white text-eden-forest placeholder:text-eden-forest/30 focus:outline-none focus:ring-2 focus:ring-eden-olive/30 focus:border-eden-olive transition"
                    placeholder="First and last name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-eden-forest mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-eden-sage bg-white text-eden-forest placeholder:text-eden-forest/30 focus:outline-none focus:ring-2 focus:ring-eden-olive/30 focus:border-eden-olive transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-eden-forest mb-1.5">
                    Phone Number <span className="text-eden-forest/40">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-eden-sage bg-white text-eden-forest placeholder:text-eden-forest/30 focus:outline-none focus:ring-2 focus:ring-eden-olive/30 focus:border-eden-olive transition"
                    placeholder="(512) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-eden-forest mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-eden-sage bg-white text-eden-forest placeholder:text-eden-forest/30 focus:outline-none focus:ring-2 focus:ring-eden-olive/30 focus:border-eden-olive transition resize-none"
                    placeholder="Tell me a little about what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors"
                >
                  Send Message
                </button>
                <p className="text-xs text-eden-forest/40">
                  This form is for general inquiries only. Please do not include
                  sensitive health information. For immediate scheduling, use
                  Psychology Today or call directly.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-eden-sage rounded-lg flex items-center justify-center text-eden-forest shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-eden-forest/50">{label}</p>
        <p className="text-eden-forest">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block hover:bg-eden-sage/20 -mx-3 px-3 py-2 rounded-lg transition-colors"
      >
        {content}
      </a>
    );
  }

  return <div className="py-2">{content}</div>;
}
