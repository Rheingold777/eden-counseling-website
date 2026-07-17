import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRODUCTION_HOST = "edencounselingwellness.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const url = request.nextUrl.clone();

  // Allow localhost / dev
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return NextResponse.next();
  }

  // Keep one public hostname so www URLs do not compete with canonical URLs.
  if (host === `www.${PRODUCTION_HOST}`) {
    url.host = PRODUCTION_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  // If already on the production host, pass through.
  if (host === PRODUCTION_HOST) {
    return NextResponse.next();
  }

  // Vercel preview deployments (hashed URLs) — add noindex header but don't redirect,
  // so internal reviewers can still see previews.
  if (host.includes("-rheingold777s-projects.vercel.app") || host.includes("-git-")) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  // Main Vercel production URL or any other host → 301 redirect to production domain.
  // This hides the Vercel URL from search and consolidates SEO equity.
  url.host = PRODUCTION_HOST;
  url.protocol = "https:";
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  // Run on all paths except Next.js internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|css|js|woff|woff2|ttf|otf|map)$).*)"],
};
