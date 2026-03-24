import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const KV_KEY = "prototype-views";

interface ViewEntry {
  views: number;
  lastViewed: string;
}
interface ViewData {
  [slug: string]: ViewEntry;
}

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug || typeof slug !== "string") {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  try {
    const data: ViewData = (await kv.get(KV_KEY)) || {};
    if (!data[slug]) {
      data[slug] = { views: 0, lastViewed: "" };
    }
    data[slug].views += 1;
    data[slug].lastViewed = new Date().toISOString();
    await kv.set(KV_KEY, data);
    return NextResponse.json({ slug, views: data[slug].views });
  } catch (e) {
    // Fallback for local dev without KV
    console.error("KV error:", e);
    return NextResponse.json({ slug, views: 1 });
  }
}

export async function GET() {
  try {
    const data: ViewData = (await kv.get(KV_KEY)) || {};
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({});
  }
}
