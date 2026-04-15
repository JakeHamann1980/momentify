# Momentify — Trade Shows & Exhibits ROX Calculator
## Claude Code Prompt

Read the existing codebase fully before writing any code. This is a new standalone page. Use the ROX section on the homepage and the ROX preview card on the Trade Shows solution page as the primary visual reference. Match all CSS variables, component patterns, and animation approaches already in use. Do not introduce new styling patterns if existing ones handle the job.

---

## Page route

`/rox/trade-shows`

---

## Page overview

An interactive ROX Calculator for trade show exhibitors. The visitor inputs their event data across four scored categories, sees a live running score update as they go, and upon clicking Calculate receives a full results screen with their score, tier, interpretation, and a consultation request form that passes their score to the submission.

This page is both a lead generation tool and a positioning statement. Nobody else offers this. The design should feel like a product, not a form.

All content is left-aligned. The results score display is centered as a visual anchor. Everything else left-aligns.

---

## Page structure (top to bottom)

1. Existing site nav (no changes)
2. Hero header — dark gradient
3. Calculator interface — dark gradient continues, full page
4. Results screen — replaces calculator on submit, same dark gradient
5. Existing site footer (no changes)

---

## 1. Hero header

Background: depth gradient. Plum `#1A0533` to Midnight `#070E2B`. Full width. Padding top: 120px. Padding bottom: 60px.

**Breadcrumb**
Text: `Solutions / Trade Shows and Exhibits / ROX Calculator`
Font: Inter 500, 13px, white at 40%. Margin bottom: 24px.

**Eyebrow**
Text: `TRADE SHOWS AND EXHIBITS`
Font: Inter 600, 11px, Cyan `#0CF4DF`, letter-spacing: 0.14em, all-caps. Margin bottom: 16px.

**Headline**
Text: `Calculate your Trade Show ROX score.`
Font: Inter 800, 48px, white, line-height: 1.1. Max width: 720px.
On mobile: 32px.
Margin bottom: 16px.

**Subhead**
Text: `ROX measures the quality of your event, not just the quantity. Answer what you know. Skip what you don't. Your score updates as you go.`
Font: Inter 400, 17px, white at 65%, line-height: 1.65. Max width: 620px.
Margin bottom: 0.

---

## 2. Calculator interface

Background: Deep Navy `#061341`. Full width. Padding: 60px 0 120px.

Max content width: 1000px, page-centered.

**Layout**

Two-column sticky layout. Left column 60% width holds the input sections. Right column 40% width holds the live score panel, which is `position: sticky; top: 100px` so it stays in view as the user scrolls through inputs.

On mobile: single column. Score panel moves to top, above input sections, and unsticks.

---

### Left column — Input sections

Four scored categories stacked vertically. Each category is a card: background rgba(255,255,255,0.04), border 1px solid rgba(255,255,255,0.08), border-radius 16px, padding 32px. Gap between cards: 24px.

Each card has:
- Category number pill: `01`, `02`, `03`, `04` — Inter 700, 11px, Cyan `#0CF4DF`, background rgba(12,244,223,0.1), border-radius 20px, padding 4px 10px
- Category name: Inter 700, 18px, white. Margin bottom: 4px.
- Category weight: `Worth 25% of your total score` — Inter 400, 12px, white at 35%. Margin bottom: 24px.
- Input fields (see per-category specs below)
- Live category score bar below inputs: thin progress bar, label left `Category Score`, value right. Bar fills Cyan `#0CF4DF` on teal track rgba(12,244,223,0.12). Updates in real time as inputs change.

**Bypass behavior**
Every input field has a small `Skip` link to its right, styled as Inter 400, 12px, white at 30%, underline. When clicked, the field grays out and is excluded from the category score calculation. The category score recalculates across only the fields that have values. A skipped field shows a subtle strikethrough label and a gray background. Clicking `Undo skip` restores it.

**Field style**
All inputs: background rgba(255,255,255,0.06), border 1px solid rgba(255,255,255,0.12), border-radius 8px, padding 12px 16px, Inter 400, 15px, white. Placeholder: white at 30%. On focus: border-color Cyan `#0CF4DF`, box-shadow 0 0 0 3px rgba(12,244,223,0.1).

Number inputs only. No text fields in the scoring section.

**Field description**
Each field has a label above and a one-line description below in Inter 400, 12px, white at 40%. This helps users understand what to enter and why it matters.

---

#### Category 1 — Lead Capture Efficiency (25%)

Category name: `Lead Capture Efficiency`

Formula: `(Total Leads Captured / Total Booth Visitors) × 100`

