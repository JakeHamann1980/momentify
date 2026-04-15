# Momentify — ROX Calculator Design Pattern
## Reference Document for All Five Vertical Calculators

Live reference: `https://momentify-website.vercel.app/rox/trade-shows`

Use this page as the design and logic template for all remaining ROX calculators. Do not deviate from this pattern without a documented reason. Match all component styles, layout structure, scoring logic, field behavior, and copy conventions exactly.

---

## Page routes (all five calculators)

| Vertical | Route |
|---|---|
| Trade Shows and Exhibits | `/rox/trade-shows` *(live — use as reference)* |
| Technical Recruiting | `/rox/recruiting` |
| Field Sales | `/rox/field-sales` |
| Facilities and Venues | `/rox/facilities` |
| Events and Venues | `/rox/events` |

---

## Page structure (top to bottom)

1. Existing site nav (no changes)
2. Hero header — dark gradient
3. Calculator interface — dark gradient continues
4. Results screen — single-page state swap on calculate
5. Existing site footer (no changes)

---

## 1. Hero header

Background: depth gradient. Plum `#1A0533` to Midnight `#070E2B`. Full width. Padding top: 120px. Padding bottom: 60px.

**Breadcrumb line**
Format: `[Vertical Name] ROX Calculator`
Font: Inter 500, 13px, white at 40%. Margin bottom: 24px.

**Headline (observed on live page)**
Format: A direct question or problem statement that names the budget risk.
Trade Shows version: `You're spending thousands (if not more) on events, do you know what's working?`
Adapt the question for each vertical's specific investment context.
Font: Inter 800, large, white, line-height tight.

**Subhead**
One-line value statement followed by a short description of what the calculator measures.
Trade Shows version: `Prove the value. Justify the investment. Optimize every interaction.`
Then body copy: `Use our free [Vertical] ROX Calculator to measure the true return on your event investments. Go beyond cost-per-lead and measure ROX (Return on Experience) with data points that reflect real impact:`

**Bullet list of four data points measured**
Each bullet is short, outcome-focused, no period at end.
Trade Shows version:
- Leads captured vs. qualified
- Engagement depth and duration
- Conversion to meetings or pipeline
- Time-to-follow-up

Adapt bullet content per vertical. Same format.

---

## 2. Calculator interface

Background: Deep Navy `#061341`. Full width. Padding: 60px 0 120px.
Max content width: 1000px, page-centered.

**Layout**
Two-column sticky layout. Left column 60% — input sections. Right column 40% — live score panel, `position: sticky; top: 100px`.
On mobile: single column. Score panel moves above inputs and unsticks.

---

### Left column — Input sections

Four scored category cards + one bonus card, stacked vertically. Gap between cards: 24px.

**Category card style**
Background: rgba(255,255,255,0.04)
Border: 1px solid rgba(255,255,255,0.08)
Border-radius: 16px
Padding: 32px

**Category card header**
- Number pill: `01` through `04` — Inter 700, 11px, Cyan `#0CF4DF`, background rgba(12,244,223,0.1), border-radius 20px, padding 4px 10px
- Category name: Inter 700, 18px, white. Margin bottom: 4px.
- Weight line: `Worth 25% of your total score` — Inter 400, 12px, white at 35%. Margin bottom: 24px.

**Field style**
Background: rgba(255,255,255,0.06)
Border: 1px solid rgba(255,255,255,0.12)
Border-radius: 8px
Padding: 12px 16px
Font: Inter 400, 15px, white
Placeholder: white at 30%
On focus: border-color Cyan `#0CF4DF`, box-shadow 0 0 0 3px rgba(12,244,223,0.1)
Number inputs only in scoring sections.

**Field structure (per field)**
- Label above: Inter 500, 13px, white at 70%
- `Skip` link to the right of label: Inter 400, 12px, white at 30%, underline
- Description below label: Inter 400, 12px, white at 40%
- Input field

**Skip behavior**
- Clicked: field grays out, excluded from category score, excluded from final average
- Skipped count shown on live score panel: `X field(s) skipped`
- `Undo skip` link restores field
- Category score recalculates across only non-skipped fields

