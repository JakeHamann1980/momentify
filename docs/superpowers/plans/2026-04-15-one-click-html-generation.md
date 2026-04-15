# One-Click HTML Asset Generation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add "Generate Now" buttons above "Build with Claude Code" sections for all HTML-based content types (infographic, microsite, carousel, pitch deck, one-pager), enabling one-click generation via Claude API instead of manual copy-paste workflow.

**Architecture:** Backend API endpoints call Claude with the generated brief to produce self-contained HTML files. Frontend adds generation buttons with loading states. Generated HTML saves automatically to `/public/gtm/`. Canvas-based assets (carousel, pitch deck) generate HTML in parallel to existing canvas preview.

**Tech Stack:** Next.js API routes, Claude API, TypeScript, Tailwind CSS, Framer Motion

---

## Files to Create

### 1. `/src/app/api/gtm/generate-asset-html/route.ts`
- Unified endpoint: `POST /api/gtm/generate-asset-html`
- Body: `{ brief: string, assetType: "infographic" | "microsite" | "carousel" | "pitch-deck" | "one-pager", solution: string }`
- Calls Claude with brief + instructions specific to asset type
- Saves result to `/public/gtm/{solution}-{assetType}.html`
- Returns: `{ success: boolean, url?: string, error?: string }`
- Reusable for all HTML asset types

## Files to Modify

### `/src/components/gtm/ContentBuilder.tsx`

**Add state** (around line 340, after existing infographic state):
```typescript
const [generatingAsset, setGeneratingAsset] = useState<string | null>(null) // tracks which asset type is generating
const [assetGenerationError, setAssetGenerationError] = useState<string | null>(null)
```

**Add handler** (after `handleInfographicRegenerate`):
```typescript
const handleGenerateAssetHtml = useCallback(async (assetType: string) => {
  setGeneratingAsset(assetType)
  setAssetGenerationError(null)
  try {
    const res = await fetch("/api/gtm/generate-asset-html", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brief: output,
        assetType,
        solution,
      }),
    })
    const data = await res.json()
    if (data.success) {
      // For image-based assets, check if preview file exists
      if (assetType === "infographic") {
        setInfographicExists(true)
      }
      // Toast/notification: "Generated successfully!"
    } else {
      setAssetGenerationError(data.error || "Generation failed")
    }
  } catch (error) {
    setAssetGenerationError("Network error during generation")
  } finally {
    setGeneratingAsset(null)
  }
}, [output, solution])
```

**For INFOGRAPHIC section (lines ~1887-2007):**
Replace existing section with:
```jsx
{/* Infographic - Generate Now button + Preview + Build with Claude Code */}
{isInfographic && output && (
  <>
    {/* Generate Now button */}
    {!infographicExists && (
      <div style={{
        marginTop: 20,
        padding: 16,
        borderRadius: 10,
        border: "1px solid var(--gtm-border)",
        background: "var(--gtm-bg-card)",
      }}>
        <button
          onClick={() => handleGenerateAssetHtml("infographic")}
          disabled={generatingAsset === "infographic"}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 6,
            border: "none",
            background: "var(--gtm-accent)",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: font,
            color: "#fff",
            cursor: generatingAsset === "infographic" ? "not-allowed" : "pointer",
            opacity: generatingAsset === "infographic" ? 0.6 : 1,
            transition: "all 150ms ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {generatingAsset === "infographic" ? (
            <><RotateCw size={14} style={{ animation: "spin 1s linear infinite" }} /> Generating...</>
          ) : (
            <>Sparkles size={14} /> Generate Now</>
          )}
        </button>
        {assetGenerationError && (
          <p style={{ color: "var(--gtm-error)", fontSize: 12, marginTop: 8, margin: 0 }}>
            {assetGenerationError}
          </p>
        )}
      </div>
    )}

    {/* Preview section (only if generated) */}
    {infographicExists && (
      <div style={{
        marginTop: 20,
        padding: 20,
        borderRadius: 10,
        border: "1px solid var(--gtm-border)",
        background: "var(--gtm-bg-card)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--gtm-text-primary)", fontFamily: font }}>
            Preview
          </span>
          <button
            onClick={() => setIsEditingInfographic(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid var(--gtm-border)",
              background: "transparent",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: font,
              color: "var(--gtm-text-muted)",
              cursor: "pointer",
            }}
          >
            <Edit2 size={12} /> Edit
          </button>
        </div>
        <iframe
          src={`/api/gtm/infographic-preview?solution=${solution}`}
          style={{
            width: "100%",
            height: 600,
            borderRadius: 6,
            border: "1px solid var(--gtm-border)",
            background: "#fff",
          }}
          title="Infographic preview"
        />
      </div>
    )}

    {/* Build with Claude Code (always shown as fallback) */}
    <div style={{
      marginTop: 20,
      padding: 20,
      borderRadius: 10,
      border: "1px solid var(--gtm-border)",
      background: "var(--gtm-bg-card)",
    }}>
      {/* ... existing "Build with Claude Code" UI ... */}
    </div>

    {/* Editor modal */}
    {isEditingInfographic && (
      <InfographicEditor
        solution={solution}
        output={output}
        onClose={() => setIsEditingInfographic(false)}
        onRegenerate={handleInfographicRegenerate}
        isLoading={infographicLoading}
      />
    )}
  </>
)}
```

