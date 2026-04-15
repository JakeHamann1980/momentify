# Momentify Homepage Build Prompt
## Paste this directly into Claude Code

---

You are building the Momentify marketing homepage. The brand kit is already in this project. Reference it for all colors, typography, gradients, and component patterns before writing any code. Do not approximate brand values from memory.

---

## What you are building

A single-page marketing homepage at `/` for `momentifyapp.com`. The page must feel like nothing else in the event tech or lead capture category. Every competitor uses dark blue or purple SaaS palettes, leads with feature screenshots, and puts "Request a Demo" as their only CTA. This homepage does the opposite on every dimension.

The page has five scroll sections plus a nav and footer. Build them in order.

---

## Tech requirements

- Next.js with Tailwind CSS
- Use brand kit design tokens already defined in this project for all colors, gradients, and typography
- Inter font, already configured
- Framer Motion for the hero typewriter animation and any scroll reveals
- All copy is final. Do not rewrite it or improve it. Use it exactly as written below.
- Mobile responsive. Test at 375px, 768px, and 1280px breakpoints
- No placeholder images. Use CSS gradients, abstract SVG shapes, or UI mockup components built in code as visual elements until real assets are available
- Mark every slot that needs a real asset with a clearly labeled comment: `{/* ASSET NEEDED: [description] */}`

---

## Navigation

Sticky top nav. Background: transparent over hero, transitions to `bg-midnight/90 backdrop-blur` on scroll.

**Logo:** Momentify wordmark, left-aligned. Use the logo gradient (Cyan to Blue) on the logomark only.

**Nav links (center):** Solutions, Platform, Case Studies, Partners

