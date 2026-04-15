# GTM Framework — Prompt 8 of 5e: Events & Venues Solution Page

## Before You Start

Read `gtm-prompt-00-brand-system.md` in full before writing any code.
All colors use CSS variable references. No hardcoded hex values. No em dashes.

---

## Context

The Trade Shows page is the master template.
Build the Events & Venues solution page at `app/gtm/events-venues/page.tsx`.
Same structure: header, tabs, motion selector, vertical tabs, 7-layer accordion.
Reuse `ContentBuilder` with `solution="events-venues"` and `solutionLabel="Events & Venues"`.

Create data file: `lib/gtm/data/events-venues.ts`

---

## Page Header

Eyebrow: `SOLUTION 05 — EVENTS & VENUES`
H1: `Events & Venues`
Subhead: `Fan engagement. Suite intelligence. Venue-wide ROX.`
Stat chips: "2 Motions" / "1 Vertical (Primary)" / "7 Layers"

Note: This solution's primary vertical is Sports & Entertainment.
The vertical tab selector should show Sports & Entertainment as active with a "More coming"
placeholder for additional verticals. Do not render the Heavy Equipment / Energy / Aerospace
vertical tabs here.

---

## Strategic Note for This Solution

This is a different buyer from every other Momentify solution. The decision-maker is not
a VP of Marketing at an OEM. It is a VP of Partnerships, Chief Revenue Officer, or VP of
Fan Experience at a sports team, stadium, or live entertainment company.

The pain is different too. It is not "we don't know if the booth worked."
It is "we have thousands of fans in the building and no idea which ones are high-value,
which ones are at risk of churning, and which sponsors are getting real engagement."

Momentify's angle here is fan and guest engagement intelligence. ROX applied to a live
entertainment context means measuring the quality of every in-venue interaction: sponsor
activations, suite experiences, premium seating, fan touchpoints, and brand integrations.

Momentify was accepted into the Plug and Play Sports Tech cohort. That is the relevant
proof point for this solution. Reference it where appropriate.

This is also the solution most relevant to a future Sports & Entertainment vertical
expansion. The GTM is directional now and will become more detailed as this vertical matures.

---

## MOTION: Direct to Customer

Primary Vertical: Sports & Entertainment

---

**Layer 1 — ICP + Buyer Personas**

Primary buyer: VP of Partnerships, VP of Fan Experience, Chief Revenue Officer at a professional sports team, stadium, or live entertainment company
Secondary buyer: Director of Sponsorship Activation, Premium Seating Manager, Event Operations Director
Organizations: NFL, NBA, NHL, MLS, MLB teams, college athletic programs, concert promoters, arena operators, motorsports venues
Event contexts: home game days, suite and premium hospitality activations, sponsor activation zones, fan experience areas, team store touchpoints, pre/post game events

Goals:
- Prove sponsor activation ROI to renewal conversations (sponsors demand measurement)
- Understand which fan segments are most engaged and most valuable
- Increase suite and premium hospitality utilization and renewal rates
- Connect fan in-venue behavior to off-venue relationship (season ticket renewal, merchandise, memberships)

Blockers:
- "We use our ticketing system for this" — ticketing tells you who bought a seat. Momentify tells you what that guest did when they got there.
- "Our sponsors have their own measurement" — sponsor measurement is usually impressions and signage views. Momentify captures actual fan engagement with activations.
- "We have an app" — team apps measure digital behavior. Momentify captures physical in-venue interaction.

Anti-ICP:
- Small community events with no sponsor or premium revenue model
- Non-commercial venues (municipal parks, non-profit event spaces)
- One-time events with no repeat audience relationship (fundraisers, galas)
- Organizations without a structured fan experience or sponsorship program

Budget authority: CRO or VP of Partnerships owns revenue accountability. VP of Fan Experience or Operations owns the activation budget. For large deals, CEO or President may be involved.
Trigger events: sponsor renewal season (sponsor demands proof of activation ROI), new front office leadership, team moving to a new venue, loss of a major sponsor due to lack of measurement, Plug and Play Sports Tech cohort activation with a team

---

**Layer 2 — Core Message + Proof Points**

