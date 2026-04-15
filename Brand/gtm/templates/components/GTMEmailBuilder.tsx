"use client";

import { useState, useMemo } from "react";
import {
  Send, Eye, Loader2, X, Sparkles, Users, User,
  AlertCircle, CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BRAND, PILLARS, PERSONAS, EMAIL_TEMPLATES, TEMPLATE_VARIABLES,
} from "@/lib/gtm-config";

/* ────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────── */

type RecipientMode = "individual" | "list";

interface SendResult { sent: number; failed: number; total: number }

/* ────────────────────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────────────────────── */

function interpolate(text: string, vars: Record<string, string>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => vars[key] || match);
}

function extractVariableKeys(text: string): string[] {
  const matches = text.match(/\{\{(\w+)\}\}/g) || [];
  return Array.from(new Set(matches.map((m) => m.replace(/\{\{|\}\}/g, ""))));
}

/* ────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────── */

export function GTMEmailBuilder() {
  const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0].key);
  const [selectedPillar, setSelectedPillar] = useState(PILLARS[0].key);
  const [selectedTemplate, setSelectedTemplate] = useState(EMAIL_TEMPLATES[0].id);
  const [subject, setSubject] = useState(EMAIL_TEMPLATES[0].subjectDefault);
  const [body, setBody] = useState(EMAIL_TEMPLATES[0].bodyDefault);
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [recipientMode, setRecipientMode] = useState<RecipientMode>("individual");
  const [individualEmail, setIndividualEmail] = useState("");
  const [emailList, setEmailList] = useState("");
  const [ctaText, setCtaText] = useState(PERSONAS[0].cta);
  const [ctaUrl, setCtaUrl] = useState(PERSONAS[0].ctaUrl);
  const [senderName, setSenderName] = useState("");
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<SendResult | null>(null);
  const [sendError, setSendError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const persona = PERSONAS.find((p) => p.key === selectedPersona)!;
  const pillar = PILLARS.find((p) => p.key === selectedPillar)!;

  const autoVars: Record<string, string> = {
    persona_label: persona.label,
    persona_angle: persona.angle,
    core_message: persona.coreMessage,
    pillar_label: pillar.label,
  };
  const allVars = { ...autoVars, ...variables };

  const usedVarKeys = useMemo(() => extractVariableKeys(subject + " " + body), [subject, body]);
  const editableVars = useMemo(
    () => TEMPLATE_VARIABLES.filter((v) => !v.auto && usedVarKeys.includes(v.key)),
    [usedVarKeys],
  );

  const previewSubject = interpolate(subject, allVars);
  const previewBody = interpolate(body, allVars);

  const recipients = useMemo(() => {
    if (recipientMode === "individual") return individualEmail.trim() ? [individualEmail.trim()] : [];
    return emailList.split(/[\n,;]+/).map((e) => e.trim()).filter((e) => e.includes("@"));
  }, [recipientMode, individualEmail, emailList]);

  function handlePersonaChange(key: string) {
    setSelectedPersona(key);
    const p = PERSONAS.find((pp) => pp.key === key)!;
    setCtaText(p.cta);
    setCtaUrl(p.ctaUrl);
    setSelectedPillar(p.defaultPillar);
    const tmpl = EMAIL_TEMPLATES.find((t) => t.id === p.defaultTemplate) ?? EMAIL_TEMPLATES[0];
    setSelectedTemplate(tmpl.id);
    setSubject(tmpl.subjectDefault);
    setBody(tmpl.bodyDefault);
    setVariables({});
    setSendResult(null);
    setSendError(null);
  }

  function handleTemplateChange(templateId: string) {
    setSelectedTemplate(templateId);
    const tmpl = EMAIL_TEMPLATES.find((t) => t.id === templateId)!;
    setSubject(tmpl.subjectDefault);
    setBody(tmpl.bodyDefault);
    setVariables({});
    setSendResult(null);
    setSendError(null);
  }

  async function handleAIGenerate() {
    setGenerating(true);
    try {
      const res = await fetch("/api/ai/social-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: "email",
          pillar: pillar.label,
          persona: persona.label,
          topic: `Email template: ${EMAIL_TEMPLATES.find((t) => t.id === selectedTemplate)?.name}. Subject: ${previewSubject}`,
        }),
      });
      if (!res.ok) throw new Error("Generation failed");
      const data = await res.json();
      if (data.caption) setBody(data.caption);
    } catch (err) {
      console.error("AI generation failed:", err);
    } finally {
      setGenerating(false);
    }
  }

  async function handleSend() {
    if (recipients.length === 0) return;
    setSending(true);
    setSendResult(null);
    setSendError(null);
    try {
      const res = await fetch("/api/brand/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipients,
          subject: previewSubject,
          body: previewBody,
          sender_name: senderName.trim() || undefined,
          cta_text: ctaText,
          cta_url: ctaUrl,
          pillar_color: pillar.color,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "Send failed" }));
        throw new Error(data.error || "Send failed");
      }
      const data: SendResult = await res.json();
      setSendResult(data);
    } catch (err: any) {
      setSendError(err.message || "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-0 flex-1 gap-6">
      {/* LEFT — COMPOSE */}
      <div className="w-full lg:w-[55%] shrink-0 space-y-5 overflow-y-auto rounded-xl border border-border bg-card p-4 sm:p-6">
        <section>
          <Label>Target Persona</Label>
          <select value={selectedPersona} onChange={(e) => handlePersonaChange(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground">
            {PERSONAS.map((p) => <option key={p.key} value={p.key}>{p.label} &mdash; &quot;{p.angle}&quot;</option>)}
          </select>
        </section>
        <Divider />
        <section>
          <Label>Content Pillar</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {PILLARS.map((p) => (
              <button key={p.key} onClick={() => setSelectedPillar(p.key)}
                className={cn("rounded-full px-3 py-1.5 text-xs font-medium transition-colors border",
                  selectedPillar === p.key ? "text-white border-transparent" : "border-border text-muted-foreground hover:bg-muted")}
                style={selectedPillar === p.key ? { backgroundColor: p.color, borderColor: p.color } : undefined}>
                {p.label}
              </button>
            ))}
          </div>
        </section>
        <Divider />
        <section>
          <Label>Email Template</Label>
          <select value={selectedTemplate} onChange={(e) => handleTemplateChange(e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm text-foreground">
            {EMAIL_TEMPLATES.map((t) => <option key={t.id} value={t.id}>{t.name} &mdash; {t.description}</option>)}
          </select>
        </section>
        <Divider />
        {editableVars.length > 0 && (<>
          <section>
            <Label>Template Variables</Label>
            <div className="mt-2 space-y-3">
              {editableVars.map((v) => (
                <div key={v.key}>
                  <label className="text-xs font-medium text-muted-foreground">{v.label} <span className="text-muted-foreground/60">{"{{" + v.key + "}}"}</span></label>
                  <input type="text" value={variables[v.key] || ""} onChange={(e) => setVariables((prev) => ({ ...prev, [v.key]: e.target.value }))}
                    placeholder={v.placeholder} className="mt-1 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
                </div>
              ))}
            </div>
          </section>
          <Divider />
        </>)}
        <section>
          <Label>CTA Button</Label>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <input type="text" value={ctaText} onChange={(e) => setCtaText(e.target.value)} placeholder="Button text" className="rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
            <input type="text" value={ctaUrl} onChange={(e) => setCtaUrl(e.target.value)} placeholder="https://..." className="rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
          </div>
        </section>
        <Divider />
        <section>
          <Label>From Name <span className="ml-1 font-normal normal-case tracking-normal text-muted-foreground">(Optional)</span></Label>
          <input type="text" value={senderName} onChange={(e) => setSenderName(e.target.value)} placeholder={`e.g. Jake from ${BRAND.name}`}
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
          <p className="mt-1 text-xs text-muted-foreground">Appears as &quot;{senderName.trim() || BRAND.registeredName}&quot; in inboxes</p>
        </section>
        <Divider />
        <section>
          <Label>Subject Line</Label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Email subject..."
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
        </section>
        <Divider />
        <section>
          <div className="flex items-center justify-between">
            <Label>Message Body</Label>
            <button onClick={handleAIGenerate} disabled={generating}
              className={cn("flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-medium transition-colors",
                generating ? "border-primary/30 text-primary/50 cursor-not-allowed" : "border-primary text-primary hover:bg-primary/5")}>
              {generating ? <Loader2 className="h-3 w-3 animate-spin" /> : <Sparkles className="h-3 w-3" />}
              {generating ? "Generating..." : "AI Generate"}
            </button>
          </div>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={12} placeholder="Write your email body... Use {{variable_name}} for dynamic content."
            className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
          <div className="mt-2 flex flex-wrap gap-1">
            {TEMPLATE_VARIABLES.filter((v) => !v.auto).map((v) => (
              <button key={v.key} onClick={() => setBody((prev) => prev + `{{${v.key}}}`)}
                className="rounded-md border border-dashed border-border px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                +{v.label}
              </button>
            ))}
          </div>
        </section>
        <Divider />
        <section>
          <Label>Recipients</Label>
          <div className="mt-2 flex gap-2">
            <button onClick={() => setRecipientMode("individual")}
              className={cn("flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                recipientMode === "individual" ? "border-primary bg-primary/10 text-primary" : "border-input text-foreground hover:bg-muted")}>
              <User className="h-3.5 w-3.5" /> Individual
            </button>
            <button onClick={() => setRecipientMode("list")}
              className={cn("flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
                recipientMode === "list" ? "border-primary bg-primary/10 text-primary" : "border-input text-foreground hover:bg-muted")}>
              <Users className="h-3.5 w-3.5" /> Email List
            </button>
          </div>
          {recipientMode === "individual" ? (
            <input type="email" value={individualEmail} onChange={(e) => setIndividualEmail(e.target.value)} placeholder="recipient@example.com"
              className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
          ) : (
            <>
              <textarea value={emailList} onChange={(e) => setEmailList(e.target.value)} rows={4} placeholder="Paste emails — one per line, or comma / semicolon separated"
                className="mt-2 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              {recipients.length > 0 && <p className="mt-1 text-xs text-muted-foreground">{recipients.length} recipient{recipients.length !== 1 ? "s" : ""} detected</p>}
            </>
          )}
        </section>
        <Divider />
        <div className="space-y-3">
          <button onClick={handleSend} disabled={sending || !subject.trim() || !body.trim() || recipients.length === 0}
            className={cn("flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white transition-opacity",
              sending || !subject.trim() || !body.trim() || recipients.length === 0 ? "bg-primary/50 cursor-not-allowed" : "bg-primary hover:opacity-90")}>
            {sending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send to {recipients.length} recipient{recipients.length !== 1 ? "s" : ""}</>}
          </button>
          {sendResult && (
            <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Successfully sent to {sendResult.sent} of {sendResult.total} recipient{sendResult.total !== 1 ? "s" : ""}.
              {sendResult.failed > 0 && ` ${sendResult.failed} failed.`}
            </div>
          )}
          {sendError && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0" /> {sendError}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT — PREVIEW */}
      <div className="flex w-full lg:w-[45%] flex-col gap-4 overflow-y-auto rounded-xl border border-border bg-card p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <Label>Email Preview</Label>
          <button onClick={() => setShowPreview((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-input px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors">
            <Eye className="h-3 w-3" /> {showPreview ? "Hide" : "Show"} Preview
          </button>
        </div>
        {showPreview && (
          <div className="rounded-xl border border-border bg-white overflow-hidden">
            <div className="border-b border-gray-100 px-5 py-3 space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="font-medium text-gray-600">From:</span>
                {senderName.trim() ? `${senderName.trim()} via ${BRAND.registeredName}` : BRAND.registeredName} &lt;{BRAND.fromEmail}&gt;
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="font-medium text-gray-600">To:</span>
                {recipients.length > 0 ? (recipients.length === 1 ? recipients[0] : `${recipients[0]} +${recipients.length - 1} more`) : "No recipients"}
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-medium text-gray-600">Subject:</span>
                <span className="text-gray-900 font-medium">{previewSubject || "No subject"}</span>
              </div>
            </div>
            <div style={{ fontFamily: "Helvetica, Arial, sans-serif", maxWidth: 560, margin: "0 auto", padding: "24px 20px" }}>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ display: "inline-block", fontWeight: 900, fontStyle: "italic", fontSize: 24, color: "#1A1A1A", letterSpacing: "-0.5px" }}>
                  {BRAND.registeredName}
                </div>
              </div>
              <h1 style={{ margin: "0 0 20px", fontSize: 20, fontWeight: 700, color: "#1A1A1A", textAlign: "center" }}>{previewSubject || "Subject preview"}</h1>
              <div style={{ color: "#333", fontSize: 14, lineHeight: 1.7, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {previewBody || "Your email body will appear here..."}
              </div>
              {selectedTemplate !== "custom" && (
                <div style={{ textAlign: "center", marginTop: 28 }}>
                  <span style={{ display: "inline-block", background: pillar.color, color: "#fff", textDecoration: "none", padding: "12px 28px", borderRadius: 12, fontWeight: 600, fontSize: 14 }}>
                    {ctaText}
                  </span>
                </div>
              )}
              <p style={{ color: "#999", fontSize: 11, textAlign: "center", marginTop: 28, lineHeight: 1.5 }}>
                Sent by {BRAND.registeredName}<br /><span style={{ color: "#bbb" }}>Unsubscribe</span>
              </p>
            </div>
          </div>
        )}
        <div className="rounded-xl border border-border p-4">
          <Label>Auto-Populated Variables</Label>
          <div className="mt-2 space-y-1.5">
            <VarRow label="Persona" value={persona.label} />
            <VarRow label="Angle" value={persona.angle} />
            <VarRow label="Core Message" value={persona.coreMessage} />
            <VarRow label="CTA" value={ctaText} />
            <VarRow label="Pillar" value={pillar.label} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{children}</label>;
}
function Divider() { return <div className="border-t border-border" />; }
function VarRow({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start gap-2 text-xs"><span className="shrink-0 font-medium text-muted-foreground w-24">{label}</span><span className="text-foreground">{value}</span></div>;
}
