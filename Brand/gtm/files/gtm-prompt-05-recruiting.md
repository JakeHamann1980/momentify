# GTM Framework — Prompt 5 of 5b: Technical Recruiting Solution Page

## Before You Start

Read `gtm-prompt-00-brand-system.md` in full before writing any code.
All colors use CSS variable references. No hardcoded hex values. No em dashes.

---

## Context

The Trade Shows page at `/gtm/trade-shows` is already built and serves as the master template.
Build the Technical Recruiting solution page at `app/gtm/recruiting/page.tsx`.
Follow the exact same page structure, tab bar, motion selector, vertical tabs, and 7-layer
accordion pattern established in the Trade Shows page.
Reuse `ContentBuilder` component with prop `solution="recruiting"` and
`solutionLabel="Technical Recruiting"`.

Create the data file first: `lib/gtm/data/recruiting.ts`

---

## Page Header

Eyebrow: `SOLUTION 02 — TECHNICAL RECRUITING`
H1: `Technical Recruiting`
Subhead: `Two motions. Three verticals. Seven layers.`
Stat chips: "2 Motions" / "3 Verticals" / "7 Layers"

---

## MOTION: Direct to Customer

Verticals: Heavy Equipment | Energy & Infrastructure | Aerospace & Aviation

---

### Vertical: Heavy Equipment

**Layer 1 — ICP + Buyer Personas**

Primary buyer: Senior Technical Recruiter, Talent Acquisition Manager, or VP of HR at OEM or large dealer group
Secondary buyer: Hiring Manager (Engineering, Field Service, Product Support)
Company: $100M+ revenue, hiring 50+ technical roles per year, attends university recruiting fairs, trade association events, military transition hiring events
Shows and events: Society of Manufacturing Engineers (SME) job fairs, CONEXPO hiring events, MINExpo workforce sessions, university engineering recruiting days

Goals:
- Reduce time-to-hire for hard-to-fill technical roles (diesel technicians, field service engineers, product support specialists)
- Improve candidate quality from events — too many unqualified applications, not enough signal
- Give hiring managers visibility into who is actually pipeline-ready vs just interested
- Justify recruiting event spend to HR leadership

Blockers:
- "We use Handshake / LinkedIn / Indeed for recruiting" — those are sourcing tools. Momentify captures what happens at the in-person recruiting event.
- "Our ATS handles this" — ATS tracks candidates after they apply. Momentify captures intent before the application.
- "Recruiting budget is separate from marketing budget" — address by selling to CHRO or TA leader directly, not event marketing

Anti-ICP:
- Companies hiring primarily hourly or non-technical roles
- Organizations with fewer than 20 technical hires per year
- Companies that do not attend or host in-person recruiting events
- Staffing agencies (no direct employer brand investment)

Budget authority: VP of HR or CHRO owns the budget, Talent Acquisition Manager influences, CFO approves above $25K
Trigger events: failed recruiting event with low-quality candidates, new TA leader, engineering headcount ramp, struggling to compete for talent against larger OEMs

---

**Layer 2 — Core Message + Proof Points**

Headline: "Your next great technician was at the event. Did your team know which one?"
Subhead: "Momentify gives recruiting teams real-time candidate intelligence so follow-up happens before the talent walks out the door."
Key differentiator: intent capture at the event level, not just resume collection. Know which candidates engaged deeply, what roles they cared about, and who to call first.
Proof point: 40% lead qualification improvement across Momentify deployments applies directly to candidate qualification
Proof point: Mustang CAT used Momentify for technical talent pipeline building alongside their trade show deployments
Objection — "LinkedIn does this": LinkedIn finds candidates. Momentify tells you which candidates at your event were serious. Different problem.
Objection — "We use clipboards / iPads": those collect information. Momentify captures engagement and scores candidate intent. The difference is who you call first.

---

**Layer 3 — Lead Magnets**

