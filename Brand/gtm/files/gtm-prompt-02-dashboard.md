# GTM Framework — Prompt 2 of 4: Dashboard Home

## Before You Start

Read `gtm-prompt-00-brand-system.md` in full before writing any code.
All colors must use CSS variable references from the theme system. No hardcoded hex values.
No em dashes anywhere. Match Momentify voice rules exactly.

---

## Context

Auth, sidebar layout, and theme system are already in place.
Build the GTM dashboard at `app/gtm/page.tsx`.
All content left-aligned. Max width 1200px, padding 48px, margin auto.
Section spacing: 56px between major sections.

---

## Section 1: Page Header

Left side:
- Eyebrow: `GTM COMMAND CENTER` per brand system eyebrow spec
- H1: `Go-to-Market Framework` per brand H2 spec
- Subhead: `5 solutions. 3 verticals. 2 motions. 7 execution layers.`

Right side: stat chips (per brand stat chip spec)
- "5 Solutions"
- "7 Execution Layers"
- "2 GTM Motions"

---

## Section 2: GTM Health Check

This section is a quick-reference diagnostic for the team, inspired by the "ask yourself"
pattern in top-performing GTM frameworks. It keeps the tool operational, not just informational.

Heading: "GTM Health Check"
Subhead: "Six questions to run before any outreach or content push."

Render as a 2x3 grid of question cards.
Each card: white background, border, border-radius 12px, padding 20px 22px
Number pill: gradient (per brand action gradient), 24px circle, 800 weight, Deep Navy text
Question: 14px, 700, `var(--gtm-text-primary)`, margin-top 10px
"Ask yourself" subtext: 12px, `var(--gtm-text-muted)`, margin-top 6px, line-height 1.6

Cards:

01 — ICP and Anti-ICP
"Can you describe your ICP in 5 bullet points and your Anti-ICP in 3?"
Ask yourself: Who do you explicitly NOT want as a customer? Have you written it down?

02 — Positioning Anchor
"Do buyers immediately understand what Momentify does and how it is different from Cvent?"
Ask yourself: Can you explain the positioning in one sentence without using the word 'platform'?

03 — Channel Focus
"Are you trying to run more than 2 acquisition channels at once?"
Ask yourself: Which one channel is generating the most qualified conversations right now?

04 — Attribution
"Do you know where your last 3 qualified leads came from?"
Ask yourself: Is there a required source field in your CRM for every new opportunity?

05 — Lost Reasons
"When was the last time you reviewed why deals did not close?"
Ask yourself: Do you have a required lost reason field? Are you tracking it by vertical and motion?

06 — Demo Quality
"In your last 3 demos, did you lead with discovery or product?"
Ask yourself: Did you know the Status Quo, Pain, Stakeholders, and Decision process before you showed anything?

---

## Section 3: Solution Cards

Grid: `repeat(auto-fill, minmax(300px, 1fr))`, gap 16px.

Each card: white background, border, border-radius 12px, padding 24px, hover pattern per brand system.

Card contents:
- Row 1: emoji icon 24px + priority badge right-aligned
- Solution name: 16px, 700, `var(--gtm-text-primary)`, margin-top 12px
- Description: 13px, `var(--gtm-text-muted)`, margin-top 6px, line-height 1.6
- Anti-ICP hint: small italic tag below description
  Text: "Anti-ICP: [one-line description of who NOT to target]"
  Style: 11px, italic, `var(--gtm-text-faint)`
- Layer progress bar (0 of 7 layers built, stored in localStorage `gtm_progress_{id}`)
  - Label row: "Layers built" / "0 / 7" — 12px, `var(--gtm-text-faint)`
  - Bar: 4px height, border-radius 2px, background `var(--gtm-border)`, fill action gradient
- Footer: "View Framework" link — Cyan, 13px, 700, ArrowRight icon

Priority badge per brand system (NOW green / NEXT amber / LATER gray).

