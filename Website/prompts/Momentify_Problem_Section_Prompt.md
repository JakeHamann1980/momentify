# Momentify — Problem Section
## Claude Code prompt

Reference the brand kit already in this project before touching any code. Do not approximate colors or tokens.

---

## Overview

Replace the existing problem section content and layout entirely. The section uses a white background, left-aligned layout, and card styling consistent with the attached reference screenshot. The card pattern uses a colored top border bar, icon in a tinted pill, title, body, and no "Learn More" link on these cards since they are problem statements, not navigational items.

---

## Background and spacing

- Background: white #FFFFFF
- Section padding: py-24 desktop, py-16 mobile
- Max content width: 1200px, centered with auto horizontal margins
- All text and content: left-aligned

---

## Section label

```
THE PROBLEM
```

- Color: Cyan #0CF4DF
- Font: Inter 600, 12px, letter-spacing: 0.14em, all-caps
- Margin bottom: 16px

---

## Headline

```
Billions spent on moments.
Most have no idea what worked.
```

- Font: Inter 800
- Size: 52px desktop, 38px tablet, 28px mobile
- Color: Deep Navy #061341
- Line height: 1.1
- Max width: 680px
- Left aligned
- The two lines break intentionally. Do not reflow into one line on desktop.

---

## Stat row

Two stats displayed side by side in a row, left aligned, sitting 40px below the headline. On mobile they stack vertically with 24px gap.

Each stat block:
- Stat number: Inter 800, 56px, line height 1
- Stat label: Inter 400, 15px, Deep Navy at 60%, max-width 220px, line height 1.5
- Gap between number and label: 12px

**Stat 1**
- Number: `$50B`
- Color: Deep Navy #061341
- Label: `Spent annually on trade shows, recruiting events, and facility visits in the US alone.`

**Stat 2**
- Number: `20%`
- Color: Cyan #0CF4DF — use the darker Teal #00BBA5 so it reads on white
- Label: `Fewer than 1 in 5 organizations can tie event investment to measurable outcomes.`

A vertical divider between the two stats: 1px solid, Deep Navy at 12% opacity, height 64px, vertically centered. Hidden on mobile.

Gap between stat 1 and the divider, and divider and stat 2: 48px each side.

---

## Quote cards

Four cards in a 2x2 grid on desktop, 1 column stacked on mobile. Gap: 24px. Cards sit 48px below the stat row.

Each card uses the same pattern as the reference screenshot:

**Card structure:**
- Background: white
- Border: 1px solid #E5E9EF
- Border radius: rounded-2xl
- Top color bar: 4px solid, full width, sits flush at the very top edge of the card, border-radius top only
- Box shadow: 0 2px 12px rgba(0,0,0,0.06)
- Hover: shadow increases to 0 4px 24px rgba(0,0,0,0.10), translate-y-[-2px], transition 200ms
- Padding: p-8

**Icon treatment:**
A large opening quotation mark instead of an icon. Style it as a display element, not functional punctuation.
- Character: `"`
- Font: Inter 800, 64px
- Color: card accent color at 20% opacity
- Position: top-left of card content area, margin-bottom -16px (pulls the title up close to it)
- Line height: 1

**Quote text:**
- Font: Inter 400, italic
- Size: 17px
- Color: Deep Navy #061341 at 85%
- Line height: 1.7

No attribution line. No "Learn More" link.

---

**Card 1** — Top bar color: Violet #6B21D4
Quote: `We leave events with a pile of business cards and no idea which leads matter.`

**Card 2** — Top bar color: Teal #00BBA5
Quote: `Our booth is busy, but we cannot tie engagement to outcomes.`

**Card 3** — Top bar color: Crimson #F25E3D
Quote: `Our suites are full, but our data is empty. Zero follow-up clarity.`

**Card 4** — Top bar color: Amber #F2B33D
Quote: `Facilities tours and recruiting events are black holes. No tracking, no insight.`

The four accent colors map intentionally to four of the five Momentify solution colors. This is a subtle visual setup for the solutions section that follows.

---

## Closing line

Sits 48px below the card grid, left aligned, max-width 560px.

```
The problem is not effort. It is visibility.
```

- Font: Inter 600, italic
- Size: 20px
- Color: Deep Navy #061341 at 50%

---

## Scroll reveal animation

Use the same Framer Motion scroll reveal pattern already established on the page.

- Section label and headline animate together: fade up, opacity 0 to 1, y 20px to 0, 0.5s ease-out
- Stat row animates next: same treatment, 100ms delay after headline
- Cards animate as a group with stagger: each card fades up with 80ms stagger between them
- Closing line animates last: same fade up, after all cards are visible
- Trigger: 15% viewport threshold

---

## Copy rules

- No em dashes anywhere. Use a period or restructure the sentence.
- No buzzwords or startup clichés.
- Do not rewrite any copy marked above. Use it exactly as written.
- Left align all text. No centered copy in this section.
