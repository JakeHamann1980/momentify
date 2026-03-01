"use client";

import { motion } from "framer-motion";

/* ── Quote card data ──────────────────────────────────── */

const quotes = [
  {
    color: "#6B21D4",
    text: "We leave events with a pile of business cards and no idea which leads matter.",
  },
  {
    color: "#00BBA5",
    text: "Our booth is busy, but we cannot tie engagement to outcomes.",
  },
  {
    color: "#F25E3D",
    text: "Our suites are full, but our data is empty. Zero follow-up clarity.",
  },
  {
    color: "#F2B33D",
    text: "Facilities tours and recruiting events are black holes. No tracking, no insight.",
  },
];

/* ── Animation variants ───────────────────────────────── */

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Problem Section ──────────────────────────────────── */

export default function Problem() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">

        {/* Two-column layout: left content + right quote cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── Left column ──────────────────────────── */}
          <div>
            {/* Section label + headline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={headerVariants}
            >
              <motion.p
                variants={fadeUp}
                className="uppercase font-semibold text-[12px] tracking-[0.14em] mb-4"
                style={{ color: "#0CF4DF", fontFamily: "var(--font-inter)" }}
              >
                The Problem
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="leading-[1.1]"
                style={{
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  className="block"
                  style={{
                    fontWeight: 500,
                    fontSize: "clamp(28px, 4.5vw, 52px)",
                    color: "#061341",
                  }}
                >
                  Billions spent on moments.
                </span>
                <span
                  className="block"
                  style={{
                    fontWeight: 400,
                    fontSize: "clamp(22px, 3.5vw, 38px)",
                    color: "rgba(6, 19, 65, 0.5)",
                  }}
                >
                  Most have no idea what worked.
                </span>
              </motion.h2>
            </motion.div>

            {/* Stat row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={headerVariants}
              className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0"
            >
              {/* Stat 1 */}
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <span
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    fontSize: "56px",
                    letterSpacing: "-0.02em",
                    color: "#061341",
                  }}
                >
                  $50B
                </span>
                <span
                  className="max-w-[220px] leading-[1.5] text-[15px]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    color: "rgba(6, 19, 65, 0.6)",
                  }}
                >
                  Spent annually on trade shows, recruiting events, and facility visits in the US alone.
                </span>
              </motion.div>

              {/* Vertical divider (desktop only) */}
              <div
                className="hidden sm:block flex-shrink-0 mx-12"
                style={{
                  width: "1px",
                  height: "64px",
                  backgroundColor: "rgba(6, 19, 65, 0.12)",
                }}
              />

              {/* Stat 2 */}
              <motion.div variants={fadeUp} className="flex flex-col gap-3">
                <span
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    fontSize: "56px",
                    letterSpacing: "-0.02em",
                    color: "#00BBA5",
                  }}
                >
                  20%
                </span>
                <span
                  className="max-w-[220px] leading-[1.5] text-[15px]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    color: "rgba(6, 19, 65, 0.6)",
                  }}
                >
                  Fewer than 1 in 5 organizations can tie event investment to measurable outcomes.
                </span>
              </motion.div>
            </motion.div>

            {/* Payoff statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12 max-w-[520px]"
            >
              <p
                className="text-[20px] leading-[1.6]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  color: "#061341",
                }}
              >
                The problem is not effort. It never is.
              </p>
              <p
                className="mt-4 text-[15px] leading-[1.7]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  color: "rgba(6, 19, 65, 0.6)",
                }}
              >
                Event managers plan. Recruiters engage. Field reps show up. Facility teams open the doors. Executives write the checks. But without visibility into what actually happened, every team walks away guessing.
              </p>
            </motion.div>
          </div>

          {/* ── Right column: quote cards ─────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardContainerVariants}
            className="flex flex-col gap-4 lg:pt-10"
          >
            {quotes.map((quote) => (
              <motion.div
                key={quote.text}
                variants={fadeUp}
                className="relative rounded-xl p-5 bg-white overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "1px solid #E5E9EF",
                  boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.04)";
                }}
              >
                {/* Left color bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                  style={{ backgroundColor: quote.color }}
                />

                {/* Quote text */}
                <p
                  className="italic text-[14px] leading-[1.6] pl-3"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    color: "rgba(6, 19, 65, 0.7)",
                  }}
                >
                  &ldquo;{quote.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
