# GTM Content Storage + Publish Pipeline

## Context

The GTM Content Builder generates microsites, social posts, emails, and other content for sales teams. Currently all data (content library, calendar tasks) lives in browser localStorage and is lost when switching devices or clearing storage. Generated microsites exist only as standalone HTML files in the Brand Kit directory with no way to publish them to a live URL.

This design adds server-side persistence using Vercel KV and Vercel Blob (both already installed and used by the Explorer system), plus a publish pipeline that serves microsites at `momentifyapp.com/m/{slug}`.

## Scope

**In scope:**
- Persist content library and calendar tasks to Vercel KV
- Store microsite HTML and graphics in Vercel Blob
- Publish microsites to live URLs under the main domain
- Strip brand-nav from published microsites (internal tooling, not for prospects)
- Migrate frontend components from localStorage to API calls
- Content dashboard inside GTM tool showing all content grouped by solution with publish/unpublish actions

**Out of scope (future):**
- Draft/published states and approval workflows
- Publishing to external APIs
- Versioning and revision history

## Data Model

### Vercel KV Keys

```
gtm:content:{id}         → ContentItem JSON
gtm:content:index         → string[] (all content IDs)
gtm:calendar:{id}         → CalendarTask JSON
gtm:calendar:index        → string[] (all calendar task IDs)
gtm:microsite:{slug}      → MicrositeRecord JSON
gtm:microsite:index       → string[] (all microsite slugs)
```

### Vercel Blob Paths

```
gtm/microsites/{slug}.html    → Published microsite HTML (brand-nav stripped)
gtm/assets/{id}-{filename}    → Attached graphics, client logos
```

### TypeScript Interfaces

```typescript
// Replaces localStorage SavedContentItem
interface ContentItem {
  id: string
  contentType: string         // "social-post", "cold-email", "microsite", etc.
  platform?: string           // "linkedin", "twitter", "instagram"
  motion: "direct" | "partner"
  solution: string            // "trade-shows", "recruiting", etc.
  content: string             // Generated text body
  blobUrl?: string            // Vercel Blob URL for attached file
  createdAt: string           // ISO timestamp
  tags: string[]
}

// Same interface as existing, now persisted to KV
interface CalendarTask {
  id: string
  title: string
  category: TaskCategory
  solution: SolutionId
  date: string                // "2026-03-24"
  timeSlot?: "morning" | "afternoon"
  duration: number            // minutes
  completed: boolean
  description?: string
  sortOrder: number
  roxTouchpoint?: string
}

// New: tracks published microsites
interface MicrositeRecord {
  slug: string                // URL path segment, e.g. "panelmatic"
  title: string               // Page title for meta tags
  description?: string        // Meta description
  solution: string
  blobUrl: string             // Vercel Blob CDN URL of the HTML file
  contentId?: string          // Links back to originating ContentItem
  publishedAt: string         // ISO timestamp
}
```

The `contentType` field is an open string. New content types (presentations, PDFs, etc.) require no schema changes. Text-only types use the `content` field. File-based types additionally use `blobUrl`.

## API Routes

All routes gated behind existing GTM auth cookie (`gtm_auth`). Patterns follow the existing `/api/explorer/configs` routes.

### Content Library

**`/api/gtm/content/route.ts`**

| Method | Params | Action |
|--------|--------|--------|
| GET | `?solution=trade-shows` | List content items filtered by solution |
| POST | ContentItem body | Save new content item to KV, update index |

**`/api/gtm/content/[id]/route.ts`**

| Method | Action |
|--------|--------|
| GET | Get single content item |
| DELETE | Delete from KV + delete Blob file if `blobUrl` exists |

### Calendar

**`/api/gtm/calendar/route.ts`**

| Method | Params | Action |
|--------|--------|--------|
| GET | (none) | List all calendar tasks |
| POST | CalendarTask body | Create task, update index |
| PUT | CalendarTask[] body | Bulk update (for drag-drop reorder) |

**`/api/gtm/calendar/[id]/route.ts`**

| Method | Action |
|--------|--------|
| PUT | Update single task (reschedule, mark complete) |
| DELETE | Delete task, update index |

### Microsites

**`/api/gtm/microsites/route.ts`**

| Method | Params | Action |
|--------|--------|--------|
| GET | (none) | List all published microsites |
| POST | `{ slug, title, description?, solution, html, contentId? }` | Strip brand-nav from HTML, upload to Blob at `gtm/microsites/{slug}.html`, create MicrositeRecord in KV |

**`/api/gtm/microsites/[slug]/route.ts`**

| Method | Action |
|--------|--------|
| GET | Get microsite record |
| PUT | Re-publish (upload new HTML to Blob, update record) |
| DELETE | Unpublish (delete Blob file + KV record + index entry) |

### Brand-Nav Stripping (POST /api/gtm/microsites)

Before uploading HTML to Blob, the API removes:
- `<link rel="stylesheet" href="../brand-nav.css" />` (or any brand-nav.css reference)
- `<script src="../brand-nav.js"></script>` (or any brand-nav.js reference)
- The `window.BRAND_SKIP_AUTH` script block
- The asset path-fix script block (injected for `/gtm/` subdirectory)
- The theme persistence IIFE (`localStorage.getItem('mk-theme')`)

This leaves a clean standalone HTML document with no internal tooling dependencies.

## Microsite Serving

**`/src/app/m/[slug]/page.tsx`**