**For MICROSITE section (find existing section around line ~2009):**
Add "Generate Now" button above "Build with Claude Code":
```jsx
{selectedContent === "microsite" && output && (
  <>
    {/* Generate Now button */}
    <div style={{ marginTop: 20, padding: 16, borderRadius: 10, border: "1px solid var(--gtm-border)", background: "var(--gtm-bg-card)" }}>
      <button
        onClick={() => handleGenerateAssetHtml("microsite")}
        disabled={generatingAsset === "microsite"}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: 6,
          border: "none",
          background: "var(--gtm-accent)",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: font,
          color: "#fff",
          cursor: generatingAsset === "microsite" ? "not-allowed" : "pointer",
          opacity: generatingAsset === "microsite" ? 0.6 : 1,
        }}
      >
        {generatingAsset === "microsite" ? <><RotateCw size={14} /> Generating...</> : <>Sparkles size={14} /> Generate Now</>}
      </button>
      {assetGenerationError && <p style={{ color: "var(--gtm-error)", fontSize: 12, marginTop: 8 }}>{assetGenerationError}</p>}
    </div>

    {/* Existing Build with Claude Code section below */}
    <div style={{/* ... existing styles ... */}}>
      {/* ... existing content ... */}
    </div>
  </>
)}
```

**For CAROUSEL section (find existing section):**
Add "Generate Now" button above "Build with Claude Code":
```jsx
{isCarousel && output && (
  <>
    {/* Generate Now button */}
    <div style={{ marginTop: 20, padding: 16, borderRadius: 10, border: "1px solid var(--gtm-border)", background: "var(--gtm-bg-card)" }}>
      <button
        onClick={() => handleGenerateAssetHtml("carousel")}
        disabled={generatingAsset === "carousel"}
        style={{/* ... same styles as above ... */}}
      >
        {generatingAsset === "carousel" ? <><RotateCw size={14} /> Generating...</> : <>Sparkles size={14} /> Generate Now</>}
      </button>
      {assetGenerationError && <p style={{ color: "var(--gtm-error)", fontSize: 12, marginTop: 8 }}>{assetGenerationError}</p>}
    </div>

    {/* Existing Build with Claude Code section below */}
    <div style={{/* ... existing styles ... */}}>
      {/* ... existing content ... */}
    </div>
  </>
)}
```

**For PITCH DECK section (find existing section):**
Add "Generate Now" button above "Build with Claude Code":
```jsx
{isSlideContent && output && (
  <>
    {/* Generate Now button */}
    <div style={{ marginTop: 20, padding: 16, borderRadius: 10, border: "1px solid var(--gtm-border)", background: "var(--gtm-bg-card)" }}>
      <button
        onClick={() => handleGenerateAssetHtml("pitch-deck")}
        disabled={generatingAsset === "pitch-deck"}
        style={{/* ... same styles as above ... */}}
      >
        {generatingAsset === "pitch-deck" ? <><RotateCw size={14} /> Generating...</> : <>Sparkles size={14} /> Generate Now</>}
      </button>
      {assetGenerationError && <p style={{ color: "var(--gtm-error)", fontSize: 12, marginTop: 8 }}>{assetGenerationError}</p>}
    </div>

    {/* Existing Build with Claude Code section below */}
    <div style={{/* ... existing styles ... */}}>
      {/* ... existing content ... */}
    </div>
  </>
)}
```

