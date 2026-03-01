"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Arrow icon ─────────────────────────────────────── */

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  );
}

/* ── Solution data ──────────────────────────────────── */

const solutions = [
  {
    tab: "Trade Shows and Exhibits",
    color: "#6B21D4",
    useDarkText: false,
    label: "TRADE SHOWS AND EXHIBITS",
    headline: "From branded space to outcome-driven experience.",
    body: "Most booths collect badge scans. Momentify captures what visitors actually cared about. Every conversation is contextualized, every lead is scored, and your team knows exactly who to follow up with before the show ends.",
    bullets: [
      "Real-time lead capture with persona tagging",
      "Engagement scoring by conversation depth and content interaction",
      "Dealer and territory routing automated at the point of capture",
    ],
    cta: "Explore Trade Shows and Exhibits",
  },
  {
    tab: "Technical Recruiting",
    color: "#5FD9C2",
    useDarkText: true,
    label: "TECHNICAL RECRUITING",
    headline: "Give your recruiters the tools the role demands.",
    body: "Technical recruiting events move fast. Momentify gives your team mobile-first capture, role-specific content delivery, and engagement analytics that tell you who is worth the follow-up call and who was just picking up swag.",
    bullets: [
      "Mobile lead capture built for fast-moving recruiting floors",
      "Persona-based content paths by role, program, and interest level",
      "Cross-event consistency across SkillsUSA, FFA, campus visits, and dealer networks",
    ],
    cta: "Explore Technical Recruiting",
  },
  {
    tab: "Field Sales Enablement",
    color: "#F2B33D",
    useDarkText: true,
    label: "FIELD SALES ENABLEMENT",
    headline: "What happens at the job site should not stay at the job site.",
    body: "Field reps make the drive. They have the conversation. Then the insight disappears. Momentify captures what happened, delivers the right content in the moment, and syncs everything to your CRM before they get back in the truck.",
    bullets: [
      "Offline-capable mobile capture for low-connectivity environments",
      "Role-based content delivery on iPad at the point of conversation",
      "Engagement-triggered CRM exports with conversation context intact",
    ],
    cta: "Explore Field Sales Enablement",
  },
  {
    tab: "Facilities",
    color: "#3A2073",
    useDarkText: false,
    label: "FACILITIES",
    headline: "Your facility is doing more work than you know. Start measuring it.",
    body: "Showrooms, training centers, and demo floors host real buyers every day. Momentify turns those visits into structured data. You will know what content resonated, what questions came up, and which visits are worth a follow-up.",
    bullets: [
      "Zone-level engagement tracking across facility touchpoints",
      "Consistent lead capture and content delivery at every station",
      "ROX reporting that connects facility investment to pipeline",
    ],
    cta: "Explore Facilities",
  },
  {
    tab: "Events and Venues",
    color: "#F25E3D",
    useDarkText: false,
    label: "EVENTS AND VENUES",
    headline: "A full suite is not a strategy. Knowing what it produced is.",
    body: "Ticket sales and attendance numbers tell you who showed up. Momentify tells you what happened after they walked in. Sponsor accountability, guest engagement, and follow-up clarity in one platform.",
    bullets: [
      "Multi-point engagement capture across zones, suites, and activations",
      "Sponsor-specific tracking with exportable ROX reports",
      "Persona-based content and experiences by section, suite, and guest type",
    ],
    cta: "Explore Events and Venues",
  },
];

/* ── Animation variants ─────────────────────────────── */

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Platform / Solutions Section ────────────────────── */

