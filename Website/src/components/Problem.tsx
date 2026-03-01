"use client";

import { motion } from "framer-motion";

/* ── Inline SVG Icons (Cyan #0CF4DF) ─────────────────── */

function GridIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0CF4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0CF4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0CF4DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

/* ── Card data ────────────────────────────────────────── */

const cards = [
  {
    icon: GridIcon,
    title: "A different tool at every event.",
    body: "Your team uses five platforms across your annual event calendar. No unified view. No comparable data. Just disconnected spreadsheets after every show.",
  },
  {
    icon: PersonIcon,
    title: "You know who showed up. Not who showed interest.",
    body: "Badge scans tell you someone stopped by. They do not tell you what they cared about, how long they stayed, or whether they are worth a follow-up call.",
  },
  {
    icon: ChartIcon,
    title: "Events cost real money. Proof is guesswork.",
    body: "You invested in the booth, the team, and the travel. Leadership wants ROI. You have a lead count and a gut feeling.",
  },
];

/* ── Animation variants ───────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Problem Section ──────────────────────────────────── */

export default function Problem() {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "#061341" }}
    >
      {/* Subtle cyan top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "rgba(12, 244, 223, 0.15)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 sm:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Section label */}
          <motion.p
            variants={itemVariants}
            className="uppercase font-semibold text-[12px] tracking-[0.14em]"
            style={{ color: "#0CF4DF", fontFamily: "var(--font-inter)" }}
          >
            The Problem
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="mx-auto mt-4 text-white leading-[1.15] max-w-[720px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4.5vw, 48px)",
            }}
          >
            You are doing the work.
            <br />
            You just cannot see the return.
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="relative rounded-2xl p-8 overflow-hidden"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                  style={{ backgroundColor: "#0CF4DF" }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(12, 244, 223, 0.08)" }}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3
                  className="text-white text-[18px] mb-3"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 700 }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  className="text-white/65 text-[15px] leading-[1.7]"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
                >
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-10 text-center text-white/45 italic text-[18px]"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }}
        >
          The problem is not effort. It is visibility.
        </motion.p>
      </div>
    </section>
  );
}