Headline: "Thousands of fans in your building. Do you know which experiences moved them?"
Subhead: "Momentify measures every activation, every suite, every fan touchpoint — so you can prove what worked and sell the next sponsorship with data, not stories."

Key differentiator 1: Sponsor activation measurement. No sponsor needs another impressions report. They need engagement data from the actual activation. Momentify provides it.
Key differentiator 2: Premium hospitality intelligence. Suite hosts and premium club operators need to know which guests engaged, what they consumed, and how to personalize the next visit.
Key differentiator 3: Fan journey mapping. From entry gate to concession to activation zone to team store — Momentify maps the in-venue journey and scores engagement quality.

Proof point: Momentify accepted into Plug and Play Sports Tech cohort — validation of the solution category by a leading sports innovation accelerator
Proof point: ROX framework applied to in-venue engagement (same methodology as Trade Shows, adapted for live entertainment context)

Design note for gallery / social proof: follow the fan-first UX principle established in earlier deployments. Lead with the gallery and the live experience visual. Capture information only after the fan is invested. Minimize steps between fan and the moment.

Objection — "Our ticketing platform (AXS / Ticketmaster) handles fan data": ticketing data tells you who came. Momentify tells you what they did and how they felt about it. Both are necessary. Neither replaces the other.
Objection — "We already work with StellarAlgo / Satisfi Labs": StellarAlgo is a fan data analytics platform focused on off-venue digital data. Satisfi Labs is a conversational AI chatbot. Neither captures physical in-venue engagement in real time the way Momentify does.

---

**Layer 3 — Lead Magnets**

Primary: "The Sponsor Activation Intelligence Gap" — guide for VP of Partnerships on why impression-based reporting is killing sponsor renewals and what engagement intelligence looks like
Secondary: "In-Venue ROX: A New Metric for Sports and Entertainment" — one-page framework document introducing ROX in a sports/entertainment context
Tertiary: ROX Calculator adapted for sports — metric: engaged fans per activation, sponsor value per qualified interaction, premium hospitality renewal rate

---

**Layer 4 — Outreach Sequences**

Touch 1 (Day 0)
Subject: "What did your sponsor activations actually return last season?"
Pain: every spring, sports organizations go into sponsor renewal conversations with impressions data and a photo deck. Sponsors are increasingly demanding engagement proof. Most teams cannot provide it.
CTA: Sponsor Activation Intelligence Gap guide

Touch 2 (Day 4)
Subject: "How one team changed their renewal conversation"
Reference: Momentify's Plug and Play Sports Tech cohort acceptance. Frame as an emerging category — teams adopting in-venue engagement intelligence now will have a 2-season head start.
CTA: 20-minute call

Touch 3 (Day 9)
Subject: "Before next renewal season"
Body: "Sponsor renewals are 3 to 6 months away for most organizations. The question is whether you go into that conversation with impressions data or engagement data. Worth a 20-minute call?"
CTA: ROX Calculator for sports

LinkedIn DM Flow:
DM 1: Reference their team or venue specifically. One sharp question about how they currently measure sponsor activation ROI. No pitch.
DM 2 (Day 5): Drop the Sponsor Activation guide with one sentence. Nothing else.
DM 3 (engaged): Offer a call framed around their specific renewal timeline.

---

**Layer 5 — Sales Enablement**

Discovery opener: "When you go into a sponsor renewal conversation, what data do you bring? How confident are you that it shows what the sponsor actually got from the activation?"

Discovery questions:
1. "How many sponsors are you renewing in the next 6 months, and what are the top reasons sponsors have not renewed in the past?"
2. "How do you currently measure fan engagement with sponsor activations during a game day?"
3. "What does your premium hospitality and suite utilization look like, and how do you drive renewals in that segment?"
4. "If you could know, in real time during a game, which activation zones were generating the most fan engagement, what would you do with that information?"
5. "What is the revenue impact of losing a top-tier sponsorship because you could not prove ROI at renewal?"

