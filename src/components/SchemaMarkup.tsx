import type { BlogPost } from "@/content/posts";

const BASE_URL = "https://edencounselingwellness.com";
const jsonLd = (value: object) => JSON.stringify(value).replace(/</g, "\\u003c");

export function ArticleSchema({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Marissa Cooney",
      jobTitle: "LPC-Associate",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Eden Counseling and Wellness",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/eden-logo.jpeg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: [post.targetKeyword, ...post.secondaryKeywords].join(", "),
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Eden Counseling and Wellness, PLLC",
    alternateName: "Eden Counseling and Wellness",
    description:
      "Faith-informed counseling for individuals ages 10 and up and couples, offered through telehealth across Texas and in person in Buda on Saturdays.",
    url: BASE_URL,
    telephone: "+1-512-881-6560",
    email: "info@edencounselingwellness.com",
    image: `${BASE_URL}/images/eden-logo.jpeg`,
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Counseling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Individual Counseling",
            description:
              "Support for adults and adolescents navigating anxiety, depression, trauma, life transitions, and emotional wellness.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marriage Counseling",
            description:
              "Helping couples rebuild communication, deepen connection, and restore trust.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Adolescent Counseling",
            description:
              "Counseling for young people ages 10+ dealing with anxiety, academic pressure, family dynamics, and self-esteem.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Faith-Based Counseling",
            description:
              "Christian counseling integrating faith and evidence-based therapeutic approaches.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Marissa Cooney",
    jobTitle: "LPC-Associate",
    description:
      "Licensed Professional Counselor Associate providing faith-informed telehealth counseling across Texas and in-person appointments in Buda on Saturdays.",
    url: `${BASE_URL}/about`,
    image: `${BASE_URL}/images/marissa-headshot.jpg`,
    telephone: "+1-512-881-6560",
    email: "info@edencounselingwellness.com",
    worksFor: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Eden Counseling and Wellness, PLLC",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Liberty University",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "LPC-Associate",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Texas Behavioral Health Executive Council",
      },
    },
    knowsAbout: [
      "Anxiety Counseling",
      "Depression Therapy",
      "Trauma Therapy",
      "Christian Counseling",
      "Life Transitions",
      "Marriage Counseling",
      "Adolescent Counseling",
    ],
    sameAs: [
      // Verified external profiles — consolidates Marissa's digital identity
      // for Google and disambiguates from other "Marissa Cooney" therapists.
      "https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944",
      "https://www.zocdoc.com/professional/marissa-cooney-lpc-associate-671460",
      "https://openpathcollective.org/therapist/marissa-cooney/",
      "https://www.emorahealth.com/providers/profile/10867874/marissa-cooney",
      "https://www.conciergecounselingservice.com/marissa",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
    />
  );
}