**Category score bar (bottom of each card)**
Label left: `Category Score` — Inter 500, 12px, white at 40%
Value right: `--` updating to score — Inter 600, 13px, white
Thin progress bar below: fills Cyan on teal track rgba(12,244,223,0.12). Animates live.

**Auto-population**
Total Leads Captured field in Categories 2 and 4 auto-populates from Category 1 if that field has a value. Silently, no notification. Still editable.

---

### Bonus card — Potential Value Generated

Visually distinct from the four scored categories. Does not affect ROX score.

**Bonus card style**
Same dimensions as category cards.
Border-left: 3px solid `#F2B33D` (Amber)
BONUS pill instead of number pill: Inter 700, 11px, Amber `#F2B33D`, background rgba(242,179,61,0.1), border-radius 20px, padding 4px 10px.

**Fields**
Field 1: `Qualified Leads` — number input
Field 2: `Estimated Value Per Qualified Lead` — number input with `$` prefix inside field, white at 50%

**Live output below fields**
`Potential Value: $---` — Inter 700, 20px, Amber `#F2B33D`. Updates live.
`Based on [X] qualified leads at $[Y] each.` — Inter 400, 12px, white at 35%.
If either field empty: `Enter both fields to calculate.` — white at 25%, Inter 400, 12px.

---

### Calculate button

Full width of left column. Margin top: 32px.
Text: `Calculate My ROX Score`
Style: gradient fill linear-gradient(135deg, `#0CF4DF`, `#1A56DB`). White text, Inter 700, 17px. Padding: 18px. Border-radius: 8px.
On hover: opacity 0.9, translateY(-1px), 200ms ease.

Below button:
`Your data stays in this browser. Nothing is submitted until you request a consultation.`
Inter 400, 12px, white at 25%. Margin top: 12px.

---

### Right column — Live score panel (sticky)

Panel: background rgba(6,19,65,0.7), border 1px solid rgba(12,244,223,0.15), border-radius 20px, padding 32px. Backdrop-filter: blur(12px).

**Gauge**
Semicircle SVG, 180-degree arc, four color zones left to right:
- 0-39: Red `#E5484D`
- 40-69: Amber `#F2B33D`
- 70-84: Teal `#5FD9C2`
- 85-100: Cyan `#0CF4DF`

Gauge track: 12px stroke, rounded ends. Background track: white at 8%.
Needle: thin line from center to arc position. 600ms ease transition on value change.

Default state: needle at `--`, tier line: `Enter your data to see your score`.

Score number: Inter 800, 56px, white.
Label: `ROX SCORE` — Inter 600, 11px, Cyan, letter-spacing 0.14em.
Tier name: color-coded to current tier.

**Four category rows**
Label left: Inter 500, 12px, white at 50%
Score right: Inter 600, 13px, white
Thin bar below each: fills to category score, color matches tier zone
Default: all `--`

Labels:
- Lead Capture Efficiency
- Engagement Quality
- Follow-Up Speed
- Conversion Effectiveness

**Bonus row (below separator)**
Thin separator: rgba(255,255,255,0.08).
Label: `Potential Value` — Inter 500, 12px, Amber `#F2B33D` at 70%
Value: `$---` — Inter 600, 14px, Amber `#F2B33D`. Updates live.

**Panel footer**
`Fill in what you know. Skip the rest.` — Inter 400, 12px, white at 25%.
`Reset Fields` link — Inter 400, 12px, white at 30%, underline. Clears all inputs.

---

## 3. Results screen

Single-page state swap. Calculator crossfades out (400ms ease), results crossfade in. Same Deep Navy background. No page navigation.

`Recalculate` link at top: Cyan, Inter 500, 13px, left arrow. Restores calculator with all inputs preserved.

Max content width: 900px, page-centered. Padding: 80px 0 120px.

---

### Score display

Large semicircle gauge (500px wide). Needle fixed at final score. Score number: Inter 800, 80px, color-coded to tier. Tier name below.

Tier colors:
- Critical Gap: `#E5484D`
- Needs Optimization: `#F2B33D`
- High ROX: `#5FD9C2`
- Elite ROX: `#0CF4DF`

---

### Score breakdown grid

2x2 grid. Each cell: background rgba(255,255,255,0.04), border rgba(255,255,255,0.08), border-radius 14px, padding 24px 28px.

