# Momentify Solution Page Design Pattern

> Reference implementation: `src/components/solutions/TradeShowsSolution.tsx`
> Brand kit: `Brand/backgrounds.html`

---

## 1. Page Architecture

Every solution page has 5 sections in this order:

| # | Section | Background | Pattern Overlay |
|---|---------|-----------|----------------|
| 1 | Hero | Dark gradient (animated, 135deg) | Geometric SVG shapes + ambient glow orbs |
| 2 | Why Momentify + Features | Light gradient (145deg) | Bracket pattern (light variant) + top color bar |
| 3 | ROX + How It Works | Dark gradient (135deg) | Diamond/dot/line pattern (dark variant) |
| 4 | Social Proof + Case Study | `#FFFFFF` | None |
| 5 | Final CTA | Dark gradient (animated, 135deg) | Bracket pattern (dark variant) |

---

## 2. Color System

### Per-Vertical Color Tokens

Use `{token}` placeholders below. Replace with the correct column for each vertical.

| Token | Trade Shows (violet) | Tech Recruiting (teal) | Field Sales (amber) | Facilities (indigo) | Events & Venues (crimson) |
|-------|---------------------|----------------------|--------------------|--------------------|--------------------------|
| `heroGradient` | `#2D0770, #4A0FA8, #9B5FE8` | `#040E28, #1A8A76, #5FD9C2` | `#1A0A00, #A86B00, #F2B33D` | `#0D0820, #3A2073, #5B4499` | `#1A0400, #8F200A, #F25E3D` |
| `lightGradient` | `#FCFAFF, #F5F0FC` | `#E8FDF8, #F0FFFC` | `#FFF9E8, #FFFCF0` | `#EEF0FF, #F4F5FF` | `#FFF2EE, #FFF7F5` |
| `primary` | `#6B21D4` | `#1A8A76` | `#A86B00` | `#3A2073` | `#8F200A` |
| `accent` | `#9B5FE8` | `#5FD9C2` | `#F2B33D` | `#5B4499` | `#F25E3D` |
| `lightAccent` | `#C4A5F0` | `#A3EBD8` | `#F5D590` | `#B8A0D8` | `#F9A08E` |
| `ctaLinkColor` | `#C4A5F0` | `#5FD9C2` | `#F2B33D` | `#B8A0D8` | `#F9A08E` |
| `bulletDotColor` | `#9B5FE8` | `#5FD9C2` | `#F2B33D` | `#9B5FE8` | `#F25E3D` |
| `iconStrokeColor` | `#9B5FE8` | `#5FD9C2` | `#F2B33D` | `#5B4499` | `#F25E3D` |
| `topBarGradient` | `#9B5FE8 → #6B21D4` | `#5FD9C2 → #1A8A76` | `#F2B33D → #A86B00` | `#5B4499 → #3A2073` | `#F25E3D → #8F200A` |
| `bracketStroke` (light bg) | `#7B3FD4` | `#1A8A76` | `#A86B00` | `#3A2073` | `#8F200A` |
| `glowOrb1` | `#C4A5F0` | `#A3EBD8` | `#F5D590` | `#B8A0D8` | `#F9A08E` |
| `glowOrb2` | `#6B21D4` | `#1A8A76` | `#A86B00` | `#3A2073` | `#8F200A` |

### Fixed Colors (Same Across All Verticals)

| Token | Value | Usage |
|-------|-------|-------|
| Eyebrow (light bg) | `#00BBA5` | Section 2 & 4 eyebrows |
| Eyebrow (dark bg) | `rgba(255,255,255,0.6)` | Section 1, 3, 5 eyebrows |
| Dark text | `#061341` | Headlines on light backgrounds |
| Body text (light bg) | `rgba(6,19,65,0.6)` | Body copy on light backgrounds |
| Muted text (light bg) | `rgba(6,19,65,0.55)` | Feature bullets, case study bullets |
| White | `#FFFFFF` | Headlines on dark backgrounds |
| White 85% | `rgba(255,255,255,0.85)` | Subheadline on dark |
| White 55% | `rgba(255,255,255,0.55)` | Body text on dark |
| White 50% | `rgba(255,255,255,0.50)` | Stat labels, descriptions on dark |
| White 40% | `rgba(255,255,255,0.40)` | Muted helper text on dark |
| Case study stat gradient | `linear-gradient(135deg, #00BBA5, #1A56DB)` | Always action gradient |
| Testimonial role color | Same as `primary` | Per vertical |
| Testimonial dot active | Same as `primary` | Per vertical |

### ROX Gauge Zone Colors (Fixed)

