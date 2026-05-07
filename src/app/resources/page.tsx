import type { Metadata } from "next";
import { NewsletterSignup } from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Articles, insights, and resources on faith-based counseling, mental health, and wellness from Eden Counseling and Wellness in Austin, TX.",
};

const upcomingPosts = [
  {
    title: "What To Expect in Your First Counseling Session",
    excerpt:
      "If you've never been to counseling before, it's normal to feel a mix of hope and nerves. Here's a simple guide to help you know what to expect.",
    category: "Getting Started",
  },
  {
    title: "How Can Counseling Help Me?",
    excerpt:
      "You don't have to be in crisis to benefit from counseling. Here's how therapy can help you grow, heal, and move forward — wherever you are.",
    category: "Mental Health",
  },
  {
    title: "David and Saul: A Biblical Lesson in Mental Wellness",
    excerpt:
      "The story of David and Saul teaches us powerful lessons about emotional health, boundaries, and trusting God through difficult seasons.",
    category: "Faith & Wellness",
  },
  {
    title: "The Church and Mental Health",
    excerpt:
      "Why faith communities and professional counseling are not at odds — and how they can work together to support whole-person wellness.",
    category: "Faith & Wellness",
  },
  {
    title: "Physical Wellbeing: Bodily Exercise Profits Little, But It Still Profits",
    excerpt:
      "A look at the connection between physical health and mental wellness, and why taking care of your body matters for your whole self.",
    category: "Wellness",
  },
  {
    title: "The Usefulness of Faith-Based Therapy",
    excerpt:
      "What does faith-based counseling actually look like in practice? How can integrating your beliefs into therapy support real healing?",
    category: "Faith & Wellness",
  },
];

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

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-8">
            Coming Soon
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingPosts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-eden-sage/30"
              >
                <span className="inline-block text-xs font-medium text-eden-olive bg-eden-sage/50 px-2.5 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
                  {post.title}
                </h3>
                <p className="text-eden-forest/60 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup
        heading="Join Fresh Start"
        description="Sign up for monthly encouragement on faith, mental health, and wellness. Plus get a free guide: 5 Grounding Techniques for When Anxiety Hits. No spam, unsubscribe anytime."
      />

      {/* Crisis Resources */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-eden-forest mb-6">
            Helpful Resources
          </h2>
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