**CTA (right):** "Schedule a Demo" button. Style: Action gradient background (Cyan #0CF4DF to Deep Blue #254FE5), dark text, rounded-full, font-semibold.

Solutions nav item opens a mega-dropdown with five solution cards, each in its solution color:
- Trade Shows & Exhibits (Violet #6B21D4)
- Technical Recruiting (Teal #5FD9C2)
- Field Sales Enablement (Amber #F2B33D)
- Facilities (Indigo #3A2073)
- Events & Venues (Crimson #F25E3D)

---

## Section 1: Hero

**Background:** Depth gradient — Plum (#7C316D) at top, bleeding into Midnight (#0B0B3C), settling into Navy (#1A2E73) at the bottom. Full viewport height. No product screenshot in the hero.

Add subtle animated particle or mesh effect in brand Cyan at very low opacity (5-8%) to give the background depth. Keep it subtle. It should feel atmospheric, not busy.

**Headline (large display, Inter 800, white, -0.025em tracking):**

```
Momentify Empowers Every
[ANIMATED WORD]
```

The animated word rotates through this exact sequence using a typewriter cursor effect. Each word fades out, the cursor blinks once, then the next word types in:

1. Trade Show
2. Recruiting Event
3. Field Interaction
4. Facility Visit
5. Live Experience
6. Moment

Each word uses the Action gradient (Cyan #0CF4DF to Deep Blue #254FE5) applied as a text gradient. Cycle time: 2.5 seconds per word. The cursor is a blinking Cyan `|` character.

**Subheadline (Inter 400, white at 80% opacity, max-w-2xl, centered):**

```
Stop paying for moments you cannot measure. Turn every interaction into intelligence your team can act on before it disappears.
```

**CTAs (centered, stacked horizontally on desktop, vertically on mobile):**

Primary: "See How It Works" — Action gradient background, dark text, rounded-full, font-semibold, py-4 px-8
Secondary: "Schedule a Demo" — white border, white text, transparent background, same sizing

**Proof bar (below CTAs, separated by 16px of space):**

Small label in Cyan, all-caps, letter-spaced: `PROVEN IN THE FIELD`

Then one stat, white, font-semibold:
```
Caterpillar Electric Power: 47% more qualified leads at DistribuTECH
```

{/* ASSET NEEDED: Hero platform walkthrough video — show admin setup side and iPad/customer side. Drop into a browser mockup component floating right of center on desktop, centered below CTAs on mobile. Until available, render an abstract animated dashboard component using brand colors. */}

---

## Section 2: The Problem

**Background:** Very dark navy, nearly Midnight (#0B0B3C). This section should feel like a clean break from the gradient hero.

**Section label (Cyan, all-caps, Inter 600, small, letter-spaced):**
```
THE PROBLEM
```

**Headline (Inter 800, white, large):**
```
You are doing the work.
You just cannot see the return.
```

**Three pain point cards arranged in a row (desktop) or stacked (mobile).**

Each card: dark background (#0F1629), Cyan left border accent (4px), rounded-lg, padding.

Card 1 — for the Event Manager:
- Icon: grid or map icon in Cyan
- Title (white, font-semibold): `Different tool at every event`
- Body (white at 70%): `Your team uses five platforms across your annual event calendar. No unified view. No comparable data. Just disconnected spreadsheets after every show.`

Card 2 — for the Recruiter or Field Rep:
- Icon: person or signal icon in Cyan
- Title (white, font-semibold): `You know who showed up. Not who showed interest.`
- Body (white at 70%): `Badge scans tell you someone stopped by. They do not tell you what they cared about, how long they stayed, or whether they are worth a follow-up call.`

Card 3 — for the VP of Marketing or Sales:
- Icon: chart or report icon in Cyan
- Title (white, font-semibold): `Events cost real money. Proof is guesswork.`
- Body (white at 70%): `You invested in the booth, the team, the travel. Leadership wants ROI. You have a lead count and a gut feeling.`

**Below the cards, a single line in white at 60% opacity, centered, italic:**
```
The problem is not effort. It is visibility.
```

---

## Section 3: The Platform

**Background:** White or very light gray (#F8F9FB). This section must feel like a clean, bright contrast to the two dark sections above.

**Section label (Deep Navy #1F3395, all-caps, Inter 600, small, letter-spaced):**
```
ONE PLATFORM
```

**Headline (Inter 800, Deep Navy, large):**
```
Every moment. Measurable results.
```

**Subhead (Inter 400, Deep Navy at 70%, max-w-xl, centered):**
```
Momentify works across every context where engagement happens and measurement has been impossible. One platform. Five solutions. No fragmentation.
```

**Five solution cards in a responsive grid (3 + 2 on desktop, 2 columns on tablet, 1 column on mobile).**

Each card structure:
- Top color bar (8px, solution color)
- Card background: white, rounded-xl, shadow-md, hover shadow-lg with subtle lift (translate-y-1 on hover)
- Solution icon or abstract shape in solution color
- Solution name (Inter 700, Deep Navy)
- One-line description (Inter 400, Deep Navy at 70%)
- "Learn more" link in solution color with arrow

Card content:

**Trade Shows & Exhibits** (Violet #6B21D4)
`From branded space to outcome-driven experience. Capture who engaged and what they cared about, in real time.`

**Technical Recruiting** (Teal #5FD9C2, use Deep Navy text since Teal is light)
`Give your team the tools to capture, engage, and follow up with top technical talent. No clipboards. No spreadsheets.`

**Field Sales Enablement** (Amber #F2B33D, use Deep Navy text)
`Smart content delivery and real-time capture at the job site, facility, or customer's shop floor.`

**Facilities** (Indigo #3A2073)
`From showroom displays to training centers. Deliver brand-aligned content, capture intent, and understand what works.`

**Events & Venues** (Crimson #F25E3D)
`Go beyond ticket sales with interactive branded experiences designed to capture, engage, and measure ROX.`

---

## Section 4: ROX

**Background:** Depth gradient — same Plum to Midnight to Navy as the hero, but reversed in direction (bottom of section is lighter). This creates visual bookending with the hero.

**Section label (Cyan, all-caps, Inter 600, small, letter-spaced):**
```
RETURN ON EXPERIENCE
```

**Headline (Inter 800, white, large):**
```
Others measure ROI.
We prove ROX.
```

**Body copy (Inter 400, white at 80%, max-w-2xl, centered):**
```
ROI tells you what something cost. ROX tells you what it was worth. Momentify captures intent, engagement depth, and behavior at the moment it happens, so you can connect real interactions to real outcomes.
```

**Two case study cards side by side (desktop) or stacked (mobile).**

Card background: white at 10% opacity, backdrop blur, rounded-xl, border at white 20% opacity (glassmorphism effect)

Card 1:
- Label (Cyan, small, all-caps): `TRADE SHOWS`
- Client: `Caterpillar Electric Power Division`
- Event: `DistribuTECH`
- Stat (large, white, Inter 800): `47%`
- Stat label (white at 70%): `increase in qualified leads`
- Supporting stats (smaller, white at 60%): `878 sessions · 518 companies · 75 dealer assignments routed automatically`

Card 2:
- Label (Cyan, small, all-caps): `TECHNICAL RECRUITING`
- Client: `Caterpillar Global Dealer Learning`
- Event: `SkillsUSA / FFA Events`
- Stat (large, white, Inter 800): `1 Platform`
- Stat label (white at 70%): `across all recruiting events`
- Supporting copy (white at 60%): `Unified recruiting across SkillsUSA, FFA, and dealer pilot events. One consistent experience. One comparable data set.`

{/* ASSET NEEDED: ROX dashboard screenshot showing real-time engagement, lead temperature scoring (hot/warm/cold), and outcome summary. Place centered below the two cards at full width in a laptop/monitor mockup. */}

---

## Section 5: Social Proof

**Background:** White or very light (#F8F9FB). Mirrors Section 3's light treatment.

**Section label (Deep Navy, all-caps, Inter 600, small, letter-spaced):**
```
TRUSTED BY
```

**Headline (Inter 800, Deep Navy):**
```
Real teams. Real results.
```

**Client proof items in a clean grid or horizontal scroll.**

Format per item: Logo (grayscale, hover reveals color) + one sentence outcome beneath in Deep Navy at 70%.

Clients:
- Caterpillar Electric Power Division — `47% more qualified leads. 75 dealer assignments automated at DistribuTECH.`
- Caterpillar Global Dealer Learning — `Unified recruiting data across SkillsUSA, FFA, and dealer network events.`
- Mustang Cat — `Consistent engagement capture across dealer locations and recruiting activations.`
- Thompson Tractor — `Field-level intelligence delivered to management without manual reporting.`

{/* ASSET NEEDED: Client logos at appropriate resolution for web. Use styled text placeholders in Deep Navy until available. */}

**Below the client grid, a single centered CTA block:**

Headline (Inter 800, Deep Navy): `What you do not measure is what you lose.`
Subhead (Inter 400, Deep Navy at 70%): `Most teams walk away from events with a spreadsheet. You will walk away with intelligence.`
Button: "Schedule a Demo" — Action gradient, dark text, rounded-full, font-semibold, py-4 px-10

---

## Footer

Background: Midnight (#0B0B3C)

**Left column:**
- Momentify logo (white wordmark)
- Tagline in white at 50%: `Turn effort into evidence.`
- Social icons: LinkedIn (primary), others as available

**Center column — Solutions:**
Trade Shows & Exhibits, Technical Recruiting, Field Sales Enablement, Facilities, Events & Venues

**Right column — Company:**
About, Case Studies, Partners, Contact, Schedule a Demo

**Bottom bar:**
`© 2026 Momentify. All rights reserved.` — white at 30%, centered or left-aligned

---

## Animation notes

- Hero typewriter: Framer Motion, staggered character reveal at 40ms per character
- Section reveals: fade-up with 20px translate on scroll entry, 0.5s ease-out, stagger children by 100ms
- Solution card hovers: translate-y-1, shadow transition at 200ms
- Nav background: opacity transition at 300ms on scroll
- No autoplay video. No carousels. No parallax on mobile.

---

## Copy rules

These apply to every text element on the page. Do not override them.

- No em dashes anywhere on the page. Use a period or restructure the sentence.
- No buzzwords: seamless, revolutionary, game-changing, cutting-edge, powerful, robust, innovative
- No startup clichés: disruptive, move the needle, at the end of the day, unlock potential
- Short declarative sentences. If a sentence runs past 20 words, split it.
- Brand voice is confident, grounded, and operator-led. It sounds like someone who has been on a trade show floor, not someone who has written about them.

---

## What to build first

1. Brand token check: confirm design tokens from the brand kit are correctly imported before writing any component
2. Nav component
3. Hero section with typewriter animation
4. Verify hero renders correctly at all three breakpoints
5. Proceed through sections 2 through 5 in order
6. Footer last

Flag any brand token that is missing from the existing kit rather than approximating it. Ask before guessing on any visual decision not covered by this brief.