Objections:
- "We have fan data from our app": "App data tells you about digital engagement. Momentify captures physical in-venue behavior — what fans did when they were actually in your building. Both matter. One currently exists in your stack."
- "Sponsors are not asking for this yet": "They will be. The teams that have engagement data in the next renewal cycle will close faster and at higher values than teams presenting impressions reports."
- "We do not have budget for this right now": "What does losing one mid-tier sponsor renewal cost you? One activation with Momentify data in that conversation pays for the platform."

---

**Layer 6 — ROX Metrics + KPIs**

Sports and entertainment dimensions:
- Fan Capture Rate: engaged fans in activation zones vs estimated traffic through those areas
- Activation Engagement Quality: dwell time, interaction depth, sentiment signals, content engagement
- Sponsor Activation Score: per-sponsor ROX score across all activations in a season
- Premium Experience Index: suite and premium guest engagement, NPS signals, renewal prediction indicators

Reporting framing for sponsor renewal: "During [Season], your activation at [Location] engaged [X] fans, [Y]% of whom spent 3+ minutes. Your Sponsor ROX Score was [Z]. Here is how that compares to the category benchmark and what we are recommending for next season."

Reporting framing for team leadership: "Our top 3 activations by fan engagement score drove [X]% of post-event merchandise and membership conversions. Our bottom 2 activations are candidates for redesign or reallocation."

---

**Layer 7 — Competitive Intel: Sports & Entertainment Engagement Tech**

Competitors: StellarAlgo, Satisfi Labs, Qualtrics (for fan NPS), basic kiosk/photo experience vendors

Comparison table:

| Capability | Momentify | StellarAlgo | Satisfi Labs | Qualtrics |
|---|---|---|---|---|
| In-venue real-time engagement capture | Yes | No — off-venue digital data | No — chatbot only | No — survey only |
| Sponsor activation ROX scoring | Yes | No | No | No |
| Fan journey mapping (physical) | Yes | Partial — digital only | No | No |
| Premium hospitality intelligence | Yes | Limited | No | Partial — survey |
| Works across venue types and touring events | Yes | No — venue data sets only | Partial | No |
| Feeds partnership/CRM with engagement signals | Yes | Partial | No | No |

vs StellarAlgo: "StellarAlgo is a fan intelligence platform built on digital and transactional data — ticketing history, streaming behavior, social signals. It is outstanding at off-venue fan analytics. Momentify captures what happens when the fan is physically in your building. They are complementary. Only one currently exists in your tech stack."

vs Satisfi Labs: "Satisfi Labs is a conversational AI chatbot for fan Q&A during events. It answers questions. Momentify captures engagement. Different problem, different solution."

vs Qualtrics: "Qualtrics sends a survey after the event. Momentify captures engagement during the event, in real time. One tells you what fans remembered. The other tells you what they actually did."

How to win: Lead with the sponsor renewal problem. Every sports organization faces this. The team that can walk into a renewal meeting with an Engagement ROX Score has a structural advantage over every team presenting a reach and impressions deck.

Killer question: "In your last sponsor renewal conversation that did not go well, what data would you have needed to change the outcome?"

---

## MOTION: Channel Partners

Partner types: sports marketing agencies, sponsorship consulting firms, stadium experience design firms (Populous, Legends, Legends Hospitality)

**Layer 1 — Partner ICP**
Primary: SVP or Director of Sports Marketing at an agency managing team sponsorship portfolios or activation programs
Secondary: Consulting lead at a firm advising teams on fan experience strategy
Pain: agencies sell activation strategies but cannot prove they worked. Sponsors are cutting agencies that cannot demonstrate measurable engagement ROI.
Anti-ICP: PR and media agencies without activation or experiential arms

**Layer 2 — Partner Message**
Headline: "You design activations that move fans. Prove it."
Partner pitch: "Your clients are asking for engagement proof. Momentify gives you the data layer to provide it. Add ROX scoring to every activation you deliver. Win more pitches. Retain more clients."
Revenue model: per-event ROX reporting package bundled into activation fee, or rev share on Momentify platform license.

**Layers 3 through 7:** Follow Trade Shows partner pattern adapted for sports/entertainment context.
Layer 7 Competitive Intel: "No sports marketing agency currently offers a proprietary engagement scoring framework tied to activation delivery. Momentify is the first. The agency that brings ROX to their clients first owns the category."
