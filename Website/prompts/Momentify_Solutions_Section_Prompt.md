# Momentify — Solutions Section
## Claude Code prompt

Reference the brand kit already in this project before touching any code.

---

## Overview

Build a tabbed solution switcher section. The visitor clicks or taps a solution tab and the content panel swaps with a smooth crossfade transition. No page navigation. Everything happens in place. This is the primary product education section of the homepage.

This section sits directly below the problem section. Background: white.

Section padding: py-24 desktop, py-16 mobile.

---

## Section label

Left-aligned.

- Text: `OUR SOLUTIONS`
- Style: Cyan #0CF4DF, Inter 600, 12px, letter-spacing: 0.14em, all-caps
- Margin bottom: 16px

---

## Section headline

Left-aligned.

```
One platform. Every moment.
```

- Font: Inter 800
- Size: 48px desktop, 36px tablet, 28px mobile
- Color: Deep Navy #061341
- Line height: 1.15

---

## Section subhead

Left-aligned, below headline, margin-top: 16px, margin-bottom: 40px.

- Text: `Momentify works across every context where in-person engagement happens and measurement has been impossible.`
- Font: Inter 400, 18px, Deep Navy at 60%, max-width: 600px

---

## Tab bar

A horizontal row of five pill-style tabs sitting above the content panel. Left-aligned on desktop. Horizontally scrollable on mobile with no scrollbar visible.

Each tab:
- Font: Inter 600, 15px
- Padding: py-3 px-5
- Border radius: rounded-full
- Default state: Deep Navy at 40% text, transparent background
- Active state: solution color text, solution color background at 10%, solution color border 1.5px
- Hover state: Deep Navy at 70%, transition 150ms
- Cursor: pointer

Tab order and active colors:
1. Trade Shows and Exhibits — Violet #6B21D4
2. Technical Recruiting — Teal #5FD9C2 (use Deep Navy text since Teal is light)
3. Field Sales Enablement — Amber #F2B33D (use Deep Navy text)
4. Facilities — Indigo #3A2073
5. Events and Venues — Crimson #F25E3D

Default active tab on load: Trade Shows and Exhibits.

---

## Content panel

Below the tab bar, margin-top: 32px. Full width.

The panel has two columns on desktop: left column is copy, right column is the visual mockup stack. On mobile, copy stacks above visuals.

Column split: 45% copy, 55% visuals. Gap: 48px.

Panel transition: crossfade opacity 0 to 1 over 250ms when switching tabs. Do not slide. Do not reflow layout.

---

## Left column — Copy

**Solution label**
- Solution name in solution color, Inter 700, 13px, all-caps, letter-spacing: 0.1em
- Margin bottom: 12px

**Headline**
- Inter 800, 32px desktop, 26px mobile, Deep Navy
- Line height: 1.2
- Margin bottom: 16px

**Body**
- Inter 400, 16px, Deep Navy at 65%, line-height: 1.75
- Max width: 420px
- Margin bottom: 24px

**Three capability bullets**
- Each bullet: solution color dot (6px circle) + Inter 500, 15px, Deep Navy, line-height: 1.6
- Gap between bullets: 12px
- Margin bottom: 32px

**CTA link**
- Text: `Explore [Solution Name]`
- Solution color text, Inter 600, 15px
- Arrow icon (Lucide ArrowRight) inline after text, same color
- Hover: underline, transition 150ms

---

## Right column — Visual mockup stack

Two overlapping mockup placeholders arranged to suggest depth. The primary mockup is slightly larger and sits behind. The secondary mockup overlaps the corner of the primary at an angle suggesting it is a second device or panel.

Each placeholder is a rounded rectangle with a subtle shadow. The interior of each placeholder contains a centered label describing what asset goes there.

**Primary mockup — iPad or mobile device**
- Size: approximately 380px wide, 260px tall on desktop
- Background: Deep Navy at 6%
- Border: 1.5px dashed, solution color at 40%
- Border radius: rounded-2xl
- Shadow: shadow-lg
- Centered label inside:

```
{/* ASSET NEEDED: iPad or mobile mockup showing the Momentify
    attendee-facing experience for [Solution Name].
    Should show the engagement flow a visitor or candidate sees.
    File format: PNG with transparent background, min 800px wide */}
```