Solutions:
```typescript
[
  {
    id: 'trade-shows',
    label: 'Trade Shows & Exhibits',
    icon: '🏛',
    priority: 'NOW',
    desc: 'Turn booth investment into measurable ROX.',
    antiIcp: 'Event planners without exhibitor clients. Consumer shows.',
    href: '/gtm/trade-shows'
  },
  {
    id: 'recruiting',
    label: 'Technical Recruiting',
    icon: '🎯',
    priority: 'NOW',
    desc: 'Capture, engage, and follow up with top talent.',
    antiIcp: 'High-volume hourly recruiting. Non-technical roles.',
    href: '/gtm/recruiting'
  },
  {
    id: 'field-sales',
    label: 'Field Sales Enablement',
    icon: '🗺',
    priority: 'NEXT',
    desc: 'Smart content delivery and intent capture in the field.',
    antiIcp: 'Inside sales teams. Companies without field reps.',
    href: '/gtm/field-sales'
  },
  {
    id: 'facilities',
    label: 'Facilities',
    icon: '🏢',
    priority: 'NEXT',
    desc: 'Showrooms, demo floors, and training centers.',
    antiIcp: 'Office buildings without customer-facing traffic.',
    href: '/gtm/facilities'
  },
  {
    id: 'events-venues',
    label: 'Events & Venues',
    icon: '🎪',
    priority: 'LATER',
    desc: 'Beyond ticket sales. Interactive branded experiences.',
    antiIcp: 'Small community events. Non-commercial venues.',
    href: '/gtm/events-venues'
  }
]
```

---

## Section 4: GTM Motions

Heading: "Two GTM Motions"

Two 50/50 cards, gap 16px.

**Motion A: Direct to Customer**
- Pill: `MOTION A` — per brand tag spec
- Title: "Direct to Customer" — 16px, 700
- Body: "We own the full sales motion. Target marketing and events decision-makers at OEMs, operators, and enterprise accounts."
- Role tags: VP Marketing, Event Manager, Marketing Director, Business Dev Lead
- Verticals: Heavy Equipment, Energy & Infrastructure, Aerospace & Aviation

**Motion B: Channel Partners**
- Pill: `MOTION B`
- Title: "Channel Partners" — 16px, 700
- Body: "We arm partners with the intelligence layer. Target exhibit agencies, associations, and dealer networks."
- Partner tags: Freeman, Clarion Events, Exhibit Houses, AEM, NDIA, Cat Dealer Network
- Revenue note: "Rev share per event or per seat licensed through partner" — 12px, italic, `var(--gtm-text-faint)`

All pills/tags: per brand tag spec (rgba(12,244,223,0.10) bg, #0AA891 text).

---

## Section 5: Vertical x Solution Coverage Matrix

Heading: "Vertical Coverage"

Full-width table, border-collapse separate.
Header and cell padding: 12px 16px.
Row border: 1px solid `var(--gtm-border)`.
Header background: `var(--gtm-bg-page)`.

Columns: Solution | Heavy Equipment | Energy & Infra. | Aerospace & Aviation | Sports & Entertainment

Cell states:
- Active: Cyan dot (8px circle, bg Cyan) + "Active" text — Cyan, 12px, 600
- In Scope: gray dot + "In Scope" — `var(--gtm-text-faint)`, 12px
- Not Yet: dash only — `var(--gtm-text-faint)`

Data:
```
Trade Shows:  Heavy=Active, Energy=Active, Aerospace=Active, Sports=InScope
Recruiting:   Heavy=Active, Energy=InScope, Aerospace=InScope, Sports=NotYet
Field Sales:  Heavy=Active, Energy=InScope, Aerospace=InScope, Sports=NotYet
Facilities:   Heavy=Active, Energy=InScope, Aerospace=NotYet, Sports=NotYet
Events:       Heavy=NotYet, Energy=NotYet, Aerospace=NotYet, Sports=Active
```

---

## Section 6: GTM Execution Layers Reference

Heading: "7 Execution Layers"
Subhead: "Every solution page is built across these 7 layers, adapted per motion and vertical."

Horizontal scrollable strip, gap 12px, padding-bottom 8px for scrollbar clearance.

Each card: 210px min-width, white bg, border, border-radius 10px, padding 18px.
Number: action gradient circle 28px, Deep Navy text 800.
Label: 13px, 700, `var(--gtm-text-primary)`, margin-top 10px.
Desc: 12px, `var(--gtm-text-muted)`, margin-top 4px, line-height 1.5.

```
1  ICP + Buyer Personas      "Who we target, their role, pain, budget authority, and Anti-ICP"
2  Core Message + Proof      "Positioning, differentiators, proof points per segment"
3  Lead Magnets              "ROX Audit, guides, templates, calculators"
4  Outreach Sequences        "Cold email, LinkedIn, and partner pitch flows"
5  Sales Enablement          "Discovery scripts, objection handling, one-pagers"
6  ROX Metrics + KPIs        "What success looks like and how we track it"
7  Competitive Intel         "Kill sheets vs category competitors, per vertical"
```

---

## Section 7: Quick Actions

Left-aligned, gap 12px, flex row.

Primary button: "Open Trade Shows Builder" links to `/gtm/trade-shows?builder=true`
Per brand primary button spec.

Secondary button: "View Full Framework" links to `/gtm/trade-shows`
Per brand secondary button spec.
