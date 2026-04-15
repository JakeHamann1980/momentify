/**
 * GTM Toolkit Configuration
 *
 * This is the single source of truth for all business-specific data
 * in the GTM Toolkit. Replace the values below with your own brand,
 * personas, pillars, templates, and platform strategy.
 *
 * All GTM components import from this file — no hardcoded brand data
 * lives in the components themselves.
 */

/* ────────────────────────────────────────────────────────────
   Brand
   ──────────────────────────────────────────────────────────── */

export const BRAND = {
  name: "ACME",
  registeredName: "ACME\u00AE",
  logoEmailUrl: "https://yourdomain.com/logo-email.png",
  logoEmailWhiteUrl: "https://yourdomain.com/logo-email-white.png",
  appUrl: "https://yourdomain.com",
  primaryColor: "#ED1C24",
  headerColor: "#740F12",
  fromEmail: "noreply@yourdomain.com",
  supportEmail: "support@yourdomain.com",
  notificationSettingsUrl: "https://yourdomain.com/settings/notifications",
  /** Used in AI system prompt for content generation */
  brandVoice: `Bold, modern, community-first. Authentic tone — speak like someone who is part of the community, not marketing at it. No emojis. Never say "we" unless using the insider persona.`,
  /** One-line brand description for AI context */
  brandDescription: `ACME is a platform where users [describe your core value proposition].`,
  /** Product names referenced in content (name + trademark symbol) */
  productNames: ["ACME\u00AE"] as string[],
};

/* ────────────────────────────────────────────────────────────
   Content Pillars
   ──────────────────────────────────────────────────────────── */

export interface Pillar {
  key: string;
  label: string;
  color: string;
  weight: number; // distribution weight (should sum to 1.0)
  description: string; // used in AI prompts
  defaultTemplate: string; // email template id
  examples: string[];
}

export const PILLARS: Pillar[] = [
  {
    key: "pillar-1",
    label: "Pillar One",
    color: "#ED1C24",
    weight: 0.25,
    description: "Showcasing community content and user stories.",
    defaultTemplate: "welcome",
    examples: ["User showcases", "Before/after stories", "Interviews"],
  },
  {
    key: "pillar-2",
    label: "Pillar Two",
    color: "#00AEEF",
    weight: 0.25,
    description: "Teaching users about product features and best practices.",
    defaultTemplate: "feature-announce",
    examples: ["Feature walkthroughs", "How-to guides", "Tips & tricks"],
  },
  {
    key: "pillar-3",
    label: "Pillar Three",
    color: "#00A14B",
    weight: 0.20,
    description: "Celebrating community, culture, and the people involved.",
    defaultTemplate: "newsletter",
    examples: ["Meetups", "User stories", "Culture moments"],
  },
  {
    key: "pillar-4",
    label: "Pillar Four",
    color: "#F4B400",
    weight: 0.15,
    description: "Announcing new features, partnerships, and milestones.",
    defaultTemplate: "feature-announce",
    examples: ["New features", "Partnerships", "Milestones"],
  },
  {
    key: "pillar-5",
    label: "Pillar Five",
    color: "#7F3F98",
    weight: 0.15,
    description: "Sparking conversation with polls, questions, and challenges.",
    defaultTemplate: "re-engagement",
    examples: ["Polls", "Q&A", "Challenges"],
  },
];

/** Quick lookup: pillar key -> color */
export const PILLAR_COLOR_MAP: Record<string, string> = Object.fromEntries(
  PILLARS.map((p) => [p.label, p.color]),
);

/* ────────────────────────────────────────────────────────────
   Personas
   ──────────────────────────────────────────────────────────── */

export interface Persona {
  key: string;
  label: string;
  angle: string; // tagline / hook
  pillars: string[]; // pillar labels this persona maps to
  coreMessage: string;
  icp: string; // ideal customer profile description
  buyerPersona: string;
  proofPoints: string[];
  leadMagnets: string[];
  outreach: string[];
  salesEnablement: string[];
  kpis: string[];
  competitiveIntel: string[];
  cta: string; // call-to-action button text
  ctaUrl: string;
  defaultPillar: string; // pillar key
  defaultTemplate: string; // email template id
}

