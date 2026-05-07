import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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
  title: {
    default: "Eden Counseling and Wellness | Christian Counseling in Austin, TX",
    template: "%s | Eden Counseling and Wellness",
  },
  description:
    "Faith-based counseling for individuals, adolescents, and couples in Austin, Texas. Marissa Cooney, LPC-Associate, offers compassionate telehealth counseling to help you heal, grow, and begin again.",
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
  openGraph: {
    title: "Eden Counseling and Wellness | Christian Counseling in Austin, TX",
    description:
      "Compassionate, faith-based counseling to help you heal from the past and begin again. Telehealth sessions available throughout Texas.",
    url: "https://edencounselingandwellness.com",
    siteName: "Eden Counseling and Wellness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <LocalBusinessSchema />
        <PersonSchema />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
