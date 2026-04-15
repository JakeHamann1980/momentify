"use client";

import { useState, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Calendar as CalendarIcon, List, ChevronLeft, ChevronRight,
  GripVertical, Filter, Plus, X, Sparkles,
} from "lucide-react";
import { GTMChannelStrategy } from "./GTMChannelStrategy";
import { GTMContentBuilder } from "./GTMContentBuilder";
import { GTMPipeline } from "./GTMPipeline";
import { GTMEmailBuilder } from "./GTMEmailBuilder";
import {
  CALENDAR_CHANNELS, SEED_TASKS,
  type CalendarTask, type CalendarChannel,
} from "@/lib/gtm-config";

/* ────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────── */

type Tab = "calendar" | "content-builder" | "channel-strategy" | "pipeline" | "email-builder";

const TABS: { key: Tab; label: string }[] = [
  { key: "channel-strategy", label: "Channel Strategy" },
  { key: "content-builder", label: "Content Builder" },
  { key: "email-builder", label: "Email Builder" },
  { key: "pipeline", label: "Pipeline" },
  { key: "calendar", label: "Calendar" },
];

const CHANNEL_CONFIG: Record<string, { label: string; color: string; bg: string }> = Object.fromEntries(
  CALENDAR_CHANNELS.map((c) => [c.key, { label: c.label, color: c.color, bg: c.bg }]),
);

const STATUS_CONFIG = {
  todo: { label: "To Do", color: "#666", bg: "#F0F0F0" },
  "in-progress": { label: "In Progress", color: "#1A73E8", bg: "#E8F0FE" },
  done: { label: "Done", color: "#1E8E3E", bg: "#E6F4EA" },
};

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */

function getDaysInMonth(year: number, month: number) { return new Date(year, month + 1, 0).getDate(); }
function getFirstDayOfMonth(year: number, month: number) { return new Date(year, month, 1).getDay(); }
function formatDate(d: string) { return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" }); }
function formatMonthYear(year: number, month: number) { return new Date(year, month).toLocaleDateString("en-US", { month: "long", year: "numeric" }); }
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */

export default function GTMToolkitPage() {
  const today = new Date();
  const [activeTab, setActiveTab] = useState<Tab>("channel-strategy");
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [tasks, setTasks] = useState<CalendarTask[]>(SEED_TASKS);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const dragOverDate = useRef<string | null>(null);

  const prevMonth = () => { if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1); } else setCurrentMonth((m) => m - 1); };
  const nextMonth = () => { if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1); } else setCurrentMonth((m) => m + 1); };
  const goToToday = () => { setCurrentMonth(today.getMonth()); setCurrentYear(today.getFullYear()); };

  const filteredTasks = activeFilters.length > 0 ? tasks.filter((t) => activeFilters.includes(t.channel)) : tasks;
  const toggleFilter = (channel: string) => { setActiveFilters((prev) => prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]); };

  const handleDragStart = (taskId: string) => setDraggedTask(taskId);
  const handleDragEnd = () => setDraggedTask(null);
  const handleDragOver = (e: React.DragEvent, date: string) => { e.preventDefault(); dragOverDate.current = date; };
  const handleDrop = useCallback((e: React.DragEvent, targetDate: string) => {
    e.preventDefault();
    if (!draggedTask) return;
    setTasks((prev) => prev.map((t) => t.id === draggedTask ? { ...t, date: targetDate } : t));
    setDraggedTask(null);
    dragOverDate.current = null;
  }, [draggedTask]);

  const cycleStatus = (taskId: string) => {
    setTasks((prev) => prev.map((t) => {
      if (t.id !== taskId) return t;
      const next = t.status === "todo" ? "in-progress" : t.status === "in-progress" ? "done" : "todo";
      return { ...t, status: next };
    }));
  };
  const deleteTask = (taskId: string) => setTasks((prev) => prev.filter((t) => t.id !== taskId));

  const handleAutoGenerate = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("/api/ai/gtm-schedule", { method: "POST" });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      if (Array.isArray(data.tasks)) setTasks((prev) => [...prev, ...data.tasks]);
    } catch (err) { console.error("Auto-generate failed:", err); }
    finally { setIsGenerating(false); }
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  const tasksForDate = (dateStr: string) => filteredTasks.filter((t) => t.date === dateStr);
  const sortedTasks = [...filteredTasks].sort((a, b) => a.date.localeCompare(b.date));
  const groupedByDate = sortedTasks.reduce<Record<string, CalendarTask[]>>((acc, t) => { (acc[t.date] ??= []).push(t); return acc; }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">GTM Toolkit</h1>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted-foreground">Launch strategy calendar, content builder, email campaigns, and pipeline management.</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-border">
        <nav className="-mb-px flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={cn("whitespace-nowrap border-b-2 pb-3 pt-1 text-xs sm:text-sm font-medium transition-colors shrink-0",
                activeTab === tab.key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:border-muted-foreground/30 hover:text-foreground")}>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {activeTab === "channel-strategy" && <GTMChannelStrategy />}
      {activeTab === "content-builder" && <GTMContentBuilder />}
      {activeTab === "email-builder" && <GTMEmailBuilder />}
      {activeTab === "pipeline" && <GTMPipeline onNavigateToBuilder={() => setActiveTab("content-builder")} />}

      {/* Calendar Tab */}
      {activeTab === "calendar" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-3 sm:p-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-lg border border-border">
                <button onClick={() => setViewMode("calendar")} className={cn("flex items-center gap-1.5 rounded-l-lg px-3 py-1.5 text-xs font-medium transition-colors", viewMode === "calendar" ? "bg-primary text-white" : "text-muted-foreground hover:bg-accent")}>
                  <CalendarIcon className="h-3.5 w-3.5" /> Calendar
                </button>
                <button onClick={() => setViewMode("list")} className={cn("flex items-center gap-1.5 rounded-r-lg px-3 py-1.5 text-xs font-medium transition-colors", viewMode === "list" ? "bg-primary text-white" : "text-muted-foreground hover:bg-accent")}>
                  <List className="h-3.5 w-3.5" /> List
                </button>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={prevMonth} className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"><ChevronLeft className="h-4 w-4" /></button>
                <span className="min-w-[140px] text-center text-sm font-semibold">{formatMonthYear(currentYear, currentMonth)}</span>
                <button onClick={nextMonth} className="rounded-md p-1.5 text-muted-foreground hover:bg-accent"><ChevronRight className="h-4 w-4" /></button>
              </div>
              <button onClick={goToToday} className="rounded-md border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:bg-accent">Today</button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <button onClick={() => setShowFilterMenu((v) => !v)}
                  className={cn("flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                    activeFilters.length > 0 ? "border-primary bg-primary/5 text-primary" : "border-border text-muted-foreground hover:bg-accent")}>
                  <Filter className="h-3.5 w-3.5" /> Filter{activeFilters.length > 0 && ` (${activeFilters.length})`}
                </button>
                {showFilterMenu && (
                  <div className="absolute right-0 top-full z-20 mt-1 w-48 rounded-xl border border-border bg-card p-2 shadow-lg">
                    {CALENDAR_CHANNELS.map((ch) => (
                      <button key={ch.key} onClick={() => toggleFilter(ch.key)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs hover:bg-accent">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: ch.color }} />
                        <span className="flex-1">{ch.label}</span>
                        {activeFilters.includes(ch.key) && <span className="text-primary font-bold">&#10003;</span>}
                      </button>
                    ))}
                    {activeFilters.length > 0 && <button onClick={() => setActiveFilters([])} className="mt-1 w-full rounded-lg px-3 py-2 text-left text-xs text-muted-foreground hover:bg-accent">Clear filters</button>}
                  </div>
                )}
              </div>
              <button onClick={handleAutoGenerate} disabled={isGenerating}
                className={cn("flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                  isGenerating ? "border-primary/30 bg-primary/5 text-primary/50 cursor-not-allowed" : "border-primary bg-primary/5 text-primary hover:bg-primary/10")}>
                <Sparkles className={cn("h-3.5 w-3.5", isGenerating && "animate-spin")} />
                {isGenerating ? "Generating..." : "Auto-Generate Schedule"}
              </button>
              <span className="text-xs text-muted-foreground">{filteredTasks.length} tasks</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {CALENDAR_CHANNELS.map((ch) => (
              <span key={ch.key} className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium" style={{ backgroundColor: ch.bg, color: ch.color }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ch.color }} /> {ch.label}
              </span>
            ))}
          </div>

          {viewMode === "calendar" && (
            <div className="rounded-xl border border-border bg-card overflow-x-auto">
              <div className="min-w-[700px]">
                <div className="grid grid-cols-7 border-b border-border">
                  {WEEKDAYS.map((d) => <div key={d} className="px-2 py-2 text-center text-[11px] font-semibold text-muted-foreground">{d}</div>)}
                </div>
                <div className="grid grid-cols-7">
                  {calendarDays.map((day, i) => {
                    if (day === null) return <div key={`e-${i}`} className="min-h-[100px] border-b border-r border-border bg-muted/30" />;
                    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const dayTasks = tasksForDate(dateStr);
                    const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                    return (
                      <div key={dateStr} className={cn("min-h-[100px] border-b border-r border-border p-1 transition-colors", draggedTask && "hover:bg-primary/5")}
                        onDragOver={(e) => handleDragOver(e, dateStr)} onDrop={(e) => handleDrop(e, dateStr)}>
                        <div className="flex items-center justify-between px-1">
                          <span className={cn("flex h-6 w-6 items-center justify-center rounded-full text-xs", isToday ? "bg-primary text-white font-bold" : "text-muted-foreground")}>{day}</span>
                        </div>
                        <div className="mt-1 space-y-0.5">
                          {dayTasks.map((task) => {
                            const ch = CHANNEL_CONFIG[task.channel] ?? { label: task.channel, color: "#666", bg: "#f0f0f0" };
                            return (
                              <div key={task.id} draggable onDragStart={() => handleDragStart(task.id)} onDragEnd={handleDragEnd} onClick={() => cycleStatus(task.id)}
                                className={cn("group flex cursor-grab items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium active:cursor-grabbing", task.status === "done" && "opacity-50 line-through")}
                                style={{ backgroundColor: ch.bg, color: ch.color }}>
                                <GripVertical className="h-2.5 w-2.5 shrink-0 opacity-0 group-hover:opacity-50" />
                                <span className="truncate">{task.title}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {viewMode === "list" && (
            <div className="space-y-4">
              {Object.keys(groupedByDate).length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
                  <CalendarIcon className="h-10 w-10 text-muted-foreground/30" />
                  <p className="mt-4 text-sm font-semibold text-muted-foreground">No tasks yet</p>
                </div>
              )}
              {Object.entries(groupedByDate).map(([date, dateTasks]) => (
                <div key={date} className="rounded-xl border border-border bg-card">
                  <div className="border-b border-border px-4 py-2.5">
                    <span className="text-sm font-semibold">{formatDate(date)}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{dateTasks.length} task{dateTasks.length > 1 ? "s" : ""}</span>
                  </div>
                  <div className="divide-y divide-border">
                    {dateTasks.map((task) => {
                      const ch = CHANNEL_CONFIG[task.channel] ?? { label: task.channel, color: "#666", bg: "#f0f0f0" };
                      const st = STATUS_CONFIG[task.status];
                      return (
                        <div key={task.id} className="flex items-center gap-3 px-4 py-3 group">
                          <GripVertical className="h-4 w-4 shrink-0 cursor-grab text-muted-foreground/30 group-hover:text-muted-foreground" />
                          <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: ch.bg, color: ch.color }}>{ch.label}</span>
                          <span className={cn("flex-1 text-sm", task.status === "done" && "line-through text-muted-foreground")}>{task.title}</span>
                          <button onClick={() => cycleStatus(task.id)} className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ backgroundColor: st.bg, color: st.color }}>{st.label}</button>
                          <button onClick={() => deleteTask(task.id)} className="rounded p-1 text-muted-foreground/30 hover:text-destructive"><X className="h-3.5 w-3.5" /></button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {tasks.length === 0 && viewMode === "calendar" && (
            <div className="rounded-xl border border-dashed border-border p-8 text-center">
              <CalendarIcon className="mx-auto h-10 w-10 text-muted-foreground/30" />
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Launch calendar is empty</p>
              <p className="mt-1 text-xs text-muted-foreground">Use Auto-Generate or add tasks manually.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