export const PERSONAS: Persona[] = [
  {
    key: "persona-1",
    label: "Primary User",
    angle: "Your tagline here.",
    pillars: ["Pillar One", "Pillar Three"],
    coreMessage: "The core value proposition for this persona.",
    icp: "25-45, description of ideal customer demographics and behaviors.",
    buyerPersona: "\"Name\" — age, description, pain points, goals.",
    proofPoints: ["Proof point 1", "Proof point 2", "Proof point 3"],
    leadMagnets: ["Lead magnet 1", "Lead magnet 2"],
    outreach: ["Channel: strategy description", "Channel: strategy description"],
    salesEnablement: ["Asset 1", "Asset 2"],
    kpis: ["KPI 1", "KPI 2", "KPI 3"],
    competitiveIntel: ["vs. competitor: differentiation"],
    cta: "Get Started",
    ctaUrl: "https://yourdomain.com/signup",
    defaultPillar: "pillar-1",
    defaultTemplate: "welcome",
  },
  // Add more personas...
];

/* ────────────────────────────────────────────────────────────
   Platforms
   ──────────────────────────────────────────────────────────── */

export interface PlatformConfig {
  key: string;
  label: string;
  icon: "camera" | "play" | "message-square"; // lucide icon name
  postsPerWeek: string;
  formats: string;
  hashtags: string;
  captionStyle: string;
}

export const PLATFORMS: PlatformConfig[] = [
  {
    key: "instagram",
    label: "Instagram",
    icon: "camera",
    postsPerWeek: "5-7",
    formats: "Feed (1080x1350, 4:5), Stories (9:16), Reels (9:16)",
    hashtags: "15-20 hashtags per post",
    captionStyle: "1-3 sentences, hook first, CTA at end",
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: "play",
    postsPerWeek: "3-5",
    formats: "Photo carousel or short video (9:16)",
    hashtags: "5-8 hashtags per post",
    captionStyle: "Short, punchy, 1-2 sentences",
  },
  {
    key: "x",
    label: "X / Twitter",
    icon: "message-square",
    postsPerWeek: "7-10",
    formats: "Text, text+image, threads",
    hashtags: "2-3 hashtags max",
    captionStyle: "Conversational, 1-2 sentences",
  },
];

/* ────────────────────────────────────────────────────────────
   Persona Messaging Angles (for AI content generation)
   ──────────────────────────────────────────────────────────── */

export interface MessagingAngle {
  key: string;
  label: string;
  description: string;
}

export const MESSAGING_ANGLES: MessagingAngle[] = [
  { key: "builder", label: "Builder", description: "Speaks as a fellow community member. Credible, hands-on, passionate." },
  { key: "insider", label: "Insider", description: "Speaks from inside the team. Sneak peeks, behind-the-scenes." },
  { key: "hype", label: "Hype", description: "High-energy, bold, confident. Gets the audience excited." },
  { key: "educator", label: "Educator", description: "Clear, helpful, knowledgeable. Breaks down features and benefits." },
  { key: "community", label: "Community", description: "Warm, inclusive, celebratory. Spotlights the audience, not the brand." },
];

/* ────────────────────────────────────────────────────────────
   Weekly Schedule Template
   ──────────────────────────────────────────────────────────── */

export interface ScheduleSlot {
  time: "AM" | "PM";
  pillar: string; // pillar label
  platforms: string[]; // platform labels
  persona: string; // short persona reference
}