Primary: "The Technical Recruiting Event ROX Audit" — 8-question self-assessment, how well your team captures and qualifies talent at in-person events
Secondary: "The Playbook for Recruiting Technical Talent at Industry Events" — gated PDF, practical guide for heavy equipment TA teams
Tertiary: ROX Calculator adapted for recruiting — metric: qualified candidates per event, value per hire

---

**Layer 4 — Outreach Sequences**

Touch 1 (Day 0)
Subject: "How many qualified candidates did [last event] actually produce?"
Pain: recruiting teams spend $20K+ per major recruiting event and walk away with a stack of paper resumes or a contact list with no signal about who is actually serious.
CTA: Recruiting ROX Audit

Touch 2 (Day 4)
Subject: "From clipboard to pipeline in 24 hours"
Reference: Momentify's deployment with Cat dealers to capture and qualify technical talent at events. 40% improvement in candidate qualification.
CTA: 20-minute call

Touch 3 (Day 9)
Subject: "One question before I stop bothering you"
Body: "What does a qualified technician hire cost you in time and agency fees? That is what one missed candidate from an event costs. Worth 20 minutes?"
CTA: ROX Calculator for recruiting

LinkedIn DM Flow:
DM 1: Reference a specific role they are struggling to fill (research their job postings). One question about how their team currently captures candidate intent at recruiting events.
DM 2 (Day 5): Drop the Recruiting ROX Audit with one sentence. No pitch.
DM 3 (engaged): Offer the playbook or a short call.

---

**Layer 5 — Sales Enablement**

Discovery opener: "Walk me through what happens after your team talks to a candidate at a recruiting event. How do you know who to follow up with first?"

Discovery questions:
1. "How many technical roles are you actively trying to fill right now, and which ones are hardest?"
2. "How much does your team spend on recruiting events per year, and how do you measure whether they worked?"
3. "After a recruiting event, how long before candidates hear back from your team?"
4. "What does a bad hire cost you versus the cost of a position staying open for 90 days?"
5. "If you could see, in real time, which candidates at a fair were most engaged with your team, what would you do differently?"

Objections:
- "We have an ATS": "Your ATS is where candidates live after they apply. Momentify is what happens before the application — capturing intent, scoring engagement, and telling your team who to call tonight, not next week."
- "Our budget is in HR, not marketing": "That is exactly the right buyer. This is a talent acquisition tool, not a marketing tool."
- "We do not attend that many events": "One event with Momentify that produces 10 qualified hires instead of 2 pays for a year of the platform."

---

**Layer 6 — ROX Metrics + KPIs**

Recruiting-specific dimensions:
- Candidate Capture Rate: candidates engaged vs estimated event foot traffic at your booth
- Engagement Quality: depth of conversation captured (role interest, timeline, location, skill match indicators)
- Follow-Up Speed: hours from event capture to first recruiter outreach
- Conversion Rate: candidates captured to phone screen to offer to hire

Reporting framing for HR leadership: "At [Event], Momentify helped us identify [X] pipeline-ready candidates within [Y] hours. Our cost per qualified candidate was [Z] vs our prior event average."

---

**Layer 7 — Competitive Intel: Recruiting Tech**

Competitors in this context: Handshake, LinkedIn Talent Solutions, and the ATS (Workday, Greenhouse, Lever)

Comparison table:

| Capability | Momentify | Handshake | LinkedIn Talent | ATS (Workday etc) |
|---|---|---|---|---|
| In-event candidate intent capture | Yes | No — sourcing only | No — sourcing only | No — post-apply only |
| Real-time engagement scoring | Yes | No | No | No |
| Event-specific ROX reporting | Yes | No | No | No |
| Works at in-person recruiting events | Yes | Limited — campus focus | No | No |
| Integrates above existing ATS | Yes — sits above, not replacing | N/A | N/A | N/A |
| Industry-specific templates | Yes — heavy equipment, defense | Generic | Generic | Generic |