| Zone | Angle | Color | Label |
|------|-------|-------|-------|
| Critical Gap | 0 - 70.2deg | `#E5484D` | Critical |
| Needs Optimization | 70.2 - 124.2deg | `#F2B33D` | Optimize |
| High ROX | 124.2 - 151.2deg | `#5FD9C2` | High ROX |
| Elite ROX | 151.2 - 180deg | `#0CF4DF` | Elite |

---

## 3. Typography

All text uses `fontFamily: "var(--font-inter)"`.

### Headlines

| Element | Weight | Size | Color | Letter-spacing | Line-height | Max-width |
|---------|--------|------|-------|---------------|-------------|-----------|
| H1 (hero) | 500 | `clamp(34px, 5.5vw, 52px)` | `#FFFFFF` | `-0.02em` | `1.08` | 820px |
| H2 (section, light) | 500 | `clamp(28px, 4.5vw, 42px)` | `#061341` | `-0.02em` | `1.1` | 700px |
| H2 (ROX) | 500 | `clamp(31px, 5vw, 46px)` | `#FFFFFF` | `-0.02em` | `1.1` | 770px |
| H2 (How It Works) | 500 | `clamp(24px, 3.5vw, 36px)` | `#FFFFFF` | `-0.02em` | `1.1` | 500px |
| H2 (Final CTA) | 500 | `clamp(32px, 4.5vw, 44px)` | `#FFFFFF` | `-0.02em` | `1.08` | 640px |
| H3 (feature card) | 500 | 17px | `#061341` | default | default | -- |
| H3 (workflow card) | 500 | 17px | `#FFFFFF` | default | default | -- |
| H3 (case study) | 500 | 22px | `#061341` | default | default | -- |

### Subheads & Body

| Element | Weight | Size | Color | Line-height | Max-width |
|---------|--------|------|-------|-------------|-----------|
| Subheadline (hero) | 500 | `clamp(16px, 2vw, 20px)` | `rgba(255,255,255,0.85)` | default | 660px |
| Body (hero) | 300 | 15px | `rgba(255,255,255,0.55)` | 1.5 | 560px |
| Body (section 2) | 300 | 15px | `rgba(6,19,65,0.6)` | 1.5 | 480px |
| Body (final CTA) | 300 | 15px | `rgba(255,255,255,0.60)` | 1.5 | 560px |
| Feature bullet | 400 | 13px | `rgba(6,19,65,0.55)` | 1.6 | -- |
| Section 2 bullet | 400 | 14px | `rgba(6,19,65,0.6)` | 1.6 | -- |
| Workflow body | 400 | 12px | `rgba(255,255,255,0.55)` | 1.6 | -- |

### Eyebrows

| Context | Weight | Size | Tracking | Transform | Color |
|---------|--------|------|----------|-----------|-------|
| Light bg | 600 | 12px | 0.14em | uppercase | `#00BBA5` |
| Dark bg | 600 | 12px | 0.14em | uppercase | `rgba(255,255,255,0.6)` |

### Stats

| Element | Weight | Size | Color | Letter-spacing |
|---------|--------|------|-------|---------------|
| Hero stat number | 500 | `clamp(36px, 4vw, 44px)` | `#FFFFFF` | `-0.02em` |
| Hero stat label | 400 | 13px | `rgba(255,255,255,0.50)` | default |
| ROX card value | 600 | 32px | `#FFFFFF` | `-0.02em` |
| ROX card label | 500 | 14px | `{lightAccent}` | default |
| ROX card desc | 300 | 13px | `rgba(255,255,255,0.45)` | default |
| Case study stat | 600 | 40px | action gradient text | `-0.02em` |
| Case study stat label | 400 | 13px | `rgba(6,19,65,0.50)` | default |
| Workflow step number | 600 | 32px | `rgba({lightAccent}, 0.3)` | default |
| Gauge score | 600 | 40px (SVG) | `#FFFFFF` | default |

### Buttons

| Type | Weight | Size | Padding | Border-radius |
|------|--------|------|---------|--------------|
| Primary CTA | 600 | 14px | `py-3.5 px-7` (14px 28px) | 8px |
| Secondary CTA | 600 | 14px | `py-3.5 px-7` | 8px |
| Case study CTA | 600 | 14px | `py-3 px-6` (12px 24px) | 8px |

Primary CTA bg: `linear-gradient(135deg, rgba({accent},0.5), rgba({lightAccent},0.4))`
Primary CTA border: `1.5px solid rgba({lightAccent},0.35)` (hover: 0.6)
Secondary CTA bg: `transparent`
Secondary CTA border: `1.5px solid rgba(255,255,255,0.35)` (hover: 0.6)
Case study CTA bg: `linear-gradient(135deg, {primary}, {accent})`