export const WEEKLY_SCHEDULE: Record<string, ScheduleSlot[]> = {
  Mon: [
    { time: "AM", pillar: "Pillar One", platforms: ["Instagram", "TikTok"], persona: "Primary" },
    { time: "PM", pillar: "Pillar Two", platforms: ["X / Twitter"], persona: "Business" },
  ],
  Tue: [
    { time: "AM", pillar: "Pillar Three", platforms: ["Instagram"], persona: "Community" },
    { time: "PM", pillar: "Pillar Five", platforms: ["X / Twitter", "TikTok"], persona: "Aspiring" },
  ],
  Wed: [
    { time: "AM", pillar: "Pillar Two", platforms: ["TikTok", "Instagram"], persona: "Seller" },
    { time: "PM", pillar: "Pillar One", platforms: ["X / Twitter"], persona: "Influencer" },
  ],
  Thu: [
    { time: "AM", pillar: "Pillar Four", platforms: ["Instagram", "X / Twitter"], persona: "Partner" },
    { time: "PM", pillar: "Pillar Five", platforms: ["TikTok"], persona: "Aspiring" },
  ],
  Fri: [
    { time: "AM", pillar: "Pillar One", platforms: ["Instagram", "TikTok"], persona: "Primary" },
    { time: "PM", pillar: "Pillar Three", platforms: ["X / Twitter"], persona: "Organizer" },
  ],
  Sat: [
    { time: "AM", pillar: "Pillar Three", platforms: ["Instagram", "TikTok"], persona: "Community" },
    { time: "PM", pillar: "Pillar Five", platforms: ["X / Twitter", "TikTok"], persona: "Influencer" },
  ],
  Sun: [
    { time: "AM", pillar: "Pillar Two", platforms: ["Instagram"], persona: "Business" },
    { time: "PM", pillar: "Pillar One", platforms: ["TikTok", "X / Twitter"], persona: "Seller" },
  ],
};

/* ────────────────────────────────────────────────────────────
   Email Templates
   ──────────────────────────────────────────────────────────── */

export interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subjectDefault: string;
  bodyDefault: string;
}

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "welcome",
    name: "Welcome / Onboarding",
    description: "First touch for new signups or warm leads",
    subjectDefault: "Welcome to " + BRAND.registeredName + " | {{persona_angle}}",
    bodyDefault: `Hey {{first_name}},\n\n{{core_message}}\n\n${BRAND.name} is the platform built for [your community description].\n\nHere's how to get started:\n\n1. Create your profile\n2. [Step 2]\n3. [Step 3]\n\nWe built this for people like you. Let's go.\n\nThe ${BRAND.name} Team`,
  },
  {
    id: "feature-announce",
    name: "Feature Announcement",
    description: "Announce a new feature or product update",
    subjectDefault: "New on " + BRAND.registeredName + " | {{feature_name}}",
    bodyDefault: `Hey {{first_name}},\n\nWe just shipped something you're going to love: {{feature_name}}.\n\n{{feature_description}}\n\nAs a {{persona_label}}, this means {{persona_benefit}}.\n\nCheck it out now. It's live in your dashboard.\n\nThe ${BRAND.name} Team`,
  },
  {
    id: "event-invite",
    name: "Event Invitation",
    description: "Invite to an event",
    subjectDefault: "You're invited: {{event_name}}",
    bodyDefault: `Hey {{first_name}},\n\nYou're invited to {{event_name}}, {{event_date}} at {{event_location}}.\n\n{{event_description}}\n\nRegistration is open now. Tap below to reserve your spot.\n\nThe ${BRAND.name} Team`,
  },
  {
    id: "re-engagement",
    name: "Re-engagement",
    description: "Win back inactive users or cold leads",
    subjectDefault: "We miss you, {{first_name}}",
    bodyDefault: `Hey {{first_name}},\n\nIt's been a while since you've been on ${BRAND.name}, and a lot has changed.\n\n{{core_message}}\n\nYour profile is still there, waiting. Come back and see what's new.\n\nThe ${BRAND.name} Team`,
  },
  {
    id: "newsletter",
    name: "Weekly / Monthly Digest",
    description: "Recurring content digest tied to a pillar",
    subjectDefault: "This week on " + BRAND.registeredName + " | {{pillar_label}}",
    bodyDefault: `Hey {{first_name}},\n\nHere's what's happening in the ${BRAND.name} community this week:\n\n{{digest_content}}\n\nSee you out there.\n\nThe ${BRAND.name} Team`,
  },
  {
    id: "custom",
    name: "Custom / Freeform",
    description: "Write your own from scratch",
    subjectDefault: "",
    bodyDefault: "",
  },
];

