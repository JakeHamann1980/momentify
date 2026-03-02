"use client";

import { motion } from "framer-motion";

/* ── Animation variants (match existing pattern) ───── */

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Final CTA Section ─────────────────────────────── */

export default function FinalCTA() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A0533 0%, #070E2B 50%, #061341 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerVariants}
          className="text-center mx-auto"
          style={{ maxWidth: "680px" }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "11px",
              color: "#0CF4DF",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Get Started
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5vw, 52px)",
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginBottom: "20px",
            }}
          >
            Stop guessing. Start measuring.
          </motion.h2>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="mx-auto"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.65)",
              lineHeight: 1.65,
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            Every interaction your team has is worth something. Momentify makes sure you know what.
          </motion.p>

          {/* CTA pair */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary */}
            <a
              href="#demo"
              className="inline-block text-center transition-all duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "16px",
                color: "#FFFFFF",
                background: "linear-gradient(135deg, #0CF4DF, #1A56DB)",
                padding: "16px 40px",
                borderRadius: "8px",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Schedule a Demo
            </a>

            {/* Secondary */}
            <a
              href="#rox"
              className="inline-block text-center transition-all duration-200"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "16px",
                color: "#FFFFFF",
                background: "transparent",
                padding: "15px 36px",
                borderRadius: "8px",
                border: "1.5px solid rgba(255, 255, 255, 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
              }}
            >
              Calculate Your ROX
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.35)",
              letterSpacing: "0.02em",
              marginTop: "32px",
            }}
          >
            No contracts. No IT procurement. Deploy in days.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
