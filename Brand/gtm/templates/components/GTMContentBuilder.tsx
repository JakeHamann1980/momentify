"use client";

import { useState, useMemo } from "react";
import {
  Sparkles, Copy, BookmarkPlus, CalendarPlus,
  Loader2, ChevronDown, X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, PILLARS, PERSONAS, PLATFORMS } from "@/lib/gtm-config";

/* ────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────── */

type Platform = string;

interface GeneratedContent {
  caption: string;
  hashtags: string[];
  suggestedTags: string[];
  engagementPlan: string;
}

/* ────────────────────────────────────────────────────────────
   Derived constants from config
   ──────────────────────────────────────────────────────────── */

const CONTENT_PILLARS = PILLARS.map((p) => ({
  label: p.label,
  key: p.key,
  pct: Math.round(p.weight * 100),
  /** Persona labels suggested for this pillar — customize per business */
  personas: PERSONAS.filter((pp) => pp.pillars.includes(p.label)).map((pp) => pp.label),
}));

const TARGET_PERSONAS = PERSONAS.map((p) => ({
  label: p.label,
  tagline: p.angle,
}));

const PLATFORM_OPTIONS = PLATFORMS.map((p) => ({
  value: p.key,
  label: p.label,
}));

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */

export function GTMContentBuilder() {
  const [platform, setPlatform] = useState(PLATFORM_OPTIONS[0].value);
  const [pillar, setPillar] = useState(CONTENT_PILLARS[0].label);
  const [persona, setPersona] = useState(CONTENT_PILLARS[0].personas[0] ?? TARGET_PERSONAS[0].label);
  const [topic, setTopic] = useState("");

  const activePillar = useMemo(() => CONTENT_PILLARS.find((p) => p.label === pillar) ?? CONTENT_PILLARS[0], [pillar]);
  const suggestedPersonas = useMemo(() => activePillar.personas, [activePillar]);

  function handlePillarChange(newPillar: string) {
    setPillar(newPillar);
    const p = CONTENT_PILLARS.find((c) => c.label === newPillar) ?? CONTENT_PILLARS[0];
    setPersona(p.personas[0] ?? TARGET_PERSONAS[0].label);
  }

  /* — generation state — */
  const [generating, setGenerating] = useState(false);
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [editableCaption, setEditableCaption] = useState("");
  const [editableHashtags, setEditableHashtags] = useState<string[]>([]);

  async function handleGenerate() {
    setGenerating(true);
    setContent(null);
    try {
      const res = await fetch("/api/ai/social-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform,
          pillar,
          persona,
          topic: topic || undefined,
        }),
      });
      if (!res.ok) throw new Error("Generation failed");
      const data: GeneratedContent = await res.json();
      setContent(data);
      setEditableCaption(data.caption);
      setEditableHashtags(data.hashtags);
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  }

  function removeHashtag(index: number) {
    setEditableHashtags((prev) => prev.filter((_, i) => i !== index));
  }

  async function copyCaption() {
    const hashtagStr = editableHashtags.map((h) => (h.startsWith("#") ? h : `#${h}`)).join(" ");
    const full = `${editableCaption}\n\n${hashtagStr}`;
    await navigator.clipboard.writeText(full);
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-0 flex-1 gap-6">
      {/* LEFT PANEL — CONFIGURATION */}
      <div className="w-full lg:w-[60%] shrink-0 space-y-6 overflow-y-auto rounded-xl border border-border bg-card p-4 sm:p-6">
        {/* Platform */}
        <section>
          <Label>Platform</Label>
          <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
            {PLATFORM_OPTIONS.map((p) => (
              <button key={p.value} onClick={() => setPlatform(p.value)}
                className={cn("rounded-lg border px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-colors",
                  platform === p.value ? "border-primary bg-primary/10 text-primary" : "border-input bg-transparent text-foreground hover:bg-muted")}>
                {p.label}
              </button>
            ))}
          </div>
        </section>

        <Divider />

        {/* Content Pillar */}
        <section>
          <Label>Content Pillar</Label>
          <select value={pillar} onChange={(e) => handlePillarChange(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground">
            {CONTENT_PILLARS.map((cp) => (
              <option key={cp.label} value={cp.label}>{cp.label} ({cp.pct}%)</option>
            ))}
          </select>
        </section>

        <Divider />

        {/* Target Persona */}
        <section>
          <Label>Target Persona</Label>
          <p className="mt-1 text-[10px] text-muted-foreground">Suggested personas for {pillar} are shown first.</p>
          <select value={persona} onChange={(e) => setPersona(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground">
            <optgroup label="Suggested">
              {TARGET_PERSONAS.filter((tp) => suggestedPersonas.includes(tp.label)).map((tp) => (
                <option key={tp.label} value={tp.label}>&#9733; {tp.label} &mdash; &quot;{tp.tagline}&quot;</option>
              ))}
            </optgroup>
            <optgroup label="All Personas">
              {TARGET_PERSONAS.filter((tp) => !suggestedPersonas.includes(tp.label)).map((tp) => (
                <option key={tp.label} value={tp.label}>{tp.label} &mdash; &quot;{tp.tagline}&quot;</option>
              ))}
            </optgroup>
          </select>
        </section>

        <Divider />

        {/* Topic / Brief */}
        <section>
          <Label>Topic / Brief</Label>
          <textarea value={topic} onChange={(e) => setTopic(e.target.value)}
            placeholder="Optional custom direction for the AI..." rows={3}
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
        </section>

        <Divider />

        {/* Generate Button */}
        <button onClick={handleGenerate} disabled={generating}
          className={cn("flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-opacity",
            generating ? "opacity-70 cursor-not-allowed" : "hover:opacity-90")}>
          {generating ? (<><Loader2 className="h-4 w-4 animate-spin" /> Generating...</>) : (<><Sparkles className="h-4 w-4" /> Generate Content</>)}
        </button>
      </div>

      {/* RIGHT PANEL — PREVIEW */}
      <div className="flex w-full lg:w-[40%] flex-col gap-4 overflow-y-auto rounded-xl border border-border bg-card p-4 sm:p-6">
        {/* Placeholder preview */}
        <div className="flex items-center justify-center rounded-xl border border-border bg-muted/40 aspect-[4/5]">
          {generating ? (
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin" />
              <span className="text-sm">Generating preview...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Sparkles className="h-8 w-8" />
              <span className="text-sm">Generate content to see preview</span>
            </div>
          )}
        </div>

        {/* Caption */}
        {content && (
          <>
            <section>
              <Label>Caption</Label>
              <textarea value={editableCaption} onChange={(e) => setEditableCaption(e.target.value)} rows={5}
                className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            </section>

            {/* Hashtags */}
            <section>
              <Label>Hashtags</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {editableHashtags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground">
                    #{tag.replace(/^#/, "")}
                    <button onClick={() => removeHashtag(i)} className="ml-0.5 text-muted-foreground hover:text-foreground"><X className="h-3 w-3" /></button>
                  </span>
                ))}
              </div>
            </section>

            {/* Suggested Tags */}
            {content.suggestedTags?.length > 0 && (
              <section>
                <Label>Suggested Tags</Label>
                <p className="mt-1 text-sm text-muted-foreground">{content.suggestedTags.join(", ")}</p>
              </section>
            )}

            {/* Engagement Plan */}
            {content.engagementPlan && (
              <section>
                <Label>Engagement Plan</Label>
                <p className="mt-1 whitespace-pre-wrap text-sm text-muted-foreground">{content.engagementPlan}</p>
              </section>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button onClick={copyCaption}
                className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                <Copy className="h-4 w-4" /> Copy Caption
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                <BookmarkPlus className="h-4 w-4" /> Save to Library
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-lg border border-input bg-transparent px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                <CalendarPlus className="h-4 w-4" /> Add to Calendar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Small shared sub-components
   ──────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</label>;
}

function Divider() {
  return <div className="border-t border-border" />;
}