---

## 4. Section Details

### Section 1: Hero

**Container:**
```
min-height: 560px
padding-top: 140px
padding-bottom: 100px
background: animated gradient (bgShift 16s), 200% 200%
```

**Geometric SVG overlay:**
```html
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMaxYMax slice">
  <path d="M1440 900 L1440 270 L960 0 L480 0 L1008 360 L1008 900 Z" fill="white" fillOpacity="0.05" />
  <path d="M1440 900 L1440 468 L864 108 L384 108 L864 468 L864 900 Z" fill="white" fillOpacity="0.04" />
</svg>
```

**Ambient glow orbs:**
- Orb 1: 600x600, `radial-gradient(circle, {lightAccent}, transparent 70%)`, opacity 0.07, blur 120px, top 10%, left 60%, ambientFloat1 12s
- Orb 2: 500x500, `radial-gradient(circle, {primary}, transparent 70%)`, opacity 0.05, blur 100px, bottom 0%, left 10%, ambientFloat2 15s

**Content order:**
1. H1 headline (delay 0.1)
2. Subheadline (delay 0.18)
3. Body text (delay 0.24)
4. CTA pair (delay 0.30)
5. Video placeholder mobile `lg:hidden` (delay 0.36)
6. Stat row (delay 0.42)
7. Video placeholder desktop `hidden lg:flex`, absolute positioned right (delay 0.44)

**Stat row:** flex-row with 1px white/15% vertical dividers (24px margin each side, 48px height)

**Video placeholder:**
- Mobile: 16:9, maxWidth 400px, below CTAs
- Desktop: absolute, top 140px, bottom 100px, right 48px, width 380px, 1:1
- Glass card: `rgba(6,19,65,0.4)` bg, `rgba({lightAccent},0.15)` border, 16px radius, blur 12px
- Play button: circle 56px (mobile) / 64px (desktop), `rgba(255,255,255,0.12)` bg, `rgba(255,255,255,0.20)` border

### Section 2: Why Momentify + Features

**Container:**
```
padding: py-16 sm:py-24
background: linear-gradient(145deg, {lightGradient})
```

**Pattern overlay:** Bracket pattern (light variant) with top color bar (3px, `{topBarGradient}`)

**Two-column layout:** `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`, mb 64px
- Left: eyebrow, H2, body paragraph, bullet list
- Right: product image (max-width 520px)

**Feature grid:** `grid-cols-1 md:grid-cols-2 gap-6`

**Feature card:**
```
background: rgba(255,255,255,0.85)
backdropFilter: blur(8px)
border: 1px solid rgba({primary},0.1)
borderRadius: 16px
padding: 32px 28px
hover: -translate-y-1
```

**Icons:** 32x32 SVG, stroke color `{accent}`, strokeWidth 1.4-1.8

### Section 3: ROX + How It Works

**Container:**
```
padding: 100px 0
background: linear-gradient(135deg, {heroGradient})
id: "rox"
```

**Pattern overlay:** Dark geometric pattern (diamonds, dots, or lines per vertical)

**ROX header:** centered, mb 48px

**ROX gauge + categories grid:** `grid-cols-1 lg:grid-cols-[374px_1fr] gap-8`, maxWidth 1056px, centered

**Gauge card:**
```
background: rgba(6,19,65,0.5)
border: 1px solid rgba({lightAccent},0.15)
borderRadius: 16px
padding: 40px 36px
text-align: center
```

**Gauge SVG:** viewBox `-20 -2 220 120`, width 320, height 175
- Background arc: full semicircle, white/6%, strokeWidth 16
- Zone arcs drawn at radius 70, center (90,100)
- Critical zone: strokeWidth 16, drawn LAST (top layer)
- Other zones: strokeWidth 8
- Score text at (90, 106), fontSize 40
- Zone labels at radius ~85, fontSize 6, white/45%

**ROX category cards:** `grid-cols-1 sm:grid-cols-2 gap-4`
```
background: rgba(255,255,255,0.05)
border: 1px solid rgba({lightAccent},0.12)
borderRadius: 12px
padding: 26px 22px
backdropFilter: blur(8px)
```

**CTA:** centered, mb 80px

**How It Works header:** eyebrow + H2 with gradient text span
- Gradient text: `linear-gradient(135deg, {lightAccent}, #FFFFFF)`

