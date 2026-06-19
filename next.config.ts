import type { NextConfig } from "next";

// Security headers — addresses Screaming Frog warnings (missing X-Frame-Options,
// X-Content-Type-Options, Referrer-Policy, HSTS, Permissions-Policy) flagged on
// 100% of pages. These harden the site and improve Best-Practices signals without
// affecting rendering.
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Serve modern formats (Lighthouse/Screaming Frog image optimization).
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Drop the "X-Powered-By: Next.js" fingerprint.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
