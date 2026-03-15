/* ── Fan Gallery Multi-Team Type Definitions ── */

/** Theme tokens for dark or light mode rendering */
export interface FanGalleryThemeTokens {
  bg: string;
  surface: string;
  surface2: string;
  border: string;
  borderHover: string;
  text: string;
  textMuted: string;
  accent: string;
  headerBg: string;
  placeholder: string;
  focusBorder: string;
  focusRing: string;
  outlineBorder: string;
  cardBg: string;
}

/** A single fan entry in the gallery */
export interface FanEntry {
  name: string;
  caption: string;
  photoUrl?: string;
}

/** Trivia giveaway configuration */
export interface TriviaConfig {
  question: string;
  options: string[];
  correctIndex: number;
}

/** Promo modal shown after 2nd+ photo submissions */
export interface PromoConfig {
  headline: string;
  description: string;
  question: string;
  options: string[];
}

/** Full configuration for a team/event fan gallery */
export interface TeamConfig {
  /* ── Branding ── */
  slug: string;
  published: boolean;
  accentColor: string;
  ctaGradient: string;
  iconPath: string;
  darkTokens: FanGalleryThemeTokens;
  lightTokens: FanGalleryThemeTokens;

  /* ── Event / Content ── */
  eventName: string;
  eventDate: string;
  galleryTitle: string;
  gallerySubtitle: string;
  locationLabel: string;
  prizeLabel: string;

  /* ── Gallery ── */
  fans: FanEntry[];
  hashtags: string[];

  /* ── Trivia ── */
  trivia: TriviaConfig;

  /* ── Promo (2nd+ photo modal) ── */
  promo: PromoConfig;

  /* ── Banner ── */
  bannerText: string;
  bannerSubtext: string;

  /* ── Confirmation ── */
  thankYouMessages: string[];
}
