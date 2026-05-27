import type { Metadata } from "next";
import { AuthorityHub } from "@/components/AuthorityPage";
import { therapyPages } from "@/content/authorityPages";

export const metadata: Metadata = {
  title: "Therapy Topics and Counseling Services",
  description:
    "Faith-informed telehealth counseling pages for anxiety, depression, trauma-informed care, teen counseling, marriage counseling, grief, burnout, and life transitions.",
  alternates: {
    canonical: "/therapy",
  },
};

export default function TherapyPage() {
  return (
    <AuthorityHub
      title="Therapy Topics and Counseling Services"
      description="Explore Eden Counseling and Wellness pages for the concerns clients most often search for: anxiety, depression, grief, burnout, teen counseling, marriage counseling, Christian counseling, and telehealth across Texas."
      pages={therapyPages}
    />
  );
}
