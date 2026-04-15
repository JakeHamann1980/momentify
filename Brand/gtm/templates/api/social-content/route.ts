import { NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import Anthropic from "@anthropic-ai/sdk";
import {
  BRAND, PILLARS, PLATFORMS, MESSAGING_ANGLES,
  FALLBACK_CAPTIONS, FALLBACK_HASHTAGS,
} from "@/lib/gtm-config";

/* ------------------------------------------------------------------ */
/*  Derived lookups                                                    */
/* ------------------------------------------------------------------ */

const PLATFORM_SPECS: Record<string, { hashtagCount: string; captionStyle: string }> = Object.fromEntries(
  PLATFORMS.map((p) => [p.key, { hashtagCount: p.hashtags, captionStyle: p.captionStyle }]),
);

const PILLAR_CONTEXT: Record<string, string> = Object.fromEntries(
  PILLARS.map((p) => [p.key, p.description]),
);

const ANGLE_DESCRIPTIONS: Record<string, string> = Object.fromEntries(
  MESSAGING_ANGLES.map((a) => [a.key, a.description]),
);

/* ------------------------------------------------------------------ */
/*  Rule-based fallback generator                                      */
/* ------------------------------------------------------------------ */

function generateRuleBased(platform: string, pillar: string) {
  const captions = FALLBACK_CAPTIONS[pillar] ?? Object.values(FALLBACK_CAPTIONS)[0] ?? ["Great content. Stay tuned."];
  const caption = captions[Math.floor(Math.random() * captions.length)];

  const platformTags = FALLBACK_HASHTAGS[platform] ?? FALLBACK_HASHTAGS[Object.keys(FALLBACK_HASHTAGS)[0]];
  const tagPool = platformTags[pillar] ?? platformTags["default"] ?? [`#${BRAND.name}`];
  const hashtags = tagPool;

  return {
    caption,
    hashtags,
    tags: [] as string[],
    engagementPlan: "Engage with comments within the first hour. Repost the best responses.",
  };
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

  let body: {
    platform?: string;
    pillar?: string;
    persona?: string;
    topic?: string;
  };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const platform = (body.platform ?? PLATFORMS[0].key).toLowerCase();
  const pillar = (body.pillar ?? PILLARS[0].key).toLowerCase();
  const persona = (body.persona ?? MESSAGING_ANGLES[0].key).toLowerCase();
  const topic = body.topic ?? null;

  const platformSpec = PLATFORM_SPECS[platform] ?? Object.values(PLATFORM_SPECS)[0];
  const pillarContext = PILLAR_CONTEXT[pillar] ?? PILLARS[0].description;
  const personaAngle = ANGLE_DESCRIPTIONS[persona] ?? MESSAGING_ANGLES[0].description;

  // Try AI generation first
  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

      const productList = BRAND.productNames.join(", ");
      const extras: string[] = [];
      if (topic) extras.push(`Topic: ${topic}`);

      const message = await anthropic.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 600,
        messages: [
          {
            role: "user",
            content: `You are a social media strategist for ${BRAND.registeredName}. ${BRAND.brandDescription}

Generate a social media post for the following parameters:

Platform: ${platform}
- Caption style: ${platformSpec.captionStyle}
- Hashtag count: ${platformSpec.hashtagCount}

Content pillar: ${pillar}
- Context: ${pillarContext}

Persona / messaging angle: ${persona}
- Angle: ${personaAngle}

${extras.length > 0 ? `Additional context:\n${extras.join("\n")}` : ""}

Brand voice guidelines:
${BRAND.brandVoice}
- Use product names correctly: ${productList}

Respond in JSON only with this exact structure:
{
  "caption": "the caption text",
  "hashtags": ["#${BRAND.name}", "#tag2", ...],
  "tags": ["@suggested_account_1", ...],
  "engagementPlan": "1-2 sentence plan for post-publish engagement"
}`,
          },
        ],
      });

      const text = message.content[0].type === "text" ? message.content[0].text : "";
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed.caption && Array.isArray(parsed.hashtags)) {
          return new Response(
            JSON.stringify({
              caption: parsed.caption,
              hashtags: parsed.hashtags,
              tags: parsed.tags ?? [],
              engagementPlan: parsed.engagementPlan ?? "",
            }),
            { headers: { "Content-Type": "application/json" } },
          );
        }
      }
    } catch {
      // Fall through to rule-based
    }
  }

  // Rule-based fallback
  const result = generateRuleBased(platform, pillar);
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}
