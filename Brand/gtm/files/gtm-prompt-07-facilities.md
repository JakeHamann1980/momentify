# GTM Framework — Prompt 7 of 5d: Facilities Solution Page

## Before You Start

Read `gtm-prompt-00-brand-system.md` in full before writing any code.
All colors use CSS variable references. No hardcoded hex values. No em dashes.

---

## Context

The Trade Shows page is the master template.
Build the Facilities solution page at `app/gtm/facilities/page.tsx`.
Same structure: header, tabs, motion selector, vertical tabs, 7-layer accordion.
Reuse `ContentBuilder` with `solution="facilities"` and `solutionLabel="Facilities"`.

Create data file: `lib/gtm/data/facilities.ts`

---

## Page Header

Eyebrow: `SOLUTION 04 — FACILITIES`
H1: `Facilities`
Subhead: `Showrooms. Demo floors. Training centers. One intelligence layer.`
Stat chips: "2 Motions" / "2 Verticals" / "7 Layers"

Note: Facilities is currently scoped to Heavy Equipment and Energy & Infrastructure only.
Aerospace & Aviation is not yet scoped. Render only two vertical tabs.

---

## Strategic Note for This Solution

Facilities is the most underestimated solution. The buyer does not think they have an
engagement measurement problem — they think they just need better signage.

The real pain: showrooms, demo floors, and training centers receive hundreds of visitors
per year with zero structured intelligence about what those visitors did, cared about,
or decided after leaving. Marketing spent money to build the experience. Nobody measured it.

Momentify's angle: transform a passive facility into an active engagement intelligence node.
Every visitor interaction becomes a data point. Every demo becomes a scored event.

This is not a kiosk play. This is not a digital signage play.
This is the same ROX framework applied to a fixed location instead of a traveling event.

---

## MOTION: Direct to Customer

Verticals: Heavy Equipment | Energy & Infrastructure

---

### Vertical: Heavy Equipment

**Layer 1 — ICP + Buyer Personas**

Primary buyer: VP of Marketing, VP of Sales, or Director of Customer Experience at OEM or large dealer group
Secondary buyer: Facility Manager or Showroom Manager who owns the day-to-day experience
Facility types: equipment showrooms, product demo floors, dealer experience centers, training and certification facilities, customer visit centers, field service training bays

Goals:
- Understand what visitors actually engage with during facility visits
- Capture buyer intent during demo floor tours and showroom visits
- Give field sales reps intelligence from facility visits to use in follow-up
- Justify the capital investment in a world-class facility with outcome data

Blockers:
- "We don't think of our showroom as an event" — reframe: every facility visit is a high-value interaction. It just goes unmeasured.
- "We already have foot traffic counters / cameras" — those measure presence. Momentify measures engagement and intent.
- "This is a facilities/operations budget question" — often true. Position around the marketing and sales outcome value, not the operational cost.

Anti-ICP:
- Facilities with no customer-facing traffic (warehouses, back-office, manufacturing-only sites)
- Companies whose showroom visits are fewer than 50 per year
- Organizations where facility visits are purely transactional (parts pickup, service drop-off)

Budget authority: VP of Marketing or VP of Sales depending on org structure. Facility investment is often capital, but Momentify is an operational overlay — recurring services model avoids capex approval.
Trigger events: major capital investment in a new experience center, OEM mandate to improve dealer experience quality, upcoming major customer visit program, new regional leadership who wants accountability on facility ROI

---

**Layer 2 — Core Message + Proof Points**

Headline: "You built the showroom. Do you know what it's doing for your pipeline?"
Subhead: "Momentify turns every facility visit into measured engagement — so you know what moved, what missed, and where to invest next."
Key differentiator: same ROX framework applied to facilities as to events. Portfolio visibility includes both. No other platform ties showroom engagement to sales pipeline outcomes.
Proof point: Cat dealer experience center deployments (reference without specific contract details)
Proof point: Momentify's consistent intelligence layer across events AND facilities — one platform, unified view
Objection — "We have digital signage": digital signage delivers content. It does not capture who engaged, how deeply, or what they decided. Different layer entirely.

---

**Layer 3 — Lead Magnets**

Primary: "The Facility Experience ROX Audit" — self-assessment for dealer principals and experience center managers
Secondary: "What Your Showroom Is Not Telling You" — guide on the intelligence gap in facility-based customer engagement
Tertiary: ROX Calculator adapted for facility context — metric: qualified opportunities per facility visitor, value per engaged visitor

---

**Layer 4 — Outreach Sequences**

Touch 1 (Day 0)
Subject: "You spent $2M on the experience center. What did it return last quarter?"
Pain: heavy equipment dealers and OEMs invest heavily in customer-facing facilities. Most cannot quantify what those facilities contribute to pipeline.
CTA: Facility ROX Audit

Touch 2 (Day 4)
Subject: "What happens when a customer walks out of your demo floor"
Reference Momentify's facility deployments. Connect showroom engagement to sales follow-up speed.
CTA: 20-minute call

