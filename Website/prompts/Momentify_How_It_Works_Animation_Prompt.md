# Momentify — How It Works Animated SVG
## Claude Code Prompt

Reference the brand kit already in this project before touching any code. Do not approximate colors or tokens.

---

## Overview

Build a self-contained animated SVG explainer that visualizes the three-step Momentify workflow. Square ratio (1:1). Designed to sit directly on top of the hero section so the depth gradient shows through behind it. No background. No dependencies. Pure SVG with CSS animations.

Output: a single `.svg` file that plays automatically on load and loops seamlessly.

Target dimensions: 800px x 800px viewBox. Scales cleanly to any size.

---

## Background

Transparent. Full stop. Do not render any background rectangle on the root SVG element. Do not add any background texture, dot pattern, grid, or fill of any kind. The hero depth gradient sits behind this SVG and must show through completely. The SVG root element must have no `style="background:..."` attribute and no `<rect>` covering the canvas. Confirm this before delivering.

---

## Visual structure

The canvas is divided into three equal horizontal zones stacked vertically, one per step. Each zone is approximately 240px tall. A thin vertical connector line runs down the left side of the canvas at x=80, linking all three steps like a timeline spine. The spine runs from y=80 to y=720. All text, icons, and graphic elements must read clearly against a dark gradient background. Use white and Cyan for all foreground elements.

---

## Global animation behavior

Total loop duration: 9 seconds. Loops indefinitely. Steps reveal one at a time in sequence on load.

- Step 1 animates in from 0s to 3s
- Step 2 animates in from 3s to 6s
- Step 3 animates in from 6s to 9s
- The sequence fades briefly and restarts

Each step uses the same reveal pattern: the step node pulses on the spine, the icon draws in, the headline fades in, the body fades in 200ms after the headline.

The connector line draws downward progressively as each step activates, reaching Step 2 at the 3s mark and Step 3 at the 6s mark.

Active step: full opacity. Step number node glows with a pulse ring animation in the step accent color.

Inactive steps: 25% opacity. No glow.

---

## Timeline spine

Position: x=80, y=80 to y=720.

Line: 2px stroke, white at 15% opacity as base. Animates to white at 60% as each step activates, then drops back.

Step nodes: filled circles, 28px diameter, centered on the spine at y=160, y=400, y=640.

- Inactive: transparent fill, white stroke 1.5px at 25%, white step number text at 25%
- Active: step accent color fill, white step number inside, Inter 700 14px, full opacity
- Active pulse: a second circle at the same center, step accent color stroke 1.5px, animates from scale(1) opacity(0.8) to scale(2.2) opacity(0) over 1s, repeats while step is active

---

## Step content zones

Each step zone sits to the right of the spine, starting at x=120. Internal padding from zone top: 28px.

Per step, top to bottom:

**Step label** — Inter 600, 11px, Cyan #0CF4DF, letter-spacing: 0.12em, all-caps. Example: STEP 1. Margin bottom: 14px.

**Icon** — Simple geometric icon drawn with SVG paths. Cyan #0CF4DF stroke, no fill, stroke-width: 1.8px. Size: 38px x 38px. See per-step icon specs below. Margin bottom: 12px.

**Product name** — Inter 700, 17px, white. Margin bottom: 6px.

**Headline** — Inter 800, 21px, white, line-height: 1.2. Max width: 560px. Margin bottom: 10px.

**Body** — Inter 400, 13px, white at 60%, line-height: 1.65. Max width: 560px.

---

## Step accent colors

Each step has its own accent color used on the spine node, the pulse ring, and a 3px vertical bar at x=118 running the full height of that step zone.

- Step 1: Teal #5FD9C2
- Step 2: Violet #6B21D4
- Step 3: Amber #F2B33D

---

## Step content

Use all copy exactly as written below. Do not rewrite, improve, or summarize it.

---

### Step 1 — Momentify Web

Step label: STEP 1

Icon: A simple browser window outline. A rectangle with a thin horizontal bar across the top third suggesting a nav bar and three small circles in the top-left corner of that bar. Cyan stroke, no fill.

Product name: Momentify Web

Headline: Set up. Configure. Deploy.

Body: Build your events, templates, and engagement flows ahead of time. Define your personas, map your content, and set your team up before anyone steps on the floor.

---

### Step 2 — Momentify Explorer

Step label: STEP 2

Icon: A simple tablet outline in portrait orientation with a small circular touch ripple centered on the screen. Cyan stroke, no fill.

Product name: Momentify Explorer

Headline: Engage. Capture. Contextualize.

Body: Attendees, candidates, and visitors interact through iPads, touch displays, and mobile devices. Every tap, every content selection, and every conversation detail is captured in real time with role-specific context attached.

---

### Step 3 — Momentify Intelligence

Step label: STEP 3

Icon: A simple upward trending line chart with three data points and a baseline. Cyan stroke, no fill.

Product name: Momentify Intelligence

Headline: Analyze. Score. Prove.

Body: Real-time ROX dashboards surface who engaged, how deeply, and what they cared about. Leads are scored and routed automatically. Your team acts while the moment still matters.

---

## Bottom bar

A centered text line at y=768.

- Text: Contact. Conversation. Context.
- Font: Inter 600, 12px, white at 25%, letter-spacing: 0.08em
- Fades in at the 8s mark and stays visible through loop end

---

## Technical requirements

- Pure SVG with an embedded CSS `<style>` block using keyframe animations
- No JavaScript. No external dependencies. No external font files.
- Font stack on all text elements: `font-family: 'Inter', system-ui, -apple-system, sans-serif`
- Root SVG element must be written exactly as: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">`
- No background attribute. No background style. No fill on root element. No `<rect>` covering the canvas.
- Animation loops using `animation-iteration-count: infinite`
- File must render correctly when placed in an HTML `<img>` tag, dropped into a Figma frame, or embedded inline in a Next.js component
- Confirm transparent areas show through correctly before delivering

---

## Copy rules

- No em dashes anywhere. Use a period or restructure the sentence.
- Do not rewrite any copy above. Use it exactly as written.
- Short declarative sentences throughout.
