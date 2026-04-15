# GTM Framework — Prompt 6 of 5c: Field Sales Enablement Solution Page

## Before You Start

Read `gtm-prompt-00-brand-system.md` in full before writing any code.
All colors use CSS variable references. No hardcoded hex values. No em dashes.

---

## Context

The Trade Shows page at `/gtm/trade-shows` is the master template.
Build the Field Sales Enablement solution page at `app/gtm/field-sales/page.tsx`.
Follow the exact same page structure: header, tab bar, motion selector, vertical tabs, 7-layer accordion.
Reuse `ContentBuilder` with prop `solution="field-sales"` and `solutionLabel="Field Sales Enablement"`.

Create data file: `lib/gtm/data/field-sales.ts`

---

## Page Header

Eyebrow: `SOLUTION 03 — FIELD SALES ENABLEMENT`
H1: `Field Sales Enablement`
Subhead: `Two motions. Three verticals. Seven layers.`
Stat chips: "2 Motions" / "3 Verticals" / "7 Layers"

---

## Strategic Note for This Solution

Field Sales Enablement is the most internal-facing solution. The buyer is not an event manager.
The buyer is a VP of Sales, National Sales Manager, or Sales Operations Director who is frustrated
that field reps are inconsistent, under-equipped, and invisible between visits.

The pain is not "we spent too much on the event." It is "we have no idea what happens when our
rep walks into a customer's shop floor or job site."

The Momentify angle here is persona-driven content delivery + intent capture during the field visit.
Positioning must emphasize real-time visibility for sales leadership, not just tools for reps.

---

## MOTION: Direct to Customer

Verticals: Heavy Equipment | Energy & Infrastructure | Aerospace & Aviation

---

### Vertical: Heavy Equipment

**Layer 1 — ICP + Buyer Personas**

Primary buyer: VP of Sales, National Sales Manager, or Sales Operations Director at OEM, distributor, or large dealer group
Secondary buyer: Regional Sales Manager who owns field rep performance
Company: distributor or dealer with 10+ field reps visiting customer sites, job sites, and shop floors on a regular cadence
Interaction contexts: customer shop floor visits, job site walk-arounds, product demo days, customer appreciation events, dealer open houses

Goals:
- Know what content field reps are actually using in customer conversations
- Understand customer intent signals before the rep files a call report 5 days later
- Equip reps with the right content for the right persona at the right time (not a PDF folder)
- Give sales leadership visibility into field engagement without waiting for CRM updates

Blockers:
- "Our CRM handles field activity" — CRM captures what the rep logs. Momentify captures what the customer engaged with. Those are different.
- "Our reps use their own materials" — that is the problem we are solving, not the reason to not solve it
- "This is a Salesforce / HubSpot question" — frame as a field-layer tool that feeds those systems, not replaces them

Anti-ICP:
- Inside sales teams with no field motion
- Organizations where reps work from a central office and customers come to them
- Companies with fewer than 10 field reps
- Businesses where product is sold entirely through a digital or inbound channel

Budget authority: VP of Sales owns, Sales Operations influences, CFO approves above $25K
Trigger events: field rep turnover exposing inconsistent materials, lost deal where wrong content was used, sales leadership asking why CRM data is always late and incomplete

---

**Layer 2 — Core Message + Proof Points**

Headline: "Your rep was on the job site. Do you know what moved?"
Subhead: "Momentify gives field teams persona-driven content and gives leadership real-time visibility into what is actually working in the field."
Key differentiator: content delivery and intent capture together in one field interaction. Not just a content library. Not just a CRM note. Both, in real time.
Proof point: Momentify's field deployment with Cat dealers — persona-driven content delivery, engagement capture, real-time rep insights
Proof point: 40% improvement in lead qualification across deployments applies directly to field sales qualification accuracy
Objection — "Showpad / Highspot does this": those are content libraries. They tell you what content was opened on a device. Momentify captures how the customer engaged with it during the actual interaction.

---

**Layer 3 — Lead Magnets**

Primary: "The Field Sales Visibility Gap" — guide for VP Sales and Sales Ops on the intelligence lost between field visits and CRM entry
Secondary: "Field Sales ROX Audit" — self-assessment on how well your field team captures and acts on customer intent
Tertiary: ROX Calculator adapted for field sales — metric: qualified opportunities per field rep per month, value per qualified field interaction

---

**Layer 4 — Outreach Sequences**

Touch 1 (Day 0)
Subject: "What actually happened in that customer visit last Tuesday?"
Pain: field reps visit 8 to 12 customers per week. CRM notes arrive 3 to 5 days later, if at all. Leadership is flying blind on what content works and who is actually interested.
CTA: Field Sales ROX Audit

Touch 2 (Day 4)
Subject: "How Cat dealers changed field rep performance"
Reference Momentify's Cat dealer deployment. Persona-driven content in the field, real-time engagement capture.
CTA: 20-minute call

Touch 3 (Day 9)
Subject: "One last question then I will leave you alone"
Body: "How much pipeline do your field reps generate per month? How confident are you in that number? Worth a 20-minute conversation to find out what you are missing?"
CTA: ROX Calculator for field sales

---

**Layer 5 — Sales Enablement**

Discovery opener: "Walk me through what happens after one of your field reps visits a customer site. How does that information get back to you, and how long does it take?"

Discovery questions:
1. "How many field reps do you have and how many customer touchpoints do they handle per week?"
2. "When a rep visits a job site or shop floor, how do you know what content they used and how the customer reacted?"
3. "How long on average between a field visit and a CRM update? What do you think you are missing in that gap?"
4. "If you could see in real time what your best rep does differently from your average rep, what would you change?"
5. "What does a qualified field opportunity look like, and how do you currently identify one?"

