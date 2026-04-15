---
description: Scaffold a complete GTM (Go-To-Market) Toolkit into a Next.js project — includes Channel Strategy, Content Builder, Email Builder, Pipeline, and Calendar.
---

# GTM Toolkit Skill

Scaffold a full GTM Toolkit into a Next.js App Router project. The toolkit includes five modules powered by a single config file:

1. **Channel Strategy** — Platform cadence, content pillars, persona framework, weekly schedule
2. **Content Builder** — AI-powered social content generation with pillar/persona targeting
3. **Email Builder** — Compose, preview, and send templated emails via Resend
4. **Pipeline** — Kanban board (Draft → Review → Scheduled → Published) with drag-and-drop
5. **Calendar** — Drag-and-drop launch calendar with auto-schedule generation

## Prerequisites

The target project must have:
- Next.js 14+ with App Router
- Tailwind CSS with `cn()` utility (from `@/lib/utils`)
- `lucide-react` for icons
- `@clerk/nextjs` for auth (API routes use `auth()`)
- `@anthropic-ai/sdk` for AI content generation (optional — falls back to rule-based)
- `RESEND_API_KEY` env var for email sending
- `ANTHROPIC_API_KEY` env var for AI content generation

## Scaffold Steps

### 1. Copy the config file

Copy `templates/lib/gtm-config.ts` to `lib/gtm-config.ts` in the target project.

**Then customize it** — this is the single source of truth for all business-specific data:
- `BRAND` — name, logo URLs, colors, domain, brand voice, product names
- `PILLARS` — content pillars with weights, colors, descriptions
- `PERSONAS` — target personas with ICP data, messaging, CTAs, proof points
- `PLATFORMS` — social platforms with posting cadence and format specs
- `MESSAGING_ANGLES` — AI persona angles for content generation
- `WEEKLY_SCHEDULE` — recommended posting schedule
- `EMAIL_TEMPLATES` — email template library with variable interpolation
- `TEMPLATE_VARIABLES` — available variables for email interpolation
- `CALENDAR_CHANNELS` — channel categories for the launch calendar
- `SEED_TASKS` / `SEED_PIPELINE_CARDS` — optional starter data
- `FALLBACK_CAPTIONS` / `FALLBACK_HASHTAGS` / `TITLE_TEMPLATES` — rule-based AI fallbacks

### 2. Copy component files

Copy all files from `templates/components/` to your components directory:

| Template file | Target path | Description |
|---|---|---|
| `GTMToolkitPage.tsx` | `components/brand/GTMToolkitPage.tsx` | Main page with tabs + calendar |
| `GTMChannelStrategy.tsx` | `components/brand/GTMChannelStrategy.tsx` | Channel strategy dashboard |
| `GTMContentBuilder.tsx` | `components/brand/GTMContentBuilder.tsx` | AI content builder |
| `GTMEmailBuilder.tsx` | `components/brand/GTMEmailBuilder.tsx` | Email compose + preview + send |
| `GTMPipeline.tsx` | `components/brand/GTMPipeline.tsx` | Kanban pipeline board |

Update import paths in `GTMToolkitPage.tsx` if your component directory structure differs.

### 3. Copy API routes

Copy from `templates/api/` to your `app/api/` directory:

| Template file | Target path | Description |
|---|---|---|
| `email/route.ts` | `app/api/brand/email/route.ts` | Send emails via Resend |
| `gtm-schedule/route.ts` | `app/api/ai/gtm-schedule/route.ts` | Auto-generate 14-day schedule |
| `social-content/route.ts` | `app/api/ai/social-content/route.ts` | AI content generation |

### 4. Create the page route

Create a page that renders the toolkit:

```tsx
// app/brand/gtm-toolkit/page.tsx
import GTMToolkitPage from "@/components/brand/GTMToolkitPage";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <GTMToolkitPage />
    </div>
  );
}
```

### 5. Add scrollbar-hide utility (if not present)

Add to your `globals.css`:

```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

### 6. Set environment variables

```
RESEND_API_KEY=re_...
ANTHROPIC_API_KEY=sk-ant-...
```

## Architecture

All components import from `@/lib/gtm-config` — zero business-specific data lives in component code. To adapt for a different business:

1. Replace values in `gtm-config.ts`
2. Components and API routes automatically reflect the new brand

The Email Builder sends via Resend's API. The Content Builder uses Claude for AI generation with a rule-based fallback. The Calendar's auto-generate feature creates a weighted 14-day schedule based on pillar distribution.
