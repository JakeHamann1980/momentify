import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import {
  BRAND, PILLARS, PLATFORMS, MESSAGING_ANGLES, TITLE_TEMPLATES,
} from "@/lib/gtm-config";

/* ------------------------------------------------------------------ */
/*  Platform rotation (derived from config)                            */
/* ------------------------------------------------------------------ */

const PLATFORM_KEYS = PLATFORMS.map((p) => p.key);
const ANGLE_KEYS = MESSAGING_ANGLES.map((a) => a.key);

/* ------------------------------------------------------------------ */
/*  Simple UUID v4 generator                                           */
/* ------------------------------------------------------------------ */

function uuid(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/* ------------------------------------------------------------------ */
/*  Build the weighted pillar queue                                    */
/* ------------------------------------------------------------------ */

function buildPillarQueue(total: number): string[] {
  const queue: string[] = [];
  for (const p of PILLARS) {
    const count = Math.round(p.weight * total);
    for (let i = 0; i < count; i++) {
      queue.push(p.key);
    }
  }
  while (queue.length < total) queue.push(PILLARS[0].key);
  while (queue.length > total) queue.pop();
  // Shuffle (Fisher-Yates)
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  return queue;
}

function formatDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/* ------------------------------------------------------------------ */
/*  POST handler                                                       */
/* ------------------------------------------------------------------ */

export async function POST(req: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: { startDate?: string };
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  const start = body.startDate ? new Date(body.startDate) : new Date();
  start.setHours(0, 0, 0, 0);

  const TOTAL_DAYS = 14;
  const POSTS_PER_DAY = 2;
  const TOTAL_POSTS = TOTAL_DAYS * POSTS_PER_DAY;

  const pillarQueue = buildPillarQueue(TOTAL_POSTS);

  let platformIdx = 0;
  let angleIdx = 0;

  const tasks = [];

  for (let day = 0; day < TOTAL_DAYS; day++) {
    const date = new Date(start);
    date.setDate(start.getDate() + day);
    const dateStr = formatDate(date);

    for (let slot = 0; slot < POSTS_PER_DAY; slot++) {
      const taskIndex = day * POSTS_PER_DAY + slot;
      const pillarKey = pillarQueue[taskIndex];
      const platform = PLATFORM_KEYS[platformIdx % PLATFORM_KEYS.length];
      const angle = ANGLE_KEYS[angleIdx % ANGLE_KEYS.length];

      const pillarLabel = PILLARS.find((p) => p.key === pillarKey)?.label ?? pillarKey;

      const templates = TITLE_TEMPLATES[pillarKey] ?? [`Create a ${pillarLabel.toLowerCase()} post on {platform}`];
      const title = templates[taskIndex % templates.length].replace("{platform}", platform);

      tasks.push({
        id: uuid(),
        title,
        date: dateStr,
        channel: "social" as const,
        status: "todo" as const,
        platform,
        pillar: pillarKey,
        persona: angle,
        description: `[${pillarLabel}] ${platform} post using the ${angle} angle. Scheduled for ${dateStr}.`,
      });

      platformIdx++;
      angleIdx++;
    }
  }

  return new Response(JSON.stringify({ tasks }), {
    headers: { "Content-Type": "application/json" },
  });
}