export default function Platform() {
  const [activeTab, setActiveTab] = useState(0);
  const sol = solutions[activeTab];

  return (
    <section id="platform" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* ── Section header ──────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerVariants}
        >
          <motion.p
            variants={fadeUp}
            className="uppercase text-[12px] tracking-[0.14em] mb-4"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              color: "#0CF4DF",
            }}
          >
            Our Solutions
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="leading-[1.15]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#061341",
            }}
          >
            One platform. Every moment.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-[18px] leading-[1.7] max-w-[600px]"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              color: "rgba(6, 19, 65, 0.6)",
            }}
          >
            Momentify works across every context where in-person engagement happens and measurement has been impossible.
          </motion.p>
        </motion.div>

        {/* ── Tab bar ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-10"
        >
          <div
            className="scrollbar-hide overflow-x-auto"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-3">
              {solutions.map((s, i) => {
                const isActive = i === activeTab;
                const textColor = isActive
                  ? s.useDarkText ? "#061341" : s.color
                  : "rgba(6, 19, 65, 0.4)";

                return (
                  <button
                    key={s.tab}
                    onClick={(e) => {
                      setActiveTab(i);
                      e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                    }}
                    className="flex-shrink-0 rounded-full py-3 px-5 text-[15px] font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer"
                    style={{
                      fontFamily: "var(--font-inter)",
                      color: textColor,
                      backgroundColor: isActive ? `${s.color}1A` : "transparent",
                      border: isActive ? `1.5px solid ${s.color}` : "1.5px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = "rgba(6, 19, 65, 0.7)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = "rgba(6, 19, 65, 0.4)";
                    }}
                  >
                    {s.tab}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Content panel ───────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12"
            >
              {/* ── Left column: copy ─────────────── */}
              <div>
                {/* Solution label */}
                <p
                  className="text-[13px] uppercase tracking-[0.1em] mb-3"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    color: sol.color,
                  }}
                >
                  {sol.label}
                </p>

                {/* Headline */}
                <h3
                  className="leading-[1.2] mb-4"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 800,
                    fontSize: "clamp(26px, 3vw, 32px)",
                    color: "#061341",
                  }}
                >
                  {sol.headline}
                </h3>

                {/* Body */}
                <p
                  className="text-[16px] leading-[1.75] max-w-[420px] mb-6"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    color: "rgba(6, 19, 65, 0.65)",
                  }}
                >
                  {sol.body}
                </p>

                {/* Capability bullets */}
                <ul className="space-y-3 mb-8">
                  {sol.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span
                        className="mt-[7px] h-[6px] w-[6px] rounded-full flex-shrink-0"
                        style={{ backgroundColor: sol.color }}
                      />
                      <span
                        className="text-[15px] font-medium leading-[1.6]"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color: "#061341",
                        }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold hover:underline transition-all duration-150"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: sol.color,
                  }}
                >
                  {sol.cta}
                  <ArrowRightIcon />
                </a>
              </div>

              {/* ── Right column: mockup placeholders (desktop) */}
              <div className="relative hidden lg:block min-h-[320px]">
                {/* Primary mockup */}
                <div
                  className="rounded-2xl shadow-lg flex items-center justify-center p-6"
                  style={{
                    width: 380,
                    height: 260,
                    backgroundColor: "rgba(6, 19, 65, 0.06)",
                    border: `1.5px dashed ${sol.color}66`,
                  }}
                >
                  <p
                    className="text-center text-[13px] italic leading-[1.6] max-w-[280px]"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color: sol.color,
                    }}
                  >
                    iPad or mobile mockup showing the Momentify attendee-facing experience for {sol.tab}.
                  </p>
                </div>

                {/* Secondary mockup — overlapping */}
                <div
                  className="absolute rounded-xl shadow-xl flex items-center justify-center p-5"
                  style={{
                    width: 300,
                    height: 200,
                    top: 100,
                    left: 120,
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${sol.color}40`,
                  }}
                >
                  <p
                    className="text-center text-[13px] italic leading-[1.6] max-w-[240px]"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color: sol.color,
                    }}
                  >
                    ROX analytics dashboard screenshot for {sol.tab}.
                  </p>
                </div>
              </div>

              {/* ── Right column: mockup placeholders (mobile) */}
              <div className="flex flex-col gap-4 lg:hidden">
                <div
                  className="w-full rounded-2xl shadow-lg flex items-center justify-center p-6"
                  style={{
                    height: 200,
                    backgroundColor: "rgba(6, 19, 65, 0.06)",
                    border: `1.5px dashed ${sol.color}66`,
                  }}
                >
                  <p
                    className="text-center text-[13px] italic leading-[1.6]"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color: sol.color,
                    }}
                  >
                    iPad or mobile mockup for {sol.tab}.
                  </p>
                </div>
                <div
                  className="w-full rounded-xl shadow-xl flex items-center justify-center p-5"
                  style={{
                    height: 160,
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${sol.color}40`,
                  }}
                >
                  <p
                    className="text-center text-[13px] italic leading-[1.6]"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      color: sol.color,
                    }}
                  >
                    ROX dashboard for {sol.tab}.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
