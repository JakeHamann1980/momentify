import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const DATA_PATH = join("/tmp", "prototype-views.json");

interface ViewData {
  [slug: string]: { views: number; lastViewed: string };
}

async function readData(): Promise<ViewData> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeData(data: ViewData) {
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug || typeof slug !== "string") {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const data = await readData();
  if (!data[slug]) {
    data[slug] = { views: 0, lastViewed: "" };
  }
  data[slug].views += 1;
  data[slug].lastViewed = new Date().toISOString();
  await writeData(data);

  return NextResponse.json({ slug, views: data[slug].views });
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}
