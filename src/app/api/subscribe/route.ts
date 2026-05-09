import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Newsletter not configured" }, { status: 503 });
  }

  const res = await fetch(
    "https://api.buttondown.com/v1/subscribers",
    {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        type: "regular",
        tags: ["website-signup"],
        utm_source: "website",
        utm_medium: "organic",
      }),
    }
  );

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    // Buttondown returns 400 if already subscribed — treat as success
    if (res.status === 400 && data?.email_address) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
