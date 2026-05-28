import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorityPageTemplate } from "@/components/AuthorityPage";
import { getAuthorityPage, getAuthorityPath, therapyPages } from "@/content/authorityPages";

export function generateStaticParams() {
  return therapyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAuthorityPage("therapy", slug);
  if (!page) return {};

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: {
      canonical: getAuthorityPath(page),
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: getAuthorityPath(page),
      images: [
        {
          url: "/images/eden-logo.jpeg",
          width: 1200,
          height: 630,
          alt: "Eden Counseling and Wellness",
        },
      ],
    },
  };
}

export default async function TherapyTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAuthorityPage("therapy", slug);
  if (!page) notFound();

  return <AuthorityPageTemplate page={page} />;
}