**Field 1**
Label: `Total Booth Visitors`
Description: `Estimated total number of people who stopped at or walked through your booth. Use event organizer traffic count if available.`
Input: number, placeholder `e.g. 500`

**Field 2**
Label: `Total Leads Captured`
Description: `Total contacts captured via badge scan, form entry, or any other method.`
Input: number, placeholder `e.g. 150`

**Score display below fields**
Show formula result as a percentage with label: `Capture Rate: ---%`. Updates live.
Below that, a benchmark line: `Industry average: ~20–30%` — Inter 400, 11px, white at 30%.

---

#### Category 2 — Engagement Quality (25%)

Category name: `Engagement Quality`

Formula option A (if avg time available): `(Avg Time Engaged / Target Time) × 100`
Formula option B (if no time data): `(Leads with Meaningful Interaction / Total Leads Captured) × 100`

Show a toggle above the fields: `I have engagement time data` / `I'll estimate by interactions`. Default to option B. Toggle styled as a pill switch: active option Cyan bg white text, inactive white at 20% bg.

**Option A fields (shown when toggle is on)**

Field 1:
Label: `Average Time Engaged (minutes)`
Description: `How long did the average visitor spend interacting at your booth?`
Input: number, placeholder `e.g. 8`

Field 2:
Label: `Target Engagement Time (minutes)`
Description: `What is your ideal engagement duration for a qualified conversation?`
Input: number, placeholder `e.g. 10`

**Option B fields (shown when toggle is off / default)**

Field 1:
Label: `Leads with a Meaningful Interaction`
Description: `How many leads attended a demo, downloaded content, or had a recorded conversation?`
Input: number, placeholder `e.g. 60`

Field 2:
Label: `Total Leads Captured`
Description: `Same number from Category 1. Auto-populated if already entered above.`
Input: number, auto-populated from Category 1 Field 2 if available. Still editable.

---

#### Category 3 — Follow-Up Speed (25%)

Category name: `Follow-Up Speed`

Formula: `100 − (Avg Days to First Follow-Up × 5)`. Capped: 0 minimum, 100 maximum.

**Field 1**
Label: `Average Days to First Follow-Up`
Description: `How many days on average before your team sent the first follow-up after the event ended?`
Input: number, placeholder `e.g. 3`
Min: 0. Max: 20 (cap). If user enters above 20, show inline note: `Scores above 20 days are capped at 0 points for this category.`

**Score display below field**
Show result: `Follow-Up Score: ---` and a context line:
- 0 days: `Same-day follow-up. Elite performance.`
- 1-3 days: `Strong. Most teams average 5-7 days.`
- 4-7 days: `Room to improve. Intent fades fast after an event.`
- 8+ days: `High risk of lost leads. Speed is the biggest gap for most exhibitors.`

Text: Inter 400, 12px, color matches tier (Cyan for elite, amber for medium, red for poor).

---

#### Category 4 — Conversion Effectiveness (25%)

Category name: `Conversion Effectiveness`

Formula: `(Post-Event Conversions / Total Leads Captured) × 100`

**Field 1**
Label: `Post-Event Conversions`
Description: `How many leads converted to a meeting booked, qualified opportunity, or closed deal after the event?`
Input: number, placeholder `e.g. 15`

**Field 2**
Label: `Total Leads Captured`
Description: `Same number from Category 1. Auto-populated if already entered above.`
Input: number, auto-populated from Category 1 Field 2 if available. Still editable.

**Score display below fields**
Show conversion rate percentage with benchmark line: `Industry average: ~5–10% post-event conversion` — Inter 400, 11px, white at 30%.

---

#### Bonus — Potential Value Generated (optional)

This section is visually separated from the four scored categories. It does not affect the ROX score. It is a supplemental business case output.

Card style: same as category cards but with amber `#F2B33D` accent instead of Cyan. Category number pill replaced with a pill reading `BONUS` in amber. Border-left: 3px solid `#F2B33D` on the left edge of the card instead of the default border.

Card header:
- Label: `BONUS` — Inter 700, 11px, Amber `#F2B33D`, background rgba(242,179,61,0.1), border-radius 20px, padding 4px 10px. Margin bottom: 8px.
- Category name: `Potential Value Generated` — Inter 700, 18px, white.
- Descriptor: `Optional. Does not affect your ROX score.` — Inter 400, 12px, white at 35%. Margin bottom: 24px.

**Field 1**
Label: `Qualified Leads`
Description: `How many of your captured leads were qualified for follow-up? A qualified lead had a meaningful interaction and fits your target buyer profile.`
Input: number, placeholder `e.g. 45`

