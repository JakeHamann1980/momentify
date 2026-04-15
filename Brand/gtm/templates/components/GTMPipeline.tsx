"use client";

import { useState, useCallback, useRef } from "react";
import { GripVertical, Camera, MessageSquare, Play, Plus, ArrowRight, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PILLARS, PERSONAS, BRAND, SEED_PIPELINE_CARDS, type PipelineCard } from "@/lib/gtm-config";

/* ────────────────────────────────────────────────────────────
   Constants
   ──────────────────────────────────────────────────────────── */

type ColumnId = "draft" | "review" | "scheduled" | "published";

const COLUMNS: { id: ColumnId; label: string; headerColor: string; bgColor: string; emptyText: string }[] = [
  { id: "draft", label: "Draft", headerColor: "#666", bgColor: "#f5f5f5", emptyText: "No drafts yet" },
  { id: "review", label: "In Review", headerColor: "#1A73E8", bgColor: "#E8F0FE", emptyText: "Nothing in review" },
  { id: "scheduled", label: "Scheduled", headerColor: "#F4B400", bgColor: "#FEF7E0", emptyText: "Nothing scheduled" },
  { id: "published", label: "Published", headerColor: "#1E8E3E", bgColor: "#E6F4EA", emptyText: "No published content" },
];

const PILLAR_COLORS: Record<string, { bg: string; text: string }> = Object.fromEntries(
  PILLARS.map((p) => [p.label, { bg: `${p.color}1A`, text: p.color }]),
);

const ALL_PLATFORMS = ["instagram", "tiktok", "x"];
const ALL_PILLARS = PILLARS.map((p) => p.label);
const ALL_PERSONAS = PERSONAS.map((p) => p.label);

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */

function PlatformIcon({ platform, className }: { platform: string; className?: string }) {
  switch (platform) {
    case "instagram": return <Camera className={cn("h-4 w-4", className)} />;
    case "tiktok": return <Play className={cn("h-4 w-4", className)} />;
    default: return <MessageSquare className={cn("h-4 w-4", className)} />;
  }
}

function platformLabel(p: string) { return p === "x" ? "X" : p.charAt(0).toUpperCase() + p.slice(1); }

function nextAction(column: ColumnId): { label: string; next: ColumnId } | null {
  switch (column) {
    case "draft": return { label: "Move to Review", next: "review" };
    case "review": return { label: "Schedule", next: "scheduled" };
    case "scheduled": return { label: "Publish", next: "published" };
    default: return null;
  }
}

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */

export function GTMPipeline({ onNavigateToBuilder }: { onNavigateToBuilder?: () => void }) {
  const [cards, setCards] = useState<PipelineCard[]>(SEED_PIPELINE_CARDS);
  const [filterPlatform, setFilterPlatform] = useState<string | null>(null);
  const [filterPersona, setFilterPersona] = useState<string | null>(null);
  const [filterPillar, setFilterPillar] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const dragCard = useRef<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<ColumnId | null>(null);

  const moveCard = useCallback((cardId: string, toColumn: ColumnId) => {
    setCards((prev) => prev.map((c) => {
      if (c.id !== cardId) return c;
      const updated = { ...c, column: toColumn };
      if (toColumn === "scheduled" && !c.scheduledAt) {
        const d = new Date(); d.setDate(d.getDate() + 1); d.setHours(10, 0, 0, 0);
        updated.scheduledAt = d.toISOString();
      }
      if (toColumn === "published" && !c.scheduledAt) updated.scheduledAt = new Date().toISOString();
      return updated;
    }));
  }, []);

  const filtered = cards.filter((c) => {
    if (filterPlatform && c.platform !== filterPlatform) return false;
    if (filterPersona && c.persona !== filterPersona) return false;
    if (filterPillar && c.pillar !== filterPillar) return false;
    return true;
  });

  const hasActiveFilters = filterPlatform || filterPersona || filterPillar;
  const isEmpty = cards.length === 0;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={() => setShowFilters((v) => !v)}
            className={cn("inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-1.5 text-xs font-medium transition",
              showFilters ? "bg-black text-white" : "bg-white text-neutral-700 hover:bg-neutral-50")}>
            <Filter className="h-3.5 w-3.5" /> Filters
            {hasActiveFilters && <span className="ml-1 rounded-full bg-white/20 px-1.5 text-[10px]">{[filterPlatform, filterPersona, filterPillar].filter(Boolean).length}</span>}
          </button>
          {showFilters && (<>
            <select value={filterPlatform ?? ""} onChange={(e) => setFilterPlatform(e.target.value || null)} className="rounded-xl border border-border bg-white px-2.5 py-1.5 text-xs">
              <option value="">All Platforms</option>
              {ALL_PLATFORMS.map((p) => <option key={p} value={p}>{platformLabel(p)}</option>)}
            </select>
            <select value={filterPersona ?? ""} onChange={(e) => setFilterPersona(e.target.value || null)} className="rounded-xl border border-border bg-white px-2.5 py-1.5 text-xs">
              <option value="">All Personas</option>
              {ALL_PERSONAS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <select value={filterPillar ?? ""} onChange={(e) => setFilterPillar(e.target.value || null)} className="rounded-xl border border-border bg-white px-2.5 py-1.5 text-xs">
              <option value="">All Pillars</option>
              {ALL_PILLARS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            {hasActiveFilters && (
              <button onClick={() => { setFilterPlatform(null); setFilterPersona(null); setFilterPillar(null); }}
                className="inline-flex items-center gap-1 rounded-xl border border-border bg-white px-2.5 py-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition">
                <X className="h-3 w-3" /> Clear
              </button>
            )}
          </>)}
        </div>
        <button onClick={onNavigateToBuilder} className="inline-flex items-center gap-1.5 rounded-xl bg-primary text-white px-4 py-2 text-xs font-semibold hover:opacity-90 transition shrink-0">
          <Plus className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Create Content</span><span className="sm:hidden">Create</span>
        </button>
      </div>

      {isEmpty && (
        <div className="rounded-xl border border-border bg-white p-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100"><ArrowRight className="h-5 w-5 text-neutral-400" /></div>
          <p className="text-sm font-medium text-neutral-800 mb-1">Your content pipeline is empty</p>
          <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">Content created in the Content Builder will appear here as drafts.</p>
          <button onClick={onNavigateToBuilder} className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary text-white px-4 py-2 text-xs font-semibold hover:opacity-90 transition">
            <Plus className="h-3.5 w-3.5" /> Create Content
          </button>
        </div>
      )}

      {!isEmpty && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {COLUMNS.map((col) => {
            const colCards = filtered.filter((c) => c.column === col.id);
            return (
              <div key={col.id}
                className={cn("rounded-xl border border-border min-h-[320px] flex flex-col transition-shadow", dragOverColumn === col.id && "ring-2 ring-black/10")}
                style={{ backgroundColor: col.bgColor }}
                onDragOver={(e) => { e.preventDefault(); setDragOverColumn(col.id); }}
                onDragLeave={() => setDragOverColumn(null)}
                onDrop={() => { if (dragCard.current) { moveCard(dragCard.current, col.id); dragCard.current = null; } setDragOverColumn(null); }}>
                <div className="flex items-center justify-between px-4 py-3 rounded-t-xl" style={{ borderLeft: `4px solid ${col.headerColor}` }}>
                  <span className="text-sm font-semibold" style={{ color: col.headerColor }}>{col.label}</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: col.headerColor + "1A", color: col.headerColor }}>{colCards.length}</span>
                </div>
                <div className="flex-1 flex flex-col gap-3 p-3">
                  {colCards.length === 0 && <div className="flex-1 flex items-center justify-center"><p className="text-xs text-neutral-400 italic">{col.emptyText}</p></div>}
                  {colCards.map((card) => {
                    const action = nextAction(card.column as ColumnId);
                    const pillarStyle = PILLAR_COLORS[card.pillar] ?? { bg: "#f0f0f0", text: "#666" };
                    return (
                      <div key={card.id} draggable onDragStart={() => { dragCard.current = card.id; }}
                        onClick={() => { if (card.column === "draft") moveCard(card.id, "review"); }}
                        className={cn("bg-white rounded-xl border border-border p-4 hover:shadow-md transition cursor-grab active:cursor-grabbing",
                          card.column === "draft" && "cursor-pointer ring-1 ring-transparent hover:ring-primary/20")}>
                        <div className="flex items-center gap-2 mb-2">
                          <GripVertical className="h-3.5 w-3.5 text-neutral-300 shrink-0" />
                          <PlatformIcon platform={card.platform} className="text-neutral-500" />
                          <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: pillarStyle.bg, color: pillarStyle.text }}>{card.pillar}</span>
                        </div>
                        <p className="text-sm font-medium text-neutral-900 truncate mb-1">{card.title}</p>
                        <p className="text-xs text-neutral-500 line-clamp-2 mb-2 leading-relaxed">{card.caption}</p>
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold bg-muted text-muted-foreground">{card.persona}</span>
                          {card.scheduledAt && <span className="text-[10px] text-neutral-400">{new Date(card.scheduledAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}</span>}
                        </div>
                        {action && (
                          <button onClick={(e) => { e.stopPropagation(); moveCard(card.id, action.next); }}
                            className="mt-1 w-full inline-flex items-center justify-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-[11px] font-medium text-neutral-700 hover:bg-neutral-50 transition">
                            {action.label} <ArrowRight className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
