"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const words = [
  "Trade Show.",
  "Recruiting Event.",
  "Field Interaction.",
  "Facility Visit.",
  "Live Experience.",
  "Moment.",
];

/* ── Style option configs ──────────────────────────────── */

const headlineOptions = [
  { label: "800 / 72px", weight: 800, size: "clamp(36px,5.5vw,72px)", tracking: "-0.03em" },
  { label: "700 / 72px", weight: 700, size: "clamp(36px,5.5vw,72px)", tracking: "-0.025em" },
  { label: "800 / 64px", weight: 800, size: "clamp(32px,5vw,64px)", tracking: "-0.03em" },
  { label: "600 / 72px", weight: 600, size: "clamp(36px,5.5vw,72px)", tracking: "-0.02em" },
];

const subheadOptions = [
  { label: "400 / 16px", weight: 400, size: "16px", leading: "1.7" },
  { label: "300 / 16px", weight: 300, size: "16px", leading: "1.7" },
  { label: "400 / 18px", weight: 400, size: "18px", leading: "1.65" },
  { label: "500 / 15px", weight: 500, size: "15px", leading: "1.7" },
];

const eyebrowOptions = [
  { label: "Uppercase Spaced", transform: "uppercase" as const, tracking: "0.14em", size: "10px", weight: 600, border: false },
  { label: "Uppercase Pill", transform: "uppercase" as const, tracking: "0.10em", size: "10px", weight: 600, border: true },
  { label: "Title Case", transform: "none" as const, tracking: "0.02em", size: "13px", weight: 500, border: false },
  { label: "Uppercase Bold", transform: "uppercase" as const, tracking: "0.08em", size: "11px", weight: 700, border: false },
];

/* ── Picker pill component ─────────────────────────────── */

function OptionPicker({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: { label: string }[];
  active: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] text-white/30 uppercase tracking-wider font-medium shrink-0">
        {label}
      </span>
      <div className="flex items-center gap-1 bg-white/[0.07] backdrop-blur-sm rounded-full p-0.5 border border-white/[0.1]">
        {options.map((opt, i) => (
          <button
            key={opt.label}
            onClick={() => onChange(i)}
            className={`text-[10px] px-2.5 py-1 rounded-full transition-all whitespace-nowrap ${
              active === i
                ? "bg-white/15 text-white font-medium"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Typewriter ────────────────────────────────────────── */

function TypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const type = useCallback(() => {
    const currentWord = words[wordIndex];
    if (isPaused) return;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayText, isDeleting, wordIndex, isPaused]);

  useEffect(() => {
    const speed = isDeleting ? 25 : 40;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-gradient-hero">
      {displayText}
      <span
        className="inline-block ml-0.5"
        style={{
          opacity: showCursor ? 1 : 0,
          WebkitTextFillColor: "#0CF4DF",
          color: "#0CF4DF",
        }}
      >
        |
      </span>
    </span>
  );
}

/* ── Hero ──────────────────────────────────────────────── */

export default function Hero() {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [subheadIdx, setSubheadIdx] = useState(0);
  const [eyebrowIdx, setEyebrowIdx] = useState(0);

  const hl = headlineOptions[headlineIdx];
  const sh = subheadOptions[subheadIdx];
  const ey = eyebrowOptions[eyebrowIdx];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7C316D 0%, #0B0B3C 55%, #1A2E73 100%)",
      }}
    >
      {/* Subtle animated ambient glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #0CF4DF, transparent 70%)",
            top: "10%",
            left: "60%",
            animation: "ambientFloat1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{
            background: "radial-gradient(circle, #7C316D, transparent 70%)",
            bottom: "0%",
            left: "10%",
            animation: "ambientFloat2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[80px]"
          style={{
            background: "radial-gradient(circle, #254FE5, transparent 70%)",
            top: "40%",
            right: "5%",
            animation: "ambientFloat3 18s ease-in-out infinite",
          }}
        />
      </div>

      {/* Style pickers — top right */}
      <div className="absolute top-20 right-6 lg:right-12 z-20 flex flex-col gap-2 items-end">
        <OptionPicker label="H1" options={headlineOptions} active={headlineIdx} onChange={setHeadlineIdx} />
        <OptionPicker label="Sub" options={subheadOptions} active={subheadIdx} onChange={setSubheadIdx} />
        <OptionPicker label="Eye" options={eyebrowOptions} active={eyebrowIdx} onChange={setEyebrowIdx} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
            style={{
              fontSize: ey.size,
              fontWeight: ey.weight,
              textTransform: ey.transform,
              letterSpacing: ey.tracking,
              color: "#0CF4DF",
              ...(ey.border
                ? {
                    display: "inline-block",
                    border: "1px solid rgba(12,244,223,0.3)",
                    borderRadius: "999px",
                    padding: "4px 12px",
                  }
                : {}),
            }}
          >
            Engagement Intelligence Platform
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-white leading-[1.08]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: hl.size,
              fontWeight: hl.weight,
              letterSpacing: hl.tracking,
            }}
          >
            Empower Every
            <br />
            <TypewriterWord />
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-white/60 max-w-md"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: sh.size,
              fontWeight: sh.weight,
              lineHeight: sh.leading,
            }}
          >
            Stop paying for moments you cannot measure. Turn every interaction
            into intelligence your team can act on before it disappears.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#platform"
              className="bg-white text-midnight font-medium text-[13px] py-2.5 px-6 rounded-md hover:bg-white/90 transition-colors"
            >
              See How It Works
            </a>
            <a
              href="#demo"
              className="border border-white/20 text-white font-medium text-[13px] py-2.5 px-6 rounded-md hover:border-white/40 transition-colors"
            >
              Schedule a Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
