# Demo Request Page Plan

## New Files

### 1. `src/app/demo/page.tsx`
Route wrapper (Navigation + DemoContent + Footer). Metadata: title "Schedule a Demo | Momentify".

### 2. `src/components/DemoContent.tsx`
Split-layout page component:

**Left side** (dark gradient background, sticky on desktop):
- Eyebrow: "Schedule a Demo"
- Headline: "See Momentify in action."
- Subhead: Brief value prop
- 3 trust bullets (icons + text): "Personalized walkthrough", "Live platform demo", "ROX strategy session"
- Geometric SVG overlay matching FinalCTA

**Right side** (white card with form):
- Form fields (2-col grid where logical):
  - First Name + Last Name (2 cols)
  - Work Email (full width)
  - Company + Job Title (2 cols)
  - Solution Interest (dropdown: Trade Shows & Exhibits, Technical Recruiting, Field Sales Enablement, Facilities, Venues & Events, Multiple Solutions, Not Sure Yet)
  - Company Size (dropdown: 1-50, 51-200, 201-1,000, 1,001-5,000, 5,000+)
  - Events/Activations per Year (dropdown: 1-5, 6-15, 16-50, 50+)
  - Referred From (dropdown, auto-populated from `?source=` URL param, all page options listed)
  - Message (optional textarea)
- Submit button (action gradient)
- Success state matching Integrations pattern

### 3. `src/app/api/demo/route.ts`
Server-side API route:
- Receives form JSON via POST
- Submits to **HubSpot Forms API** (`submissions/v3/integration/submit`)
- Submits to **Intercom Contacts API** (`api.intercom.io/contacts`)
- Env vars needed: `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID`, `INTERCOM_ACCESS_TOKEN`
- Returns success/error JSON

## Link Updates (22 instances across 17 files)

All `#demo` hrefs updated to `/demo` with contextual `?source=` param:

| File | Source Param |
|------|-------------|
| Navigation.tsx (x2) | (none) |
| Footer.tsx | (none) |
| FinalCTA.tsx | (none) |
| TradeShowsSolution.tsx (x2) | `trade-shows` |
| TechRecruitingSolution.tsx (x2) | `technical-recruiting` |
| FieldSalesSolution.tsx (x2) | `field-sales` |
| FacilitiesSolution.tsx (x2) | `facilities` |
| EventsVenuesSolution.tsx (x2) | `venues-events` |
| MustangCatCaseStudy.tsx | `case-study-mustang-cat` |
| DistribuTECHCaseStudy.tsx | `case-study-distributech` |
| GlobalDealerLearningCaseStudy.tsx | `case-study-global-dealer-learning` |
| WhatIsROX.tsx | `what-is-rox` |
| IntegrationsContent.tsx | `integrations` |
| CaseStudiesContent.tsx | `case-studies` |
| ROX.tsx | `rox` |
| HowItWorksContent.tsx | `how-it-works` |

## Environment Variables Needed
```
HUBSPOT_PORTAL_ID=
HUBSPOT_FORM_GUID=
INTERCOM_ACCESS_TOKEN=
```