Per cell:
- Category name: Inter 600, 13px, white at 50%, caps
- Score: Inter 800, 36px, color-coded to that category's tier
- Tier for that category: Inter 500, 12px, same color
- One-line interpretation: Inter 400, 13px, white at 50%

---

### Potential Value callout (conditional — only if bonus fields filled)

Amber-accented card. Background rgba(242,179,61,0.06), border rgba(242,179,61,0.2), border-radius 16px, padding 32px 40px. Margin bottom: 32px.

Two-column. Left 60%: eyebrow `POTENTIAL VALUE GENERATED` in Amber caps, dollar figure Inter 800, 56px, Amber, attribution line below. Right 40%: context paragraph. If ROX score below 70, add amber line connecting score to lost pipeline value.

---

### Tier interpretation block

Full-width card. Background rgba(255,255,255,0.04), border-left 3px solid [tier color], border-radius 0 14px 14px 0, padding 28px 32px.

**Critical Gap (0-39)**
Headline: `Your events are costing more than they're delivering.`
Body: `Lead capture is inconsistent, engagement depth is low, follow-up is slow, and conversions are not tracking. You likely lack the visibility and tools to identify and act on your best opportunities. Every category has room to improve, and improvement in any one of them compounds across the others.`

**Needs Optimization (40-69)**
Headline: `You're capturing some value, but leaving ROI on the table.`
Body: `You are getting results from your events, but there are clear inefficiencies. Engagement quality or follow-up speed is likely dragging your score down. High-intent leads are slipping away in the gap between the floor and the inbox. Closing those gaps compounds quickly.`

**High ROX (70-84)**
Headline: `Your events are performing above average. Now prove it with real data.`
Body: `Strong capture, good engagement, and timely follow-up. Some of your scores may be based on estimates rather than actual tracked behavior. Momentify can validate your assumptions, surface the gaps you cannot see yet, and push you into the Elite tier.`

**Elite ROX (85-100)**
Headline: `Highly optimized across every category. Keep it that way.`
Body: `You are in the top-performing tier. This level requires constant visibility and quick reaction to maintain. Momentify provides the ongoing analytics, trend tracking, and multi-event scalability that keeps Elite performance from slipping.`

---

### Momentify impact block

Three-column row. Auto-generates from the three lowest-scoring categories.

Per column: category name in Cyan caps, impact headline Inter 700, 16px, white, body Inter 400, 13px, white at 50%.

**Pre-written impact lines — reuse across all calculators where applicable**

Lead Capture Efficiency:
Headline: `Momentify captures every interaction, not just the scans.`
Body: `Zone tracking, check-in flows, and persona tagging give you a true capture rate.`

Engagement Quality:
Headline: `See exactly what each visitor cared about.`
Body: `Content selections, demo attendance, and conversation notes are all tracked in real time.`

Follow-Up Speed:
Headline: `Leads route to the right rep before the event ends.`
Body: `Smart Columns score and assign leads automatically. Same-day follow-up becomes the default.`

Conversion Effectiveness:
Headline: `Score leads by intent, not just contact info.`
Body: `Engagement-based scoring surfaces your highest-intent leads so your team focuses where it counts.`

*Each vertical calculator may add one or two vertical-specific impact lines where the four above do not fully fit. See per-calculator specs.*

---

### Consultation form

Card: background rgba(255,255,255,0.04), border rgba(12,244,223,0.15), border-radius 20px, padding 40px 48px.

Eyebrow: `FREE 30-MINUTE CONSULTATION` — Cyan caps
Headline: `See what your score looks like with Momentify.`
Subhead: `We'll walk through your results and show you exactly where Momentify moves the needle on your lowest-scoring categories.`

**Hidden fields (pre-populated on Calculate, not visible)**
- ROX Score
- ROX Tier
- All four category scores
- Qualified Leads (if entered)
- Value Per Qualified Lead (if entered)
- Potential Value Total (if calculated)
- Source: vertical name string e.g. `Trade Shows ROX Calculator`

Add HTML comment on each: `<!-- Hidden field: passes [field name] to HubSpot on form submission -->`

**Visible fields**
Two-column on desktop, single column on mobile.
- First Name (required)
- Last Name (required)
- Work Email (required)
- Company (required)
- Job Title (optional)
- Phone (optional)

