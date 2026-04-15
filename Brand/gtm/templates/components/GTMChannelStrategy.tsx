"use client";

import { useState } from "react";
import {
  Camera, Play, MessageSquare, Hash, Type,
  ChevronDown, ChevronUp, Target, Users, Megaphone,
  Mail, BarChart3, Shield, Crosshair,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PILLARS, PILLAR_COLOR_MAP, PERSONAS, PLATFORMS,
  WEEKLY_SCHEDULE,
} from "@/lib/gtm-config";

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */

const platformIcon = (name: string) => {
  if (name === "Instagram") return Camera;
  if (name === "TikTok") return Play;
  return MessageSquare;
};

function DetailSection({ icon: Icon, title, children }: { icon: typeof Target; title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {title}
      </div>
      <div className="text-sm text-foreground">{children}</div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Persona Framework
   ──────────────────────────────────────────────────────────── */

function PersonaFramework() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section>
      <h2 className="text-xl font-bold">Persona Framework</h2>
      <p className="text-muted-foreground text-sm mb-6">
        Comprehensive ICP profiles, messaging, go-to-market tactics, and competitive positioning per audience segment.
      </p>

      <div className="space-y-4">
        {PERSONAS.map((p) => {
          const isOpen = expanded === p.label;
          return (
            <div key={p.label} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpanded(isOpen ? null : p.label)}
                className="flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 text-left hover:bg-accent/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h3 className="font-bold text-sm sm:text-base">{p.label}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {p.pillars.map((pillar) => (
                        <span
                          key={pillar}
                          className="rounded-full px-2 py-0.5 text-[10px] font-medium text-white"
                          style={{ backgroundColor: PILLAR_COLOR_MAP[pillar] ?? "#666" }}
                        >
                          {pillar}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-0.5 text-xs sm:text-sm italic text-muted-foreground">&ldquo;{p.angle}&rdquo;</p>
                </div>
                {isOpen ? <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0 ml-2" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 ml-2" />}
              </button>

              {isOpen && (
                <div className="border-t border-border px-4 py-4 sm:px-6 sm:py-5 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-5">
                      <DetailSection icon={Target} title="ICP (Ideal Customer Profile)"><p>{p.icp}</p></DetailSection>
                      <DetailSection icon={Users} title="Buyer Persona"><p>{p.buyerPersona}</p></DetailSection>
                      <DetailSection icon={Megaphone} title="Core Message"><p className="font-semibold">{p.coreMessage}</p></DetailSection>
                      <DetailSection icon={Shield} title="Proof Points">
                        <ul className="list-disc pl-4 space-y-1">{p.proofPoints.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
                      </DetailSection>
                    </div>
                    <div className="space-y-5">
                      <DetailSection icon={Crosshair} title="Lead Magnets">
                        <div className="flex flex-wrap gap-1.5">
                          {p.leadMagnets.map((m, i) => (
                            <span key={i} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{m}</span>
                          ))}
                        </div>
                      </DetailSection>
                      <DetailSection icon={Mail} title="Outreach Sequences">
                        <ul className="list-disc pl-4 space-y-1">{p.outreach.map((o, i) => <li key={i}>{o}</li>)}</ul>
                      </DetailSection>
                      <DetailSection icon={BarChart3} title="Sales Enablement">
                        <ul className="list-disc pl-4 space-y-1">{p.salesEnablement.map((s, i) => <li key={i}>{s}</li>)}</ul>
                      </DetailSection>
                      <DetailSection icon={BarChart3} title="KPIs">
                        <div className="flex flex-wrap gap-1.5">
                          {p.kpis.map((k, i) => (
                            <span key={i} className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium">{k}</span>
                          ))}
                        </div>
                      </DetailSection>
                    </div>
                  </div>
                  <DetailSection icon={Crosshair} title="Competitive Intel">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {p.competitiveIntel.map((c, i) => (
                        <div key={i} className="rounded-lg bg-muted p-3 text-xs">{c}</div>
                      ))}
                    </div>
                  </DetailSection>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────────────────── */

export function GTMChannelStrategy() {
  return (
    <div className="space-y-12">
      {/* Platform Cadence */}
      <section>
        <h2 className="text-xl font-bold">Platform Cadence</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Recommended posting frequency, formats, and style per channel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLATFORMS.map((p) => {
            const Icon = platformIcon(p.label);
            return (
              <div key={p.key} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="font-semibold text-base">{p.label}</span>
                </div>
                <p className="text-4xl font-bold tracking-tight">
                  {p.postsPerWeek}
                  <span className="text-sm font-normal text-muted-foreground ml-1">posts/week</span>
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2"><Type className="w-4 h-4 mt-0.5 shrink-0" /><span>{p.formats}</span></div>
                  <div className="flex items-start gap-2"><Hash className="w-4 h-4 mt-0.5 shrink-0" /><span>{p.hashtags}</span></div>
                  <div className="flex items-start gap-2"><MessageSquare className="w-4 h-4 mt-0.5 shrink-0" /><span>{p.captionStyle}</span></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Content Pillars */}
      <section>
        <h2 className="text-xl font-bold">Content Pillars</h2>
        <p className="text-muted-foreground text-sm mb-6">Distribution targets for weekly content mix.</p>

        <div className="rounded-xl border border-border bg-card p-4 sm:p-6 space-y-1 mb-6">
          <div className="flex h-8 rounded-lg overflow-hidden">
            {PILLARS.map((p) => (
              <div
                key={p.key}
                className="flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold"
                style={{ width: `${p.weight * 100}%`, backgroundColor: p.color }}
              >
                {Math.round(p.weight * 100)}%
              </div>
            ))}
          </div>
          <div className="hidden sm:flex text-xs text-muted-foreground pt-1">
            {PILLARS.map((p) => (
              <div key={p.key} style={{ width: `${p.weight * 100}%` }} className="truncate pr-2">{p.label}</div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {PILLARS.map((p) => (
            <div key={p.key} className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-3 sm:w-56 shrink-0">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                <span className="font-semibold text-sm">{p.label}</span>
                <span className="text-xs text-muted-foreground">{Math.round(p.weight * 100)}%</span>
              </div>
              <div className="flex-1">
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="h-2 rounded-full" style={{ width: `${p.weight * 100}%`, backgroundColor: p.color }} />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:w-64 shrink-0">
                {p.examples.map((ex) => (
                  <span key={ex} className="rounded-full px-2.5 py-0.5 text-xs font-medium text-white" style={{ backgroundColor: p.color }}>{ex}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Persona Framework */}
      <PersonaFramework />

      {/* Weekly Schedule */}
      <section>
        <h2 className="text-xl font-bold">Weekly Schedule Template</h2>
        <p className="text-muted-foreground text-sm mb-6">Recommended daily post slots color-coded by content pillar.</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {PILLARS.map((p) => (
            <div key={p.key} className="flex items-center gap-1.5 text-xs">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
              <span>{p.label}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {Object.entries(WEEKLY_SCHEDULE).map(([day, slots]) => (
            <div key={day} className="bg-card border border-border rounded-xl p-4 space-y-3">
              <h4 className="font-bold text-sm text-center">{day}</h4>
              {slots.map((slot) => {
                const bg = PILLAR_COLOR_MAP[slot.pillar] ?? "#666";
                return (
                  <div key={slot.time} className="rounded-lg p-3 space-y-1.5" style={{ backgroundColor: `${bg}14` }}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: bg }}>{slot.time}</span>
                      <div className="flex gap-1">
                        {slot.platforms.map((plat) => {
                          const PIcon = platformIcon(plat);
                          return <PIcon key={plat} className="w-3.5 h-3.5" style={{ color: bg }} />;
                        })}
                      </div>
                    </div>
                    <p className="text-[10px] font-medium truncate">{slot.pillar}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{slot.persona}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
