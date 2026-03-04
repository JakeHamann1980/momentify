# Momentify — Case Study Page Design Pattern
## Reference Document

Live reference: `https://momentify-website.vercel.app/case-studies/mustang-cat`

Use this page as the design template for all future case study pages. Do not use the brand kit as a design reference. Use the live site.

---

## Alignment

All content is left-aligned throughout. The only exception is full-width quote blocks, where the quote text is centered. Everything else — eyebrows, headlines, subheads, body copy, stats, cards, tiles — is left-aligned.

---

## Page structure (top to bottom)

1. Existing site nav (no changes)
2. Hero — dark gradient
3. Challenge section — white background
4. Solution section — gray #F8F9FC background
5. Quote block 1 — full-width dark gradient
6. Results section — white background
7. Quote block 2 — white background with top/bottom border
8. Podcast CTA section — gray #F8F9FC background
9. Final CTA — dark gradient
10. Existing site footer (no changes)

---

## Section specs

### Hero
- Background: depth gradient, Plum `#1A0533` to Midnight `#070E2B` to Deep Navy `#061341`
- Breadcrumb line: `Case Study / [Vertical]` — Inter 500, 13px, white at 40%
- Eyebrow: vertical name or category — Inter 600, 11px, Cyan `#0CF4DF`, letter-spacing 0.14em, all-caps
- H1: large, Inter 800, white, left-aligned, punchy and short
- Subhead: Inter 400, 18px, white at 65%, line-height 1.65
- Stat row: 3 inline stats, number in Inter 800 large white, label in Inter 400 13px white at 50%, vertical dividers at 1px white 15%
- Client logo + recruiter attribution pill row below stats
- Padding top: 140px (accounts for nav). Padding bottom: 100px.

### Challenge section
- Background: white `#FFFFFF`
- Two-column layout: left column body copy, right column challenge cards
- Left column eyebrow: `THE CHALLENGE` — Cyan, 10px, caps
- Left column headline: Inter 800, 36px, Deep Navy
- Left column body: Inter 400, 16px, Deep Navy at 55%, line-height 1.75
- Right column: stacked cards, background `#F8F9FC`, border-left 3px solid rgba(6,19,65,0.12), border-radius 12px, padding 24px 28px
- Card label: Inter 700, 14px, Deep Navy
- Card body: Inter 400, 13px, Deep Navy at 55%, line-height 1.6

### Solution section
- Background: `#F8F9FC`
- Section header left-aligned: eyebrow + headline + subhead
- Three horizontal tiles in a row
- Each tile: white background, border 1px rgba(6,19,65,0.08), border-radius 16px, padding 36px 28px
- Tile structure: icon (32px Cyan outlined SVG) → headline (Inter 700, 18px, Deep Navy) → body (Inter 400, 14px, Deep Navy at 55%)
- Real photos below tiles if available (3 images in a row)

### Quote blocks (full-width dark gradient)
- Background: depth gradient, same as hero
- Max content width: 800px, centered on page
- Large open-quote `"` character: Inter 800, 96px, Cyan at 40% opacity
- Quote text: Inter 500, 24px, white, italic, centered, line-height 1.6
- Attribution: circular photo (56px), name Inter 700 15px white, title Inter 400 13px white at 50%
- Photo asset: use actual headshot if available, initials circle as fallback

### Results section
- Background: white `#FFFFFF`
- Section eyebrow: `THE RESULTS` — Cyan caps
- Section headline: large, punchy, includes a key number
- 2x2 results grid, max width 900px
- Each cell: background `#F8F9FC`, border-radius 16px, padding 36px 32px
- Cell number: Inter 800, 52px, Deep Navy
- Cell label: Inter 400, 14px, Deep Navy at 50%, line-height 1.5
- Cell tag: Cyan pill — background rgba(12,244,223,0.10), text `#0AA891`, Inter 600, 11px, padding 4px 10px, border-radius 20px
- Pilot survey callout block below grid: background rgba(12,244,223,0.06), border rgba(12,244,223,0.15), border-radius 12px, padding 28px 32px. Eyebrow + italic quote text from actual survey response.