Touch 3 (Day 9)
Subject: "One question"
Body: "How many customers visited your facility last quarter? How many turned into qualified pipeline conversations? Worth 20 minutes to close that gap?"
CTA: ROX Calculator

---

**Layer 5 — Sales Enablement**

Discovery opener: "When a customer tours your facility or demo floor, what does your team capture from that interaction, and when does it make it into your CRM?"

Discovery questions:
1. "How many customer visits does your facility host in a typical month, and what types of visitors come through?"
2. "After a facility tour, how does your sales team follow up, and how quickly?"
3. "Do you have a way to know which products or areas of the facility a visitor engaged with most?"
4. "What did your last major facility investment cost, and how do you measure whether it is contributing to sales outcomes?"
5. "If you could know, in real time, that a visitor just spent 20 minutes with your large excavator display and is ready for a follow-up call, what would that change?"

Objections:
- "We have a CRM": "CRM captures what the sales rep logs after the fact. Momentify captures what the customer engaged with during the visit. Both are necessary. Only one currently exists in your facility."
- "Our visitors are already customers": "A current customer who walks your demo floor and engages deeply with a new product line is a cross-sell opportunity. Knowing that in real time changes the follow-up."
- "Budget is in facilities, not marketing": "The outcome is a marketing and sales outcome. Momentify is structured as a managed services engagement — no capex, no facilities project approval required."

---

**Layer 6 — ROX Metrics + KPIs**

Facility-specific dimensions:
- Visitor Capture Rate: registered engaged visitors vs total foot traffic
- Engagement Depth: dwell time by area, content interactions, product interest signals
- Follow-Up Speed: hours from facility visit to first sales outreach
- Pipeline Conversion: facility visitors to qualified opportunities, by facility and by product area

Reporting framing: "Last quarter, [X] customers toured our experience center. Momentify identified [Y] as high-intent. Our sales team followed up within [Z] hours. [X] of those are now active pipeline."

---

**Layer 7 — Competitive Intel: Facility and Experience Tech**

Competitors in this context: digital signage platforms (Daktronics, BrightSign, Signagelive), kiosk/interactive display vendors, basic foot traffic counters (Density, Verkada)

Note: there is no direct named competitor for the Momentify facilities use case. The real competition is the absence of a solution. That is both the challenge and the opportunity.

Comparison framing:

| Capability | Momentify | Digital Signage | Kiosk Vendors | Foot Traffic Counters |
|---|---|---|---|---|
| Visitor intent capture | Yes | No — delivery only | Partial — form fills only | No — count only |
| Engagement quality scoring | Yes | No | No | No |
| ROX reporting tied to pipeline | Yes | No | No | No |
| Connects to CRM and sales follow-up | Yes | No | No | No |
| Works across facility types and events | Yes — unified layer | No — fixed install | No — fixed install | No |
| Industry-specific templates | Yes | Generic | Generic | No |

How to win: this sale is not competitive displacement. It is category creation. The question is not "why Momentify instead of X" — it is "why does your facility have no intelligence layer at all?"

Killer question: "If you could know which visitor who toured your facility last week is most likely to place an order in the next 90 days, would that change how your sales team spends their time tomorrow morning?"

---

### Vertical: Energy & Infrastructure

**Layer 1 — ICP**
Primary: Marketing Director or Operations Experience Manager at utility, energy services company, or EPC firm
Facility types: operations centers, energy solutions experience centers, training facilities, customer briefing rooms, innovation labs, field service centers
Anti-ICP: back-office facilities with no customer traffic, purely industrial sites without customer-facing components

**Layer 2 — Message**
Headline: "Your operations center hosts customer visits. Do you know what those visits produced?"
Key insight: utilities and energy companies invest in customer briefing and innovation centers as relationship tools. None of them measure what those visits return in pipeline or relationship quality.

**Layers 3 through 7:** Follow Heavy Equipment pattern adapted for energy context.
Layer 7 Competitive Intel: same "no direct competitor — category creation" framing. Add: "In energy and infrastructure, facility-based engagement intelligence does not exist as a category. Momentify creates it."

---

## MOTION: Channel Partners

Partner types: exhibit house and experience design firms (companies that design and build showrooms and experience centers for heavy equipment dealers and OEMs)

**Layer 1 — Partner ICP**
Primary: Director of Client Services at an experience design or exhibit house firm that specializes in building dealer experience centers
Pain: clients invest $500K to $5M in facility builds with no measurement layer. The firm cannot prove the ROI of their design work. Momentify makes that possible.
Anti-ICP: residential or retail interior design firms

**Layer 2 — Partner Message**
Headline: "You design the experience. Momentify proves what it returns."
Partner pitch: "Your clients spend millions on experience centers and have no way to measure what they produce. Add Momentify to every facility build. Your clients get ROX visibility. You differentiate your firm with a measurable outcomes guarantee."

**Layers 3 through 7:** Follow established partner pattern. Competitive Intel: "No exhibit design firm currently offers a measurement layer post-build. This is a first-mover opportunity for the right partner."