Objections:
- "We use Salesforce for this": "Salesforce is where the rep logs the outcome. Momentify captures the interaction itself — what content the customer engaged with, how long, and what they cared about. That is the data that makes the CRM record meaningful."
- "Our reps are resistant to new tools": "Momentify works through a tablet or phone the rep already has. The interface is designed for a 60-second setup at the start of a visit, not a training program."
- "We have Highspot / Showpad": "Those solve content storage and delivery. Momentify captures the customer's response to the content in real time. They are complementary."

---

**Layer 6 — ROX Metrics + KPIs**

Field sales dimensions:
- Content Delivery Accuracy: right content for the right persona in the right context
- Customer Engagement Depth: time with content, questions captured, persona signals
- CRM Sync Speed: hours from field interaction to CRM record creation
- Opportunity Conversion: field visits to qualified pipeline, by rep and by region

Reporting framing: "In Q[X], Momentify-enabled field reps generated [X]% more qualified pipeline per visit than non-enabled reps. Average CRM lag dropped from [X] days to [X] hours."

---

**Layer 7 — Competitive Intel: Sales Enablement Platforms**

Competitors: Showpad, Highspot, Seismic

Comparison table:

| Capability | Momentify | Showpad | Highspot | Seismic |
|---|---|---|---|---|
| In-field customer intent capture | Yes | No — content delivery only | No — content delivery only | No — content delivery only |
| Real-time rep-level engagement insights | Yes | Partial — device usage only | Partial — device usage only | Partial — device usage only |
| ROX scoring framework | Yes | No | No | No |
| Works at physical job sites / shop floors | Yes — offline capable | Limited | Limited | No |
| Feeds CRM with engagement data | Yes — real-time | Export only | Export only | Export only |
| Industry-specific persona templates | Yes — heavy equipment, defense, energy | Generic | Generic | Generic |
| Pricing model | Enterprise, services-based | Per seat SaaS | Per seat SaaS | Per seat SaaS |

vs Showpad: "Showpad tells you what content a rep accessed on their device. Momentify tells you how the customer engaged with it during the visit. One is rep behavior data. The other is customer intent data. Both matter. Only one affects your pipeline."

vs Highspot: Same positioning as Showpad. Add: "Highspot is a strong content governance tool. If their primary problem is content chaos, Highspot solves it. If their problem is invisible field engagement, that is the Momentify conversation."

vs Seismic: "Seismic is built for inside and enterprise sales teams with structured content programs. It is not designed for field reps in a job site context or a shop floor. The UX does not survive a field environment."

How to win: Lead with the CRM lag problem. "What happens between the visit and the CRM entry is where deals are won and lost. No sales enablement platform solves that. Momentify does."

Killer question: "If I could show you which of your field reps are generating 80% of your qualified pipeline and exactly what they do differently, would that change how you train and equip the rest?"

---

### Vertical: Energy & Infrastructure

**Layer 1 — ICP**
Primary: VP of Sales or Regional Sales Manager at energy equipment distributor, utility services company, or EPC firm
Field contexts: power generation site visits, substation walkdowns, construction site check-ins, customer operations center tours
Anti-ICP: utilities with no field sales function, project-only businesses with no ongoing sales relationship

**Layer 2 — Message**
Headline: "Your rep walked the substation. Do you know what the customer cared about?"
Key insight: in energy infrastructure, field relationships precede procurement decisions by 18 to 24 months. Every field visit is the start of a future deal or the end of one.

**Layers 3 through 7:** Follow Heavy Equipment pattern. Competitive Intel adds: "In energy and infrastructure, the Seismic and Highspot conversation almost never happens. The real competition is a physical product binder and a rep's notebook. Momentify is the first structured field intelligence layer in this context."

---

### Vertical: Aerospace & Aviation

**Layer 1 — ICP**
Primary: Business Development Director, Program Sales Manager at defense prime or subcontractor
Field contexts: base visits, program office check-ins, depot tours, customer facility walk-arounds at defense installations
Sensitivity: same ITAR framing as Trade Shows and Recruiting — Momentify captures engagement metadata only
Anti-ICP: companies without a field BD motion, purely inbound government contractors

**Layer 2 — Message**
Headline: "Program relationships are built in the room. What happened in the room?"
Key insight: defense BD is entirely relationship and conversation driven. The rep who documents the visit wins the program. Most do not document at all.

**Layers 3 through 7:** Follow established pattern. Layer 7 adds: "Defense BD teams have no sales enablement tooling designed for their context. The competitive set here is a Word document and a SharePoint folder. Momentify wins by default on tooling maturity."

---

## MOTION: Channel Partners

Partner types: manufacturers' rep agencies, distributor sales organizations, OEM channel teams that support dealer field reps

**Layer 1 — Partner ICP**
Primary: VP of Channel Sales, Channel Development Manager at OEM managing a dealer or rep network
Pain: OEM has no visibility into what field reps at the dealer level are doing in customer conversations. Momentify gives the OEM an intelligence layer across the dealer network.
Anti-ICP: channel programs with fewer than 20 field-facing reps across all partners

**Layer 2 — Partner Message**
Headline: "Your dealers are in the field every day. You just cannot see what is happening."
Partner pitch: "Momentify gives your channel the content they need and gives you the engagement data you cannot get from a dealer CRM report."

**Layers 3 through 7:** Follow Trade Shows partner pattern adapted for channel context.
Competitive Intel: "Channel-focused sales enablement tools like Allego exist but are not common in heavy equipment or defense dealer networks. The real competition is the status quo: dealer reps using their own materials and filing incomplete CRM reports. Momentify wins by making the invisible visible."
