# GTM Framework — Prompt 4 of 4: AI Content Builder

## Context

You are working inside the existing momentifyapp.com Next.js project.
Auth, theme system, dashboard, and the Trade Shows framework page are already built.
The Content Builder tab on `/gtm/trade-shows` currently shows a placeholder.
This prompt replaces that placeholder with a fully wired AI content generation panel.

Model: `claude-sonnet-4-20250514`
API key: read from `process.env.ANTHROPIC_API_KEY` (already in project)
All API calls are server-side only. Never expose the key to the client.
Use only CSS variable references for all colors.

---

## Step 1: API Route

Create `app/api/gtm/generate/route.ts`:

Accepts POST with JSON body:
```typescript
{
  solution: string        // e.g. "trade-shows"
  vertical: string        // e.g. "heavy-equipment"
  motion: string          // "direct" | "partner"
  contentType: string     // see content types below
  additionalContext?: string
}
```

Returns a streaming text response using the Anthropic API.

If streaming setup is complex for the existing project configuration, a non-streaming version
with a loading spinner is an acceptable fallback. Loading state must feel responsive.

On error: log server-side, return `{ error: "Generation failed. Please try again." }` status 500.

---

## System Prompt (injected server-side, never overridable by client)

```
You are a senior B2B marketing strategist writing on behalf of Momentify.

Momentify is an engagement intelligence platform that helps teams turn in-person moments
into measurable outcomes. The core proprietary framework is ROX (Return on Experience),
which scores events across four equally weighted dimensions: Lead Capture Efficiency,
Engagement Quality, Follow-Up Speed, and Conversion Effectiveness.

ROX scoring tiers: 0-39 Critical Gap, 40-69 Needs Optimization, 70-84 High ROX, 85-100 Elite ROX.

Brand voice:
- Confident, grounded, operator-led
- Short declarative sentences with purpose
- No em dashes — use a period or restructure the sentence
- No buzzwords: seamless, powerful, robust, revolutionary, innovative, unlock, game-changing
- No forced enthusiasm
- Content should sound natural when spoken aloud
- Always connect: problem, insight, value, outcome

Key proof points (use when relevant, not in every piece):
- Mustang CAT: 250+ qualified leads at CONEXPO, 40% lead qualification improvement
- $411M in potential value generated across 50+ events and 6 customers in 18 months
- 10,000 leads across 50+ events in 18 months
- Cat Defense: services-based engagement at DSEI, IDEX, AUSA
- Fortune 75 Manufacturer DistribuTECH program (never name the company, use that label)

Positioning:
- Momentify is NOT a lead capture tool, event app, or event management platform
- Momentify is an engagement intelligence layer that sits ABOVE existing tools
- Momentify does not replace Cvent, Whova, Hopin, or badge scanners — it completes them
- Use services-based language for enterprise and defense accounts, not licensing or software language
- The portfolio argument: event managers running 20+ shows across multiple vendors have no unified view — Momentify closes that gap

Competitive context:
- Cvent: logistics and registration platform — no in-booth intelligence, no ROX scoring
- Whova: conference attendee engagement — not designed for exhibitor B2B intelligence
- Hopin: virtual/hybrid platform — not a direct competitor for in-person trade show buyers
- Always position Momentify as completing the stack, not competing with it

Never sound salesy. Lead with insight and the problem. Make the reader feel understood before
any ask. CTAs should be low-friction in early touches.
```

---

## Step 2: Prompt Template Library

Create `lib/gtm/builder-prompts.ts`.

Export a function `buildUserMessage(params)` that takes `{ solution, vertical, motion, contentType, additionalContext }` and returns a complete user message string for each content type.

### Cold Outreach Email (3-touch sequence)

