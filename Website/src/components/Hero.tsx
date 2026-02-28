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

const fontOptions = [
  { label: "Archivo", variable: "var(--font-archivo)" },
  { label: "Manrope", variable: "var(--font-manrope)" },
  { label: "Space Grotesk", variable: "var(--font-space-grotesk)" },
] as const;

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

export default function Hero() {
  const [activeFont, setActiveFont] = useState(0);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #7C316D 0%, #0B0B3C 55%, #1A2E73 100%)",
      }}
    >
      {/* Main-Minimal geometric decoration — bottom right */}
      <svg
        className="absolute bottom-0 right-0 w-[52%] h-auto pointer-events-none z-0"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M600 500 L600 180 L420 0 L220 0 L440 220 L440 500 Z"
          fill="white"
          fillOpacity="0.05"
        />
        <path
          d="M600 500 L600 300 L380 80 L180 80 L380 280 L380 500 Z"
          fill="white"
          fillOpacity="0.04"
        />
        <path
          d="M600 500 L600 420 L510 330 L350 330 L510 500 Z"
          fill="white"
          fillOpacity="0.03"
        />
      </svg>

      {/* Font picker — top right floating pill */}
      <div className="absolute top-24 right-6 lg:right-12 z-20 flex items-center gap-1 bg-white/[0.07] backdrop-blur-sm rounded-full p-1 border border-white/[0.1]">
        {fontOptions.map((font, i) => (
          <button
            key={font.label}
            onClick={() => setActiveFont(i)}
            className={`text-[11px] px-3 py-1.5 rounded-full transition-all ${
              activeFont === i
                ? "bg-white/15 text-white font-medium"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {font.label}
          </button>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-36 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan mb-5"
          >
            Engagement Intelligence Platform
          </motion.p>

          {/* Headline — Display Bold: 72px / 700 / -0.025em */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-[clamp(36px,5.5vw,72px)] font-bold text-white tracking-[-0.025em] leading-[1.08]"
            style={{ fontFamily: fontOptions[activeFont].variable }}
          >
            Empower Every
            <br />
            <TypewriterWord />
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-white/60 text-[14px] leading-[1.7] max-w-md"
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

          {/* Proof line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-white/25 text-[11px] tracking-[0.01em]"
          >
            Trusted by Caterpillar, Mustang Cat, Thompson Tractor, and more.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