A Next.js catch-all route that serves published microsites.

Flow:
1. Look up `gtm:microsite:{slug}` in KV
2. If not found, return 404
3. Extract `title`, `description`, `blobUrl` from the record
4. Render a page with meta tags from the record and a full-viewport iframe pointing to the `blobUrl`

```typescript
// Simplified structure
export async function generateMetadata({ params }) {
  const record = await kv.get(`gtm:microsite:${params.slug}`)
  if (!record) return {}
  return { title: record.title, description: record.description }
}

export default async function MicrositePage({ params }) {
  const record = await kv.get(`gtm:microsite:${params.slug}`)
  if (!record) notFound()
  return (
    <iframe
      src={record.blobUrl}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      title={record.title}
    />
  )
}
```

The iframe approach keeps the microsite HTML fully isolated from the Next.js shell. No CSS conflicts, no script collisions. The Blob CDN URL is fast and cached.

## Frontend Migration

Swap localStorage calls for API calls in three components. No migration script for existing localStorage data.

### ContentBuilder.tsx + ContentLibrary.tsx

| Current (localStorage) | New (API) |
|------------------------|-----------|
| `localStorage.setItem('gtm_library_...')` | `POST /api/gtm/content` |
| `localStorage.getItem('gtm_library_...')` | `GET /api/gtm/content?solution=...` |
| Splice from array + `setItem` | `DELETE /api/gtm/content/{id}` |

### calendar/page.tsx

| Current (localStorage) | New (API) |
|------------------------|-----------|
| `localStorage.getItem('gtm_calendar_tasks')` | `GET /api/gtm/calendar` |
| Push + `setItem` | `POST /api/gtm/calendar` |
| Full array `setItem` (reorder) | `PUT /api/gtm/calendar` (bulk) |
| Update + `setItem` | `PUT /api/gtm/calendar/{id}` |
| Splice + `setItem` | `DELETE /api/gtm/calendar/{id}` |

### ContentBuilder.tsx "Schedule" button

Changes from creating a CalendarTask in localStorage to `POST /api/gtm/calendar`.

### New "Publish" button (microsite content type)

After a microsite is generated in Content Builder:
1. "Publish" button appears
2. Prompts for slug (pre-filled from company name)
3. `POST /api/gtm/microsites` with HTML and metadata
4. Shows the live URL with a copy button

### Loading States

Each component adds a loading state on mount while fetching from the API. Uses `useEffect` + `fetch` or `useSWR`, matching existing patterns in the project.

## Content Dashboard

A new page at `/gtm/content` inside the GTM tool. Shows all content (published and unpublished) grouped by solution.

**`/src/app/gtm/content/page.tsx`**

### Layout

- Solution tabs across the top (Trade Shows, Recruiting, Field Sales, Facilities, Events & Venues, plus an "All" tab)
- Within each solution, content items displayed as cards in a grid
- Each card shows: content type badge, title/preview (first ~80 chars), created date, and status indicator

### Card Actions

**Unpublished content:**
- Copy content
- Schedule to calendar
- Publish (for microsite/one-pager types)
- Delete

**Published microsites:**
- Live URL with copy-link button
- Open in new tab
- Re-publish (update)
- Unpublish
- Delete

### Data

Fetches from two endpoints on mount:
- `GET /api/gtm/content` (all content items)
- `GET /api/gtm/microsites` (all published microsites, matched to content items via `contentId`)

The `GET /api/gtm/content` route gains an optional `?solution=all` param (or no param) to return all content across solutions. Published microsites are matched to their source content item by `contentId` to show the live URL inline on the card.

### Filtering

- Solution tabs filter the list
- Optional content type filter (dropdown: All, Microsites, Emails, Social Posts, etc.)
- Published/unpublished toggle filter

## Key Files to Modify

| File | Change |
|------|--------|
| `Website/src/app/api/gtm/content/route.ts` | New: content CRUD |
| `Website/src/app/api/gtm/content/[id]/route.ts` | New: single content ops |
| `Website/src/app/api/gtm/calendar/route.ts` | New: calendar CRUD |
| `Website/src/app/api/gtm/calendar/[id]/route.ts` | New: single task ops |
| `Website/src/app/api/gtm/microsites/route.ts` | New: publish pipeline |
| `Website/src/app/api/gtm/microsites/[slug]/route.ts` | New: single microsite ops |
| `Website/src/app/m/[slug]/page.tsx` | New: microsite serving |
| `Website/src/app/gtm/content/page.tsx` | New: content dashboard |
| `Website/src/components/gtm/ContentBuilder.tsx` | Swap localStorage for API, add Publish button |
| `Website/src/components/gtm/ContentLibrary.tsx` | Swap localStorage for API |
| `Website/src/app/gtm/calendar/page.tsx` | Swap localStorage for API |

## Testing

- Create content via Content Builder, verify it persists across browser sessions
- Schedule content to calendar, verify tasks survive page refresh and incognito mode
- Publish a microsite, verify it's accessible at `/m/{slug}`
- Re-publish with updated HTML, verify changes appear
- Unpublish, verify 404 at the URL
- Delete content that has an attached Blob file, verify Blob is cleaned up
- Content dashboard loads all content grouped by solution
- Solution tab filtering works correctly
- Published microsites show live URL with copy button on dashboard cards
- Publish/unpublish actions from dashboard update both the card state and the live URL
