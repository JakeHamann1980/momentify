# Momentify — What is ROX?
## Claude Code Prompt

Read the existing codebase fully before writing any code. This is a new standalone page. Use the Mustang CAT case study page (`/case-studies/mustang-cat`) and the Trade Shows solution page (`/solutions/trade-shows`) as the primary design references. Match all CSS variables, component patterns, spacing, and animation approaches already in use. Do not introduce new styling patterns if existing ones handle the job.

---

## Page route

`/what-is-rox`

---

## Page overview

This is the definitive educational page for Return on Experience. It exists to answer the question in the nav link clearly and completely. It is not a product page. It is a concept page that positions Momentify as the team that invented and owns this metric.

The visitor landing here is somewhere between curious and skeptical. They have seen ROX mentioned in the nav or on another page and want to understand what it actually means before they commit to a demo or a calculator. This page builds conviction by explaining the concept, showing how it is scored, and connecting it to their specific vertical before driving to the calculator.

All content is left-aligned throughout. The only exception is the large ROX score tier display which is visually centered as a standalone anchor element.

---

## Page structure (top to bottom)

1. Existing site nav (no changes)
2. Hero — dark gradient
3. ROI vs ROX section — white background
4. The four categories section — gray `#F8F9FC` background
5. Score tiers section — dark gradient
6. ROX across verticals section — white background
7. Calculator CTA section — gray `#F8F9FC` background
8. Final CTA — dark gradient
9. Existing site footer (no changes)

---

## 1. Hero

Background: depth gradient. Plum `#1A0533` to Midnight `#070E2B` to Deep Navy `#061341`. Full width. Min height: 500px. Padding top: 140px. Padding bottom: 100px.

**Eyebrow**
Text: `RETURN ON EXPERIENCE`
Font: Inter 600, 11px, Cyan `#0CF4DF`, letter-spacing: 0.14em, all-caps. Margin bottom: 16px.

**Headline**
Text: `ROI tells you what you spent. ROX tells you whether it worked.`
Font: Inter 800, 52px, white, line-height: 1.05. Max width: 860px.
On mobile: 34px.
Margin bottom: 24px.

**Subhead**
Text: `Return on Experience is the measurement standard for in-person engagement. It scores the quality of every interaction, not just the count. Momentify built ROX because badge scans were never enough.`
Font: Inter 400, 18px, white at 65%, line-height: 1.65. Max width: 660px.
Margin bottom: 48px.

**CTA pair**
Two buttons inline, gap: 16px. Stack on mobile.

Primary: `Calculate Your ROX`
Style: gradient fill linear-gradient(135deg, `#0CF4DF`, `#1A56DB`). White text, Inter 700, 16px. Padding: 16px 36px. Border-radius: 8px.
Links to `#calculators` anchor on this page.

Secondary: `See It in Action`
Style: transparent, border 1.5px solid rgba(255,255,255,0.25), white text, Inter 600, 16px. Padding: 15px 32px. Border-radius: 8px.
Links to `/#rox` on the homepage.

---

## 2. ROI vs ROX section

Background: white `#FFFFFF`. Padding: 100px 0.

**Section header**
Eyebrow: `THE PROBLEM WITH ROI`
Font: Inter 600, 10px, Cyan `#0CF4DF`, letter-spacing: 0.14em. Margin bottom: 16px.

Headline: `ROI measures the invoice. ROX measures what happened after you paid it.`
Font: Inter 800, 38px, Deep Navy `#061341`, line-height: 1.15. Max width: 780px. Margin bottom: 48px.

**Comparison block**
Two-column layout. Max width: 1000px. Gap: 32px. Left 50%, right 50%.

**Left column — ROI card**
Background: `#F8F9FC`. Border-radius: 16px. Padding: 36px 32px. Border-top: 3px solid rgba(6,19,65,0.15).

