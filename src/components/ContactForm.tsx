"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website Inquiry from ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@edencounselingandwellness.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="bg-eden-mint rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-eden-sage rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-eden-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-semibold text-eden-forest mb-2">
          Opening Your Email Client
        </h3>
        <p className="text-eden-forest/60 text-sm mb-4">
          Your email app should open with a pre-filled message. If it
          didn&rsquo;t open, you can email me directly at:
        </p>
        <a
          href="mailto:info@edencounselingandwellness.com"
          className="text-eden-olive font-medium hover:text-eden-forest transition-colors underline underline-offset-2"
        >
          info@edencounselingandwellness.com
        </a>
        <button
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          }}
          className="block mx-auto mt-4 text-sm text-eden-forest/50 hover:text-eden-forest transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-eden-forest mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
      <p className="text-xs text-eden-forest/70">
        This form is for general inquiries only. Please do not include
        sensitive health information. For immediate scheduling, use
        Psychology Today or call directly.
      </p>
    </form>
  );
}
