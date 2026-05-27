import type { Metadata } from "next";
import { AuthorityHub } from "@/components/AuthorityPage";
import { faqPages } from "@/content/authorityPages";

export const metadata: Metadata = {
  title: "Counseling FAQ",
  description:
    "Answers to common questions about Eden Counseling and Wellness, telehealth, cost, LPC-Associate supervision, Christian counseling, teen counseling, and scheduling.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function FAQsPage() {
  return (
    <AuthorityHub
      title="Counseling FAQ"
      description="Clear answers for prospective clients comparing cost, telehealth, Christian counseling, teen counseling, LPC-Associate supervision, scheduling, and crisis support."
      pages={faqPages}
    />
  );
}