Label: `TRADITIONAL ROI` — Inter 600, 10px, Deep Navy at 40%, letter-spacing 0.12em. Margin bottom: 16px.
Headline: `What you spent.` — Inter 700, 22px, Deep Navy. Margin bottom: 20px.

Four rows, each with a check icon (Deep Navy at 30%) and text:
- Total event cost
- Cost per lead
- Number of badge scans
- General booth traffic estimate

Below rows, a separator line. Then a gap statement:
`What's missing: depth of engagement, lead intent, follow-up speed, and whether any of it converted.`
Font: Inter 400, 14px, Deep Navy at 50%, italic, line-height 1.6.

**Right column — ROX card**
Background: Deep Navy `#061341`. Border-radius: 16px. Padding: 36px 32px. Border-top: 3px solid Cyan `#0CF4DF`.

Label: `RETURN ON EXPERIENCE` — Inter 600, 10px, Cyan `#0CF4DF`, letter-spacing 0.12em. Margin bottom: 16px.
Headline: `What actually happened.` — Inter 700, 22px, white. Margin bottom: 20px.

Four rows, each with a Cyan checkmark icon and white text:
- Quality of leads captured, not just quantity
- How deeply each visitor engaged with your content
- How fast your team followed up after the event
- How many leads converted to pipeline or hires

Below rows, separator line rgba(255,255,255,0.08). Then a result statement:
`One score from 0 to 100. Four categories. Every event measured the same way.`
Font: Inter 400, 14px, Cyan `#0CF4DF` at 80%, italic, line-height 1.6.

On mobile: stack columns. ROX card below ROI card.

**Below comparison — body paragraph**
Margin top: 48px. Max width: 760px.

Body: Inter 400, 16px, Deep Navy at 55%, line-height 1.75.

`Most event teams walk away with a cost per lead and a rough headcount. Those numbers tell you what you invested. They tell you nothing about which conversations revealed intent, which rep had the best interactions, how long people engaged, or whether your follow-up happened in time to matter. ROI answers the finance question. ROX answers the performance question. Both matter. Only one of them has been missing.`

---

## 3. The four categories section

Background: `#F8F9FC`. Padding: 100px 0.

**Section header**
Eyebrow: `HOW ROX IS SCORED`
Font: Inter 600, 10px, Cyan `#0CF4DF`, letter-spacing: 0.14em. Margin bottom: 16px.

Headline: `Four categories. One score. Every event measured the same way.`
Font: Inter 800, 38px, Deep Navy, line-height: 1.15. Max width: 700px. Margin bottom: 16px.

Subhead: `Each category is worth 25% of your total ROX score. Skip the ones you don't have data for. Your score calculates from what you know.`
Font: Inter 400, 17px, Deep Navy at 50%, line-height: 1.65. Max width: 620px. Margin bottom: 64px.

**Four category cards**
2x2 grid. Max width: 1000px. Gap: 24px.

Each card: white background, border 1px solid rgba(6,19,65,0.08), border-radius: 16px, padding: 36px 32px. Box-shadow: 0 2px 12px rgba(6,19,65,0.06).

Card structure:
- Number pill: `01` through `04` — Cyan style matching calculator
- Weight tag: `25% of ROX score` — Inter 500, 11px, Deep Navy at 35%, no background
- Category name: Inter 800, 22px, Deep Navy. Margin bottom: 12px.
- One-line definition: Inter 400, 15px, Deep Navy at 55%, line-height 1.6. Margin bottom: 20px.
- Formula line: Inter 500, 13px, Deep Navy at 40%, background rgba(6,19,65,0.04), border-radius 6px, padding 8px 12px, font-family monospace for the formula itself
- Benchmark line below formula: Inter 400, 12px, Cyan `#0AA891` (tag green). No background.

**Card 1 — Lead Capture Efficiency**
Name: `Lead Capture Efficiency`
Definition: `What percentage of visitors to your booth, event, or facility became captured leads?`
Formula: `(Total Leads Captured / Total Visitors) × 100`
Benchmark: `Industry average: 20-30% without a structured capture process`

