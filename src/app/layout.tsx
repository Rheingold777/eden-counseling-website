import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema, PersonSchema } from "@/components/SchemaMarkup";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edencounselingwellness.com"),
  title: {
    default: "Eden Counseling and Wellness | Christian Counseling in Austin, TX",
    template: "%s | Eden Counseling and Wellness",
  },
  description:
    "Faith-based counseling for adults, teens, and couples in Austin, TX. Telehealth therapy with Marissa Cooney, LPC-Associate. Heal, grow, begin again.",
  keywords: [
    "Christian counseling Austin TX",
    "faith-based therapy Texas",
    "telehealth counseling Austin",
    "LPC Associate Austin",
    "anxiety counseling Texas",
    "Christian therapist near me",
    "online counseling Texas",
    "Eden Counseling and Wellness",
  ],
  authors: [{ name: "Marissa Cooney, LPC-Associate" }],
  verification: {
    google: "-dX-SYVIGLSF2la7aG7u_bl8M19dgDiSQq5Nw6kfvl0",
    other: {
      "msvalidate.01": "E323B62E6D3D8C8218C5DE7A98A265A3",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eden Counseling and Wellness | Christian Counseling in Austin, TX",
    description:
      "Compassionate, faith-based counseling to help you heal from the past and begin again. Telehealth sessions available throughout Texas.",
    url: "https://edencounselingwellness.com",
    siteName: "Eden Counseling and Wellness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/eden-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Eden Counseling and Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Counseling and Wellness | Christian Counseling in Austin, TX",
    description:
      "Compassionate, faith-based counseling to help you heal from the past and begin again. Telehealth sessions available throughout Texas.",
    images: ["/images/eden-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessSchema />
        <PersonSchema />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="//cdn.callrail.com/companies/734174392/193a9a5832567f0d9e5d/12/swap.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