**Field 2**
Label: `Estimated Value Per Qualified Lead`
Description: `What is the average deal value, contract size, or revenue opportunity associated with a qualified lead from a trade show? Use your best estimate if exact figures are unavailable.`
Input: number, placeholder `e.g. 5000`
Prefix label inside input field on the left: `$` — white at 50%, Inter 500.

**Live output below fields**
Show calculated value in real time: `Potential Value: $---`
Inter 700, 20px, Amber `#F2B33D`. Updates as either field changes.
Below that: `Based on [X] qualified leads at $[Y] each.` — Inter 400, 12px, white at 35%. Updates live.

If either field is empty or zero: show `Enter both fields to calculate.` — white at 25%, Inter 400, 12px.

**Note on the live score panel (right column)**
Below the four category progress bars on the sticky panel, add a thin separator line and a bonus row:
- Label: `Potential Value` — Inter 500, 12px, Amber `#F2B33D` at 70%
- Value: `$---` — Inter 600, 14px, Amber `#F2B33D`. Updates live.
If fields are empty, show `--` in white at 25%.

---

#### Calculate button

Full width. Below all four category cards. Margin top: 32px.

Text: `Calculate My ROX Score`
Style: gradient fill, linear-gradient(135deg, `#0CF4DF`, `#1A56DB`). White text, Inter 700, 17px. Padding: 18px. Border-radius: 8px. Full width of left column.

On hover: opacity 0.9, translateY(-1px), 200ms ease.

Below button, small text: `Your data stays in this browser. Nothing is submitted until you request a consultation.`
Font: Inter 400, 12px, white at 25%. Margin top: 12px.

---

### Right column — Live score panel (sticky)

This panel updates in real time as the user fills in fields. It matches the visual style of the ROX score preview on the homepage ROX section.

Panel: background rgba(6,19,65,0.7), border 1px solid rgba(12,244,223,0.15), border-radius 20px, padding 32px. Backdrop-filter: blur(12px).

**Live gauge**
Semicircle SVG gauge. Same spec as homepage ROX section: 180-degree arc, four color zones left to right:
- 0-39: Red `#E5484D`
- 40-69: Amber `#F2B33D`
- 70-84: Teal `#5FD9C2`
- 85-100: Cyan `#0CF4DF`

Needle animates smoothly to current score position as inputs change. Transition: 600ms ease.

Default state (no inputs yet): needle at 0, score shows `--`, tier shows `Enter your data to see your score`.

Score number below gauge: Inter 800, 56px, white. Updates live.
Label: `ROX SCORE` — Inter 600, 11px, Cyan, letter-spacing 0.14em.
Tier name below: color-coded to current tier zone.

**Four category progress bars**
Below gauge. Each bar: label left (Inter 500, 12px, white at 50%), score right (Inter 600, 13px, white). Thin bar fills to category score, color matches tier zone. Gap: 12px between bars.

Labels:
- Lead Capture Efficiency
- Engagement Quality
- Follow-Up Speed
- Conversion Effectiveness

Default: all bars at 0, all scores show `--`.

**Skipped field note**
If any fields are skipped, show a small note below the bars: `X field(s) skipped. Score calculated from available data.` — Inter 400, 11px, white at 30%.

**Panel footer**
Below bars. Thin border-top rgba(255,255,255,0.08). Padding top: 16px.
Text: `Fill in what you know. Skip the rest.`
Font: Inter 400, 12px, white at 25%.

---

## 3. Results screen

When the user clicks `Calculate My ROX Score`, the calculator interface crossfades out and the results screen crossfades in. Transition: 400ms ease. Do not navigate to a new page. This is a single-page state change.

The results screen sits within the same Deep Navy `#061341` background. Max content width: 900px, page-centered. Padding: 80px 0 120px.

**Back link**
Top of results. Text: `Recalculate` — Cyan, Inter 500, 13px, left arrow character before text. On click: crossfade back to calculator with all inputs preserved.

---

### Results — Score display

Centered. Max width: 480px. Margin bottom: 64px.

Large ROX gauge: same semicircle SVG, larger version (500px wide). Needle fixed at final score. No animation on load — needle is already at score from live panel.

Score number: Inter 800, 80px, color-coded to tier.
- Critical Gap: `#E5484D`
- Needs Optimization: `#F2B33D`
- High ROX: `#5FD9C2`
- Elite ROX: `#0CF4DF`

Tier name below score: Inter 700, 20px, same color as score.
Tier label: `YOUR ROX TIER` — Inter 600, 11px, white at 40%, letter-spacing 0.12em, above tier name.

---

### Results — Score breakdown

Below gauge. Left-aligned. Max width: 900px.

