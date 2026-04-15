# GTM Framework — Prompt 3 of 4: Trade Shows & Exhibits Solution Page

## Context

You are working inside the existing momentifyapp.com Next.js project.
Auth, sidebar layout, theme system, and the dashboard page are already built.
Build the Trade Shows & Exhibits solution page at `app/gtm/trade-shows/page.tsx`.

This is the master template. All other solution pages will follow this exact pattern.
Use only CSS variable references — no hardcoded hex values.
No em dashes anywhere in content or UI copy.

---

## Data File First

Before building the page, create `lib/gtm/data/trade-shows.ts`.
Export all framework content as typed constants. The page component imports from here.
This keeps the page file clean and makes content updates easy.

Define types:
```typescript
type GTMLayer = {
  id: number
  label: string
  content: React.ReactNode | string  // or structured object
}

type VerticalTrack = {
  vertical: 'heavy-equipment' | 'energy-infrastructure' | 'aerospace-aviation'
  label: string
  layers: GTMLayer[]
}

type MotionTrack = {
  motion: 'direct' | 'partner'
  label: string
  verticals: VerticalTrack[]  // partner motion has one shared track
}
```

Populate with all content defined below in this prompt.

---

## Page Structure

Two top-level tabs toggled by a tab bar:
1. **Framework** (default)
2. **Content Builder** (AI builder — covered in Prompt 4, render a placeholder for now)

If URL param `?builder=true` is present on load, activate the Content Builder tab.

---

## Page Header

Eyebrow: `SOLUTION 01 — TRADE SHOWS & EXHIBITS` — 11px, 600, `var(--gtm-cyan)`, letter-spacing 0.14em
H1: `Trade Shows & Exhibits` — Inter 800, 32px, `var(--gtm-text-primary)`
Subhead: `Two motions. Three verticals. Seven layers.` — 16px, `var(--gtm-text-muted)`

Right side stat chips (same style as dashboard chips):
- "2 Motions"
- "3 Verticals"
- "7 Layers"

---

## Tab Bar

Sticky, sits below page header.
Background: `var(--gtm-bg-card)`, border-bottom `1px solid var(--gtm-border)`
Padding: 0 48px

Tab item: 44px height, padding 0 20px, font 14px 600
Active: `var(--gtm-cyan)` text + 2px bottom border `var(--gtm-cyan)`
Inactive: `var(--gtm-text-muted)`, no border
Content Builder tab: add a Sparkles icon (lucide) left of label

---

## FRAMEWORK TAB

### Motion Selector

Two toggle buttons:
- "Direct to Customer" (default selected)
- "Channel Partners"

Selected: background `var(--gtm-text-primary)`, text white
Unselected: background `var(--gtm-bg-card)`, border `1px solid var(--gtm-border)`, text `var(--gtm-text-primary)`
Border-radius: 8px, padding: 10px 20px, font: 14px 600, transition 150ms

Switching motion rerenders the vertical tabs and layer content below.

---

### Vertical Tabs (only shown for Direct motion)

Three tabs: Heavy Equipment | Energy & Infrastructure | Aerospace & Aviation
Active: `var(--gtm-cyan)` bottom border 2px + `var(--gtm-cyan)` text
Inactive: `var(--gtm-text-muted)`
Font: 14px, 500

Channel Partners motion has no vertical tabs — it renders a single unified partner track.

---

### Layer Cards

Render 7 accordion cards for the selected motion + vertical combination.
Each card is expanded/collapsed. First card open by default.

**Card structure:**
- Background: `var(--gtm-layer-bg)`
- Border: `1px solid var(--gtm-border)`
- Border-radius: 12px
- Hover background: `var(--gtm-layer-hover)`, transition 150ms

**Card header (always visible, clickable):**
- Left: gradient number pill `linear-gradient(135deg, #0CF4DF, #1A56DB)`, 28px circle, Deep Navy text 800
- Layer label: 15px, 700, `var(--gtm-text-primary)`
- Right: Copy icon button (copies card content to clipboard) + ChevronDown (rotates 180deg when open)

**Card body (collapsible, smooth max-height animation):**
- Padding: 0 24px 24px 64px (indented past the number pill)
- Render content as formatted sections (see content below)
- Font: 14px, `var(--gtm-text-muted)`, line-height 1.7

---

## LAYER CONTENT

### MOTION: Direct to Customer

---

#### Vertical: Heavy Equipment

**Layer 1 — ICP + Buyer Personas**