**For ONE-PAGER section (find existing section):**
Add "Generate Now" button above "Build with Claude Code":
```jsx
{selectedContent === "one-pager" && output && (
  <>
    {/* Generate Now button */}
    <div style={{ marginTop: 20, padding: 16, borderRadius: 10, border: "1px solid var(--gtm-border)", background: "var(--gtm-bg-card)" }}>
      <button
        onClick={() => handleGenerateAssetHtml("one-pager")}
        disabled={generatingAsset === "one-pager"}
        style={{/* ... same styles as above ... */}}
      >
        {generatingAsset === "one-pager" ? <><RotateCw size={14} /> Generating...</> : <>Sparkles size={14} /> Generate Now</>}
      </button>
      {assetGenerationError && <p style={{ color: "var(--gtm-error)", fontSize: 12, marginTop: 8 }}>{assetGenerationError}</p>}
    </div>

    {/* Existing Build with Claude Code section below */}
    <div style={{/* ... existing styles ... */}}>
      {/* ... existing content ... */}
    </div>
  </>
)}
```

---

## Implementation Tasks

### Task 1: Create unified asset generation API endpoint

**Files:**
- Create: `/src/app/api/gtm/generate-asset-html/route.ts`

- [ ] **Step 1: Create route file with endpoint**

```typescript
import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import fs from "fs"
import path from "path"

const client = new Anthropic()

const assetPrompts: Record<string, (brief: string, solution: string) => string> = {
  infographic: (brief, solution) => `Build an infographic HTML page at Brand/gtm/${solution}-infographic.html using the rox-infographic.html reference implementation at Brand/rox-infographic.html. Follow the same structure: self-contained HTML, inline CSS, no build tools. Use the brand tokens from the brief below. Render as a single-page infographic with all sections (title, eyebrow, headline, subhead, gauge section, categories grid, footer CTA) laid out vertically.\n\nHere is the generated brief:\n\n${brief}`,
  
  microsite: (brief, solution) => `Build a microsite HTML page at Brand/gtm/${solution}-microsite.html using the panelmatic.html reference implementation at Brand/gtm/panelmatic.html. Follow the same structure: self-contained HTML, inline CSS, no build tools. Use the brand tokens from the brief below. Include all sections (Hero, Problem, Approach, Proof, How It Works, CTA + Form). Add scroll-reveal animations and responsive mobile styles.\n\nHere is the generated brief:\n\n${brief}`,
  
  carousel: (brief, solution) => `Build a carousel HTML page at Brand/gtm/${solution}-carousel.html with 5-6 swipeable cards. Create self-contained HTML with inline CSS and vanilla JavaScript for carousel functionality. Each card should be a tip or insight. Use the solution's brand colors and tokens from the brief below. Make it responsive and mobile-optimized.\n\nHere is the generated brief:\n\n${brief}`,
  
  "pitch-deck": (brief, solution) => `Build a pitch deck HTML page at Brand/gtm/${solution}-pitch-deck.html with 8 slides in 16:9 aspect ratio. Create self-contained HTML with inline CSS and vanilla JavaScript for slide navigation. Use the solution's brand colors and tokens from the brief below. Each slide should be a full-page section with branded header, content, and footer. Make it presentation-ready with keyboard navigation.\n\nHere is the generated brief:\n\n${brief}`,
  
  "one-pager": (brief, solution) => `Build a one-pager HTML page at Brand/gtm/${solution}-one-pager.html as a single-page sales leave-behind. Create self-contained HTML with inline CSS. Use the solution's brand colors and tokens from the brief below. Include sections for headline, value prop, 3-4 key benefits, social proof, and CTA. Optimize for printing and screen viewing.\n\nHere is the generated brief:\n\n${brief}`,
}

