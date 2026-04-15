# Momentify Brand + Design System Reference
# Paste this at the START of every GTM Claude Code session before any other prompt.

---

## Who We Are

Momentify is an engagement intelligence platform. We help teams understand what actually
happened during in-person moments and what to do next while it still matters.

We are NOT a lead capture tool, event app, or event management platform.
We ARE an engagement intelligence layer that sits above fragmented event management systems.

---

## Voice and Tone

Confident. Grounded. Operator-led.
We sound like people who have been on the floor, in the booth, and in the room.

Rules that apply to every single piece of copy in this codebase:
- Short declarative sentences. Split anything over 20 words.
- No em dashes. Use a period or restructure the sentence.
- No buzzwords: seamless, powerful, robust, revolutionary, innovative, unlock, game-changing, move the needle, cutting-edge
- No forced enthusiasm
- No startup clichés
- Content should sound natural when spoken aloud
- Always connect: problem, insight, value, outcome
- Lead with what the reader loses by not solving this problem

Core brand phrases (use as reference, not verbatim copy):
- "Stop paying for moments you can't measure."
- "Most teams collect leads. The best teams capture intent."
- "Others capture leads. We capture outcomes."
- "The problem isn't effort. It's visibility."
- "What you don't measure is what you lose."

---

## Color Tokens

These are the canonical Momentify brand colors. Use these exact values everywhere.