vs Handshake: "Handshake is for campus sourcing. It gets candidates to the event. Momentify captures what happens when they get there. They are sequential, not competitive."

vs LinkedIn Talent: "LinkedIn finds candidates before the event. Momentify captures which candidates at your event were serious. Different part of the funnel entirely."

vs ATS: "ATS is where candidates live after they apply. Momentify tells you who to prioritize before they apply — while the conversation is still warm."

How to win: Reframe the conversation around the post-event follow-up gap. "Your ATS and LinkedIn solve pre- and post-event. Nobody solves what happens during the event and in the 24 hours after it." That is the Momentify position.

Killer question: "After your last recruiting event, how long did it take your team to follow up with the top 10 candidates? How many of those candidates had accepted another offer by then?"

---

### Vertical: Energy & Infrastructure

**Layer 1 — ICP**
Primary: Workforce Development Manager, Talent Acquisition Lead at utility, grid operator, EPC firm, or renewable energy company
Hard-to-fill roles: power systems engineers, field technicians, SCADA operators, project managers
Events: POWER-GEN workforce sessions, DistribuTECH talent programs, university engineering recruiting (Georgia Tech, Texas A&M, Penn State energy programs)
Anti-ICP: companies hiring primarily operational/non-technical staff, organizations without a structured TA function

**Layer 2 — Message**
Headline: "The engineers you need are at the conference. The question is whether they remember you."
Key insight: in energy and infrastructure, the talent pool is small and relationship-driven. One missed conversation at an industry event has a 12-month cost.

**Layers 3 through 6:** Follow same structure as Heavy Equipment, adapted for energy sector events and roles (engineers, field techs, grid specialists vs diesel technicians).

**Layer 7 — Competitive Intel**
Same three competitors. Energy-specific win condition: "Energy sector TA teams run 3 to 5 major recruiting events per year with no system for capturing candidate intent during the event. The status quo is a clipboard and a business card bowl. Momentify is the first structured alternative."

---

### Vertical: Aerospace & Aviation

**Layer 1 — ICP**
Primary: Defense HR Director, Talent Acquisition Manager at defense OEM or systems integrator
Hard-to-fill roles: systems engineers, program managers, cleared professionals, avionics specialists
Events: AUSA hiring events, AFCEA recruiting, university ROTC and engineering recruiting, Sea-Air-Space talent sessions
Sensitivity: security clearance requirements affect candidate pool. Momentify does not touch or process clearance data.
Anti-ICP: companies without cleared hiring programs, organizations that do not attend industry events

**Layer 2 — Message**
Headline: "Cleared talent is rare. The conversation you do not document is the hire you lose."
ITAR/security framing: Momentify captures engagement metadata and candidate interest signals. No clearance-related data is collected or stored.

**Layers 3 through 7:** Follow Heavy Equipment pattern. Competitive Intel adds: "In aerospace and defense, the real competitor is a spreadsheet and a business card stack. No enterprise recruiting tool addresses in-person event capture for cleared hiring programs."

---

## MOTION: Channel Partners

Partner types: recruiting agencies specializing in technical talent (engineering, defense, energy), workforce development organizations, industry associations with career placement programs (SME, NDIA, AEM)

**Layer 1 — Partner ICP**
Primary: Technical Recruiting Agency Director, Workforce Development Director at industry association
Pain: clients ask what came back from the recruiting event investment. The agency has no structured answer.
Anti-ICP: generalist staffing agencies, consumer-facing HR consultancies

**Layer 2 — Partner Message**
Headline: "Add candidate intelligence to every recruiting event you run."
Partner pitch: "You bring the candidates. Momentify tells you which ones your clients should call first. That is the intelligence gap you can close right now."

**Layers 3 through 7:** Follow Trade Shows partner motion structure, adapted for recruiting agency context.
Competitive Intel: same positioning — partner motion competes against the build-vs-partner decision, not named tools. Win condition: "Building a candidate scoring system is a 12-month project. Momentify activates in one event."