Primary buyer:
- Title: VP of Marketing or VP of Sales at OEM, large dealer group, or Cat dealer
- Company: $50M+ revenue, exhibits at 5+ shows per year
- Shows: CONEXPO, MINExpo, BAUMA, World of Concrete, ICUEE

Secondary buyer:
- Title: Event Manager or Trade Show Coordinator
- They execute, the VP approves spend

Goals:
- Justify event budget to leadership with numbers, not stories
- Stop leads from dying in a spreadsheet after the show
- Show pipeline contribution from shows in the CRM

Blockers:
- "We already use Cvent or Whova" — Momentify sits above those tools, not replacing them
- "IT will need to review this" — position as a managed services engagement, not software

Budget authority:
- Marketing VP owns the line item, CFO approves anything over $25K
- Event Manager influences but does not approve

Trigger events:
- Just wrapped a major show with no clean follow-up story for leadership
- New VP Marketing who wants accountability and data
- Lost a deal that started at a show and went undocumented

---

**Layer 2 — Core Message + Proof Points**

Headline: "You built the experience. You just can't prove it yet."

Subhead: "Momentify turns booth traffic into intelligence your leadership can see."

Key differentiator: Portfolio-level ROX visibility across all your shows, not just one event. No other tool in the market gives an event manager a single view across Cvent, Whova, badge scanners, and their CRM.

Proof points:
- Mustang CAT captured and qualified 250+ leads at a single CONEXPO event with 40% lead qualification improvement
- $411M in potential value generated across 50+ events and 6 customers in 18 months
- Follow-up speed went from days to hours with Momentify-triggered CRM sync

Objection handling:
- "Our badge scanner does this" — badge scanning captures presence. Momentify captures intent. Those are different things.
- "We use Cvent already" — Cvent manages logistics. Momentify tells you what actually happened and what to do next.
- "We don't have budget" — what is the cost of not knowing which $200K show is working and which is not?
- "We need IT involved" — structured as a managed services engagement to stay out of IT procurement

---

**Layer 3 — Lead Magnets**

Primary: "The Heavy Equipment Trade Show ROX Audit"
- Format: 10-question self-assessment, scores their current event ROX
- Gate: email required for score + recommendations
- Delivery: score + automated 3-email nurture sequence over 7 days

Secondary: "The CONEXPO Intelligence Playbook"
- Format: gated PDF guide
- Hook: practical pre/during/post show playbook using ROX framework

Tertiary: ROX Calculator (live at momentifyapp.com/rox-calculator)
- Use as a bottom-of-funnel touch with heavy equipment framing

---

**Layer 4 — Outreach Sequences**

Cold Email — 3 Touch:

Touch 1 (Day 0)
Subject: "What did [Event] actually return?"
Lead with the industry context: average heavy equipment exhibitor spends $150K to $300K per major show. Most walk away with a badge scan list and a spreadsheet nobody owns.
Pain: leadership wants to know what came back. The answer is usually "we generated a lot of interest."
CTA: link to ROX Audit. Framed as a benchmark, not a sales page.

Touch 2 (Day 4)
Subject: "How Mustang CAT changed this"
Lead with the Mustang CAT result: 250+ qualified leads, 40% lead qualification improvement, follow-up in hours not days.
Transition: "Takes about 20 minutes to see how this maps to your setup."
CTA: short demo call or 3-minute video walkthrough

Touch 3 (Day 9)
Subject: "Last one, then I will leave you alone"
Short. Human. No pressure.
Body: "Here is the ROX Calculator if nothing else. Takes 2 minutes and you will have a number to take into your next budget conversation."
CTA: ROX Calculator link

LinkedIn DM Flow:

DM 1: Reference a specific show they exhibit at (research their LinkedIn or company site first). Ask one sharp question about what their post-show process looks like. No pitch.
DM 2 (Day 5, no reply): Drop the ROX Audit link with one sentence of context. Nothing else.
DM 3 (if they engage): Move to call or send the Mustang CAT one-pager directly in the thread.

---

**Layer 5 — Sales Enablement**

Discovery opener: "Walk me through what happens to your leads after the show closes. Who owns that process and where do they live?"

Top 5 discovery questions:
1. "How many shows do you run per year and who owns follow-up for each one?"
2. "What does your leadership expect to see after a show like CONEXPO in terms of results?"
3. "How long does it typically take your team to get show leads into your CRM?"
4. "If you could change one thing about how you report on event performance, what would it be?"
5. "Have you ever lost a deal you traced back to a booth conversation that fell through the cracks?"

