import type { Metadata } from "next";
import { AuthorityHub } from "@/components/AuthorityPage";
import { areaPages } from "@/content/authorityPages";

export const metadata: Metadata = {
  title: "Counseling Areas Near Buda and South Austin",
  description:
    "Local telehealth counseling pages for Buda, Kyle, South Austin, Manchaca, Circle C, Slaughter Lane, Onion Creek, and nearby communities.",
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasPage() {
  return (
    <AuthorityHub
      title="Counseling Areas Near Buda and South Austin"
      description="Eden Counseling and Wellness is telehealth-first, but local context still matters. These pages help clients around Buda, Kyle, South Austin, and nearby communities understand whether Eden may be a fit."
      pages={areaPages}
    />
  );
}
