import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { TeamConfig } from "@/lib/fan-gallery/types";
import FanGalleryContent from "@/components/FanGalleryContent";

function getTeamConfigs(): TeamConfig[] {
  const filePath = path.join(process.cwd(), "src/data/fan-gallery-teams.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as TeamConfig[];
}

function getTeamBySlug(slug: string): TeamConfig | undefined {
  const teams = getTeamConfigs();
  return teams.find((t) => t.slug === slug && t.published);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ teamSlug: string }>;
}): Promise<Metadata> {
  const { teamSlug } = await params;
  const config = getTeamBySlug(teamSlug);

  if (!config) {
    return { title: "Not Found" };
  }

  const datePart = config.eventDate
    ? ` | ${new Date(config.eventDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}`
    : "";
  const locationPart = config.locationLabel ? ` | ${config.locationLabel}` : "";
  const title = `${config.eventName} - ${config.galleryTitle} | Momentify`;
  const description = `${config.gallerySubtitle}${datePart}${locationPart}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: "Momentify",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    other: {
      "theme-color": config.accentColor,
    },
    robots: { index: false, follow: false },
  };
}

export default async function TeamFanGalleryPage({
  params,
}: {
  params: Promise<{ teamSlug: string }>;
}) {
  const { teamSlug } = await params;
  const config = getTeamBySlug(teamSlug);

  if (!config) {
    notFound();
  }

  return <FanGalleryContent config={config} />;
}
