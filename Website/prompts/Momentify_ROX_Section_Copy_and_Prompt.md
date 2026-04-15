# Momentify — ROX Homepage Section
## Copy + Claude Code Build Prompt

---

# PART ONE: COPY

Use all copy exactly as written. Do not rewrite, improve, or summarize.
No em dashes anywhere. No buzzwords.

---

## Eyebrow
`RETURN ON EXPERIENCE`

## Headline
`Your events have a score. Do you know what it is?`

## Subhead
`Return on Experience measures the quality of your engagement, not just the quantity. Four categories determine your score: lead capture efficiency, engagement quality, follow-up speed, and conversion effectiveness. Most teams have never seen the number. Momentify surfaces it in real time.`

---

## Score preview block (visual anchor, center of section)

This is a large visual element showing the ROX score gauge and the four category labels. It is not interactive on the homepage. It is a static preview that creates desire for the full calculator.

Score dial: large semicircle gauge showing a score of 72, needle pointing to the High ROX zone. Color coded: red (0-39), amber (40-69), teal (70-84), cyan (85-100).

Below the dial, four stat tiles in a 2x2 grid:
- Lead Capture Efficiency
- Engagement Quality
- Follow-Up Speed
- Conversion Effectiveness

Each tile shows the category label and a placeholder value (e.g. "--"). Labels use Cyan. Values use white. Tiles use Deep Navy background with subtle border.

---

## Score range strip (below the visual)

Four columns, left to right. Each column has a colored top border, a tier name, and a one-line description.

| Border color | Tier name | Description |
|---|---|---|
| Red #E5484D | Critical Gap | Events are costing more than they're delivering. |
| Amber #F2B33D | Needs Optimization | You're capturing some value, but leaving ROI on the table. |
| Teal #5FD9C2 | High ROX | Above average performance with room to fine-tune. |
| Cyan #0CF4DF | Elite ROX | Highly optimized across every category. |

---

## Body copy block (left-aligned, below score strip)

**What ROX measures that ROI misses**

ROI tells you what you spent. ROX tells you whether it worked. Most event teams walk away with badge scan counts and a rough sense of booth traffic. They have no visibility into how deeply people engaged, which conversations revealed real intent, or how fast their team followed up. Those gaps are exactly where deals are lost and hiring pipelines stall.

ROX fills that gap with a scored, comparable number your team can actually act on.

---

## Calculator CTA block

Headline: `See where your team stands.`

Subhead: `Run your numbers in under two minutes. No login required.`

Four calculator options displayed as cards in a row. Each card has:
- Solution icon (Cyan, outlined)
- Solution name
- One-line description
- "Calculate" link in Cyan

Card 1:
- Icon: trade show booth outline
- Name: Trade Shows and Exhibits
- Description: Measure booth performance across lead capture, engagement, and conversion.

Card 2:
- Icon: person silhouette with checkmark
- Name: Technical Recruiting
- Description: Score your recruiting events on candidate quality and follow-up speed.

Card 3:
- Icon: map pin with route line
- Name: Field Sales
- Description: Measure rep-level engagement across job sites, facilities, and customer visits.

Card 4:
- Icon: building outline
- Name: Facilities and Venues
- Description: Track interaction depth across showrooms, demo floors, and training centers.