Objection responses:
- "We already use Cvent / Whova" — "Good. We do not replace either of those. Momentify sits above them. You keep your existing stack. We give you the layer that tells you what worked across all of it."
- "We have a badge scanner" — "Badge scanners tell you someone was there. We tell you what they cared about, how long they engaged, and who your team needs to follow up with first."
- "Not in budget right now" — "What is the number you need to show leadership to justify the next show? That is exactly the number Momentify produces."
- "IT needs to approve software" — "We have structured this as a managed services engagement specifically to keep it out of the IT procurement process. No deployment, no integration required on your end."

One-pager: Mustang CAT case study (link to live case study on momentifyapp.com/case-studies/mustang-cat)

---

**Layer 6 — ROX Metrics + KPIs**

Four scored dimensions (equally weighted, 0 to 100):
- Lead Capture Efficiency: leads captured vs estimated booth traffic
- Engagement Quality: time in booth, content interactions, persona completeness score
- Follow-Up Speed: hours from capture to first CRM touch
- Conversion Effectiveness: MQL rate, pipeline attributed to the show

ROX scoring tiers:
- 0 to 39: Critical Gap
- 40 to 69: Needs Optimization
- 70 to 84: High ROX
- 85 to 100: Elite ROX

Executive reporting framing: "For every $X spent on the show, Momentify helped us identify $Y in qualified pipeline within 48 hours of the show closing."

Report cadence: live dashboard during event, 7-day post-show summary, 30-day pipeline attribution update

---

**Layer 7 — Competitive Intel: Event Tech Platforms**

This layer is a structured kill sheet. Render it as a comparison table plus a "How to Win" section.

Competitors in this category: Cvent, Whova, Hopin

**Comparison Table**

Columns: Capability | Momentify | Cvent | Whova | Hopin

Rows and content:

| Capability | Momentify | Cvent | Whova | Hopin |
|---|---|---|---|---|
| In-booth intent capture | Yes — real-time, persona-driven | No — logistics only | Limited — check-in only | No — virtual/hybrid focus |
| ROX scoring framework | Yes — 4-dimension proprietary score | No | No | No |
| Portfolio-level view across multiple shows | Yes — unified dashboard | Partial — event-by-event silos | No | No |
| Works above existing tools | Yes — sits above Cvent, Whova, badges | N/A — replaces other tools | N/A — replaces other tools | N/A — replaces other tools |
| Industry-specific templates | Yes — heavy equipment, defense, energy | Generic | Generic | Generic |
| CRM / ATS trigger on engagement | Yes — real-time triggers | Limited — post-event export | No | No |
| On-site managed services | Yes | No | No | No |
| Target market | B2B enterprise exhibitors | Large event planners and corporates | SMB events and conferences | Virtual and hybrid events |

**Positioning vs Each Competitor:**

vs Cvent:
"Cvent is the logistics platform. It manages registrations, floor plans, and schedules. It does not measure what happened in the booth or who was worth following up with. If your client uses Cvent, Momentify does not replace it. We complete it."
Win condition: client is frustrated that Cvent gives them logistics but no post-show intelligence.

vs Whova:
"Whova is built for conference attendee engagement. It is not designed for exhibitor intelligence or post-show sales follow-up in a B2B heavy equipment context. Its lead capture is a feature, not a framework."
Win condition: client is using Whova's lead capture feature and complaining about data quality or follow-up speed.

vs Hopin:
"Hopin is a virtual and hybrid event platform. If the conversation is about in-person trade show performance, Hopin is not in the room. If it comes up, it means the client is conflating virtual event tools with in-person engagement intelligence."
Win condition: this competitor rarely comes up for pure trade show buyers. If it does, reframe the conversation around in-person ROX specifically.

**How to Win Section:**

Three key positioning moves:
1. "We do not replace. We complete." — Momentify never asks clients to remove their existing stack. It adds the intelligence layer above it. This removes the competitive threat framing entirely.
2. Lead with the ROX framework — no competitor has a named, proprietary scoring framework. ROX is defensible IP. Make the conversation about scoring methodology, not features.
3. Use the portfolio argument — event managers running 20+ shows per year across multiple vendors have no unified view. Cvent, Whova, and badge scanners each create a silo. Momentify closes that gap. No competitor in this category does this.

---

#### Vertical: Energy & Infrastructure