- Label text style: solution color, Inter 500, 13px, italic, centered

**Secondary mockup — Analytics dashboard**
- Size: approximately 300px wide, 200px tall
- Positioned: overlapping bottom-right corner of primary mockup, offset by approximately 40px right and 40px down, z-index above primary
- Background: white
- Border: 1px solid, solution color at 25%
- Border radius: rounded-xl
- Shadow: shadow-xl (stronger than primary to reinforce it is in front)
- Centered label inside:

```
{/* ASSET NEEDED: ROX analytics dashboard screenshot for [Solution Name].
    Should show engagement metrics, lead temperature, and outcome data.
    File format: PNG with transparent background, min 600px wide */}
```

- Label text style: solution color, Inter 500, 13px, italic, centered

On mobile, stack the two mockups vertically with no overlap. Primary above, secondary below. Reduce sizes to fit viewport.

---

## Solution content

Fill the left column copy for each tab as follows. Do not rewrite. Use exactly as written.

---

### Tab 1 — Trade Shows and Exhibits

Label: `TRADE SHOWS AND EXHIBITS`
Headline: `From branded space to outcome-driven experience.`
Body: `Most booths collect badge scans. Momentify captures what visitors actually cared about. Every conversation is contextualized, every lead is scored, and your team knows exactly who to follow up with before the show ends.`
Bullets:
- Real-time lead capture with persona tagging
- Engagement scoring by conversation depth and content interaction
- Dealer and territory routing automated at the point of capture

CTA: `Explore Trade Shows and Exhibits`

---

### Tab 2 — Technical Recruiting

Label: `TECHNICAL RECRUITING`
Headline: `Give your recruiters the tools the role demands.`
Body: `Technical recruiting events move fast. Momentify gives your team mobile-first capture, role-specific content delivery, and engagement analytics that tell you who is worth the follow-up call and who was just picking up swag.`
Bullets:
- Mobile lead capture built for fast-moving recruiting floors
- Persona-based content paths by role, program, and interest level
- Cross-event consistency across SkillsUSA, FFA, campus visits, and dealer networks

CTA: `Explore Technical Recruiting`

---

### Tab 3 — Field Sales Enablement

Label: `FIELD SALES ENABLEMENT`
Headline: `What happens at the job site should not stay at the job site.`
Body: `Field reps make the drive. They have the conversation. Then the insight disappears. Momentify captures what happened, delivers the right content in the moment, and syncs everything to your CRM before they get back in the truck.`
Bullets:
- Offline-capable mobile capture for low-connectivity environments
- Role-based content delivery on iPad at the point of conversation
- Engagement-triggered CRM exports with conversation context intact

CTA: `Explore Field Sales Enablement`

---

### Tab 4 — Facilities

Label: `FACILITIES`
Headline: `Your facility is doing more work than you know. Start measuring it.`
Body: `Showrooms, training centers, and demo floors host real buyers every day. Momentify turns those visits into structured data. You will know what content resonated, what questions came up, and which visits are worth a follow-up.`
Bullets:
- Zone-level engagement tracking across facility touchpoints
- Consistent lead capture and content delivery at every station
- ROX reporting that connects facility investment to pipeline

CTA: `Explore Facilities`

---

### Tab 5 — Events and Venues

Label: `EVENTS AND VENUES`
Headline: `A full suite is not a strategy. Knowing what it produced is.`
Body: `Ticket sales and attendance numbers tell you who showed up. Momentify tells you what happened after they walked in. Sponsor accountability, guest engagement, and follow-up clarity in one platform.`
Bullets:
- Multi-point engagement capture across zones, suites, and activations
- Sponsor-specific tracking with exportable ROX reports
- Persona-based content and experiences by section, suite, and guest type

CTA: `Explore Events and Venues`

---

## Scroll reveal

Use Framer Motion. Match the animation pattern already established on the page.

- Section label, headline, and subhead stagger in on scroll entry
- Tab bar fades in after headline
- Content panel fades in after tab bar
- One-time trigger only, do not re-animate on scroll back

---

## Copy rules

- No em dashes anywhere. Use a period or restructure the sentence.
- No buzzwords: seamless, powerful, robust, revolutionary, cutting-edge, innovative
- Do not rewrite any copy above. Use it exactly as written.
- Short declarative sentences throughout.