**Card 2 — Engagement Quality**
Name: `Engagement Quality`
Definition: `How deeply did people actually interact with your content, demos, or conversations?`
Formula: `(Meaningful Interactions / Total Leads) × 100`
Benchmark: `Most teams can only estimate this without a platform tracking it`

**Card 3 — Follow-Up Speed**
Name: `Follow-Up Speed`
Definition: `How quickly did your team reach back out after the event ended?`
Formula: `100 − (Avg Days to Follow-Up × 5)`
Benchmark: `Best-in-class: same day. Industry average: 5-7 days. Intent fades fast.`

**Card 4 — Conversion Effectiveness**
Name: `Conversion Effectiveness`
Definition: `How many captured leads converted to a meeting, hire, or closed opportunity?`
Formula: `(Post-Event Conversions / Total Leads) × 100`
Benchmark: `Industry average: 5-10% post-event conversion without intent scoring`

On mobile: stack to single column.

**Below grid — skip note**
Margin top: 32px. Max width: 760px.
Text: `Don't have all four numbers? That's the point. Most teams don't. Run the calculator with what you have and see where the gaps are.`
Font: Inter 400, 15px, Deep Navy at 50%, line-height 1.65.

---

## 4. Score tiers section

Background: depth gradient. Plum `#1A0533` to Midnight `#070E2B` to Deep Navy `#061341`. Full width. Padding: 100px 0.

**Section header**
Eyebrow: `ROX SCORE RANGES`
Font: Inter 600, 10px, Cyan `#0CF4DF`, letter-spacing: 0.14em. Margin bottom: 16px.

Headline: `Where does your score land?`
Font: Inter 800, 38px, white, line-height: 1.15. Max width: 600px. Margin bottom: 48px.

**Visual tier display**
Large horizontal bar spanning the full content width. Max width: 900px.
Bar is divided into four equal segments, color-filled left to right:
- Segment 1: Red `#E5484D` — label below: `0-39`
- Segment 2: Amber `#F2B33D` — label below: `40-69`
- Segment 3: Teal `#5FD9C2` — label below: `70-84`
- Segment 4: Cyan `#0CF4DF` — label below: `85-100`

Bar height: 12px. Border-radius: 6px. Segment labels: Inter 600, 12px, white at 40%, centered under each segment.

**Four tier cards**
Below bar. Four-column row matching the bar segments. Gap: 16px. Max width: 900px.

Each card: background rgba(255,255,255,0.04), border-top 3px solid [tier color], border-radius 0 0 12px 12px, padding 24px 20px.

Card structure:
- Tier color dot (8px, filled, tier color) + tier name: Inter 700, 16px, white. Inline flex. Margin bottom: 12px.
- Headline: Inter 600, 14px, white at 80%, line-height 1.3. Margin bottom: 10px.
- Body: Inter 400, 13px, white at 50%, line-height 1.6.

**Critical Gap (0-39)** — border Teal `#E5484D`
Headline: `Events are costing more than they're delivering.`
Body: `Lead capture is inconsistent, engagement is low, follow-up is slow. You lack the visibility to find and act on your best opportunities.`

**Needs Optimization (40-69)** — border Amber `#F2B33D`
Headline: `You're capturing some value, but leaving ROI on the table.`
Body: `Clear inefficiencies in one or two categories are dragging your score. High-intent leads are slipping away between the floor and the inbox.`

**High ROX (70-84)** — border Teal `#5FD9C2`
Headline: `Above average. Now prove it with real data.`
Body: `Strong capture, solid engagement, timely follow-up. Some scores may be based on estimates. Validation closes the gap to Elite.`

**Elite ROX (85-100)** — border Cyan `#0CF4DF`
Headline: `Highly optimized across every category.`
Body: `Top-performing tier. Requires constant visibility to maintain. Ongoing analytics and trend tracking keep Elite from slipping.`

