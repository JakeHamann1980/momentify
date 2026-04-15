# Momentify Design System

**Version** 1.0.0
**Products** Momentify Web | Momentify Explorer (iPad) | Momentify Explorer (Phone) | Momentify Explorer (Touch Device)
**Accessibility** WCAG AA
**Last Updated** 2026-03-08

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Foundations](#2-foundations)
3. [Design Tokens (JSON)](#3-design-tokens)
4. [Core UI Components](#4-core-ui-components)
5. [Design Patterns](#5-design-patterns)
6. [Dos and Don'ts](#6-dos-and-donts)
7. [Developer Handoff](#7-developer-handoff)

---

## 1. Design Principles

### 1.1 Clarity Over Cleverness

Every element serves a purpose. Strip away decoration that does not aid comprehension. Data-heavy interfaces (ROX scores, scan analytics, lead capture forms) demand immediate legibility. When in doubt, simplify.

### 1.2 Outcome-Focused

Design for the result the user needs, not the feature list. Lead with the metric, the next action, or the insight. Surfaces should answer "what happened" and "what should I do next" before "how does this work."

### 1.3 Progressive Disclosure

Show only what matters at each level. The web app dashboard surfaces summary metrics first; drill-downs reveal detail. The Explorer iPad app shows the booth-level view; a tap reveals individual attendee data. Respect the user's attention budget.

### 1.4 Touch-First, Pointer-Enhanced

All four products must work with touch input. The iPad, Phone, and Touch Device apps are touch-primary. The Web app is pointer-primary but must support touch. Design hit targets, spacing, and interactions accordingly (minimum 44px touch targets).

### 1.5 Consistent Motion, Not Constant Motion

Animation communicates state changes, guides attention, and reinforces spatial relationships. It never decorates for its own sake. Use the shared motion tokens (duration, easing) so transitions feel unified across products. Respect `prefers-reduced-motion`.

### 1.6 Accessible by Default

Accessibility is not a layer added after visual design. Color contrast, focus indicators, semantic markup, screen reader labels, and keyboard navigation are built into every component from the start. Target WCAG AA (4.5:1 text, 3:1 UI elements).

### 1.7 Brand Coherence Across Surfaces

The depth gradient, teal accent, Inter typeface, and solution-color system must be recognizable whether the user is on a 27" monitor or a 10.9" iPad. Adapt density and layout, not identity.

---

## 2. Foundations

### 2.1 Color System

#### 2.1.1 Brand Palette

| Token | Hex | Role |
|-------|-----|------|
| `cyan` | `#0CF4DF` | Primary accent (dark surfaces), data highlights |
| `teal` | `#00BBA5` | Eyebrows, links, interactive accents |
| `blue` | `#254FE5` | Action gradient endpoint, links on light surfaces |
| `deep-blue` | `#1F3395` | Primary accent (light surfaces), gradient midpoint |
| `cobalt` | `#3257D9` | Secondary blue, icon fills |
| `navy` | `#1A2E73` | Dark section tones, gradient anchor |
| `deep-navy` | `#061341` | Dark text color, headings on light backgrounds |
| `midnight` | `#0B0B3C` | Deepest background, gradient core |
| `plum` | `#7C316D` | Depth gradient warm anchor |

#### 2.1.2 Solution Vertical Colors

Each solution vertical has a primary color, a dark-background gradient, and a light-background gradient.

| Vertical | Primary | Dark Gradient | Light Gradient |
|----------|---------|---------------|----------------|
| Trade Shows | `#6B21D4` (violet) | `135deg, #2D0770 → #4A0FA8 55% → #9B5FE8` | `145deg, #F8F4FF → #EDE6FF` |
| Tech Recruiting | `#5FD9C2` (sol-teal) | `135deg, #040E28 → #1A8A76 55% → #5FD9C2` | `145deg, #E8FDF8 → #F0FFFC` |
| Field Sales | `#F2B33D` (amber) | `135deg, #1A0A00 → #A86B00 55% → #F2B33D` | `145deg, #FFF9E8 → #FFFCF0` |
| Facilities | `#3A2073` (indigo) | `135deg, #0D0820 → #3A2073 55% → #5B4499` | `145deg, #EEF0FF → #F4F5FF` |
| Venues & Events | `#F25E3D` (crimson) | `135deg, #1A0400 → #8F200A 55% → #F25E3D` | `145deg, #FFF2EE → #FFF7F5` |

#### 2.1.3 Neutral Palette

| Token | Hex | Role |
|-------|-----|------|
| `light-bg` | `#F8F9FB` | Page background (light mode) |
| `light-blue` | `#EEF3FD` | Section background alternate |
| `card-dark` | `#0F1629` | Card background on dark surfaces |
| `charcoal` | `#181818` | Body text on light surfaces |
| `gray-body` | `#555555` | Secondary body text |
| `white` | `#FFFFFF` | Card backgrounds, text on dark |

#### 2.1.4 Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#0CF4DF` | Positive state, elite ROX |
| `success-muted` | `#5FD9C2` | High ROX tier |
| `warning` | `#F2B33D` | Optimization needed, caution |
| `error` | `#E5484D` | Critical state, destructive actions, form errors |
| `info` | `#3257D9` | Informational, neutral callouts |

#### 2.1.5 Gradient Definitions

| Name | Value | Usage |
|------|-------|-------|
| Action | `linear-gradient(135deg, #0CF4DF, #254FE5)` | Primary CTA backgrounds, accent text |
| Brand | `linear-gradient(135deg, #00BBA5, #254FE5)` | Softer action gradient for light backgrounds |
| Hero | `linear-gradient(135deg, #0CF4DF, #5BA8F5)` | Hero headline gradient text |
| Depth | `linear-gradient(180deg, #7C316D 0%, #0B0B3C 45%, #1A2E73 100%)` | Dark section backgrounds |
| Depth Reversed | `linear-gradient(0deg, #7C316D 0%, #0B0B3C 45%, #1A2E73 100%)` | Inverted dark sections |

#### 2.1.6 Dark Mode Palette

| Token | Dark Value | Light Value |
|-------|------------|-------------|
| `--bg` | `#07081F` | `#F4F5FA` |
| `--surface` | `#0F1035` | `#FFFFFF` |
| `--surface-2` | `#161840` | `#ECEEF6` |
| `--border` | `rgba(255,255,255,0.08)` | `rgba(11,11,60,0.1)` |
| `--text` | `#E8EAF6` | `#0B0B3C` |
| `--text-muted` | `rgba(232,234,246,0.5)` | `rgba(11,11,60,0.5)` |
| `--accent` | `#0CF4DF` | `#1F3395` |
| `--header-bg` | `rgba(7,8,31,0.94)` | `rgba(244,245,250,0.96)` |

#### 2.1.7 Contrast Ratios (WCAG AA)

| Pair | Ratio | Pass |
|------|-------|------|
| `#FFFFFF` on `#061341` | 16.5:1 | AAA |
| `#FFFFFF` on `#0B0B3C` | 17.8:1 | AAA |
| `#061341` on `#F8F9FB` | 15.2:1 | AAA |
| `#181818` on `#FFFFFF` | 16.8:1 | AAA |
| `#00BBA5` on `#FFFFFF` | 3.1:1 | AA (large text only) |
| `#00BBA5` on `#061341` | 5.3:1 | AA |
| `#0CF4DF` on `#0B0B3C` | 10.1:1 | AAA |
| `#E5484D` on `#FFFFFF` | 4.6:1 | AA |
| `#555555` on `#FFFFFF` | 7.5:1 | AAA |

**Rules**
- Teal (`#00BBA5`) on white is AA for large text (18px+) only. For small text on light backgrounds, use `#061341` or `#181818`.
- Cyan (`#0CF4DF`) is reserved for dark backgrounds where it exceeds AAA.
- Never place gradient text on gradient backgrounds.
- Muted text uses 50-65% opacity of the base text color. Verify contrast on every background.

---

### 2.2 Typography

#### 2.2.1 Typeface

**Primary**: Inter (Google Fonts)
Weights loaded: 100, 300, 400, 500, 600, 700, 800

**Secondary** (available, use sparingly): Archivo, Manrope, Space Grotesk

Inter is used for all UI text across all four products. Secondary typefaces are loaded but reserved for future marketing experiments only.

#### 2.2.2 Type Scale

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display | `clamp(36px, 5vw, 72px)` | 500 | 1.05 | -0.025em | Hero headlines |
| H1 | `clamp(28px, 4.5vw, 52px)` | 500 | 1.1 | -0.02em | Page/section headlines |
| H2 | `clamp(24px, 3.5vw, 40px)` | 500 | 1.15 | -0.02em | Sub-section headlines |
| H3 | `24px` | 500 | 1.25 | -0.015em | Card headlines, feature titles |
| H4 | `20px` | 600 | 1.3 | -0.01em | Small section heads |
| H5 | `16px` | 600 | 1.35 | 0 | Label headings, list titles |
| Body Large | `16px` | 400 | 1.7 | 0 | Lead paragraphs, descriptions |
| Body | `15px` | 400 | 1.6 | 0 | Default body text |
| Body Small | `14px` | 400 | 1.6 | 0 | Secondary body, card text |
| Caption | `13px` | 400 | 1.5 | 0 | Metadata, footer links |
| Eyebrow | `12px` | 600 | 1.35 | 0.14em | Section labels (uppercase) |
| Label | `11px` | 600 | 1.35 | 0.10em | Tags, badges (uppercase) |
| Micro | `10px` | 600 | 1.35 | 0.08em | Tiny labels, UI chrome |

#### 2.2.3 Typography Rules

- Headlines always use weight **500** (medium). Never bold (700) for headlines.
- Subheads always use weight **300** (light).
- Eyebrows are always uppercase with expanded letter-spacing and color `#00BBA5`.
- Apply `text-wrap: pretty` and `widows: 2; orphans: 2` to all text elements.
- Enable font smoothing: `-webkit-font-smoothing: antialiased`.
- Gradient text is restricted to Display and H1 levels on dark backgrounds only.

#### 2.2.4 Responsive Typography

| Breakpoint | Display | H1 | H2 | Body |
|------------|---------|-----|-----|------|
| < 640px | 36px | 28px | 24px | 15px |
| 640-1024px | 48px | 36px | 32px | 15px |
| > 1024px | 72px | 52px | 40px | 15px |

Use `clamp()` for fluid scaling between breakpoints. Body text remains fixed at 15px across all breakpoints.

---

### 2.3 Layout

#### 2.3.1 Grid System

**12-column grid** with responsive gutters.

| Property | Mobile (< 640px) | Tablet (640-1023px) | Desktop (1024px+) |
|----------|-------------------|---------------------|---------------------|
| Columns | 4 | 8 | 12 |
| Gutter | 16px | 24px | 24px |
| Margin | 24px (px-6) | 24px (px-6) | 48px (px-12) |
| Max Width | 100% | 100% | 1280px (max-w-7xl) |

#### 2.3.2 Breakpoints

| Name | Value | Tailwind | Usage |
|------|-------|----------|-------|
| Mobile | 0-639px | default | Single column, stacked layouts |
| Tablet | 640-1023px | `sm:` | 2-column grids, expanded nav |
| Desktop | 1024-1279px | `lg:` | Full nav, side-by-side layouts |
| Wide | 1280px+ | `xl:` | Max-width container, comfortable spacing |

#### 2.3.3 Container Widths

```
Standard:  mx-auto max-w-7xl px-6 lg:px-12    (1280px max)
Narrow:    mx-auto max-w-3xl px-6              (768px max, for long-form text)
Wide:      mx-auto max-w-screen-xl px-6 lg:px-16  (1280px max, wider margins)
Full:      w-full px-0                         (Edge-to-edge sections)
```

#### 2.3.4 Common Layout Patterns

```
Split (50/50):     grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
Thirds:            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8
Quarters:          grid grid-cols-2 lg:grid-cols-4 gap-6
Fifths:            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4
Sidebar:           grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8
Content + Aside:   grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12
```

---

### 2.4 Spacing

#### 2.4.1 Base Unit

**8px** base unit. All spacing values are multiples of 4px, with 8px as the primary increment.

#### 2.4.2 Spacing Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `space-0` | 0px | `0` | Reset |
| `space-1` | 4px | `1` | Tight inner gaps, icon-to-text |
| `space-2` | 8px | `2` | Inline element spacing |
| `space-3` | 12px | `3` | Compact component padding |
| `space-4` | 16px | `4` | Standard inner padding |
| `space-5` | 20px | `5` | Component internal spacing |
| `space-6` | 24px | `6` | Card padding, section margin mobile |
| `space-7` | 28px | `7` | Extended padding |
| `space-8` | 32px | `8` | Large component spacing |
| `space-10` | 40px | `10` | Section horizontal padding |
| `space-12` | 48px | `12` | Section gaps |
| `space-16` | 64px | `16` | Section vertical padding (mobile) |
| `space-20` | 80px | `20` | Section vertical padding (tablet) |
| `space-24` | 96px | `24` | Section vertical padding (desktop) |

#### 2.4.3 Section Spacing Pattern

```
Standard section:     py-16 sm:py-20 lg:py-24
Compact section:      py-12 sm:py-16 lg:py-20
Tight section:        py-8 sm:py-12 lg:py-16
Section gap (inner):  gap-12 lg:gap-16
Header to content:    mb-12 lg:mb-16
```

#### 2.4.4 Touch Targets

| Product | Minimum Size | Recommended Size |
|---------|-------------|-----------------|
| Web App | 36px | 44px |
| iPad App | 44px | 48px |
| Phone App | 44px | 48px |
| Touch Device | 48px | 56px |

---

### 2.5 Iconography

All icons are inline SVG. No external icon library.

| Property | Value |
|----------|-------|
| Default size | 24px |
| Small size | 16px / 20px |
| Large size | 32px / 36px |
| Stroke width | 2px (outline style) |
| Color | `currentColor` (inherits text color) |
| Touch target padding | 8px minimum around icon |

---

### 2.6 Elevation & Shadows

| Level | Value | Usage |
|-------|-------|-------|
| `elevation-0` | none | Flat elements, inline content |
| `elevation-1` | `0 1px 0 rgba(0,0,0,0.06)` | Subtle dividers, scrolled navbar |
| `elevation-2` | `0 4px 12px rgba(0,0,0,0.06)` | Resting cards |
| `elevation-3` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Elevated cards (`shadow-lg`) |
| `elevation-4` | `0 20px 25px -5px rgba(0,0,0,0.1)` | Modals, dropdowns (`shadow-xl`) |
| `elevation-overlay` | `0 25px 50px -12px rgba(0,0,0,0.25)` | Full overlays (`shadow-2xl`) |

---

### 2.7 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Tags, badges, small chips |
| `radius-md` | 6px | Buttons, form inputs |
| `radius-lg` | 8px | Small cards, dropdowns |
| `radius-xl` | 12px | Cards, modals |
| `radius-2xl` | 16px | Large cards, hero containers |
| `radius-full` | 9999px | Pills, avatars, circular buttons |

---

### 2.8 Motion

#### 2.8.1 Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 100ms | Micro-interactions (opacity toggles) |
| `duration-fast` | 150ms | Button hovers, focus rings |
| `duration-normal` | 220ms | Standard transitions |
| `duration-moderate` | 350ms | Panel reveals, tab switches |
| `duration-slow` | 500ms | Page-level transitions, fadeUp entrance |
| `duration-slower` | 700ms | Complex orchestrated sequences |

#### 2.8.2 Easing

| Token | Value | Usage |
|-------|-------|-------|
| `ease-default` | `ease` | General transitions |
| `ease-out` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements entering view |
| `ease-in` | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements leaving view |
| `ease-in-out` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Continuous/looping animations |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful overshoot (gauge needle) |

#### 2.8.3 Standard Animation Variants (Framer Motion)

```typescript
// Stagger container for section headers
const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Stagger container for card grids
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Standard entrance animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
```

#### 2.8.4 Viewport Trigger

```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
  variants={headerVariants}
/>
```

- `once: true` ensures animations fire only on first scroll into view.
- `amount: 0.15` triggers when 15% of the element is visible.

#### 2.8.5 Reduced Motion

All animated components must respect `prefers-reduced-motion: reduce`. When active:
- Disable transform-based animations (translate, scale, rotate).
- Allow opacity transitions at `duration-fast` (150ms).
- Disable infinite/looping animations entirely.
- Disable parallax and scroll-linked motion.

---

## 3. Design Tokens

### 3.1 Token File (JSON)

```json
{
  "$schema": "https://design-tokens.org/schema.json",
  "color": {
    "brand": {
      "cyan":       { "value": "#0CF4DF", "type": "color", "description": "Primary accent on dark surfaces" },
      "teal":       { "value": "#00BBA5", "type": "color", "description": "Eyebrows, interactive accents" },
      "blue":       { "value": "#254FE5", "type": "color", "description": "Action gradient endpoint" },
      "deep-blue":  { "value": "#1F3395", "type": "color", "description": "Accent on light surfaces" },
      "cobalt":     { "value": "#3257D9", "type": "color", "description": "Secondary blue" },
      "navy":       { "value": "#1A2E73", "type": "color", "description": "Dark section tones" },
      "deep-navy":  { "value": "#061341", "type": "color", "description": "Dark text on light backgrounds" },
      "midnight":   { "value": "#0B0B3C", "type": "color", "description": "Deepest background" },
      "plum":       { "value": "#7C316D", "type": "color", "description": "Warm gradient anchor" }
    },
    "solution": {
      "violet":     { "value": "#6B21D4", "type": "color", "description": "Trade Shows" },
      "sol-teal":   { "value": "#5FD9C2", "type": "color", "description": "Tech Recruiting" },
      "amber":      { "value": "#F2B33D", "type": "color", "description": "Field Sales" },
      "indigo":     { "value": "#3A2073", "type": "color", "description": "Facilities" },
      "crimson":    { "value": "#F25E3D", "type": "color", "description": "Venues & Events" }
    },
    "neutral": {
      "white":      { "value": "#FFFFFF", "type": "color" },
      "light-bg":   { "value": "#F8F9FB", "type": "color", "description": "Page background light" },
      "light-blue": { "value": "#EEF3FD", "type": "color", "description": "Alternate section bg" },
      "card-dark":  { "value": "#0F1629", "type": "color", "description": "Card bg on dark surfaces" },
      "charcoal":   { "value": "#181818", "type": "color", "description": "Body text" },
      "gray-body":  { "value": "#555555", "type": "color", "description": "Secondary body text" },
      "black":      { "value": "#000000", "type": "color" }
    },
    "semantic": {
      "success":       { "value": "#0CF4DF", "type": "color" },
      "success-muted": { "value": "#5FD9C2", "type": "color" },
      "warning":       { "value": "#F2B33D", "type": "color" },
      "error":         { "value": "#E5484D", "type": "color" },
      "info":          { "value": "#3257D9", "type": "color" }
    },
    "dark-mode": {
      "bg":         { "value": "#07081F", "type": "color" },
      "surface":    { "value": "#0F1035", "type": "color" },
      "surface-2":  { "value": "#161840", "type": "color" },
      "border":     { "value": "rgba(255,255,255,0.08)", "type": "color" },
      "text":       { "value": "#E8EAF6", "type": "color" },
      "text-muted": { "value": "rgba(232,234,246,0.5)", "type": "color" },
      "accent":     { "value": "#0CF4DF", "type": "color" },
      "header-bg":  { "value": "rgba(7,8,31,0.94)", "type": "color" }
    },
    "light-mode": {
      "bg":         { "value": "#F4F5FA", "type": "color" },
      "surface":    { "value": "#FFFFFF", "type": "color" },
      "surface-2":  { "value": "#ECEEF6", "type": "color" },
      "border":     { "value": "rgba(11,11,60,0.1)", "type": "color" },
      "text":       { "value": "#0B0B3C", "type": "color" },
      "text-muted": { "value": "rgba(11,11,60,0.5)", "type": "color" },
      "accent":     { "value": "#1F3395", "type": "color" },
      "header-bg":  { "value": "rgba(244,245,250,0.96)", "type": "color" }
    }
  },
  "gradient": {
    "action":         { "value": "linear-gradient(135deg, #0CF4DF 0%, #254FE5 100%)", "type": "gradient" },
    "brand":          { "value": "linear-gradient(135deg, #00BBA5 0%, #254FE5 100%)", "type": "gradient" },
    "hero":           { "value": "linear-gradient(135deg, #0CF4DF, #5BA8F5)", "type": "gradient" },
    "depth":          { "value": "linear-gradient(180deg, #7C316D 0%, #0B0B3C 45%, #1A2E73 100%)", "type": "gradient" },
    "depth-reversed": { "value": "linear-gradient(0deg, #7C316D 0%, #0B0B3C 45%, #1A2E73 100%)", "type": "gradient" }
  },
  "typography": {
    "font-family": {
      "primary":   { "value": "'Inter', sans-serif", "type": "fontFamily" },
      "secondary": { "value": "'Archivo', sans-serif", "type": "fontFamily" },
      "tertiary":  { "value": "'Manrope', sans-serif", "type": "fontFamily" }
    },
    "font-weight": {
      "thin":       { "value": 100, "type": "fontWeight" },
      "light":      { "value": 300, "type": "fontWeight" },
      "regular":    { "value": 400, "type": "fontWeight" },
      "medium":     { "value": 500, "type": "fontWeight" },
      "semibold":   { "value": 600, "type": "fontWeight" },
      "bold":       { "value": 700, "type": "fontWeight" },
      "extrabold":  { "value": 800, "type": "fontWeight" }
    },
    "font-size": {
      "micro":      { "value": "10px", "type": "fontSize" },
      "label":      { "value": "11px", "type": "fontSize" },
      "eyebrow":    { "value": "12px", "type": "fontSize" },
      "caption":    { "value": "13px", "type": "fontSize" },
      "body-sm":    { "value": "14px", "type": "fontSize" },
      "body":       { "value": "15px", "type": "fontSize" },
      "body-lg":    { "value": "16px", "type": "fontSize" },
      "h5":         { "value": "16px", "type": "fontSize" },
      "h4":         { "value": "20px", "type": "fontSize" },
      "h3":         { "value": "24px", "type": "fontSize" },
      "h2":         { "value": "clamp(24px, 3.5vw, 40px)", "type": "fontSize" },
      "h1":         { "value": "clamp(28px, 4.5vw, 52px)", "type": "fontSize" },
      "display":    { "value": "clamp(36px, 5vw, 72px)", "type": "fontSize" }
    },
    "line-height": {
      "tight":    { "value": 1.05, "type": "lineHeight" },
      "snug":     { "value": 1.15, "type": "lineHeight" },
      "heading":  { "value": 1.25, "type": "lineHeight" },
      "compact":  { "value": 1.35, "type": "lineHeight" },
      "body":     { "value": 1.6, "type": "lineHeight" },
      "relaxed":  { "value": 1.7, "type": "lineHeight" }
    },
    "letter-spacing": {
      "tight":     { "value": "-0.025em", "type": "letterSpacing" },
      "snug":      { "value": "-0.02em", "type": "letterSpacing" },
      "normal":    { "value": "0", "type": "letterSpacing" },
      "wide":      { "value": "0.08em", "type": "letterSpacing" },
      "wider":     { "value": "0.10em", "type": "letterSpacing" },
      "widest":    { "value": "0.14em", "type": "letterSpacing" }
    }
  },
  "spacing": {
    "0":   { "value": "0px",  "type": "spacing" },
    "1":   { "value": "4px",  "type": "spacing" },
    "2":   { "value": "8px",  "type": "spacing" },
    "3":   { "value": "12px", "type": "spacing" },
    "4":   { "value": "16px", "type": "spacing" },
    "5":   { "value": "20px", "type": "spacing" },
    "6":   { "value": "24px", "type": "spacing" },
    "7":   { "value": "28px", "type": "spacing" },
    "8":   { "value": "32px", "type": "spacing" },
    "10":  { "value": "40px", "type": "spacing" },
    "12":  { "value": "48px", "type": "spacing" },
    "16":  { "value": "64px", "type": "spacing" },
    "20":  { "value": "80px", "type": "spacing" },
    "24":  { "value": "96px", "type": "spacing" }
  },
  "radius": {
    "sm":    { "value": "4px",    "type": "borderRadius" },
    "md":    { "value": "6px",    "type": "borderRadius" },
    "lg":    { "value": "8px",    "type": "borderRadius" },
    "xl":    { "value": "12px",   "type": "borderRadius" },
    "2xl":   { "value": "16px",   "type": "borderRadius" },
    "full":  { "value": "9999px", "type": "borderRadius" }
  },
  "elevation": {
    "0": { "value": "none", "type": "boxShadow" },
    "1": { "value": "0 1px 0 rgba(0,0,0,0.06)", "type": "boxShadow" },
    "2": { "value": "0 4px 12px rgba(0,0,0,0.06)", "type": "boxShadow" },
    "3": { "value": "0 10px 15px -3px rgba(0,0,0,0.1)", "type": "boxShadow" },
    "4": { "value": "0 20px 25px -5px rgba(0,0,0,0.1)", "type": "boxShadow" },
    "overlay": { "value": "0 25px 50px -12px rgba(0,0,0,0.25)", "type": "boxShadow" }
  },
  "motion": {
    "duration": {
      "instant":   { "value": "100ms", "type": "duration" },
      "fast":      { "value": "150ms", "type": "duration" },
      "normal":    { "value": "220ms", "type": "duration" },
      "moderate":  { "value": "350ms", "type": "duration" },
      "slow":      { "value": "500ms", "type": "duration" },
      "slower":    { "value": "700ms", "type": "duration" }
    },
    "easing": {
      "default":  { "value": "ease",                              "type": "cubicBezier" },
      "out":      { "value": "cubic-bezier(0.0, 0.0, 0.2, 1)",    "type": "cubicBezier" },
      "in":       { "value": "cubic-bezier(0.4, 0.0, 1, 1)",      "type": "cubicBezier" },
      "in-out":   { "value": "cubic-bezier(0.4, 0.0, 0.2, 1)",    "type": "cubicBezier" },
      "bounce":   { "value": "cubic-bezier(0.34, 1.56, 0.64, 1)", "type": "cubicBezier" }
    }
  },
  "border": {
    "width": {
      "thin":    { "value": "1px",   "type": "borderWidth" },
      "default": { "value": "1.5px", "type": "borderWidth" },
      "thick":   { "value": "2px",   "type": "borderWidth" }
    },
    "color": {
      "light":     { "value": "rgba(0,0,0,0.06)",       "type": "color" },
      "default":   { "value": "rgba(0,0,0,0.10)",       "type": "color" },
      "dark":      { "value": "rgba(255,255,255,0.08)",  "type": "color" },
      "dark-hover":{ "value": "rgba(255,255,255,0.20)",  "type": "color" },
      "focus":     { "value": "rgba(12,244,223,0.5)",    "type": "color" },
      "error":     { "value": "#E5484D",                 "type": "color" }
    }
  },
  "opacity": {
    "disabled": { "value": 0.4,  "type": "opacity" },
    "muted":    { "value": 0.5,  "type": "opacity" },
    "subtle":   { "value": 0.65, "type": "opacity" },
    "hover":    { "value": 0.9,  "type": "opacity" },
    "full":     { "value": 1.0,  "type": "opacity" }
  },
  "z-index": {
    "base":     { "value": 0,    "type": "other" },
    "dropdown": { "value": 10,   "type": "other" },
    "sticky":   { "value": 20,   "type": "other" },
    "overlay":  { "value": 30,   "type": "other" },
    "modal":    { "value": 40,   "type": "other" },
    "navbar":   { "value": 50,   "type": "other" },
    "toast":    { "value": 60,   "type": "other" }
  }
}
```

---

## 4. Core UI Components

### 4.1 Button

#### Anatomy

```
[Icon (optional)] [Label] [Icon (optional)]
```

Composed of: container, label text, optional leading/trailing icon.

#### Variants

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| Primary | `#FFFFFF` | `#0B0B3C` | none | Primary actions on dark backgrounds |
| Primary Gradient | Action gradient | `#FFFFFF` | none | Primary actions on light backgrounds |
| Secondary | transparent | `#FFFFFF` | `1.5px solid rgba(255,255,255,0.5)` | Secondary actions on dark backgrounds |
| Secondary Light | transparent | `#061341` | `1.5px solid rgba(6,19,65,0.12)` | Secondary actions on light backgrounds |
| Ghost | transparent | inherit | none | Tertiary actions, nav links |
| Destructive | `#E5484D` | `#FFFFFF` | none | Delete, remove actions |
| Solution | Solution color bg | `#FFFFFF` or auto | none | Solution-specific CTAs |

#### Sizes

| Size | Height | Padding | Font Size | Icon Size | Touch Target |
|------|--------|---------|-----------|-----------|-------------|
| Small | 32px | `px-4 py-1.5` | 13px | 16px | 44px (with padding) |
| Medium | 40px | `px-6 py-2.5` | 14px | 20px | 44px |
| Large | 48px | `px-7 py-3.5` | 14px | 20px | 48px |

#### States

| State | Behavior |
|-------|----------|
| Default | As defined per variant |
| Hover | `opacity: 0.9`, `scale: 1.02`, border color intensifies |
| Active/Pressed | `scale: 0.98`, slight darkening |
| Focus | `outline: 2px solid #0CF4DF`, `outline-offset: 2px` |
| Disabled | `opacity: 0.4`, `cursor: not-allowed`, no hover effects |
| Loading | Label replaced with spinner, `pointer-events: none` |

#### Accessibility

- Use `<button>` for actions, `<a>` for navigation.
- Always provide visible label text. Icon-only buttons require `aria-label`.
- Focus ring must be visible (not hidden by `outline: none`).
- Disabled buttons use `aria-disabled="true"` and `tabindex="-1"`.
- Loading state: add `aria-busy="true"` and announce via live region.
- Minimum contrast ratio 4.5:1 for label text against button background.

#### Developer Spec

```tsx
interface ButtonProps {
  variant: 'primary' | 'primary-gradient' | 'secondary' | 'secondary-light' | 'ghost' | 'destructive';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
}
```

---

### 4.2 Input

#### Anatomy

```
[Label]
[Leading Icon (optional)] [Input Field] [Trailing Action (optional)]
[Helper Text / Error Message]
```

#### Variants

| Variant | Usage |
|---------|-------|
| Default | Standard text input |
| Search | With magnifying glass icon and clear button |
| Password | With show/hide toggle |
| Number | With increment/decrement or plain |

#### States

| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Default | `1px solid rgba(6,19,65,0.12)` | `#FFFFFF` | none |
| Hover | `1px solid rgba(12,244,223,0.3)` | `#FFFFFF` | none |
| Focus | `1px solid rgba(12,244,223,0.5)` | `#FFFFFF` | `0 0 0 2px rgba(12,244,223,0.08)` |
| Error | `1px solid #E5484D` | `#FFFFFF` | `0 0 0 2px rgba(229,72,77,0.08)` |
| Disabled | `1px solid rgba(6,19,65,0.06)` | `#F8F9FB` | none |
| Read-only | `1px solid rgba(6,19,65,0.06)` | `#F8F9FB` | none |

#### Sizing

| Size | Height | Padding | Font Size | Label Size |
|------|--------|---------|-----------|------------|
| Small | 36px | `px-3 py-2` | 14px | 12px |
| Medium | 40px | `px-3.5 py-2.5` | 14px | 13px |
| Large | 48px | `px-4 py-3` | 15px | 14px |

#### Accessibility

- Every input must have a visible `<label>` or `aria-label`.
- Error messages use `aria-describedby` linking to the message element.
- Invalid inputs get `aria-invalid="true"`.
- Required inputs get `aria-required="true"` and visible indicator.
- Group related inputs with `<fieldset>` and `<legend>`.

#### Developer Spec

```tsx
interface InputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  leadingIcon?: React.ReactNode;
  trailingAction?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
```

---

### 4.3 Select

#### Anatomy

```
[Label]
[Selected Value / Placeholder] [Chevron]
```

Custom styled to match Input appearance. Uses `appearance: none` with custom chevron SVG.

#### States

Same as Input (Default, Hover, Focus, Error, Disabled).

#### Accessibility

- Use native `<select>` for simple cases.
- Custom dropdown: use `role="listbox"`, `role="option"`, `aria-expanded`, `aria-activedescendant`.
- Keyboard: Arrow keys navigate, Enter/Space select, Escape closes.

#### Developer Spec

```tsx
interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
```

---

### 4.4 Checkbox

#### Anatomy

```
[Checkbox Box] [Label] [Helper text (optional, below)]
```

#### States

| State | Appearance |
|-------|-----------|
| Unchecked | `border: 1.5px solid rgba(6,19,65,0.20)`, white fill |
| Checked | `bg: #00BBA5`, white checkmark SVG |
| Indeterminate | `bg: #00BBA5`, white dash SVG |
| Hover | Border intensifies to `rgba(6,19,65,0.40)` |
| Focus | `outline: 2px solid #0CF4DF`, `outline-offset: 2px` |
| Disabled | `opacity: 0.4` |
| Error | `border-color: #E5484D` |

#### Sizing

Box: 18px (small), 20px (medium). Label: 14px body-sm.

#### Accessibility

- Use `<input type="checkbox">` with associated `<label>`.
- Indeterminate state set via `aria-checked="mixed"`.
- Group checkboxes in `<fieldset>` with `<legend>`.

---

### 4.5 Radio

#### Anatomy

```
[Radio Circle] [Label]
```

#### States

Same state matrix as Checkbox, substituting circle/dot for box/checkmark.

| State | Appearance |
|-------|-----------|
| Unselected | `border: 1.5px solid rgba(6,19,65,0.20)`, white fill |
| Selected | `border: 1.5px solid #00BBA5`, inner dot `bg: #00BBA5` (8px) |
| Hover | Border intensifies |
| Focus | `outline: 2px solid #0CF4DF`, `outline-offset: 2px` |
| Disabled | `opacity: 0.4` |

#### Accessibility

- Use `<input type="radio">` inside `<fieldset>` with `<legend>`.
- Arrow keys navigate within group.
- Only one radio focused per group (roving tabindex).

---

### 4.6 Modal / Dialog

#### Anatomy

```
[Overlay (scrim)]
  [Dialog Container]
    [Header: Title + Close button]
    [Body: Content area]
    [Footer: Action buttons (optional)]
```

#### Specifications

| Property | Value |
|----------|-------|
| Max width | 480px (sm), 640px (md), 800px (lg) |
| Padding | 24px |
| Border radius | `radius-xl` (12px) |
| Background | `#FFFFFF` (light), `var(--surface)` (dark) |
| Overlay | `rgba(0,0,0,0.5)` with `backdrop-filter: blur(4px)` |
| Shadow | `elevation-overlay` |
| Close button | Top right, 24px icon, 44px touch target |

#### Animation

```typescript
// Overlay
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.2 }}

// Dialog
initial={{ opacity: 0, scale: 0.96, y: 8 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.96, y: 8 }}
transition={{ duration: 0.2, ease: "easeOut" }}
```

#### Accessibility

- Use `role="dialog"` and `aria-modal="true"`.
- Set `aria-labelledby` pointing to the title element.
- Trap focus inside the modal while open.
- Close on Escape key press.
- Return focus to the trigger element on close.
- Prevent body scroll while open (`overflow: hidden` on body).

---

### 4.7 Tooltip

#### Anatomy

```
[Trigger Element]
[Tooltip Container with arrow]
  [Tooltip Text]
```

#### Specifications

| Property | Value |
|----------|-------|
| Background | `#0B0B3C` (dark), `#FFFFFF` (light) |
| Text color | `#FFFFFF` (dark), `#181818` (light) |
| Font size | 13px |
| Padding | `6px 10px` |
| Border radius | `radius-md` (6px) |
| Max width | 240px |
| Arrow | 6px CSS triangle |
| Delay | 300ms show, 0ms hide |
| Shadow | `elevation-2` |

#### Placement

Preferred: top. Auto-flip to bottom, left, or right if constrained by viewport.

#### Accessibility

- Trigger uses `aria-describedby` pointing to tooltip ID.
- Tooltip uses `role="tooltip"`.
- Show on hover and on focus. Dismiss on Escape.
- Do not place interactive content inside tooltips.

---

### 4.8 Dropdown Menu

#### Anatomy

```
[Trigger (button)]
[Menu Container]
  [Menu Item]*
  [Separator (optional)]
  [Menu Item]*
```

#### Specifications

| Property | Value |
|----------|-------|
| Background | `#FFFFFF` |
| Border | `1px solid rgba(0,0,0,0.06)` |
| Border radius | `radius-xl` (12px) |
| Shadow | `elevation-4` |
| Padding | 12-16px |
| Item height | 36px minimum |
| Item padding | `8px 12px` |
| Item hover | `bg: rgba(6,19,65,0.04)` |
| Item active | `bg: rgba(6,19,65,0.08)` |

#### Animation

```typescript
initial={{ opacity: 0, y: -4 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -4 }}
transition={{ duration: 0.15 }}
```

#### Accessibility

- Trigger: `aria-haspopup="true"`, `aria-expanded`.
- Menu: `role="menu"`.
- Items: `role="menuitem"`.
- Arrow keys navigate items, Enter/Space activates, Escape closes.
- Focus moves to first item on open.

---

### 4.9 Card

#### Anatomy

```
[Card Container]
  [Media (optional)]
  [Content]
    [Eyebrow (optional)]
    [Title]
    [Description]
    [Tags (optional)]
    [Action (optional)]
```

#### Variants

| Variant | Background | Border | Shadow | Usage |
|---------|-----------|--------|--------|-------|
| Default Light | `#FFFFFF` | `1px solid rgba(0,0,0,0.06)` | `elevation-2` | Content cards on light bg |
| Elevated | `#FFFFFF` | none | `elevation-3` | Featured cards |
| Dark | `#0F1629` | `1px solid rgba(255,255,255,0.08)` | none | Cards on dark bg |
| Outline | transparent | `1.5px solid rgba(6,19,65,0.12)` | none | Subtle cards, feature lists |
| Solution | Solution gradient bg | none | none | Solution vertical cards |
| Interactive | varies | varies | varies | Cards with hover/click behavior |

#### Interactive Behavior

```css
/* Hover state */
transform: translateY(-4px);
box-shadow: elevation-3;
transition: all 200ms ease;

/* Active/pressed state */
transform: translateY(-2px);
```

#### Specifications

| Property | Value |
|----------|-------|
| Border radius | `radius-2xl` (16px) |
| Padding | 24px (default), 32px (large) |
| Media aspect ratio | 16:9 (default), 4:3, 1:1 |
| Max width | Determined by grid container |

#### Accessibility

- Interactive cards: use `<a>` or `<button>` as the card root.
- Ensure the entire card surface is clickable if card links somewhere.
- Card title should be a heading element for screen reader navigation.
- Tags use appropriate contrast.

---

### 4.10 Tabs

#### Anatomy

```
[Tab Bar]
  [Tab Item]* (with active indicator)
[Tab Panel]
```

#### Variants

| Variant | Style | Usage |
|---------|-------|-------|
| Pill | Active: colored background, rounded-full | Solution selector, filters |
| Underline | Active: bottom border accent | Settings, detail views |
| Segmented | Active: filled segment in shared container | Toggles, view modes |

#### Pill Tab Spec (Current Pattern)

```tsx
// Active tab
background: solutionColor;
color: #FFFFFF;
border: 1.5px solid solutionColor;
border-radius: 9999px;
padding: 12px 20px;
font-size: 15px;
font-weight: 600;

// Inactive tab
background: transparent;
color: #061341;
border: 1.5px solid rgba(6, 19, 65, 0.12);
```

#### Animation

```typescript
// Tab panel content switch
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  />
</AnimatePresence>
```

#### Accessibility

- Tab bar: `role="tablist"`.
- Tab items: `role="tab"`, `aria-selected`, `aria-controls`.
- Tab panels: `role="tabpanel"`, `aria-labelledby`.
- Arrow keys navigate tabs. Tab key moves to panel content.
- Only the active tab is in the tab order.

---

### 4.11 Accordion

#### Anatomy

```
[Accordion Item]
  [Header: Label + Chevron]
  [Content Panel (collapsible)]
```

#### Specifications

| Property | Value |
|----------|-------|
| Header height | 56px minimum |
| Header padding | `16px 0` |
| Content padding | `0 0 16px 0` |
| Border | `border-bottom: 1px solid rgba(6,19,65,0.08)` |
| Chevron | 20px, rotates 180deg on open |
| Font size (header) | 16px, weight 500 |
| Font size (content) | 15px, weight 400 |

#### Animation

```typescript
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3, ease: "easeInOut" }}
```

#### Accessibility

- Use `<details>` / `<summary>` or implement with `aria-expanded`, `aria-controls`.
- Header is a `<button>` (not a div).
- Content region has `role="region"` and `aria-labelledby`.
- Enter/Space toggles the panel.

---

### 4.12 Navbar

#### Anatomy

```
[Navbar Container (fixed, z-50)]
  [Logo]
  [Nav Links (desktop)]
    [Dropdown trigger]*
    [Mega menu (on hover/click)]
  [CTA Button]
  [Mobile Menu Toggle (md:hidden)]
[Mobile Menu (slide down, md:hidden)]
```

#### Specifications

| Property | Value |
|----------|-------|
| Height | 72px |
| Position | Fixed, top: 0, z-index: 50 |
| Max width | max-w-7xl centered |
| Padding | `px-6 lg:px-12` |

#### Scroll States

| State | Background | Shadow |
|-------|-----------|--------|
| At top (transparent) | transparent | none |
| Scrolled | `rgba(255,255,255,0.9)` + `backdrop-blur-md` | `0 1px 0 rgba(0,0,0,0.06)` |

#### Navigation Link Spec

```
Font: 13px, weight 500
Color (at top): #FFFFFF
Color (scrolled): #181818
Hover: opacity transition
Active indicator: none (current page not visually marked in nav)
```

#### Mobile Menu

```
Trigger: hamburger icon, 44px touch target
Panel: full-width dropdown, bg-white
Items: full-width, 48px height, left-aligned
Transition: height 0 → auto, opacity 0 → 1
```

#### Accessibility

- Use `<nav>` with `aria-label="Main navigation"`.
- Mobile toggle: `aria-expanded`, `aria-controls`.
- Dropdown menus: follow Dropdown Menu accessibility pattern.
- Skip-to-content link as first focusable element.

---

### 4.13 Sidebar

#### Anatomy

```
[Sidebar Container]
  [Logo / Brand (top)]
  [Navigation Group]*
    [Group Label]
    [Nav Item]*
      [Icon] [Label] [Badge (optional)]
  [Footer (bottom)]
    [User Info]
    [Settings]
```

#### Specifications (Web App / iPad)

| Property | Value |
|----------|-------|
| Width (expanded) | 240px (web), 280px (iPad) |
| Width (collapsed) | 64px (web), hidden (mobile) |
| Background | `#FFFFFF` (light), `var(--surface)` (dark) |
| Border right | `1px solid rgba(6,19,65,0.08)` |
| Item height | 40px (web), 48px (iPad/touch) |
| Item padding | `8px 12px` |
| Active item | `bg: rgba(0,187,165,0.08)`, `color: #00BBA5`, `font-weight: 600` |
| Hover item | `bg: rgba(6,19,65,0.04)` |
| Icon size | 20px |
| Label size | 14px |

#### Accessibility

- Use `<nav>` with `aria-label="Sidebar navigation"`.
- Active item: `aria-current="page"`.
- Collapsible sidebar: `aria-expanded` on toggle.
- Group labels: use headings or `aria-label` on `<ul>`.

---

### 4.14 Toast / Notification

#### Anatomy

```
[Toast Container]
  [Icon (semantic)] [Message] [Close button (optional)]
  [Action link (optional)]
```

#### Variants

| Variant | Icon | Background | Border-left |
|---------|------|-----------|-------------|
| Success | Checkmark | `#E8FDF8` | `3px solid #00BBA5` |
| Error | X-circle | `#FFF2F2` | `3px solid #E5484D` |
| Warning | Alert triangle | `#FFF9E8` | `3px solid #F2B33D` |
| Info | Info circle | `#EEF3FD` | `3px solid #3257D9` |

#### Specifications

| Property | Value |
|----------|-------|
| Max width | 400px |
| Padding | `12px 16px` |
| Border radius | `radius-lg` (8px) |
| Shadow | `elevation-3` |
| Position | Top-right, 16px from edges |
| Z-index | 60 (above everything) |
| Auto-dismiss | 5000ms (success/info), persistent (error) |

#### Animation

```typescript
initial={{ opacity: 0, x: 24, y: 0 }}
animate={{ opacity: 1, x: 0, y: 0 }}
exit={{ opacity: 0, x: 24 }}
transition={{ duration: 0.3, ease: "easeOut" }}
```

#### Accessibility

- Container: `role="status"` (polite) or `role="alert"` (errors).
- Auto-dismissing toasts must be pausable on hover/focus.
- Close button must be keyboard accessible.
- Do not rely on color alone to convey meaning (icon + text required).

---

### 4.15 Badge

#### Anatomy

```
[Badge Container]
  [Label Text]
```

#### Variants

| Variant | Background | Text | Usage |
|---------|-----------|------|-------|
| Teal | `rgba(0,187,165,0.08)` | `#00BBA5` | Default category/status |
| Violet | `rgba(107,33,212,0.08)` | `#6B21D4` | Trade Shows |
| Amber | `rgba(242,179,61,0.08)` | `#A86B00` | Field Sales |
| Crimson | `rgba(242,94,61,0.08)` | `#F25E3D` | Events |
| Neutral | `rgba(6,19,65,0.06)` | `#555` | Generic label |
| Success | `rgba(12,244,223,0.1)` | `#00BBA5` | Positive status |
| Error | `rgba(229,72,77,0.08)` | `#E5484D` | Negative status |

#### Specifications

| Property | Value |
|----------|-------|
| Padding | `4px 10px` |
| Border radius | `radius-sm` (4px) |
| Font size | 11px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.04em |

#### Accessibility

- Badges are decorative unless they convey status. If status-bearing, add `aria-label` describing the status.
- Do not use color as the only differentiator.

---

### 4.16 Table

#### Anatomy

```
[Table Container (overflow-x-auto)]
  [Table Head]
    [Header Row]
      [Header Cell]*
  [Table Body]
    [Data Row]*
      [Data Cell]*
  [Table Footer (optional)]
```

#### Specifications

| Property | Value |
|----------|-------|
| Header bg | `#F8F9FB` |
| Header text | 12px, weight 600, uppercase, `letter-spacing: 0.08em`, `color: #555` |
| Row height | 48px minimum |
| Cell padding | `12px 16px` |
| Row border | `border-bottom: 1px solid rgba(6,19,65,0.06)` |
| Row hover | `bg: rgba(6,19,65,0.02)` |
| Selected row | `bg: rgba(0,187,165,0.04)` |
| Stripe (alt) | `bg: #FAFBFC` |
| Border radius | `radius-xl` (12px) on container |

#### Accessibility

- Use semantic `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`.
- `<th>` cells get `scope="col"` or `scope="row"`.
- Sortable columns: `aria-sort="ascending|descending|none"`.
- Add `<caption>` or `aria-label` on `<table>`.

---

### 4.17 Pagination

#### Anatomy

```
[Previous Button] [Page 1] [Page 2] [...] [Page N] [Next Button]
```

#### Specifications

| Property | Value |
|----------|-------|
| Item size | 36px x 36px |
| Border radius | `radius-md` (6px) |
| Font size | 14px, weight 500 |
| Active page | `bg: #00BBA5`, `color: #FFFFFF` |
| Inactive page | `bg: transparent`, `color: #555` |
| Hover | `bg: rgba(6,19,65,0.04)` |
| Disabled arrows | `opacity: 0.3`, `cursor: not-allowed` |
| Gap between items | 4px |

#### Accessibility

- Wrap in `<nav>` with `aria-label="Pagination"`.
- Active page: `aria-current="page"`.
- Disabled buttons: `aria-disabled="true"`.
- Ellipsis: `<span>` with `aria-hidden="true"`.

---

### 4.18 Avatar

#### Anatomy

```
[Circle Container]
  [Image] or [Initials] or [Fallback Icon]
[Status Indicator (optional)]
```

#### Sizes

| Size | Diameter | Font Size | Status Dot |
|------|----------|-----------|-----------|
| XS | 24px | 10px | 8px |
| SM | 32px | 12px | 10px |
| MD | 40px | 14px | 12px |
| LG | 56px | 20px | 14px |
| XL | 80px | 28px | 16px |

#### Specifications

| Property | Value |
|----------|-------|
| Shape | Circle (`border-radius: 9999px`) |
| Fallback bg | `rgba(0,187,165,0.12)` |
| Fallback text color | `#00BBA5` |
| Border | `2px solid #FFFFFF` (when grouped/stacked) |
| Status dot position | Bottom-right, partially overlapping |
| Status colors | Online: `#0CF4DF`, Away: `#F2B33D`, Offline: `#999` |

#### Accessibility

- Image avatars: `alt="[User Name]"`.
- Fallback initials: `aria-label="[User Name]"`.
- Status dot: `aria-label="[Status]"` on the indicator.

---

### 4.19 Breadcrumb

#### Anatomy

```
[Breadcrumb Item] / [Breadcrumb Item] / [Current Page]
```

#### Specifications

| Property | Value |
|----------|-------|
| Font size | 13px |
| Font weight | 400 (links), 500 (current) |
| Link color | `#555` |
| Link hover | `#181818` |
| Current color | `#181818` |
| Separator | `/` at `opacity: 0.3` |
| Gap | 8px |

#### Accessibility

- Wrap in `<nav>` with `aria-label="Breadcrumb"`.
- Use `<ol>` for the ordered list of items.
- Current page: `aria-current="page"`.
- Separator is decorative: `aria-hidden="true"`.

---

### 4.20 Skeleton Loader

#### Anatomy

```
[Skeleton Block] - mimics the shape of the content it replaces
```

#### Variants

| Variant | Shape | Usage |
|---------|-------|-------|
| Text | Rounded rectangle, height matches line-height | Body text, headings |
| Circle | Circle | Avatars |
| Rectangle | Rounded rectangle, variable aspect | Cards, images, media |
| Table Row | Full-width row with cell-width blocks | Table rows |

#### Specifications

| Property | Value |
|----------|-------|
| Background | `rgba(6,19,65,0.06)` (light), `rgba(255,255,255,0.06)` (dark) |
| Border radius | Matches the element it replaces |
| Animation | Shimmer pulse: `opacity 1.5s ease-in-out infinite` |
| Height (text) | 14px (body), 24px (heading), 12px (caption) |
| Width (text) | Varies: 100%, 80%, 60% to create natural variation |
| Gap | Matches the content it replaces |

#### Animation

```css
@keyframes skeleton-pulse {
  0%, 100% { opacity: 0.06; }
  50% { opacity: 0.12; }
}
```

#### Accessibility

- Container: `aria-busy="true"`, `aria-label="Loading"`.
- Individual skeleton elements: `aria-hidden="true"`.
- Announce completion via `aria-live="polite"` region when content loads.
- Respect `prefers-reduced-motion`: use static opacity (no pulse) when reduced motion is preferred.

---

### 4.21 Toggle / Switch

#### Anatomy

```
[Label] [Switch Track [Thumb]]
```

#### Specifications

| Property | Value |
|----------|-------|
| Track width | 40px |
| Track height | 22px |
| Thumb diameter | 18px |
| Track (off) | `rgba(6,19,65,0.12)` |
| Track (on) | `#00BBA5` |
| Thumb | `#FFFFFF` with `elevation-1` |
| Border radius | `9999px` |
| Transition | `200ms ease` |

#### Accessibility

- Use `role="switch"` with `aria-checked`.
- Keyboard: Space/Enter toggles.
- Always pair with visible label.

---

### 4.22 Progress Bar

#### Anatomy

```
[Track (background)]
  [Fill (foreground)]
[Label (optional, above or beside)]
```

#### Specifications

| Property | Value |
|----------|-------|
| Track height | 6px (small), 8px (medium) |
| Track bg | `rgba(6,19,65,0.08)` |
| Fill bg | Action gradient or `#00BBA5` |
| Border radius | `9999px` |
| Transition | `width 500ms ease-out` |

#### Accessibility

- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.
- Add `aria-label` describing what is loading/progressing.
- Indeterminate: omit `aria-valuenow`, add animated fill.

---

### 4.23 Divider

#### Specifications

| Variant | Value |
|---------|-------|
| Horizontal | `border-top: 1px solid rgba(6,19,65,0.08)`, full width |
| Vertical | `border-left: 1px solid rgba(6,19,65,0.08)`, full height |
| Dark surface | `border-color: rgba(255,255,255,0.08)` |
| With label | Centered text with lines on either side |

#### Accessibility

- Use `<hr>` for thematic breaks.
- Decorative dividers: `role="separator"` or `aria-hidden="true"`.

---

### 4.24 Gauge (ROX Scorer)

Domain-specific component for ROX score visualization.

#### Anatomy

```
[SVG Container]
  [Arc Track (4 colored zones)]
  [Needle (animated)]
  [Score Label (center)]
  [Tier Label (below score)]
```

#### Specifications

| Property | Value |
|----------|-------|
| Viewbox | `0 0 220 130` |
| Arc span | 180deg (semicircle) |
| Zone 1 (0-39) | `#E5484D` (Critical) |
| Zone 2 (40-69) | `#F2B33D` (Optimize) |
| Zone 3 (70-84) | `#5FD9C2` (High ROX) |
| Zone 4 (85-100) | `#0CF4DF` (Elite) |
| Needle | Dark stroke, animated rotation |
| Score text | 32px, weight 700 |
| Tier text | 13px, weight 600, tier color |

#### Animation

```typescript
// Needle animation using requestAnimationFrame
duration: 1200ms
easing: easeOut
```

#### Accessibility

- `role="img"` with `aria-label="ROX Score: [score] out of 100, [tier name]"`.
- Decorative SVG elements: `aria-hidden="true"`.

---

## 5. Design Patterns

### 5.1 Forms

#### Layout

- Single-column layout for forms (max-width: 480px).
- Group related fields with visible section headers.
- Labels above inputs (not inline).
- Required indicator: red asterisk after label.

#### Validation

| Rule | Implementation |
|------|----------------|
| Inline validation | Validate on blur, not on every keystroke |
| Error display | Red border + error message below the field |
| Error message | Starts with the field name: "Email address is required" |
| Success | Green checkmark icon (optional), no green border |
| Form-level error | Toast notification for submission failures |
| Focus management | Focus the first invalid field on submit attempt |

#### Submission

- Disable submit button while submitting.
- Show loading spinner inside the submit button.
- On success: redirect or show success state, never leave the form active.
- On failure: show error toast, re-enable form, focus first problematic field.

#### Spacing

```
Label to input:     4px (space-1)
Input to helper:    4px (space-1)
Input to error:     4px (space-1)
Field to field:     20px (space-5)
Section to section: 32px (space-8)
Form to submit:     32px (space-8)
```

---

### 5.2 Navigation

#### Web App Navigation

```
[Top Bar (fixed)]
  [Logo] [Global Search] [Notifications] [User Avatar + Dropdown]
[Sidebar (fixed left)]
  [Primary Nav Items]
  [Secondary Nav Items]
  [Footer]
[Main Content (scrollable)]
```

#### Marketing Site Navigation

```
[Navbar (fixed top, transparent → white on scroll)]
  [Logo] [Nav Links with mega-menus] [CTA Button]
[Mobile: Hamburger → Full-width dropdown]
```

#### iPad / Touch Device

```
[Top Bar (fixed)]
  [Back Button] [Title] [Action Buttons]
[Content (scrollable)]
[Bottom Tab Bar (optional, for top-level navigation)]
  [Tab Item]*  (icon + label, 5 max)
```

#### Phone

```
[Top Bar (fixed)]
  [Back Button] [Title] [Action Button]
[Content (scrollable)]
[Bottom Tab Bar (always visible)]
  [Tab Item]* (icon + label, 5 max)
```

#### Rules

- Maximum 7 top-level navigation items on desktop.
- Mobile bottom tabs: maximum 5 items.
- Active state must be visually distinct (color change, not just opacity).
- Never nest dropdowns more than 2 levels.
- Mega menus close on click outside, Escape key, or navigation.

---

### 5.3 Error States

#### Component-Level Errors

| Component | Error Display |
|-----------|--------------|
| Input | Red border + message below field |
| Select | Red border + message below field |
| Card | Error banner inside card with retry action |
| Table | Error row spanning all columns |
| Page section | Inline error message with retry button |

#### Page-Level Errors

| Error | Display |
|-------|---------|
| 404 | Centered illustration + "Page not found" + link to home |
| 500 | Centered illustration + "Something went wrong" + retry button |
| Network | Toast notification + retry, or inline banner if persistent |
| Permission | Centered lock icon + "You don't have access" + contact info |

#### Error Message Guidelines

- Be specific: "Could not save your changes. Please try again." not "An error occurred."
- Provide a next step: retry button, contact link, or alternative path.
- Never show raw error codes or stack traces to users.
- Use `role="alert"` for critical errors that need immediate attention.

---

### 5.4 Empty States

#### Structure

```
[Icon or Illustration (muted)]
[Headline (h3)]
[Description (body text, muted)]
[Primary Action Button]
```

#### Specifications

| Property | Value |
|----------|-------|
| Icon size | 48px, `opacity: 0.3` |
| Headline | 20px, weight 500, `color: #181818` |
| Description | 15px, weight 400, `color: #555`, max-width 360px |
| Button | Primary variant, below description |
| Alignment | Centered, `py-16` vertical padding |

#### Examples

| Context | Headline | Description | Action |
|---------|----------|-------------|--------|
| No scans yet | "No scans recorded" | "Scans will appear here after your first event." | "Set Up Event" |
| Empty search | "No results found" | "Try adjusting your search or filters." | "Clear Filters" |
| No leads | "No leads captured" | "Start scanning badges to capture leads." | "Learn How" |
| Empty table | "No data available" | "Data will populate once activity begins." | (none) |

---

### 5.5 Loading States

#### Strategies

| Context | Loading Pattern |
|---------|----------------|
| Initial page load | Skeleton loader matching content layout |
| Data refresh | Subtle opacity reduction (0.5) on existing content + spinner |
| Button action | Inline spinner replacing button label |
| Table/list load | Skeleton rows (3-5 rows) |
| Image load | Gray placeholder → fade in on load |
| Navigation | Progress bar at top of viewport |
| Long operation | Modal with progress bar + estimated time |

#### Spinner Specifications

| Size | Diameter | Stroke | Usage |
|------|----------|--------|-------|
| XS | 16px | 2px | Inline (button, input) |
| SM | 24px | 2px | Table cells, small containers |
| MD | 32px | 3px | Card centers |
| LG | 48px | 3px | Page sections |

```css
/* Spinner */
border: 2px solid rgba(0,187,165,0.2);
border-top-color: #00BBA5;
border-radius: 50%;
animation: spin 0.8s linear infinite;
```

#### Rules

- Show skeleton loaders for initial content (not spinners).
- Never block the entire page with a full-screen spinner.
- If loading takes > 10 seconds, show a message explaining the delay.
- Content should appear progressively, not all at once after a long wait.

---

## 6. Dos and Don'ts

### Color

| Do | Don't |
|----|-------|
| Use `#00BBA5` (teal) for eyebrows and interactive accents | Use teal for small body text on white (fails contrast) |
| Use `#0CF4DF` (cyan) on dark backgrounds only | Use cyan on white or light backgrounds |
| Apply gradient text only on Display/H1 over dark surfaces | Apply gradient text on light backgrounds or body text |
| Use semantic colors for their designated purpose | Use error red for decorative elements |
| Verify contrast ratios when layering opacity values | Assume opacity-based colors pass contrast checks |

### Typography

| Do | Don't |
|----|-------|
| Use weight 500 for headlines | Use weight 700 (bold) for headlines |
| Use weight 300 for subheads | Use weight 400 for subheads |
| Use uppercase + tracking for eyebrows (12px/600) | Use uppercase for body text or headlines |
| Use `clamp()` for responsive headline sizing | Use fixed pixel sizes for headlines across breakpoints |
| Keep body text at 15px across all breakpoints | Scale body text at breakpoints |
| Use `text-wrap: pretty` on all text elements | Allow widows or orphans in paragraphs |

### Spacing

| Do | Don't |
|----|-------|
| Use the 8px grid (multiples of 4px) | Use arbitrary spacing values (e.g., 13px, 27px) |
| Scale section padding responsively: py-16 sm:py-20 lg:py-24 | Use the same padding across all breakpoints |
| Maintain consistent gap ratios within component groups | Mix different gap scales in the same grid |
| Use `max-w-7xl mx-auto px-6 lg:px-12` for standard containers | Use `max-w-full` with fixed pixel padding |

### Components

| Do | Don't |
|----|-------|
| Use semantic HTML (`<button>`, `<nav>`, `<table>`) | Use `<div>` with click handlers for interactive elements |
| Provide `aria-label` on icon-only buttons | Leave icon buttons without accessible names |
| Trap focus inside open modals | Allow focus to escape modals to background content |
| Animate with `opacity` and `transform` only | Animate `width`, `height`, `top`, `left` (causes layout thrash) |
| Use `AnimatePresence mode="wait"` for content swaps | Cut directly between tab content without transition |
| Test all interactive components with keyboard only | Assume mouse-only usage |

### Motion

| Do | Don't |
|----|-------|
| Use `once: true` for scroll-triggered animations | Replay entrance animations on every scroll |
| Respect `prefers-reduced-motion` | Ignore motion preferences |
| Use consistent easing across the system | Mix different easings within the same interaction |
| Keep entrance animations under 700ms | Use slow (> 1s) entrance animations that delay usability |
| Stagger children at 80-100ms intervals | Stagger at > 200ms (feels sluggish) |

### Layout

| Do | Don't |
|----|-------|
| Design touch targets at 44px minimum | Use targets smaller than 36px on any product |
| Use 4-column grid on mobile, 12 on desktop | Force 12 columns on mobile |
| Provide horizontal scroll indicators when content overflows | Hide overflow without visual affordance |
| Stack layouts vertically on mobile | Force side-by-side layouts on narrow screens |

### Content

| Do | Don't |
|----|-------|
| Use hyphens over em dashes | Use em dashes in any copy |
| Lead with outcomes and metrics | Lead with feature descriptions |
| Keep labels concise (1-3 words) | Write sentences as button labels |
| Use sentence case for UI labels | Use Title Case or ALL CAPS for labels (except eyebrows) |

---

## 7. Developer Handoff

### 7.1 Naming Conventions

#### CSS / Token Names

```
Pattern:   {category}-{property}-{variant}
Examples:  color-brand-cyan, spacing-4, radius-lg, elevation-3

Prefix rules:
- Colors:     color-{group}-{name}    → color-brand-teal, color-semantic-error
- Typography: font-{property}         → font-size-body, font-weight-medium
- Spacing:    space-{scale}           → space-4, space-8
- Radius:     radius-{size}           → radius-md, radius-xl
- Shadow:     elevation-{level}       → elevation-2, elevation-4
- Motion:     duration-{speed}        → duration-fast, duration-slow
- Z-index:    z-{layer}              → z-modal, z-toast
```

#### Component Names

```
Pattern:   PascalCase, descriptive, no abbreviations
Examples:  Button, InputField, SelectMenu, ModalDialog, ToastNotification

File structure:
  components/
    ui/
      Button/
        Button.tsx          (component)
        Button.types.ts     (TypeScript interface)
        Button.test.tsx     (tests)
        index.ts            (barrel export)
```

#### Prop Names

```
Pattern:   camelCase
Boolean:   is{State} or has{Feature} → isDisabled, isLoading, hasError
Handler:   on{Event} → onClick, onChange, onBlur
Enum:      variant, size, color → variant="primary", size="md"
```

### 7.2 Token Usage

#### CSS Variables (Tailwind v4)

All tokens are defined in `globals.css` under `@theme { }`. Reference via Tailwind utility classes or `var()`.

```tsx
// Tailwind class (preferred)
<div className="bg-cyan text-deep-navy">

// CSS variable (when Tailwind class unavailable)
<div style={{ color: 'var(--color-teal)' }}>

// Direct hex (only in component-scoped inline styles when dynamic)
<div style={{ borderColor: solutionColor }}>
```

#### Priority Order

1. Tailwind utility classes (first choice).
2. CSS custom properties via `var()` (when Tailwind lacks a utility).
3. Inline hex values (only for dynamic/computed values).
4. Never hardcode hex values that exist as tokens.

### 7.3 Component Hierarchy

```
Primitives (atomic, no business logic)
├── Button
├── Input
├── Select
├── Checkbox
├── Radio
├── Toggle
├── Badge
├── Avatar
├── Divider
├── Skeleton
├── Spinner
└── ProgressBar

Composites (combine primitives)
├── InputField (Label + Input + HelperText)
├── SelectField (Label + Select + HelperText)
├── FormGroup (Fieldset + Legend + Fields)
├── Card (Container + Media + Content + Actions)
├── Modal (Overlay + Dialog + Header + Body + Footer)
├── Toast (Icon + Message + Close)
├── Tooltip (Trigger + Popover)
├── Dropdown (Trigger + Menu + Items)
├── Tabs (TabList + Tab + TabPanel)
├── Accordion (AccordionItem + Header + Content)
├── Table (Head + Body + Row + Cell + Pagination)
├── Breadcrumb (List + Items + Separators)
└── Gauge (SVG + Zones + Needle + Labels)

Patterns (composites + layout + behavior)
├── Navbar (Logo + NavLinks + Dropdowns + CTA + MobileMenu)
├── Sidebar (Logo + NavGroups + NavItems + Footer)
├── FormPage (FormGroups + Validation + Submission)
├── DataTable (Table + Search + Filters + Pagination)
├── EmptyState (Icon + Headline + Description + CTA)
├── ErrorBoundary (Error display + Retry)
└── PageShell (Navbar + Sidebar + MainContent + Toasts)
```

### 7.4 Implementation Notes

#### Platform-Specific Considerations

| Concern | Web App | iPad App | Phone App | Touch Device |
|---------|---------|----------|-----------|-------------|
| Framework | Next.js + React | React Native or web view | React Native or web view | React (kiosk) |
| Min touch target | 36px | 44px | 44px | 48px |
| Sidebar | Collapsible, 240px | Collapsible, 280px | Bottom tab bar | None or minimal |
| Typography | 15px body | 16px body | 16px body | 18px body |
| Zoom | 80% (site-wide on marketing) | Native scaling | Native scaling | Custom scale |
| Hover states | Yes | No (remove or convert to active) | No | No |
| Input method | Pointer + keyboard | Touch + external keyboard | Touch | Touch |

#### Framer Motion Integration

```typescript
// Wrap app in LazyMotion for code splitting
import { LazyMotion, domAnimation } from 'framer-motion';

<LazyMotion features={domAnimation}>
  <App />
</LazyMotion>

// Use m. prefix with LazyMotion for smaller bundle
import { m } from 'framer-motion';
<m.div variants={fadeUp} />
```

#### Dark Mode Implementation

```typescript
// Use CSS custom properties for theme switching
// Toggle by adding/removing class on <html>

// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply theme
document.documentElement.classList.toggle('dark', prefersDark);
```

#### Reduced Motion

```typescript
// Framer Motion: automatic if using useReducedMotion
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

const variants = shouldReduceMotion
  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  : fadeUp;
```

#### Responsive Images

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/path/to/image.webp"
  alt="Descriptive alt text"
  width={800}
  height={450}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  loading="lazy"
  quality={85}
/>
```

#### Z-Index Management

Never use arbitrary z-index values. Always use tokens:

```
z-base:     0     (default stacking)
z-dropdown: 10    (dropdown menus, popovers)
z-sticky:   20    (sticky headers, floating elements)
z-overlay:  30    (modal overlays, sidepanel backdrops)
z-modal:    40    (modal dialogs)
z-navbar:   50    (fixed navigation bar)
z-toast:    60    (toast notifications, always on top)
```

#### Performance Guidelines

- Use `will-change: transform` sparingly and only on elements that animate.
- Prefer CSS transitions over Framer Motion for simple hover effects.
- Lazy-load below-the-fold sections with `React.lazy()` or dynamic imports.
- Use `viewport={{ once: true }}` on all scroll-triggered animations.
- Skeleton loaders should match content dimensions to prevent layout shift.
- SVG icons: inline for interactive elements, sprite sheet for static repeated icons.

---

## Appendix: File Reference

| File | Purpose |
|------|---------|
| `Website/src/app/globals.css` | All CSS tokens, gradients, keyframes, utilities |
| `Website/src/app/layout.tsx` | Font imports, root HTML structure |
| `Website/src/components/Navigation.tsx` | Navbar implementation |
| `Website/src/components/Platform.tsx` | Solution vertical tabs (reference pattern) |
| `Website/src/components/Hero.tsx` | Hero section (animation patterns) |
| `Brand/backgrounds.html` | All gradient classes, SVG patterns, dark/light variables |
| `Brand/index.html` | Brand kit overview, typography rules |
| `Brand/assets/` | Logo SVGs, icon files |
