import type { BlogPost } from "@/content/posts";

const BASE_URL = "https://eden-counseling-website.vercel.app";

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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://edencounselingandwellness.com/#organization",
    name: "Eden Counseling and Wellness, PLLC",
    alternateName: "Eden Counseling and Wellness",
    description:
      "Faith-based counseling for individuals, adolescents, and couples in Austin, Texas. Telehealth sessions available throughout Texas.",
    url: "https://edencounselingandwellness.com",
    telephone: "+1-512-543-2852",
    email: "info@edencounselingandwellness.com",
    image: "https://edencounselingandwellness.com/images/eden-logo.jpeg",
    priceRange: "$60-$100",
    paymentAccepted: "Credit Card, Debit Card",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.1695,
      longitude: -97.8169,
    },
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
              "Counseling for teens ages 13+ dealing with anxiety, academic pressure, family dynamics, and self-esteem.",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
      "Licensed Professional Counselor Associate providing faith-based counseling in Austin, TX.",
    url: "https://edencounselingandwellness.com/about",
    image: "https://edencounselingandwellness.com/images/marissa-headshot.jpg",
    telephone: "+1-512-543-2852",
    email: "info@edencounselingandwellness.com",
    worksFor: {
      "@type": "MedicalBusiness",
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
      "https://www.psychologytoday.com/us/therapists/marissa-cooney-austin-tx/1467944",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