**Workflow step grid:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
```
background: rgba(255,255,255,0.06)
border: 1px solid rgba({lightAccent},0.12)
borderRadius: 16px
padding: 32px 24px
backdropFilter: blur(8px)
hover: -translate-y-1
```

Step number color: `rgba({lightAccent}, 0.3)`

### Section 4: Social Proof + Case Study

**Container:**
```
background: #FFFFFF
padding: 100px 0
```

**Testimonial carousel:**
```
background: linear-gradient(145deg, {lightGradient from brand kit})
border: 1px solid rgba({primary},0.1)
borderRadius: 16px
padding: 36px 40px
marginBottom: 64px
```

**Quote:** 16px, weight 400, `#061341`, lineHeight 1.7
**Role:** 12px, weight 500, `{primary}`
**Dots:** active = 20x8px `{primary}`, inactive = 8x8px `rgba({primary},0.2)`

**Case study card:**
```
background: #F8F9FC
border: 1px solid rgba(6,19,65,0.08)
borderRadius: 20px
padding: 48px
grid: grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16
```

**Tags:** 11px, weight 500, color `{primary}`, bg `rgba({primary},0.08)`, radius 20px, padding 4px 12px

**Stat card:** bg `#FFFFFF`, border `rgba(6,19,65,0.08)`, radius 12px, padding 20px 24px

### Section 5: Final CTA

**Container:**
```
padding: 120px 0
background: animated gradient (same as hero)
id: "demo"
```

**Pattern overlay:** Bracket pattern (dark variant, white strokes)

---

## 5. Background Patterns per Vertical

### Bracket Pattern (Sections 2 & 5)

Used on light (section 2) and dark (section 5) backgrounds. L-shaped corner strokes positioned at bottom-right.

**Light variant:** Stroke color = `{bracketStroke}`, opacities 0.15/0.10/0.06/0.09
**Dark variant:** Stroke color = `white`, opacities 0.08/0.05/0.03/0.05
**Top color bar** (section 2 only): 3px, `linear-gradient(90deg, {accent}, {primary})`

```html
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMaxYMax slice">
  <path d="M 1224 900 L 1224 810 L 1440 810" stroke="{color}" strokeOpacity="{op1}" strokeWidth="1.6" />
  <path d="M 1032 900 L 1032 684 L 1440 684" stroke="{color}" strokeOpacity="{op2}" strokeWidth="1.2" />
  <path d="M 816 900 L 816 531 L 1440 531" stroke="{color}" strokeOpacity="{op3}" strokeWidth="0.8" />
  <path d="M 1152 0 L 1152 80 L 1440 80" stroke="{color}" strokeOpacity="{op4}" strokeWidth="1" />
</svg>
```

### Diamond Pattern (Section 3 dark bg)

Scattered rotated diamond frames. White strokes/fills at low opacity. Used for violet and indigo.

```html
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
  <rect x="1128" y="40" width="206" height="206" rx="4" transform="rotate(45 1231 143)" stroke="white" strokeOpacity="0.1" strokeWidth="1.2" fill="none" />
  <rect x="888" y="162" width="134" height="134" rx="4" transform="rotate(45 955 229)" fill="white" fillOpacity="0.04" />
  <rect x="1224" y="342" width="106" height="106" rx="4" transform="rotate(45 1277 395)" stroke="white" strokeOpacity="0.08" strokeWidth="1" fill="none" />
  <rect x="1008" y="558" width="77" height="77" rx="4" transform="rotate(45 1046 596)" fill="white" fillOpacity="0.05" />
  <rect x="768" y="360" width="58" height="58" rx="4" transform="rotate(45 797 389)" stroke="white" strokeOpacity="0.05" strokeWidth="0.8" fill="none" />
</svg>
```

### Dot Grid Pattern (Section 3 dark bg)

Used for teal. Small repeating dots.

```html
<svg viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice">
  <defs>
    <pattern id="dots" patternUnits="userSpaceOnUse" width="36" height="36">
      <circle cx="18" cy="18" r="1.4" fill="white" fill-opacity="0.15" />
    </pattern>
  </defs>
  <rect width="600" height="500" fill="url(#dots)" />
</svg>
```

### Cross Pattern (Section 3 dark bg)

Used for amber. Scattered cross shapes.

See `Brand/backgrounds.html` → `amber-crosses` for full SVG.

### Diagonal Lines Pattern (Section 3 dark bg)

Used for crimson. Repeating diagonal lines.