```
Write a 3-touch cold outreach email sequence for Momentify.

Target:
- Solution: [solution label]
- GTM Motion: [motion label]
- Vertical: [vertical label]
- Buyer: [inject ICP title and company type based on vertical]

Sequence rules:
- Touch 1 (Day 0): Lead with the industry pain. No product pitch. Soft CTA only (ROX Audit or ROX Calculator link).
- Touch 2 (Day 4): Reference a relevant proof point. Move toward a call or demo. CTA is a 20-minute conversation.
- Touch 3 (Day 9): Short, human, no pressure. Final soft CTA. Under 80 words for the body.

Each email format:
SUBJECT: [subject line]
BODY: [email body]
CTA: [call to action]

Rules: no em dashes, no buzzwords, under 150 words per email, sound like a real person wrote it.

[additionalContext if provided]
```

### LinkedIn Post

```
Write a LinkedIn post for Momentify targeting [vertical] event marketers.

Motion: [motion label]
Angle: [derive from vertical and motion context]

Rules:
- 150 to 250 words
- Lead with a sharp observation or question — not a company announcement
- Do not start with "I" or "We"
- No hashtag spam — maximum 3 relevant hashtags at the end
- End with a question or non-salesy CTA that drives comments
- No em dashes, no buzzwords

[additionalContext if provided]
```

### LinkedIn DM Script

```
Write a 3-message LinkedIn DM sequence for Momentify.

Target: [ICP title] at a [vertical] company
Motion: [motion label]

DM 1: Genuine opener referencing something specific about their role or company context.
One sharp question about their post-event process. No pitch whatsoever.

DM 2 (Day 5, no reply): Share one useful resource (ROX Audit or relevant guide) with a
single sentence of context. Nothing else. Under 40 words.

DM 3 (if they engage): Move to a call or offer to send the relevant case study directly.
Keep it short and warm.

Rules: no em dashes, sound human, DM 1 must feel researched not templated.

[additionalContext if provided]
```

### Lead Magnet Outline

```
Write a full content outline for a Momentify lead magnet.

Solution: [solution label]
Vertical: [vertical label]
Motion: [motion label]

Output format:
TITLE: [compelling title]
SUBTITLE: [one-line subhead]
HOOK: [2-3 sentence opening that states the problem and why this guide exists]
SECTIONS: [5 to 7 section headers, each with 2 to 3 bullet points of content]
CONCLUSION: [1 paragraph wrapping up with the ROX framework and a CTA]
GATE REQUIREMENT: [what information to ask for — name, email, company, role]

This outline should be detailed enough for a designer and copywriter to execute without
additional briefing.

Rules: no em dashes, no buzzwords, every section should deliver standalone value.

[additionalContext if provided]
```

### Discovery Call Script

```
Write a discovery call script for a Momentify sales rep.

Target: [ICP title] at a [vertical] company
Solution: [solution label]
Motion: [motion label]

Output format:
OPENING: [30-second opener that earns the conversation]
DISCOVERY QUESTIONS: [5 questions with follow-up probes for each]
TRANSITION: [how to move from discovery to showing Momentify — one paragraph]
TOP OBJECTIONS: [3 objections with specific responses using Momentify positioning]
SOFT CLOSE: [how to end the call with a clear next step]

Rules: no em dashes, conversational tone, questions should make the buyer feel understood
not interrogated. Responses to objections should never be defensive.

[additionalContext if provided]
```

### Partner Pitch Narrative

```
Write a partner pitch narrative for Momentify targeting exhibit agencies and event companies.

Partner type: [Freeman-type agency / association / dealer network based on vertical]
Solution: [solution label]
Vertical: [vertical label]

Output format:
OPENING PARAGRAPH: Their problem — clients asking what the show returned, no defensible answer
SECOND PARAGRAPH: The co-sell model — partner delivers the experience, Momentify delivers
the intelligence, one unified post-show report, revenue share
THIRD PARAGRAPH: The ask — 30-minute briefing, no pitch, just the model
ONE-LINER: A sentence the partner can use with their own clients to introduce Momentify

Rules: no em dashes, no buzzwords, sound like a business development conversation not a
marketing pitch. Lead with their business outcome, not Momentify features.

[additionalContext if provided]
```

