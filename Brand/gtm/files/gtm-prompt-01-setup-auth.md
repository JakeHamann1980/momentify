# GTM Framework — Prompt 1 of 4: Setup, Auth & Theme System

## Context

You are working inside the existing momentifyapp.com Next.js project deployed on Vercel.
Do not break any existing pages or routes.

---

## Step 1: Environment Variable

Add to `.env.local` and to Vercel environment variables:

```
GTM_PASSWORD=momentify2026
```

Do NOT hardcode the password in source files.

---

## Step 2: CSS Theme Variables

Add to global stylesheet or a new `styles/gtm-theme.css` imported only in the GTM layout.
All GTM components must reference these variables. Never use hardcoded hex values inside
any GTM component.

```css
:root,
[data-theme="light"] {
  --gtm-bg-page:      #F8F9FC;
  --gtm-bg-card:      #FFFFFF;
  --gtm-border:       rgba(6, 19, 65, 0.08);
  --gtm-text-primary: #061341;
  --gtm-text-muted:   rgba(6, 19, 65, 0.50);
  --gtm-text-faint:   rgba(6, 19, 65, 0.35);
  --gtm-cyan:         #0CF4DF;
  --gtm-tag-bg:       rgba(12, 244, 223, 0.10);
  --gtm-tag-text:     #0AA891;
  --gtm-layer-bg:     #FFFFFF;
  --gtm-layer-hover:  #F0F9FF;
  --gtm-shadow:       0 1px 3px rgba(6,19,65,0.08), 0 4px 12px rgba(6,19,65,0.04);
  --gtm-shadow-hover: 0 4px 16px rgba(6,19,65,0.12), 0 8px 24px rgba(6,19,65,0.06);
}

[data-theme="dark"] {
  --gtm-bg-page:      #070E2B;
  --gtm-bg-card:      rgba(255, 255, 255, 0.04);
  --gtm-border:       rgba(255, 255, 255, 0.08);
  --gtm-text-primary: #FFFFFF;
  --gtm-text-muted:   rgba(255, 255, 255, 0.55);
  --gtm-text-faint:   rgba(255, 255, 255, 0.30);
  --gtm-cyan:         #0CF4DF;
  --gtm-tag-bg:       rgba(12, 244, 223, 0.12);
  --gtm-tag-text:     #0CF4DF;
  --gtm-layer-bg:     rgba(255, 255, 255, 0.04);
  --gtm-layer-hover:  rgba(12, 244, 223, 0.06);
  --gtm-shadow:       0 1px 3px rgba(0,0,0,0.30), 0 4px 12px rgba(0,0,0,0.20);
  --gtm-shadow-hover: 0 4px 20px rgba(0,0,0,0.40), 0 8px 32px rgba(0,0,0,0.25);
}
```

The sidebar always uses Deep Navy `#061341` regardless of theme.
Apply `data-theme` to the GTM layout wrapper div only, not to `<html>`.
This isolates theme switching to the GTM section without affecting the public site.

---

## Step 3: Theme Persistence Hook

Create `hooks/useGTMTheme.ts`:

```typescript
import { useState, useEffect } from 'react'

export function useGTMTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('gtm_theme') as 'light' | 'dark' | null
    if (stored) setTheme(stored)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('gtm_theme', next)
  }

  return { theme, toggleTheme }
}
```

---

## Step 4: Middleware

Create or extend `middleware.ts` at the project root:

- Protect all routes matching `/gtm/*`
- If `gtm_auth` cookie is present and valid, allow through
- Otherwise redirect to `/gtm/login`
- Do not modify protection on any existing routes

---

## Step 5: Auth API Route

Create `app/api/gtm/auth/route.ts`:

- POST only
- Body: `{ password: string }`
- Compare against `process.env.GTM_PASSWORD` using `crypto.timingSafeEqual`
- On match: set cookie `gtm_auth`, `httpOnly: true`, `sameSite: 'lax'`, `maxAge: 2592000` (30 days), return `{ success: true }`
- On mismatch: return `{ success: false }` status 401

---

## Step 6: Login Page

Create `app/gtm/login/page.tsx`:

- Full viewport, vertically and horizontally centered
- Background: always `#061341` (this page is always dark — it is the entry gate)
- Momentify white logo, 36px height, centered, 48px from top
- Card: white background, border-radius 16px, padding 40px, max-width 400px, shadow medium
- Heading: "Team Access" — Inter 700, 22px, `#061341`
- Subtext: "Internal use only." — 14px, `#061341` at 50%
- Password input: full width, 1px border `rgba(6,19,65,0.15)`, border-radius 8px, padding 12px 16px, 15px font
- Submit: full width, `linear-gradient(135deg, #0CF4DF, #1A56DB)`, white text 700, 15px, border-radius 8px, 44px height
- Error: inline `#ef4444` text below input, 13px, only shown after failed attempt
- On success: redirect to `/gtm`
- No em dashes in any copy

---

## Step 7: GTM Layout Shell

Create `app/gtm/layout.tsx` — a client component wrapping all `/gtm/*` pages.

Structure:
```
<div data-theme={theme} style={{ display: 'flex', minHeight: '100vh' }}>
  <Sidebar theme={theme} toggleTheme={toggleTheme} />
  <main style={{ flex: 1, background: 'var(--gtm-bg-page)', overflowY: 'scroll' }}>
    {children}
  </main>
</div>
```

### Sidebar spec (240px fixed width, full height, flex column, background `#061341`)

**Top section:**
- Momentify white logo, 24px height, 24px left padding, 28px top
- Horizontal rule `rgba(255,255,255,0.08)` below logo row
- Section label: `GTM FRAMEWORK` — 10px, 600, `#0CF4DF`, letter-spacing 0.14em, 24px left, 20px top margin

**Nav items** (link to each route, 44px height, 24px horizontal padding):
```
/gtm                — Dashboard          — Grid icon
/gtm/trade-shows    — Trade Shows        — Building2 icon
/gtm/recruiting     — Technical Recruiting — Target icon
/gtm/field-sales    — Field Sales        — MapPin icon
/gtm/facilities     — Facilities         — Layers icon
/gtm/events-venues  — Events & Venues    — Ticket icon
```
- Text: Inter 14px, 500, white at 70%
- Icon: 16px, white at 45%
- Active (matches current route): white 100%, left border 3px `#0CF4DF`, bg `rgba(255,255,255,0.06)`
- Hover: white 90%, bg `rgba(255,255,255,0.04)`, transition 150ms ease
- Use Next.js `usePathname()` for active state detection

**Bottom section** (margin-top: auto):
- Divider `rgba(255,255,255,0.08)`
- Theme toggle row (same height as nav item):
  - Icon: `Sun` when dark mode active (click to go light), `Moon` when light mode active (click to go dark)
  - Label: "Light mode" or "Dark mode" — 13px, white at 55%
  - onClick: calls `toggleTheme()`
- Sign Out row:
  - `LogOut` icon + "Sign Out" label — 13px, white at 40%
  - onClick: delete `gtm_auth` cookie, redirect to `/gtm/login`
  - Hover: white at 70%

Use lucide-react for all icons. Install if not already present.

---

## Step 8: Verify

1. `/gtm` without cookie redirects to `/gtm/login`
2. Correct password sets cookie and lands at `/gtm`
3. Sidebar renders on all `/gtm/*` pages
4. Theme toggle switches light and dark correctly
5. Theme persists across page reloads via localStorage
6. No existing public routes are affected
7. No hardcoded hex values in any GTM component