/** Variables available for email template interpolation */
export const TEMPLATE_VARIABLES = [
  { key: "first_name", label: "First Name", placeholder: "there", auto: false },
  { key: "persona_label", label: "Persona Name", placeholder: "", auto: true },
  { key: "persona_angle", label: "Persona Angle", placeholder: "", auto: true },
  { key: "core_message", label: "Core Message", placeholder: "", auto: true },
  { key: "feature_name", label: "Feature Name", placeholder: "New Feature", auto: false },
  { key: "feature_description", label: "Feature Description", placeholder: "A brief description...", auto: false },
  { key: "persona_benefit", label: "Persona-specific Benefit", placeholder: "you can now...", auto: false },
  { key: "event_name", label: "Event Name", placeholder: "Community Meetup", auto: false },
  { key: "event_date", label: "Event Date", placeholder: "April 12, 2026", auto: false },
  { key: "event_location", label: "Event Location", placeholder: "Downtown Convention Center", auto: false },
  { key: "event_description", label: "Event Description", placeholder: "Join us for...", auto: false },
  { key: "digest_content", label: "Digest Content", placeholder: "- Update 1\n- Update 2\n- Update 3", auto: false },
  { key: "pillar_label", label: "Content Pillar", placeholder: "", auto: true },
];

/* ────────────────────────────────────────────────────────────
   Calendar Channels
   ──────────────────────────────────────────────────────────── */

export interface CalendarChannel {
  key: string;
  label: string;
  color: string;
  bg: string;
}

export const CALENDAR_CHANNELS: CalendarChannel[] = [
  { key: "social", label: "Social", color: "#1A73E8", bg: "#E8F0FE" },
  { key: "email", label: "Email", color: "#B36D00", bg: "#FEF7E0" },
  { key: "partnerships", label: "Partnerships", color: "#7F3F98", bg: "#F3E8FF" },
  { key: "content", label: "Content", color: "#00A14B", bg: "#E6F4EA" },
  { key: "product", label: "Product", color: "#ED1C24", bg: "#FEE8E8" },
  { key: "events", label: "Events", color: "#F4B400", bg: "#FEF7E0" },
  { key: "pr", label: "PR", color: "#00AEEF", bg: "#E0F4FD" },
];

/* ────────────────────────────────────────────────────────────
   Pre-launch Calendar Tasks (optional seed data)
   ──────────────────────────────────────────────────────────── */

export interface CalendarTask {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  channel: string;
  status: "todo" | "in-progress" | "done";
  description?: string;
}

export const SEED_TASKS: CalendarTask[] = [
  // Replace with your own pre-launch calendar tasks
  // { id: "pl-01", title: "[IG] Teaser Post", date: "2026-04-07", channel: "social", status: "todo", description: "Instagram Feed" },
];

/* ────────────────────────────────────────────────────────────
   Pipeline Seed Data (optional)
   ──────────────────────────────────────────────────────────── */

export interface PipelineCard {
  id: string;
  platform: string;
  pillar: string;
  title: string;
  caption: string;
  persona: string;
  scheduledAt?: string;
  column: "draft" | "review" | "scheduled" | "published";
}

export const SEED_PIPELINE_CARDS: PipelineCard[] = [
  // Replace with your own pipeline seed cards
];

/* ────────────────────────────────────────────────────────────
   AI Content Generation — Fallback Pools
   ──────────────────────────────────────────────────────────── */

/** Fallback captions per pillar key when AI is unavailable */
export const FALLBACK_CAPTIONS: Record<string, string[]> = Object.fromEntries(
  PILLARS.map((p) => [p.key, [`Great content about ${p.label}. Stay tuned for more.`]]),
);

/** Fallback hashtags per platform -> pillar */
export const FALLBACK_HASHTAGS: Record<string, Record<string, string[]>> = {
  instagram: Object.fromEntries(
    PILLARS.map((p) => [p.key, [`#${BRAND.name}`, `#${p.label.replace(/\s+/g, "")}`]]),
  ),
  tiktok: { default: [`#${BRAND.name}`, "#Community"] },
  x: { default: [`#${BRAND.name}`] },
};

/** Title templates per pillar key for schedule generation */
export const TITLE_TEMPLATES: Record<string, string[]> = Object.fromEntries(
  PILLARS.map((p) => [
    p.key,
    [
      `Create a ${p.label.toLowerCase()} post on {platform}`,
      `Share ${p.label.toLowerCase()} content on {platform}`,
    ],
  ]),
);