Four category result rows in a 2x2 grid. Each cell: background rgba(255,255,255,0.04), border 1px solid rgba(255,255,255,0.08), border-radius 14px, padding 24px 28px.

Each cell:
- Category name: Inter 600, 13px, white at 50%, all-caps, letter-spacing 0.1em
- Score: Inter 800, 36px, color-coded to tier of that individual category score
- Tier for that category: Inter 500, 12px, same color
- One-line interpretation: Inter 400, 13px, white at 50%

---

### Results — Potential Value callout (conditional)

Only render this block if the user entered values in both bonus fields.

Full-width card. Background rgba(242,179,61,0.06), border 1px solid rgba(242,179,61,0.2), border-radius 16px, padding 32px 40px. Margin bottom: 32px.

Two-column layout. Left 60%, right 40%. Gap: 40px.

**Left column**
Eyebrow: `POTENTIAL VALUE GENERATED` — Inter 600, 10px, Amber `#F2B33D`, letter-spacing 0.14em. Margin bottom: 12px.
Dollar figure: formatted with commas, e.g. `$225,000` — Inter 800, 56px, Amber `#F2B33D`. Margin bottom: 8px.
Attribution line: `Based on [X] qualified leads at $[Y] per lead.` — Inter 400, 14px, white at 50%.

**Right column**
Context paragraph: `This is the estimated pipeline value sitting inside your captured leads. Your ROX score tells you how effectively your process converts that opportunity. A Critical Gap score with high potential value means the pipeline is there. The process to capture it is not.`
Font: Inter 400, 14px, white at 55%, line-height 1.7.

If ROX score is below 70, add a second line: `Improving your lowest-scoring categories directly increases the share of this value your team actually closes.`
Font: Inter 400, 14px, Amber `#F2B33D` at 80%.

On mobile: stack columns.

### Results — Tier interpretation block

Below score breakdown. Full-width card. Background rgba(255,255,255,0.04), border-left 3px solid [tier color], border-radius 0 14px 14px 0, padding 28px 32px.

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

### Results — Momentify impact block

Below interpretation. Three-column row. Each column: shows one category where the user scored lowest, with a headline and one-line Momentify solution. Auto-generated based on the three lowest-scoring categories.

Column structure: category name in Cyan caps, impact headline in white Inter 700 16px, one-line body in white at 50% Inter 400 13px.

Pre-written impact lines per category:

**Lead Capture Efficiency**
Headline: `Momentify captures every interaction, not just the scans.`
Body: `Zone tracking, check-in flows, and persona tagging give you a true capture rate.`

**Engagement Quality**
Headline: `See exactly what each visitor cared about.`
Body: `Content selections, demo attendance, and conversation notes are all tracked in real time.`

**Follow-Up Speed**
Headline: `Leads route to the right rep before the show ends.`
Body: `Smart Columns score and assign leads automatically. Same-day follow-up becomes the default.`

**Conversion Effectiveness**
Headline: `Score leads by intent, not just contact info.`
Body: `Engagement-based scoring surfaces your highest-intent leads so your team focuses where it counts.`

---

### Results — Consultation form

Below the impact block. This is the conversion point of the page. Styled as a card: background rgba(255,255,255,0.04), border 1px solid rgba(12,244,223,0.15), border-radius 20px, padding 40px 48px.

**Form header**
Eyebrow: `FREE 30-MINUTE CONSULTATION` — Cyan, Inter 600, 11px, letter-spacing 0.14em. Margin bottom: 12px.
Headline: `See what your score looks like with Momentify.`
Font: Inter 700, 28px, white. Margin bottom: 8px.
Subhead: `We'll walk through your results and show you exactly where Momentify moves the needle on your lowest-scoring categories.`
Font: Inter 400, 15px, white at 55%, line-height 1.65. Margin bottom: 32px.

**Hidden fields (pre-populated, not visible to user)**
- ROX Score: final calculated score
- ROX Tier: tier name string
- Category scores: all four as individual fields
- Source page: `Trade Shows ROX Calculator`

Add HTML comments on each hidden field:
`<!-- Hidden field: passes [field name] to HubSpot on form submission -->`

**Visible form fields**

Two-column layout on desktop, single column on mobile. Gap: 16px.

Field 1: First Name — text input, required
Field 2: Last Name — text input, required
Field 3: Work Email — email input, required
Field 4: Company — text input, required
Field 5: Job Title — text input, optional
Field 6: Phone — tel input, optional

Full-width below the two columns:
Field 7: How many trade shows does your team attend per year? — select dropdown
Options: `1-3`, `4-8`, `9-15`, `16+`, `Not sure yet`

