import type { TeamConfig } from "./types";

export const DEFAULT_CONFIG: TeamConfig = {
  /* ── Branding ── */
  slug: "demo",
  published: true,
  accentColor: "#F25E3D",
  ctaGradient: "linear-gradient(135deg, #8F200A 0%, #F25E3D 100%)",
  iconPath: "/Momentify-Icon-Crimson.svg",

  darkTokens: {
    bg: "#0F0604",
    surface: "#1A0C08",
    surface2: "#251410",
    border: "rgba(255,255,255,0.08)",
    borderHover: "rgba(255,255,255,0.20)",
    text: "#F5EDE9",
    textMuted: "rgba(245,237,233,0.5)",
    accent: "#F25E3D",
    headerBg: "rgba(15,6,4,0.94)",
    placeholder: "#2E1A14",
    focusBorder: "rgba(242,94,61,0.5)",
    focusRing: "0 0 0 2px rgba(242,94,61,0.08)",
    outlineBorder: "rgba(255,255,255,0.15)",
    cardBg: "#1A0C08",
  },

  lightTokens: {
    bg: "#FFFFFF",
    surface: "#FFFFFF",
    surface2: "#FFF2EE",
    border: "rgba(26,4,0,0.08)",
    borderHover: "rgba(242,94,61,0.3)",
    text: "#1A0400",
    textMuted: "rgba(26,4,0,0.5)",
    accent: "#8F200A",
    headerBg: "rgba(255,255,255,0.96)",
    placeholder: "#FFE8E2",
    focusBorder: "rgba(242,94,61,0.5)",
    focusRing: "0 0 0 2px rgba(242,94,61,0.08)",
    outlineBorder: "rgba(26,4,0,0.12)",
    cardBg: "#FFFFFF",
  },

  /* ── Event / Content ── */
  eventName: "Mavs vs. Lakers",
  eventDate: "2026-03-14",
  galleryTitle: "Suite 214 Gallery",
  gallerySubtitle: "Add your photo for a chance to win 2 Club Seats.",
  locationLabel: "Suite 214",
  prizeLabel: "2 Club Seats",

  /* ── Gallery ── */
  fans: [
    { name: "Marcus W.", caption: "Best seats in the house! #Suite214 #GameDay" },
    { name: "Jordan K.", caption: "Nothing like live sports #FanGallery #VIPExperience" },
    { name: "Riley M.", caption: "Suite life #Suite214 #CourtSide" },
    { name: "Devon T.", caption: "Let's go!! #GameDay #FanZone" },
    { name: "Alyssa C.", caption: "Amazing view from up here #VIPExperience #Suite214" },
    { name: "Brandon S.", caption: "First game of the season #LiveEvent #GameDay" },
  ],
  hashtags: [
    "#Suite214",
    "#GameDay",
    "#FanGallery",
    "#Momentify",
    "#LiveEvent",
    "#VIPExperience",
    "#FanZone",
    "#CourtSide",
  ],

  /* ── Trivia ── */
  trivia: {
    question: "How many championships has this franchise won?",
    options: ["1", "2", "3", "4"],
    correctIndex: 0,
  },

  /* ── Promo (2nd+ photo modal) ── */
  promo: {
    headline: "Exclusive Fan Offer",
    description: "Get 20% off at the Team Store with code SUITE214",
    question: "Are you interested in suite packages for next season?",
    options: ["Yes, tell me more", "Maybe later", "No thanks"],
  },

  /* ── Banner ── */
  bannerText: "Powered by Momentify",
  bannerSubtext: "Create fan galleries for your events",

  /* ── Confirmation ── */
  thankYouMessages: [
    "Lookin' good!",
    "Nice photo!",
    "Nailed it!",
    "Great shot!",
    "Love it!",
    "You're in!",
  ],
};