On mobile: stack tier cards to 2x2, then single column below 480px.

---

## 5. ROX across verticals section

Background: white `#FFFFFF`. Padding: 100px 0.

**Section header**
Eyebrow: `ROX BY VERTICAL`
Font: Inter 600, 10px, Cyan `#0CF4DF`, letter-spacing: 0.14em. Margin bottom: 16px.

Headline: `The same score. Five different contexts.`
Font: Inter 800, 38px, Deep Navy, line-height: 1.15. Max width: 700px. Margin bottom: 16px.

Subhead: `ROX applies wherever your team engages in person. The four categories stay the same. The inputs and benchmarks shift to match your vertical.`
Font: Inter 400, 17px, Deep Navy at 50%, line-height: 1.65. Max width: 620px. Margin bottom: 64px.

**Five vertical rows**
Stacked. Each row: border-bottom 1px solid rgba(6,19,65,0.06). Padding: 28px 0. Max width: 900px.

Row layout: flex row, space-between, align center.

Left side:
- Vertical name: Inter 700, 18px, Deep Navy
- One-line context sentence: Inter 400, 14px, Deep Navy at 50%. Margin top: 4px.

Right side:
- `Calculate [Vertical] ROX` link: Cyan `#0CF4DF`, Inter 600, 14px, arrow right. Links to vertical calculator route. Underline on hover.

**Row 1**
Name: `Trade Shows and Exhibits`
Context: `Lead capture rate, engagement depth, follow-up speed, and conversion from booth traffic to pipeline.`
Link: `Calculate Trade Show ROX` → `/rox/trade-shows`

**Row 2**
Name: `Technical Recruiting`
Context: `Candidate capture rate, engagement quality by role, time to first contact, and conversion to interview or hire.`
Link: `Calculate Recruiting ROX` → `/rox/recruiting`

**Row 3**
Name: `Field Sales`
Context: `Interaction capture rate at job sites and facilities, content engagement, follow-up speed, and deal progression.`
Link: `Calculate Field Sales ROX` → `/rox/field-sales`

**Row 4**
Name: `Facilities and Venues`
Context: `Visitor capture across showrooms and demo floors, content depth, engagement duration, and intent signals.`
Link: `Calculate Facilities ROX` → `/rox/facilities`

**Row 5**
Name: `Events and Venues`
Context: `Attendee engagement beyond ticket scans, content interaction, sponsor ROX, and post-event conversion.`
Link: `Calculate Events ROX` → `/rox/events`

Add HTML comment on rows 2-5: `<!-- Link active when calculator page is built -->`

---

## 6. Calculator CTA section

Background: `#F8F9FC`. Padding: 100px 0.
`id="calculators"`

**Section header**
Eyebrow: `ROX CALCULATORS`
Font: Inter 600, 10px, Cyan `#0CF4DF`, letter-spacing: 0.14em. Margin bottom: 16px.

Headline: `Run your numbers. See where you stand.`
Font: Inter 800, 38px, Deep Navy, line-height: 1.15. Max width: 600px. Margin bottom: 16px.

Subhead: `Each calculator is free. No login required. Answer what you know and skip the rest. Your score updates as you go.`
Font: Inter 400, 17px, Deep Navy at 50%, line-height: 1.65. Max width: 580px. Margin bottom: 48px.

**Five calculator cards**
Horizontal row of five. Gap: 16px. On tablet: 2-3 per row wrap. On mobile: single column.

Each card: white background, border 1px solid rgba(6,19,65,0.08), border-radius: 14px, padding: 28px 24px. Box-shadow: 0 2px 8px rgba(6,19,65,0.05).
On hover: border-color rgba(12,244,223,0.4), translateY(-3px), transition 200ms ease.