All field labels: Inter 500, 13px, white at 70%. Margin bottom: 6px.
All inputs: same style as calculator inputs above. Background rgba(255,255,255,0.06), border rgba(255,255,255,0.12), border-radius 8px, padding 12px 16px, white text. Focus: Cyan border, Cyan glow.
Required indicator: `*` in Cyan after label.

**Submit button**
Full width. Margin top: 24px.
Text: `Book My Free Consultation`
Style: gradient fill, linear-gradient(135deg, `#0CF4DF`, `#1A56DB`). White text, Inter 700, 16px. Padding: 16px. Border-radius: 8px.
On hover: opacity 0.9, translateY(-1px).

Add HTML comment below button:
`<!-- On submit: POST to HubSpot Forms API. Also trigger booking link redirect or modal (Superhuman or Google Calendar). Replace action URL when HubSpot form ID is available. -->`

**Below submit button**
Text: `No commitment. No sales pressure. Just your data and a conversation.`
Font: Inter 400, 12px, white at 30%. Margin top: 12px.

---

### Results — Post-submit confirmation

After successful form submission, replace the form with a confirmation block inside the same card.

Checkmark icon: 48px circle, Cyan border 2px, white checkmark SVG inside.
Headline: `You're on the calendar.`
Font: Inter 700, 24px, white. Margin bottom: 12px.
Body: `We will be in touch shortly to confirm your consultation time. In the meantime, explore how Momentify works for trade show teams.`
Font: Inter 400, 15px, white at 55%.
Link: `See how it works` — Cyan, links to `/solutions/trade-shows`.

---

## Score calculation logic

Implement all four formulas in JavaScript. All calculations happen client-side. No server calls during scoring.

```
Category 1 — Lead Capture Efficiency:
score = (leadsCapture / boothVisitors) * 100
Clamp 0-100.

Category 2 — Engagement Quality (Option A):
score = (avgTimeEngaged / targetTime) * 100
Clamp 0-100.

Category 2 — Engagement Quality (Option B, default):
score = (meaningfulInteractions / totalLeads) * 100
Clamp 0-100.

Category 3 — Follow-Up Speed:
score = 100 - (avgDays * 5)
Clamp 0-100.

Category 4 — Conversion Effectiveness:
score = (conversions / totalLeads) * 100
Clamp 0-100.

Final ROX Score:
Compute average of all non-skipped category scores.
If a category is fully skipped (all fields skipped), exclude it from the average.
Round to one decimal place for display.
```


Bonus — Potential Value Generated:
potentialValue = qualifiedLeads * valuePerLead
Format as USD with commas. Display only if both fields have values greater than 0.
Does not affect ROX score or tier. Passed as three hidden fields to the consultation form:
- Qualified Leads count
- Estimated Value Per Qualified Lead
- Calculated Potential Value total
Tier thresholds:
- 0-39: Critical Gap — color `#E5484D`
- 40-69: Needs Optimization — color `#F2B33D`
- 70-84: High ROX — color `#5FD9C2`
- 85-100: Elite ROX — color `#0CF4DF`

---

## Technical requirements

- All text and content is left-aligned throughout except the results score gauge which is centered as a standalone visual anchor.
- New page at `/rox/trade-shows`
- Read the codebase before writing. Match all existing CSS variable names exactly.
- Single-page state machine: calculator state and results state. No page navigation on submit. Crossfade transition between states.
- All scoring logic runs client-side in JavaScript. No external scoring API needed.
- Gauge SVG must be inline for animation. Needle position is a CSS transform rotate from the SVG center point. Smooth transition on value change: 600ms ease.
- Auto-populate Category 2 and 4 total leads field from Category 1 if Category 1 total leads has a value. Update silently, no notification.
- Skip logic: skipped fields contribute 0 to category score and are excluded from average. Show skipped field count on live panel.
- Form hidden fields: pre-populate on Calculate click, not on page load.
- Add HTML comments on all HubSpot and booking link placeholders.
- Fully responsive: 1280px desktop, 768px tablet, 375px mobile.
- Sticky right panel unsticks and moves to top on mobile.
- Hover transitions: 200ms ease throughout.
- Font stack must match project globals.
- No new dependencies beyond what is already in the project.
- No em dashes in any rendered text.
- All copy used exactly as written. Do not rewrite or improve it.

---

## Copy rules

- No em dashes. Use a period or restructure.
- No buzzwords: seamless, powerful, robust, revolutionary, cutting-edge, innovative, unlock, game-changing, move the needle.
- All copy used exactly as written. Do not rewrite or improve it.
- Short declarative sentences throughout.