Full-width below:
- Events per year dropdown — vertical-specific options (see per-calculator specs)

**Submit button**
Text: `Book My Free Consultation`
Style: gradient fill. White text, Inter 700, 16px. Full width. Padding: 16px. Border-radius: 8px.

HTML comment below button:
`<!-- On submit: POST to HubSpot Forms API. Trigger booking link redirect or modal (Superhuman or Google Calendar). Replace action URL when HubSpot form ID is available. -->`

Below button: `No commitment. No sales pressure. Just your data and a conversation.` — Inter 400, 12px, white at 30%.

**Post-submit confirmation**
Replaces form inside same card.
Checkmark icon (48px, Cyan border, white checkmark).
Headline: `You're on the calendar.`
Body: `We will be in touch shortly to confirm your consultation time.`
Link: `See how it works` — Cyan, links to vertical solution page.

---

## Score calculation logic (identical across all calculators)

```
Category 1 — Primary Capture Rate:
score = (totalCaptured / totalVisitors) * 100
Clamp 0-100.

Category 2 — Engagement Quality (Option A):
score = (avgTimeEngaged / targetTime) * 100
Clamp 0-100.

Category 2 — Engagement Quality (Option B, default):
score = (meaningfulInteractions / totalCaptured) * 100
Clamp 0-100.

Category 3 — Follow-Up Speed:
score = 100 - (avgDays * 5)
Clamp 0-100. Cap days input at 20.

Category 4 — Conversion Effectiveness:
score = (conversions / totalCaptured) * 100
Clamp 0-100.

Final ROX Score:
Average of all non-skipped category scores.
Exclude fully skipped categories from average.
Round to one decimal place.

Potential Value (bonus, no score impact):
potentialValue = qualifiedLeads * valuePerLead
Format as USD with commas.
Only display if both fields > 0.
```

Tier thresholds:
- 0-39: Critical Gap — `#E5484D`
- 40-69: Needs Optimization — `#F2B33D`
- 70-84: High ROX — `#5FD9C2`
- 85-100: Elite ROX — `#0CF4DF`

---

## Per-vertical customization points

Each calculator differs only in the following. Everything else is identical to the Trade Shows reference.

| Element | What changes |
|---|---|
| Page route | See route table above |
| Breadcrumb text | Vertical name |
| Hero headline | Vertical-specific budget risk question |
| Hero bullet list | Four vertical-specific data points measured |
| Category 1 field labels | Visitor/attendee terminology per vertical |
| Category 4 conversion label | Vertical-specific outcome (meeting, hire, deal, etc.) |
| Bonus field descriptions | Vertical-specific deal/candidate value language |
| Events per year dropdown | Vertical-specific options |
| Post-submit link | Links to vertical solution page |
| Source hidden field | Vertical name string |
| Vertical-specific impact lines | One or two extra if needed |

---

## Technical requirements (apply to all calculators)

- Read existing codebase before writing. Match all CSS variable names exactly.
- Single-page state machine: calculator state and results state. No page navigation on Calculate. Crossfade 400ms ease.
- All scoring logic client-side JavaScript. No external API for scoring.
- Gauge SVG inline. Needle position CSS transform rotate from SVG center. 600ms ease transition.
- Auto-populate shared fields (total captured) from Category 1 into Categories 2 and 4 silently.
- Skip logic: excluded from category score and from final average. Skipped count shown on panel.
- Hidden fields pre-populate on Calculate click, not on page load.
- HubSpot and booking link placeholders marked with HTML comments.
- Fully responsive: 1280px desktop, 768px tablet, 375px mobile.
- Sticky right panel unsticks and moves above inputs on mobile.
- Hover transitions: 200ms ease throughout.
- Font stack matches project globals.
- No new dependencies.
- No em dashes in any rendered text.
- All copy used exactly as written.

---

## Copy rules (apply to all calculators)

- No em dashes. Use a period or restructure.
- No buzzwords: seamless, powerful, robust, revolutionary, cutting-edge, innovative, unlock, game-changing, move the needle.
- All copy used exactly as written in per-calculator prompts.
- Short declarative sentences throughout.
- Field descriptions: one line, plain language, tells the user exactly what to enter and why.