```html
<svg viewBox="0 0 600 500" preserveAspectRatio="xMidYMid slice">
  <defs>
    <pattern id="lines" patternUnits="userSpaceOnUse" width="20" height="20">
      <line x1="0" y1="20" x2="20" y2="0" stroke="white" stroke-opacity="0.07" stroke-width="0.7" />
    </pattern>
  </defs>
  <rect width="600" height="500" fill="url(#lines)" />
</svg>
```

---

## 6. Animation System

### Framer Motion Variants

```typescript
const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
```

### Viewport Trigger

```typescript
whileInView="visible"
viewport={{ once: true, amount: 0.15 }}
// amount: 0.1 for grids with many items
```

### Hero Animation Delays

| Element | Delay |
|---------|-------|
| H1 | 0.1s |
| Subheadline | 0.18s |
| Body | 0.24s |
| CTAs | 0.30s |
| Video (mobile) | 0.36s |
| Stats | 0.42s |
| Video (desktop) | 0.44s |

### CSS Keyframes (defined in globals.css)

```css
@keyframes bgShift { 0%,100% { background-position: 0% 0%; } 50% { background-position: 100% 100%; } }
@keyframes ambientFloat1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-60px,45px) scale(1.15); } }
@keyframes ambientFloat2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,-35px) scale(1.2); } }
```

---

## 7. Spacing Reference

### Section Padding

| Section | Padding |
|---------|---------|
| Hero | top: 140px, bottom: 100px |
| Why Momentify | `py-16 sm:py-24` (64px / 96px) |
| ROX + How It Works | 100px top and bottom |
| Social Proof | 100px top and bottom |
| Final CTA | 120px top and bottom |

### Content Container

```
max-width: 7xl (1280px)
padding-x: 24px (px-6), 48px on lg (lg:px-12)
```

### Common Margins

| Element | Margin |
|---------|--------|
| Eyebrow → H2 | mb-4 (16px) |
| H2 → body | mb 20px |
| Body → bullets | mb 28px |
| Section 2 two-col → feature grid | mb 64px |
| ROX header → gauge grid | mb 48px |
| ROX gauge grid → CTA | mb 40px |
| ROX CTA → How It Works | mb 80px |
| Testimonial → case study | mb 64px |

### Border Radius

| Element | Radius |
|---------|--------|
| Cards (feature, workflow, ROX) | 16px |
| ROX category cards | 12px |
| Case study container | 20px |
| Case study stat cards | 12px |
| Buttons | 8px (rounded-lg) |
| Tags | 20px |

---

## 8. Data Structures

Each solution page requires these content arrays:

```typescript
// 3 industry stats
const heroStats = [
  { number: string, label: string },
];

// 4 key features with 3 bullets each
const keyFeatures = [
  { headline: string, bullets: string[], icon: string },
];

// 4 ROX categories
const roxCategories = [
  { label: string, value: string, description: string },
];

// 4 workflow steps
const workflowSteps = [
  { step: "01"|"02"|"03"|"04", headline: string, body: string },
];

// 3 testimonials
const testimonials = [
  { quote: string, role: string },
];

// 3 case study stats
const caseStudyStats = [
  { number: string, label: string },
];
```

---

## 9. File Structure

```
src/
  app/
    solutions/
      trade-shows/page.tsx          # Route: imports TradeShowsSolution
      technical-recruiting/page.tsx  # Route: imports TechRecruitingSolution
      field-sales/page.tsx           # etc.
      facilities/page.tsx
      events-venues/page.tsx
  components/
    solutions/
      TradeShowsSolution.tsx         # Reference implementation
      TechRecruitingSolution.tsx     # New pages follow same structure
      FieldSalesSolution.tsx
      FacilitiesSolution.tsx
      EventsVenuesSolution.tsx
```

Each route page is minimal:

```typescript
import TradeShowsSolution from "@/components/solutions/TradeShowsSolution";
export default function TradeShowsPage() {
  return <TradeShowsSolution />;
}
```

---

## 10. Implementation Checklist

When creating a new solution page:

- [ ] Copy `TradeShowsSolution.tsx` as template
- [ ] Replace all color values using the token table in Section 2
- [ ] Swap background pattern components (bracket → appropriate variant)
- [ ] Update all content arrays (stats, features, ROX categories, workflow, testimonials, case study)
- [ ] Update eyebrow text, headlines, body copy, CTA labels
- [ ] Update hero SVG geometric shapes (same structure, adjust fill opacity if needed)
- [ ] Update ambient glow orb colors
- [ ] Update icon stroke colors in Icon components
- [ ] Create route page in `src/app/solutions/{slug}/page.tsx`
- [ ] Run `npm run build` to verify
- [ ] Visual check: verify color scheme renders correctly across all 5 sections
