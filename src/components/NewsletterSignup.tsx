"use client";

import { useState, FormEvent } from "react";

const BEEHIIV_PUBLICATION_ID = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID || "";
const BEEHIIV_EMBED_URL = `https://embeds.beehiiv.com/subscribe`;

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "footer";
  heading?: string;
  description?: string;
  className?: string;
}

export function NewsletterSignup({
  variant = "default",
  heading = "Stay Connected",
  description = "Get monthly encouragement for your mental health journey. Plus a free grounding guide.",
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    if (!BEEHIIV_PUBLICATION_ID) {
      window.open(
        `mailto:info@edencounselingandwellness.com?subject=Newsletter%20Signup&body=Please%20add%20me%20to%20your%20newsletter%3A%20${encodeURIComponent(email)}`,
        "_blank"
      );
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(BEEHIIV_EMBED_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          publication_id: BEEHIIV_PUBLICATION_ID,
          email,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <h4 className="font-heading text-lg font-semibold text-white mb-3">
          Fresh Start Newsletter
        </h4>
        <p className="text-sm text-white/60 mb-3">
          Monthly reflections on faith, mental health, and beginning again.
        </p>
        {status === "success" ? (
          <p className="text-sm text-eden-sage">Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-eden-sage/50 focus:border-eden-sage/50 transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-4 py-2 bg-eden-olive text-white text-sm font-medium rounded-lg hover:bg-eden-olive/80 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Join"}
            </button>
          </form>
        )}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-eden-sage/30 rounded-xl p-6 ${className}`}>
        <h3 className="font-heading text-lg font-semibold text-eden-forest mb-2">
          {heading}
        </h3>
        <p className="text-sm text-eden-forest/60 mb-4">{description}</p>
        {status === "success" ? (
          <p className="text-sm text-eden-olive font-medium">
            You&rsquo;re in! Check your inbox for a welcome email and your free grounding guide.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2.5 rounded-lg border border-eden-sage bg-white text-eden-forest text-sm placeholder:text-eden-forest/30 focus:outline-none focus:ring-2 focus:ring-eden-olive/30 focus:border-eden-olive transition"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2.5 bg-eden-forest text-white text-sm font-medium rounded-lg hover:bg-eden-forest/90 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 mt-2">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    );
  }

  return (
    <section className={`py-16 md:py-20 bg-eden-sage/30 ${className}`}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold text-eden-forest mb-4">
          {heading}
        </h2>
        <p className="text-eden-forest/60 mb-8">{description}</p>
        {status === "success" ? (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-eden-forest font-medium mb-2">
              You&rsquo;re in! Welcome to Fresh Start.
            </p>
            <p className="text-sm text-eden-forest/60">
              Check your inbox for a welcome email and your free &ldquo;5 Grounding
              Techniques for When Anxiety Hits&rdquo; guide.
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-eden-sage bg-white text-eden-forest placeholder:text-eden-forest/30 focus:outline-none focus:ring-2 focus:ring-eden-olive/30 focus:border-eden-olive transition"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-eden-forest text-white font-medium rounded-lg hover:bg-eden-forest/90 transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing..." : "Get Your Free Guide"}
              </button>
            </form>
            <p className="text-xs text-eden-forest/40 mt-3">
              No spam, unsubscribe anytime. You&rsquo;ll also receive a free grounding techniques guide.
            </p>
          </>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 mt-3">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </section>
  );
}