export async function POST(request: Request) {
  try {
    const { brief, assetType, solution } = await request.json()

    if (!brief || !assetType || !solution) {
      return NextResponse.json(
        { error: "Missing brief, assetType, or solution" },
        { status: 400 }
      )
    }

    if (!assetPrompts[assetType]) {
      return NextResponse.json(
        { error: "Unsupported asset type" },
        { status: 400 }
      )
    }

    const prompt = assetPrompts[assetType](brief, solution)

    const message = await client.messages.create({
      model: "claude-opus-4-1",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    })

    const htmlContent = message.content[0].type === "text" ? message.content[0].text : ""

    if (!htmlContent.includes("<!DOCTYPE") && !htmlContent.includes("<html")) {
      return NextResponse.json(
        { error: "Generated content does not appear to be valid HTML" },
        { status: 400 }
      )
    }

    // Save to /public/gtm/
    const dir = path.join(process.cwd(), "public/gtm")
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    const filename = `${solution}-${assetType}.html`
    const filePath = path.join(dir, filename)
    fs.writeFileSync(filePath, htmlContent, "utf-8")

    return NextResponse.json({
      success: true,
      url: `/api/gtm/infographic-preview?solution=${solution}`,
      filename,
    })
  } catch (error) {
    console.error("Error generating asset HTML:", error)
    return NextResponse.json(
      { error: "Failed to generate asset" },
      { status: 500 }
    )
  }
}
```

- [ ] **Step 2: Verify endpoint logic**
  - Check that each asset type has a prompt
  - Verify HTML validation logic
  - Ensure file saving works
  - Run: `curl -X POST http://localhost:3000/api/gtm/generate-asset-html -H "Content-Type: application/json" -d '{"brief":"test","assetType":"infographic","solution":"test"}'`

- [ ] **Step 3: Commit**

```bash
git add src/app/api/gtm/generate-asset-html/route.ts
git commit -m "feat: add unified asset HTML generation API endpoint"
```

### Task 2: Update ContentBuilder state and handler

**Files:**
- Modify: `/src/components/gtm/ContentBuilder.tsx:340-467`

- [ ] **Step 1: Add state variables after existing infographic state**

Add after line 340 (after `const [infographicLoading, ...]`):
```typescript
const [generatingAsset, setGeneratingAsset] = useState<string | null>(null)
const [assetGenerationError, setAssetGenerationError] = useState<string | null>(null)
```

- [ ] **Step 2: Add generation handler after handleInfographicRegenerate**

Add after `handleInfographicRegenerate` callback (after line 467):
```typescript
const handleGenerateAssetHtml = useCallback(async (assetType: string) => {
  setGeneratingAsset(assetType)
  setAssetGenerationError(null)
  try {
    const res = await fetch("/api/gtm/generate-asset-html", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brief: output,
        assetType,
        solution,
      }),
    })
    const data = await res.json()
    if (data.success) {
      if (assetType === "infographic") {
        setInfographicExists(true)
      }
    } else {
      setAssetGenerationError(data.error || "Generation failed")
    }
  } catch (error) {
    setAssetGenerationError("Network error during generation")
  } finally {
    setGeneratingAsset(null)
  }
}, [output, solution])
```

- [ ] **Step 3: Verify handler compiles**

Check TypeScript types and ensure handler matches expected signature.

- [ ] **Step 4: Commit**

```bash
git add src/components/gtm/ContentBuilder.tsx
git commit -m "feat: add asset generation state and handler to ContentBuilder"
```

### Task 3: Update Infographic section with Generate Now button

**Files:**
- Modify: `/src/components/gtm/ContentBuilder.tsx:1887-2007`

- [ ] **Step 1: Replace infographic rendering section**

Replace the entire `{/* Infographic preview and edit */}` section (lines 1887-2007) with the new version that includes Generate Now button, conditional preview, and fallback Claude Code option.

- [ ] **Step 2: Verify Sparkles icon is imported**

Check imports to ensure `Sparkles` is in the lucide-react import list. If not, add it.

- [ ] **Step 3: Test infographic section rendering**

- [ ] **Step 4: Commit**

```bash
git add src/components/gtm/ContentBuilder.tsx
git commit -m "feat: add Generate Now button and refactor infographic preview section"
```

### Task 4: Add Generate Now to Microsite section

**Files:**
- Modify: `/src/components/gtm/ContentBuilder.tsx:2009-2070` (approximate, find microsite section)

- [ ] **Step 1: Find microsite rendering section**

Search for `selectedContent === "microsite"` in the render output.

- [ ] **Step 2: Add Generate Now button above Build with Claude Code**

Wrap existing microsite section with fragment and add button before existing content.

- [ ] **Step 3: Test rendering**