Below the cards, one primary CTA button:
`Calculate Your ROX`
Style: Action gradient fill (Cyan #0CF4DF to Deep Blue #1A56DB), white text, Inter 700

Secondary line below button:
`Or schedule a demo to see ROX dashboards live.` — "schedule a demo" is an underlined Cyan link.

---

# PART TWO: CLAUDE CODE BUILD PROMPT

---

# Momentify — ROX Homepage Section
## Claude Code Prompt

Reference the brand kit already in this project before touching any code. Do not approximate colors or tokens. Do not rewrite any copy. Use it exactly as provided in this prompt.

---

## Section overview

Build the ROX section of the Momentify homepage. This section lives between the Solutions tabbed section and the Social Proof section. It is the payoff section. The visitor has seen the problem and the use cases. This section introduces ROX as the measurement standard and drives them to the calculator.

Background: Depth gradient. Plum #1A0533 at top, transitioning to Midnight #070E2B, ending at Deep Navy #061341 at bottom. Full width. Minimum height 900px. Top and bottom padding: 100px.

---

## Section structure top to bottom

1. Eyebrow
2. Headline
3. Subhead
4. Score preview visual
5. Score range strip
6. Body copy block
7. Calculator CTA block

---

## 1. Eyebrow

Text: `RETURN ON EXPERIENCE`
Font: Inter 600, 11px, Cyan #0CF4DF, letter-spacing: 0.14em, all-caps
Centered. Margin bottom: 16px.

---

## 2. Headline

Text: `Your events have a score. Do you know what it is?`
Font: Inter 800, 48px, white, line-height: 1.1, centered
Max width: 720px, centered on page.
Margin bottom: 20px.

On mobile (below 768px): 32px.

---

## 3. Subhead

Text: `Return on Experience measures the quality of your engagement, not just the quantity. Four categories determine your score: lead capture efficiency, engagement quality, follow-up speed, and conversion effectiveness. Most teams have never seen the number. Momentify surfaces it in real time.`
Font: Inter 400, 17px, white at 65%, line-height: 1.7, centered
Max width: 640px, centered.
Margin bottom: 64px.

---

## 4. Score preview visual

Centered. Max width: 520px. Background: Deep Navy #061341 at 60% opacity, 2px border rgba(12, 244, 223, 0.15), border-radius: 20px. Padding: 40px.

**Gauge**
A semicircle SVG gauge. Total arc: 180 degrees. Divided into four color zones left to right:
- 0-39: Red #E5484D
- 40-69: Amber #F2B33D
- 70-84: Teal #5FD9C2
- 85-100: Cyan #0CF4DF

Gauge track: 12px stroke width, rounded ends.
Background track: white at 8% opacity, same arc.
Needle: a thin line from center point of the semicircle to the 72 position on the arc. White, 2px, with a small filled circle at the base (8px diameter, white).

Score number: `72` centered below the needle origin point. Inter 800, 64px, white.
Label below score number: `ROX SCORE` Inter 600, 11px, Cyan #0CF4DF, letter-spacing: 0.14em.
Tier label below that: `HIGH ROX` Inter 600, 13px, Teal #5FD9C2.

**Four stat tiles**
Below the gauge, a 2x2 grid. Each tile: Deep Navy #061341 background, 1px border rgba(255,255,255,0.08), border-radius: 10px, padding: 16px 20px.

Tile label: Inter 500, 11px, white at 45%, all-caps, letter-spacing: 0.1em.
Tile value: `--` Inter 700, 22px, white.

Tiles:
- Lead Capture Efficiency
- Engagement Quality
- Follow-Up Speed
- Conversion Effectiveness

Small caption below the 2x2 grid, centered: `Your numbers. Updated in real time.` Inter 400, 12px, white at 30%.

---

## 5. Score range strip

Full width. Margin top: 64px. Four equal columns. No background. A thin top border rgba(255,255,255,0.08) separates it from the score visual above.

Each column has:
- A 3px top border in the tier color
- Tier name: Inter 700, 14px, white
- One-line description: Inter 400, 13px, white at 50%
- Padding: 24px 20px

Columns left to right:
1. Border: Red #E5484D / Tier: Critical Gap / Description: Events are costing more than they're delivering.
2. Border: Amber #F2B33D / Tier: Needs Optimization / Description: You're capturing some value, but leaving ROI on the table.
3. Border: Teal #5FD9C2 / Tier: High ROX / Description: Above average performance with room to fine-tune.
4. Border: Cyan #0CF4DF / Tier: Elite ROX / Description: Highly optimized across every category.

On mobile: stack into 2x2 grid.

---

## 6. Body copy block

Two-column layout. Left column 45% width, right column 55% width. Gap: 64px. Max width: 1100px, centered. Margin top: 80px.

**Left column**
Eyebrow: `WHAT ROX MEASURES THAT ROI MISSES` — Inter 600, 10px, Cyan #0CF4DF, letter-spacing: 0.14em, margin bottom: 16px.

Body: Inter 400, 16px, white at 65%, line-height: 1.75.

Text:
`ROI tells you what you spent. ROX tells you whether it worked. Most event teams walk away with badge scan counts and a rough sense of booth traffic. They have no visibility into how deeply people engaged, which conversations revealed real intent, or how fast their team followed up. Those gaps are exactly where deals are lost and hiring pipelines stall.`

Second paragraph:
`ROX fills that gap with a scored, comparable number your team can actually act on.`

**Right column**
Four horizontal stat rows, each showing one ROX category with an icon, label, and one-line description.

Each row: flex row, icon left (24px, Cyan outlined SVG), label Inter 600 14px white, description Inter 400 13px white at 50%. Border bottom rgba(255,255,255,0.06), padding: 18px 0.

Row 1: Icon: capture grid / Label: Lead Capture Efficiency / Description: What percentage of visitors became leads.
Row 2: Icon: engagement waveform / Label: Engagement Quality / Description: How deeply each person interacted with your content.
Row 3: Icon: clock / Label: Follow-Up Speed / Description: How quickly your team responded after the event.
Row 4: Icon: conversion funnel / Label: Conversion Effectiveness / Description: How many leads became meetings, hires, or deals.

On mobile: stack left column above right column, full width.

---

## 7. Calculator CTA block

Centered. Margin top: 80px.

Headline: `See where your team stands.`
Font: Inter 700, 32px, white, centered. Margin bottom: 12px.

Subhead: `Run your numbers in under two minutes. No login required.`
Font: Inter 400, 16px, white at 60%, centered. Margin bottom: 40px.

**Four calculator cards**
Horizontal row of four equal cards. Max total width: 960px, centered. Gap: 16px.

Each card: background Deep Navy #061341, border 1px rgba(12, 244, 223, 0.12), border-radius: 14px, padding: 28px 24px. On hover: border-color rgba(12, 244, 223, 0.4), translateY(-3px), transition 200ms ease.

Card content top to bottom:
- Icon: 36px Cyan outlined SVG, margin bottom: 16px
- Name: Inter 700, 16px, white, margin bottom: 8px
- Description: Inter 400, 13px, white at 55%, line-height: 1.5, margin bottom: 20px
- "Calculate" link: Inter 600, 13px, Cyan #0CF4DF, arrow right character after text, no underline by default, underline on hover

Cards:
1. Icon: trade show booth outline / Name: Trade Shows and Exhibits / Description: Measure booth performance across lead capture, engagement, and conversion.
2. Icon: person silhouette with checkmark / Name: Technical Recruiting / Description: Score your recruiting events on candidate quality and follow-up speed.
3. Icon: map pin with route line / Name: Field Sales / Description: Measure rep-level engagement across job sites, facilities, and customer visits.
4. Icon: building outline / Name: Facilities and Venues / Description: Track interaction depth across showrooms, demo floors, and training centers.

On mobile: 2x2 grid, then stack to single column below 480px.

**Primary CTA button**
Margin top: 40px. Centered.
Text: `Calculate Your ROX`
Style: gradient background linear-gradient(135deg, #0CF4DF, #1A56DB). White text, Inter 700, 16px. Padding: 16px 40px. Border-radius: 8px. No border. On hover: opacity 0.9, translateY(-1px).

**Secondary line**
Margin top: 16px. Centered.
Text: `Or schedule a demo to see ROX dashboards live.`
Font: Inter 400, 14px, white at 45%.
"schedule a demo" is wrapped in an `<a>` tag. Color: Cyan #0CF4DF. Underline on hover only.

---

## Technical requirements

- No em dashes anywhere in rendered text
- All copy used exactly as written above
- Section must be fully responsive: 1280px desktop, 768px tablet, 375px mobile
- No JavaScript dependencies beyond what is already in the project
- Gauge SVG must be inline, not an image tag
- Animate the gauge needle on scroll into view: needle sweeps from 0 to 72 over 1.2 seconds, ease-out. Use IntersectionObserver.
- Stat tiles in the score preview animate their placeholder values with a subtle pulse while empty (CSS keyframe, opacity 0.3 to 0.7, 1.5s loop)
- All hover transitions: 200ms ease
- Font stack: `'Inter', system-ui, -apple-system, sans-serif`

---

## Copy rules

- No em dashes. Use a period or restructure.
- No buzzwords: seamless, powerful, robust, revolutionary, cutting-edge, innovative, unlock, game-changing, move the needle.
- All copy used exactly as written. Do not rewrite or improve it.
- Short declarative sentences throughout.