### Competitive Battle Card

```
Write a competitive battle card for Momentify sales reps.

Competitor: [derived from contentType selection — Cvent, Whova, or Hopin]
Solution context: [solution label]
Vertical: [vertical label]

Output format:
COMPETITOR SNAPSHOT: 2 sentences on what this competitor actually does and who buys it
WHEN YOU HEAR THEM: 3 situations where this competitor comes up in a sales conversation
HOW TO RESPOND: Specific language for each situation — what to say, what not to say
THEIR STRENGTHS: Be honest — 2 to 3 things they do well
OUR ADVANTAGE: 3 specific Momentify advantages that matter in this vertical
KILLER QUESTION: One question to ask the buyer that reframes the conversation in Momentify's favor
PROOF POINT TO USE: The most relevant Momentify proof point for this competitive situation

Rules: be honest about competitor strengths — reps trust a balanced kill sheet more than
a one-sided one. No em dashes. Keep each section tight and scannable.

[additionalContext if provided]
```

---

## Step 3: Builder UI Component

Create `components/gtm/ContentBuilder.tsx` — a client component.

Props:
```typescript
{
  solution: string       // pre-set from parent page, not editable
  solutionLabel: string  // display label
}
```

---

### Layout

Two-panel layout on desktop (min-width 768px):
- Left panel: 300px, background `var(--gtm-bg-card)`, border-right `1px solid var(--gtm-border)`, padding 28px
- Right panel: flex 1, background `var(--gtm-bg-page)`, padding 28px

On mobile: single column, controls stack above output.

---

### Left Panel: Controls

**Solution display (read-only):**
Label: "Solution" — 11px, 600, `var(--gtm-text-faint)`, letter-spacing 0.1em
Value: solution label — 14px, 700, `var(--gtm-text-primary)`
Lock icon (Lucide) to signal it is not editable

**GTM Motion:**
Label: "Motion" — same label style
Two toggle buttons: "Direct to Customer" / "Channel Partners"
Button style: 13px, border-radius 6px, padding 8px 14px
Selected: `var(--gtm-text-primary)` background, white text (light mode: Deep Navy bg, white; dark mode: white bg, Deep Navy)
Unselected: `var(--gtm-bg-card)`, `var(--gtm-border)` border, `var(--gtm-text-muted)` text

**Vertical:**
Label: "Vertical"
Three option cards (stacked, full width):
- Heavy Equipment
- Energy & Infrastructure
- Aerospace & Aviation
Hide vertical selector when motion is "Channel Partners"
Selected card: border-color `var(--gtm-cyan)`, background `var(--gtm-tag-bg)`
Unselected: `var(--gtm-bg-card)`, `var(--gtm-border)` border
Font: 13px, 600, `var(--gtm-text-primary)`

**Content Type:**
Label: "Content Type"
Seven option cards (stacked, full width, each with icon + label + 1-line description):

```
FileText  — Cold Outreach Emails     — "3-touch sequence, Day 0/4/9"
Linkedin  — LinkedIn Post            — "Single post, 150-250 words"
MessageSquare — LinkedIn DM Script   — "3-message sequence"
BookOpen  — Lead Magnet Outline      — "Full content brief for designer/writer"
Phone     — Discovery Call Script    — "Questions, objections, soft close"
Handshake — Partner Pitch Narrative  — "Co-sell model pitch"
Shield    — Competitive Battle Card  — "Kill sheet vs Cvent, Whova, or Hopin"
```

For Competitive Battle Card: show a sub-selector for competitor: Cvent | Whova | Hopin (3 small toggle buttons, appears only when Battle Card is selected)

Selected card: Cyan left border 2px + `var(--gtm-tag-bg)` background
Card: border-radius 8px, padding 12px 14px, border `1px solid var(--gtm-border)`
Icon: 16px, `var(--gtm-cyan)`
Label: 13px, 700, `var(--gtm-text-primary)`
Description: 11px, `var(--gtm-text-muted)`