| Token        | Hex       | Usage                                              |
|--------------|-----------|----------------------------------------------------|
| Deep Navy    | #061341   | Primary text, backgrounds, buttons                 |
| Midnight     | #070E2B   | Dark page backgrounds                              |
| Plum         | #1A0533   | Dark gradient accent                               |
| Navy Mid     | #1a2e73   | Secondary navy, sidebar accents                    |
| Cyan         | #0CF4DF   | Primary accent, eyebrows, active states, CTAs      |
| Tag Green    | #0AA891   | Tag text on light backgrounds                      |
| Teal         | #00bba5   | Secondary brand color                              |
| Gray Page    | #F8F9FC   | Light page backgrounds, section alternation        |
| White        | #FFFFFF   | Cards, content areas                               |
| Action Grad  | linear-gradient(135deg, #0CF4DF, #1A56DB) | Primary CTA buttons, number pills |
| Depth Grad   | linear-gradient(135deg, #1a2e73, #061341) | Hero sections, dark cards          |

Opacity scales for Deep Navy text on light backgrounds:
- Primary body: rgba(6,19,65,1.00)
- Secondary: rgba(6,19,65,0.55)
- Muted: rgba(6,19,65,0.40)
- Faint/labels: rgba(6,19,65,0.35)
- Borders: rgba(6,19,65,0.08)

Opacity scales for white text on dark backgrounds:
- Primary: rgba(255,255,255,1.00)
- Secondary: rgba(255,255,255,0.65)
- Muted: rgba(255,255,255,0.50)
- Faint: rgba(255,255,255,0.35)
- Borders: rgba(255,255,255,0.08)

---

## Typography

Font stack: `'Inter', system-ui, -apple-system, sans-serif`
Secondary brand font (headings only, brand kit contexts): `'Syne', sans-serif`

| Use               | Size   | Weight | Notes                                          |
|-------------------|--------|--------|------------------------------------------------|
| Eyebrow           | 11px   | 600    | Cyan, ALL CAPS, letter-spacing: 0.14em         |
| H1 hero           | 48px   | 800    | White on dark, Deep Navy on light              |
| H2 section        | 36–42px| 800    | Deep Navy or White                             |
| H3 card title     | 20–24px| 700    | Deep Navy                                      |
| H4 label          | 16px   | 700    | Deep Navy                                      |
| Body              | 14–16px| 400    | Deep Navy at 55%, line-height 1.65–1.75        |
| Stat number       | 44–52px| 800    | White or Deep Navy                             |
| Stat label        | 13px   | 400    | White at 50% or Deep Navy at 50%               |
| Quote             | 22–24px| 500    | Italic, White or Deep Navy                     |
| Tag               | 11px   | 600    | #0AA891 on rgba(12,244,223,0.10) bg            |
| CTA primary       | 15–16px| 700    | White on gradient background                   |
| CTA secondary     | 15–16px| 600    | Deep Navy on white, border rgba(6,19,65,0.15)  |
| Trust/fine print  | 12–13px| 400    | White at 35% or Deep Navy at 35%               |

---

## Logo Files

| File                  | Path                        | Usage                              |
|-----------------------|-----------------------------|------------------------------------|
| Primary logo (color)  | /public/Momentify-Logo.svg  | Light backgrounds                  |
| White logo            | /public/Logo_White.png      | Dark backgrounds, sidebar, overlays|
| Background asset      | /public/BG-noline.png       | Hero section background texture    |

Always use the white logo on Deep Navy or dark gradient backgrounds.
Always use the color logo on white or #F8F9FC backgrounds.

---

## Layout Principles

- All body content is left-aligned. Never center body text.
- Max content width: 1200px, centered with auto margins
- Standard page padding: 48px horizontal on desktop, 24px on mobile
- Section spacing: 56–72px between major sections
- Card border-radius: 12px (standard), 8px (small), 16px (large/hero)
- Standard card border: 1px solid rgba(6,19,65,0.08)
- Standard card shadow: 0 1px 3px rgba(6,19,65,0.08), 0 4px 12px rgba(6,19,65,0.04)
- Hover shadow: 0 4px 16px rgba(6,19,65,0.12), 0 8px 24px rgba(6,19,65,0.06)

Alternating section backgrounds (light pages):
- White (#FFFFFF) for primary content sections
- Gray (#F8F9FC) for secondary/supporting sections
- Full-width dark gradient for quote blocks and CTAs

---

## Component Patterns

### Eyebrow + Heading pattern
```
<p class="eyebrow">SECTION LABEL</p>
<h2>Section Heading</h2>
<p class="subhead">One supporting sentence that expands the heading.</p>
```
Eyebrow: 11px, 600, Cyan, letter-spacing 0.14em, ALL CAPS, margin-bottom 10px
Heading: Inter 800, size depends on context
Subhead: 16–17px, 400, Deep Navy at 55%, margin-top 8px

### Tag / Pill pattern
Background: rgba(12,244,223,0.10)
Text color: #0AA891
Font: 11px, 600, letter-spacing 0.02em
Padding: 4px 10px
Border-radius: 4px
No border needed

### Button patterns
Primary: gradient background (#0CF4DF to #1A56DB), white text, 700, 15px, border-radius 8px, padding 12px 24px, height 44px
Secondary: white background, border 1px solid rgba(6,19,65,0.15), Deep Navy text, 600, 15px, same sizing
Hover primary: opacity 0.9, translateY(-2px)
Hover secondary: border-color Cyan, color Cyan
Transition: all 200ms ease

### Card hover pattern
Default: box-shadow 0 1px 3px rgba(6,19,65,0.08)
Hover: box-shadow 0 4px 16px rgba(6,19,65,0.12), translateY(-3px)
Transition: all 200ms ease

### Stat chip (header area)
Background: white or rgba(255,255,255,0.08) on dark
Border: 1px solid rgba(6,19,65,0.08) on light, rgba(255,255,255,0.12) on dark
Border-radius: 8px
Padding: 8px 14px
Font: 13px, 600, Deep Navy (light) or White (dark)

---

## Interaction Patterns

- Scroll reveal: IntersectionObserver, threshold 0.1, translateY(20px) to translateY(0), opacity 0 to 1, duration 500ms ease, stagger 100ms between sibling elements
- Hover transitions: 200ms ease throughout, no exceptions
- Accordion open/close: max-height animation, 300ms ease
- Focus states: outline 2px solid Cyan, outline-offset 2px
- Active link in sidebar: left border 3px Cyan + background rgba(255,255,255,0.06)

---

## GTM Section Specific: CSS Theme Variables

The GTM section uses CSS variables for light/dark theme switching.
Apply `data-theme` to the GTM layout wrapper div only (not html).

```css
[data-theme="light"] {
  --gtm-bg-page:      #F8F9FC;
  --gtm-bg-card:      #FFFFFF;
  --gtm-border:       rgba(6,19,65,0.08);
  --gtm-text-primary: #061341;
  --gtm-text-muted:   rgba(6,19,65,0.50);
  --gtm-text-faint:   rgba(6,19,65,0.35);
  --gtm-cyan:         #0CF4DF;
  --gtm-tag-bg:       rgba(12,244,223,0.10);
  --gtm-tag-text:     #0AA891;
  --gtm-layer-bg:     #FFFFFF;
  --gtm-layer-hover:  #F0F9FF;
  --gtm-shadow:       0 1px 3px rgba(6,19,65,0.08), 0 4px 12px rgba(6,19,65,0.04);
  --gtm-shadow-hover: 0 4px 16px rgba(6,19,65,0.12), 0 8px 24px rgba(6,19,65,0.06);
}

[data-theme="dark"] {
  --gtm-bg-page:      #070E2B;
  --gtm-bg-card:      rgba(255,255,255,0.04);
  --gtm-border:       rgba(255,255,255,0.08);
  --gtm-text-primary: #FFFFFF;
  --gtm-text-muted:   rgba(255,255,255,0.55);
  --gtm-text-faint:   rgba(255,255,255,0.30);
  --gtm-cyan:         #0CF4DF;
  --gtm-tag-bg:       rgba(12,244,223,0.12);
  --gtm-tag-text:     #0CF4DF;
  --gtm-layer-bg:     rgba(255,255,255,0.04);
  --gtm-layer-hover:  rgba(12,244,223,0.06);
  --gtm-shadow:       0 1px 3px rgba(0,0,0,0.30), 0 4px 12px rgba(0,0,0,0.20);
  --gtm-shadow-hover: 0 4px 20px rgba(0,0,0,0.40), 0 8px 32px rgba(0,0,0,0.25);
}
```

---

## ROX Framework Reference

ROX = Return on Experience. Proprietary Momentify framework. Not to be confused with ROI.

Four scored dimensions (equally weighted, 0 to 100 each):
1. Lead Capture Efficiency
2. Engagement Quality
3. Follow-Up Speed
4. Conversion Effectiveness

ROX Tiers:
- 0 to 39: Critical Gap
- 40 to 69: Needs Optimization
- 70 to 84: High ROX
- 85 to 100: Elite ROX

Potential Value Generated is a separate output (not a scored dimension):
Formula: qualified leads x value per qualified lead
Display in amber/teal to visually distinguish from the four scored categories.

---

## Key Proof Points (use in generated content, never fabricate numbers)

- Mustang CAT: 250+ qualified leads at CONEXPO, 40% lead qualification improvement, follow-up in hours not days
- $411M in potential value generated across 50+ events and 6 customers in 18 months
- 10,000 leads generated across 50+ events in 18 months
- Cat Defense: services-based engagement covering DSEI, IDEX, AUSA (do not share contract details)
- Fortune 75 Manufacturer: DistribuTECH program data (use "Fortune 75 Manufacturer" label only, never the company name)
- 200 events planned for 2026
- 40% lead qualification improvement across deployments

---

## Anti-Patterns (never do these)

- Never center body copy
- Never use em dashes
- Never use buzzwords (seamless, powerful, robust, revolutionary, cutting-edge, innovative, unlock, game-changing)
- Never pitch features before establishing the problem
- Never make Momentify sound like a lead capture tool or badge scanner
- Never imply Momentify replaces Cvent, Whova, or existing event stacks — it completes them
- Never use licensing or software language with enterprise or defense accounts — use services/managed engagement language
- Never hardcode hex values in GTM section components — use CSS variables only
- Never add top-level padding to the outermost wrapper div in artifacts or components
- Never use purple gradients on white backgrounds (off-brand)
- Never use Inter as a "distinctive" choice — it is the brand font, use it intentionally and pair with Syne for display contexts

---

## Existing Site Reference

Live site: momentifyapp.com (also momentify-website.vercel.app)
Primary visual reference for all new pages: /case-studies/mustang-cat page
Builder: Next.js, deployed on Vercel
API calls to Anthropic: server-side only via /api/* routes, never client-side

When in doubt about design decisions, match the Mustang CAT case study page pattern.