**Layer 1 — ICP + Buyer Personas**
Primary: Marketing Director or Communications Lead at utility, grid operator, or EPC contractor
Secondary: Government Affairs Manager or Sustainability Program Manager
Shows: DistribuTECH, POWER-GEN International, CERAWeek, ADIPEC, IEEE PES
Goals: build pipeline in a relationship-driven, long-cycle industry. Prove marketing drives revenue, not just awareness.
Blockers: long internal approval cycles, reports to VP of Communications not Marketing, "our deals take 18 months"
Trigger events: upcoming major conference, new budget year, previous show had no measurable outcome

**Layer 2 — Core Message + Proof Points**
Headline: "Your buyers came to the booth. Do you know which ones were serious?"
Differentiator: intent scoring across long sales cycles. First-touch intelligence matters most when deals take 18 months.
Proof point: Fortune 75 Manufacturer DistribuTECH program data (use "Fortune 75 Manufacturer" label, not company name)
Key objection: "Our sales cycle is 18 months" — counter: "That is exactly why the first conversation matters. The one you do not document today is the deal you lose in month 14."

**Layer 3 — Lead Magnets**
Primary: "Measuring Intent at High-Stakes Industry Events" — guide for energy sector event marketers
Secondary: Energy & Infrastructure ROX benchmark one-pager (anonymous industry data)

**Layer 4 — Outreach Sequences**
Touch 1: Lead with the long-cycle pain. "Most energy sector deals start with a booth conversation that never gets documented."
Touch 2: Reference DistribuTECH or POWER-GEN specifically. Offer the intent measurement guide.
Touch 3: Short. ROX Calculator framed for energy: "What is one qualified relationship from DistribuTECH worth to your pipeline?"

LinkedIn DM: Lead with an observation about the gap between the relationship you build at a show and the CRM record that comes from it. No pitch in DM 1.

**Layer 5 — Sales Enablement**
Discovery opener: "In a market where deals take 18 months, what happens to the relationships you build at shows between month 1 and month 12?"
Key probes: documentation process, CRM adoption on the show floor, how they define a qualified booth conversation

**Layer 6 — ROX Metrics**
Emphasis: relationship quality scoring, re-engagement triggers, multi-touch attribution across long cycles
KPI framing for leadership: "X high-value contacts identified at [Show], Y re-engaged within 90 days"

**Layer 7 — Competitive Intel**
Same Cvent / Whova / Hopin comparison table with energy sector context added:
- Emphasize: "In energy and infrastructure, relationships drive procurement decisions. A badge scan from Cvent does not tell you the contact was a $10M opportunity. Momentify's intent signals do."
- Energy-specific win condition: buyer is running DistribuTECH or CERAWeek with no way to tier contacts by opportunity quality post-show.

---

#### Vertical: Aerospace & Aviation

**Layer 1 — ICP + Buyer Personas**
Primary: Defense Marketing Lead, Business Development Director, Government Relations Manager
Company: defense OEM, systems integrator, government contractor
Shows: DSEI, IDEX, AUSA, Paris Air Show, Sea-Air-Space, MRO Americas
ITAR sensitivity: data handling matters. Address proactively.
Goals: BD pipeline visibility from events, documenting mission-critical conversations, executive-level reporting on show ROI
Trigger events: post-DSEI / IDEX review, BD team restructure, new program pursuit phase

**Layer 2 — Core Message + Proof Points**
Headline: "You know who you talked to. Do you know what moved?"
Differentiator: secure, structured data capture in a sector where conversations are the entire sales motion
Proof point: Cat Defense services engagement covering DSEI, IDEX, AUSA (reference without sensitive details)
ITAR framing: "Momentify captures engagement metadata and intent signals. Not classified information. No ITAR exposure."

**Layer 3 — Lead Magnets**
Primary: "The Defense Exhibitor's Intelligence Gap" — addresses undocumented BD pipeline from defense shows
Secondary: Cat Defense case study (placeholder until published)

**Layer 4 — Outreach Sequences**
Touch 1: "Every conversation at DSEI is a potential program relationship. Most go undocumented."
Touch 2: Reference Cat Defense engagement model (services-based, no IT procurement friction). Offer the intelligence gap guide.
Touch 3: "20 minutes to show you how other defense exhibitors are structuring this." Low-friction CTA.

LinkedIn: Observe the BD pipeline visibility problem in defense shows. No product pitch in DM 1.

**Layer 5 — Sales Enablement**
Discovery opener: "After DSEI or AUSA, how does your BD team capture and track the conversations that will become program relationships 18 months from now?"
Key objection: "We have security concerns" — counter: "We capture intent signals and engagement data. Same category as your CRM. Nothing classified touches the platform."
Positioning note: always use services-based language, not licensing or software language. Avoids IT procurement and security review triggers.