- [ ] **Step 4: Commit**

```bash
git add src/components/gtm/ContentBuilder.tsx
git commit -m "feat: add Generate Now button to microsite section"
```

### Task 5: Add Generate Now to Carousel section

**Files:**
- Modify: `/src/components/gtm/ContentBuilder.tsx` (find carousel section)

- [ ] **Step 1: Find carousel rendering section**

Search for `isCarousel && output` in the render output.

- [ ] **Step 2: Add Generate Now button above Build with Claude Code**

- [ ] **Step 3: Test rendering**

- [ ] **Step 4: Commit**

```bash
git add src/components/gtm/ContentBuilder.tsx
git commit -m "feat: add Generate Now button to carousel section"
```

### Task 6: Add Generate Now to Pitch Deck section

**Files:**
- Modify: `/src/components/gtm/ContentBuilder.tsx` (find pitch deck section)

- [ ] **Step 1: Find pitch deck rendering section**

Search for `isSlideContent && output` in the render output.

- [ ] **Step 2: Add Generate Now button above Build with Claude Code**

- [ ] **Step 3: Test rendering**

- [ ] **Step 4: Commit**

```bash
git add src/components/gtm/ContentBuilder.tsx
git commit -m "feat: add Generate Now button to pitch deck section"
```

### Task 7: Add Generate Now to One-Pager section

**Files:**
- Modify: `/src/components/gtm/ContentBuilder.tsx` (find one-pager section)

- [ ] **Step 1: Find one-pager rendering section**

Search for `selectedContent === "one-pager"` in the render output.

- [ ] **Step 2: Add Generate Now button above Build with Claude Code**

- [ ] **Step 3: Test rendering**

- [ ] **Step 4: Commit**

```bash
git add src/components/gtm/ContentBuilder.tsx
git commit -m "feat: add Generate Now button to one-pager section"
```

### Task 8: Test end-to-end generation workflow

**Files:**
- Test manually in browser

- [ ] **Step 1: Test infographic generation**

1. Navigate to GTM Content Builder
2. Select Infographic
3. Generate a brief
4. Click "Generate Now"
5. Verify loading state
6. Verify preview appears after generation
7. Verify Edit button works

- [ ] **Step 2: Test microsite generation**

1. Select Microsite
2. Generate a brief
3. Click "Generate Now"
4. Verify loading state and success

- [ ] **Step 3: Test carousel generation**

1. Select Carousel
2. Generate a brief
3. Click "Generate Now"
4. Verify generation alongside canvas

- [ ] **Step 4: Test pitch deck generation**

1. Select Pitch Deck
2. Generate a brief
3. Click "Generate Now"
4. Verify generation alongside slides

- [ ] **Step 5: Test one-pager generation**

1. Select One-Pager
2. Generate a brief
3. Click "Generate Now"
4. Verify generation succeeds

- [ ] **Step 6: Test error handling**

1. Trigger error (e.g., invalid brief)
2. Verify error message displays
3. Verify user can retry

- [ ] **Step 7: Verify fallback**

1. For each type, confirm "Build with Claude Code" option still exists
2. Confirm user can choose manual workflow

- [ ] **Step 8: Commit final test notes**

```bash
git commit -m "test: verify end-to-end generation workflow for all asset types"
```

---

## Verification Checklist

- [ ] API endpoint accepts all asset types
- [ ] Claude API integration works and generates valid HTML
- [ ] HTML files save to `/public/gtm/` correctly
- [ ] State management tracks generation progress per asset type
- [ ] Error states display to user
- [ ] Generate Now button appears above Build with Claude Code for all 5 types
- [ ] Loading state shows spinner and "Generating..." text
- [ ] Infographic preview appears after successful generation
- [ ] Edit button works on infographic
- [ ] Canvas assets still show alongside HTML generation
- [ ] Fallback "Build with Claude Code" option still accessible
- [ ] Sparkles icon renders correctly in buttons
- [ ] All TypeScript types check out
- [ ] No console errors during generation

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-04-15-one-click-html-generation.md`.

**Two execution options:**

**1. Subagent-Driven (recommended)** - Fresh subagent per task, two-stage review (spec compliance, code quality), fast iteration

**2. Inline Execution** - Execute tasks in this session with checkpoints between major sections

**Which approach would you like?**
