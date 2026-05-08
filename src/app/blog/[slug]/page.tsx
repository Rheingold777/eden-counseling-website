import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getAllSlugs } from "@/content/posts";
import { BlogLayout } from "@/components/BlogLayout";
import DavidAndSaulContent from "@/content/posts/david-and-saul";
import FaithBasedTherapyContent from "@/content/posts/faith-based-therapy";
import ChurchAndMentalHealthContent from "@/content/posts/church-and-mental-health";
import PhysicalWellbeingContent from "@/content/posts/physical-wellbeing";
import HowCounselingHelpsContent from "@/content/posts/how-counseling-helps";
import FirstSessionContent from "@/content/posts/first-session";

const contentMap: Record<string, React.ComponentType> = {
  "david-and-saul-mental-wellness": DavidAndSaulContent,
  "is-faith-based-therapy-right-for-you": FaithBasedTherapyContent,
  "church-and-mental-health": ChurchAndMentalHealthContent,
  "physical-health-mental-wellness": PhysicalWellbeingContent,
  "how-can-counseling-help-me": HowCounselingHelpsContent,
  "what-to-expect-first-therapy-session": FirstSessionContent,
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.targetKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["Marissa Cooney, LPC-Associate"],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 1006,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const ContentComponent = contentMap[slug];
  if (!ContentComponent) notFound();

  return (
    <BlogLayout post={post}>
      <ContentComponent />
    </BlogLayout>
  );
}