Card structure:
- Icon: 32px, Cyan outlined SVG, no fill. Margin bottom: 16px.
- Vertical name: Inter 700, 15px, Deep Navy. Margin bottom: 8px.
- One-line description: Inter 400, 13px, Deep Navy at 50%, line-height 1.5. Margin bottom: 20px.
- `Calculate →` link: Inter 600, 13px, Cyan `#0CF4DF`. No underline by default. Underline on hover.

**Card 1**
Icon: trade show booth outline
Name: `Trade Shows and Exhibits`
Description: `Booth performance across lead capture, engagement, and conversion.`
Link: `/rox/trade-shows`

**Card 2**
Icon: person with checkmark
Name: `Technical Recruiting`
Description: `Recruiting events scored on candidate quality and follow-up speed.`
Link: `/rox/recruiting` — HTML comment: `<!-- Link active when page is built -->`

**Card 3**
Icon: map pin with route
Name: `Field Sales`
Description: `Rep-level engagement across job sites, facilities, and customer visits.`
Link: `/rox/field-sales` — HTML comment: `<!-- Link active when page is built -->`

**Card 4**
Icon: building outline
Name: `Facilities and Venues`
Description: `Interaction depth across showrooms, demo floors, and training centers.`
Link: `/rox/facilities` — HTML comment: `<!-- Link active when page is built -->`

**Card 5**
Icon: calendar with star
Name: `Events and Venues`
Description: `Attendee engagement and sponsor ROX beyond ticket scans.`
Link: `/rox/events` — HTML comment: `<!-- Link active when page is built -->`

---

## 7. Final CTA

Background: depth gradient. Same as hero. Full width. Padding: 120px 0.

Match the final CTA section of the Mustang CAT case study page for structure and styling.

Eyebrow: `GET STARTED`
Font: Inter 600, 11px, Cyan `#0CF4DF`, letter-spacing: 0.14em. Margin bottom: 16px.

Headline: `Your next event has a score. Find out what it is.`
Font: Inter 800, 44px, white, line-height: 1.1.
On mobile: 32px.
Margin bottom: 20px.

Subhead: `Run your numbers in under two minutes. Or schedule a demo to see ROX dashboards live with your team's data.`
Font: Inter 400, 17px, white at 60%, line-height: 1.65. Max width: 540px. Margin bottom: 40px.

CTA pair: two buttons inline, gap: 16px. Stack on mobile.

Primary: `Calculate Your ROX` — gradient fill, white text, Inter 700, 16px. Links to `#calculators`.
Secondary: `Schedule a Demo` — transparent, white border 1.5px, white text, Inter 600, 16px. Links to `/#demo`.

Trust line: `No login. No commitment. Just your score and a clearer picture of what happened.`
Font: Inter 400, 13px, white at 35%. Margin top: 28px.

---

## Technical requirements

- All text and content is left-aligned throughout. Score tier bar and tier cards may center their internal text. Everything else is left-aligned.
- New page at `/what-is-rox`
- Read the codebase before writing. Match all existing CSS variable names exactly.
- Use the Mustang CAT case study page and Trade Shows solution page as design references. Replicate their component structure, section alternation pattern, card styles, and CTA patterns.
- Use existing scroll reveal animation patterns. Same IntersectionObserver timing and easing as the rest of the site.
- Score tier bar: render as an SVG or a CSS div with four colored segments. Not an image.
- Fully responsive: 1280px desktop, 768px tablet, 375px mobile.
- Hover transitions: 200ms ease throughout.
- Font stack must match project globals.
- No new dependencies.
- No em dashes in any rendered text.
- All copy used exactly as written. Do not rewrite or improve it.

---

## Copy rules

- No em dashes. Use a period or restructure.
- No buzzwords: seamless, powerful, robust, revolutionary, cutting-edge, innovative, unlock, game-changing, move the needle.
- All copy used exactly as written. Do not rewrite or improve it.
- Short declarative sentences throughout.