**Layer 6 — ROX Metrics**
Emphasis: BD pipeline creation rate, conversation documentation rate, follow-up speed on high-value contacts, executive briefing cadence
KPI framing: "X program-relevant conversations documented at [Show], Y qualified for BD follow-up within 72 hours"

**Layer 7 — Competitive Intel**
Defense-specific context:
- Cvent is sometimes used by defense event organizers, not exhibitors. If the buyer uses Cvent, they are the event host, not an exhibitor. Different conversation.
- Whova is not present in this space at all. If mentioned, it signals a buyer who has not found the right solution yet.
- The real competitive threat in aerospace and defense is "we use a spreadsheet and WhatsApp." Position Momentify against the status quo, not named competitors.
- Win condition: BD team running defense shows with no structured system. The Momentify pitch is "this is what a real BD intelligence layer looks like."

---

### MOTION: Channel Partners

All three verticals share a unified partner track (no vertical sub-tabs in partner motion).

**Layer 1 — Partner ICP**
Primary: VP of Client Services or Account Director at Freeman, Clarion Events, exhibit house, or industry association (AEM, NDIA)
Secondary: Business Development lead pitching new exhibitor clients
Pain: clients ask "what did we get from this show?" and the agency has no defensible answer. Risk of losing accounts to any competitor who offers measurement.
Trigger: losing a client, responding to an RFP that asks for measurement capabilities, pitching a new enterprise client

**Layer 2 — Partner Message + Proof**
Headline: "Add an intelligence layer to every exhibit you manage."
Subhead: "Differentiate with ROX. Retain clients with proof."
Differentiator: Momentify is invisible to the end client if preferred. The agency delivers the insight, powered by Momentify.
Revenue model: rev share per event or per seat licensed through partner. White-label available for agencies running 10+ events per year.

**Layer 3 — Partner Lead Magnets**
Primary: "The Agency Guide to Selling Engagement Intelligence" — how to pitch ROX to exhibitor clients
Secondary: Partner ROX deck — co-branded slide deck for client pitches

**Layer 4 — Partner Outreach**
Touch 1: "Your clients want to know what the show returned. You do not have a good answer yet." Link to the agency guide.
Touch 2: Reference Freeman or comparable agency. "Leading exhibit agencies are adding a retained intelligence layer to every client engagement. Here is how the model works."
Touch 3: "30-minute partner briefing. No pitch. Just the co-sell model." Low-friction ask.

LinkedIn: Lead with an observation about what agencies are missing in post-show reporting. Drop the guide. No product pitch in DM 1.

**Layer 5 — Partner Sales Enablement**
Partner pitch narrative: "You already deliver world-class event experiences. Momentify is the intelligence layer that lets you prove it. Add it to your client offering. They get ROX visibility. You get a differentiated service and a new revenue line. We split it."
Co-sell motion: partner owns event delivery, Momentify owns the intelligence platform, one unified post-show report.
One-liner for partner to use with their own clients: "We now offer post-show engagement intelligence through our partnership with Momentify. Your ROX score is included with every engagement."

**Layer 6 — Partner ROX Metrics**
Track: partner-sourced pipeline, events activated per partner, client retention rate for accounts using Momentify vs not, partner NPS

**Layer 7 — Competitive Intel (Partner Motion)**
Key point: exhibit agencies are not evaluating Momentify against Cvent or Whova. They are evaluating whether to build something internally, white-label a solution, or partner.
Win condition vs build: "Building an analytics layer is a 12-month engineering project. Momentify is live in one event cycle."
Win condition vs other vendors: no other platform offers a co-sell model with rev share specifically designed for exhibit agencies.
Framing: this is a partner enablement conversation, not a features comparison. Lead with the business model, not the product.

---

## UI Notes

- Layer cards: smooth max-height accordion animation on expand/collapse
- Copy button on each card: copies all text content from that layer to clipboard, shows "Copied" confirmation 2 seconds
- All color values via CSS variables only
- No em dashes in any content or UI labels
- Scroll reveal on layer cards using IntersectionObserver (match existing site animation patterns)
- On mobile: motion and vertical selectors stack vertically, layer cards full width

---

## Content Builder Tab Placeholder

Render a placeholder for now with:
- Centered icon (Sparkles from lucide)
- Heading: "Content Builder" — 20px, 700, `var(--gtm-text-primary)`
- Body: "Select a content type and let Momentify AI draft your outreach, lead magnets, and sales assets." — `var(--gtm-text-muted)`
- Button: "Coming in next build" — disabled, styled as secondary button
This will be replaced in Prompt 4.