### Quote block 2 (white background variant)
- Background: white, border-top and border-bottom 1px rgba(6,19,65,0.06)
- Same quote structure as dark variant but Deep Navy text
- Attribution circle: background rgba(6,19,65,0.08), Deep Navy initials

### Podcast CTA section
- Background: `#F8F9FC`
- Two-column layout 50/50
- Left: eyebrow + headline + body + listen link in Cyan
- Right: episode card — white bg, border, border-radius 14px, episode pill tag, title, description, play button row

### Final CTA
- Background: depth gradient
- Left-aligned headline: Inter 800, 44px, white
- Subhead: Inter 400, 17px, white at 60%
- Two buttons: primary gradient fill (`#0CF4DF` to `#1A56DB`), secondary transparent with white border
- Trust line below buttons: Inter 400, 13px, white at 35%

---

## Assets already in project

| Asset | Path |
|---|---|
| Mustang CAT color logo | `/logos/mustang-cat-color.png` |
| Mustang CAT white logo | `/logos/mustang-cat.png` |
| Caterpillar logo | `/logos/caterpillar.png` |
| Thompson Tractor logo | `/logos/thompson-tractor.png` |
| Blanchard Machinery logo | `/logos/blanchard-machinery.png` |
| Carter Machinery logo | `/logos/carter-machinery.png` |
| Sarah Bell headshot | `/sarahbell.jpeg` |
| Mustang CAT booth photos | `/mustang1.png`, `/mustang2.png`, `/mustang3.png` |

---

## Typography

| Use | Font | Size | Weight | Color |
|---|---|---|---|---|
| Eyebrow | Inter | 10–11px | 600 | Cyan #0CF4DF, caps, letter-spacing 0.14em |
| H1 hero | Inter | 48px | 800 | White |
| H2 section | Inter | 36–42px | 800 | Deep Navy or White |
| Subhead | Inter | 17–18px | 400 | White at 65% or Deep Navy at 55% |
| Body | Inter | 14–16px | 400 | Deep Navy at 55%, line-height 1.65–1.75 |
| Stat number | Inter | 44–52px | 800 | White or Deep Navy |
| Stat label | Inter | 13px | 400 | White at 50% or Deep Navy at 50% |
| Quote text | Inter | 22–24px | 500 | White or Deep Navy, italic |
| Card label | Inter | 14px | 700 | Deep Navy |
| Tag | Inter | 11px | 600 | #0AA891 on rgba(12,244,223,0.10) bg |
| CTA primary | Inter | 16px | 700 | White on gradient bg |
| CTA secondary | Inter | 16px | 600 | White on transparent, white border |
| Trust line | Inter | 13px | 400 | White at 35% |

Font stack: `'Inter', system-ui, -apple-system, sans-serif`

---

## Colors

| Token | Hex |
|---|---|
| Deep Navy | #061341 |
| Midnight | #070E2B |
| Plum | #1A0533 |
| Cyan | #0CF4DF |
| Tag green | #0AA891 |
| Gray background | #F8F9FC |
| White | #FFFFFF |
| Action gradient | linear-gradient(135deg, #0CF4DF, #1A56DB) |

---

## Interaction patterns

- Hover transitions: 200ms ease throughout
- Cards on hover: box-shadow increase, translateY(-4px)
- CTA buttons on hover: opacity 0.9, translateY(-2px)
- Scroll reveal: IntersectionObserver, same timing and easing as homepage
- All links: color Cyan, underline on hover only

---

## Copy rules (apply to every case study)

- No em dashes. Use a period or restructure the sentence.
- No buzzwords: seamless, powerful, robust, revolutionary, cutting-edge, innovative, unlock, game-changing, move the needle.
- Short declarative sentences. Split anything over 20 words.
- Client quotes used verbatim. Do not clean up or paraphrase.
- Anonymous clients use pill tag: `Fortune 75 Manufacturer` or similar, styled as existing anonymous tag.