**Additional Context:**
Label: "Additional Context" + "(optional)" in `var(--gtm-text-faint)`
Textarea: 4 rows, full width, font 13px, border `1px solid var(--gtm-border)`, border-radius 8px, padding 10px 12px, background `var(--gtm-bg-card)`, color `var(--gtm-text-primary)`
Focus: border-color `var(--gtm-cyan)`, outline none
Placeholder: "Company name, specific event, role, custom angle..."
Max 300 characters, counter bottom right in `var(--gtm-text-faint)` 11px

**Generate Button:**
Full width, height 44px, border-radius 8px
Active: `linear-gradient(135deg, #0CF4DF, #1A56DB)`, white text 700 15px, Sparkles icon left
Loading: animated gradient + "Generating..." text, cursor not-allowed
Disabled (incomplete selections): opacity 0.4, cursor not-allowed
Disabled until: motion + (vertical if Direct) + contentType all selected

---

### Right Panel: Output

**Empty state:**
Centered vertically and horizontally in the panel
Dashed border box: `2px dashed var(--gtm-border)`, border-radius 12px, padding 48px
Icon: Sparkles, 32px, `var(--gtm-text-faint)`
Text: "Your generated content will appear here." — 14px, `var(--gtm-text-muted)`
Subtext: "Select your options and hit Generate." — 13px, `var(--gtm-text-faint)`

**Loading state:**
Three skeleton lines, pulse animation (opacity 0.4 to 0.8 loop)
Label below: "Building your content..." — 13px, `var(--gtm-text-muted)`

**Output state:**

Header row:
- Content type label (e.g. "Cold Outreach Emails") — 16px, 700, `var(--gtm-text-primary)`
- Motion + Vertical tags (small Cyan pills)
- Right side: "Copy All" button + "Regenerate" button

Copy All: border `1px solid var(--gtm-border)`, background `var(--gtm-bg-card)`, 13px, 600, Copy icon — shows "Copied!" for 2 seconds on click
Regenerate: same style, RotateCw icon

Output body:
- `whitespace-pre-wrap`, font Inter 14px, line-height 1.75, `var(--gtm-text-primary)` color
- Background `var(--gtm-bg-card)`, border-radius 10px, padding 24px
- For email sequences: each TOUCH block gets a subtle divider and subject line in 700 weight
- For battle cards: each section label in 600 weight `var(--gtm-text-primary)`, content in `var(--gtm-text-muted)`

Feedback row (below output):
"Was this useful?" label + thumbs up / thumbs down icon buttons
On click: icon fills Cyan (thumbs up) or `#ef4444` (thumbs down), no backend needed
Small text: "Review all content before sending." — 12px, `var(--gtm-text-faint)`

---

## Step 4: Wire Into Trade Shows Page

In `app/gtm/trade-shows/page.tsx`:
- Import `ContentBuilder`
- Replace the placeholder with `<ContentBuilder solution="trade-shows" solutionLabel="Trade Shows & Exhibits" />`
- If `?builder=true` in URL, open Content Builder tab on load (read with `useSearchParams`)

---

## Step 5: Reusability

The `ContentBuilder` component accepts `solution` and `solutionLabel` as props.
It will be dropped into all 5 solution pages with no changes to the component itself.
The vertical options displayed can be driven by a prop `verticals` in future — for now
default to the three Trade Shows verticals.

---

## Step 6: Verify

1. Generate button disabled until all required selections made
2. API call goes to `/api/gtm/generate` — never directly to Anthropic from browser
3. Generated content streams or appears in the output panel
4. Copy button works for the full output
5. Regenerate reruns with same inputs
6. Competitive Battle Card shows competitor sub-selector
7. Competitor sub-selector (Cvent / Whova / Hopin) is required before Generate activates when Battle Card is selected
8. No hardcoded hex values in the component
9. Component looks correct in both light and dark theme
