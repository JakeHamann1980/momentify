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

const cardContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Stats data ────────────────────────────────────── */

const stats = [
  { number: "10,000+", label: "Leads generated across 50 events in 18 months" },
  { number: "40%", label: "Lead qualification improvement across active clients" },
  { number: "$411M", label: "Potential pipeline value delivered to customers and dealers" },
];

/* ── Outcome cards data ────────────────────────────── */

const outcomes = [
  {
    logo: "/logos/caterpillar.png",
    logoAlt: "Caterpillar",
    headline: "Dealer network engagement measured across 6 business units.",
    body: "Caterpillar deployed Momentify across multiple dealer groups to capture field interaction data that had never been tracked at scale. Engagement patterns surfaced across job sites, facilities, and recruiting events with consistent scoring across every touchpoint.",
    tags: ["Field Sales", "Facilities"],
  },
  {
    logo: "/logos/mustang-cat.png",
    logoAlt: "Mustang Cat",
    headline: "Recruiting events scored for the first time with qualified candidate data.",
    body: "Mustang Cat used Momentify at technical recruiting events to capture candidate intent, role fit, and engagement depth. The team identified high-fit candidates before the event closed instead of reviewing spreadsheets after the fact.",
    tags: ["Technical Recruiting"],
  },
  {
    logo: null,
    logoAlt: "Trade Show Exhibitor",
    headline: "40% improvement in lead qualification at trade show events.",
    body: "Across active clients using Momentify at trade shows, lead qualification rates improved by 40% compared to prior events using traditional badge scan methods. Follow-up speed dropped from days to hours.",
    tags: ["Trade Shows and Exhibits"],
  },
];

/* ── Logo bar data ─────────────────────────────────── */

const logos = [
  { src: "/logos/caterpillar.png", alt: "Caterpillar", height: "28px" },
  { src: "/logos/mustang-cat.png", alt: "Mustang Cat", height: "28px" },
  { src: "/logos/thompson-tractor.png", alt: "Thompson Tractor", height: "28px" },
  { src: "/logos/blanchard-machinery.png", alt: "Blanchard Machinery", height: "28px" },
];

/* ── Social Proof Section ──────────────────────────── */

export default function SocialProof() {
  return (
    <section
      id="proof"
      style={{ background: "#FFFFFF", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* ── Header ───────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={headerVariants}
          className="text-center"
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
            Results
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="mx-auto"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 800,
              fontSize: "clamp(32px, 4.5vw, 48px)",
              color: "#061341",
              lineHeight: 1.1,
              maxWidth: "720px",
              marginBottom: "20px",
            }}
          >
            Real teams. Real interactions. Real outcomes.
          </motion.h2>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="mx-auto"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "17px",
              color: "rgba(6, 19, 65, 0.55)",
              lineHeight: 1.7,
              maxWidth: "600px",
              marginBottom: "64px",
            }}
          >
            Momentify is active across trade shows, recruiting events, field visits, and facilities. Here is what teams are actually seeing.
          </motion.p>
        </motion.div>

        {/* ── Stat row ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0"
          style={{ maxWidth: "900px", marginBottom: "72px" }}
        >
          {stats.map((stat, i) => (
            <div key={stat.number} className="flex items-center">
              {i > 0 && (
                <div
                  className="hidden sm:block"
                  style={{
                    width: "1px",
                    height: "56px",
                    background: "rgba(6, 19, 65, 0.10)",
                    marginLeft: "40px",
                    marginRight: "40px",
                  }}
                />
              )}
              <div className="text-center">
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 800,
                    fontSize: "56px",
                    color: "#061341",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgba(6, 19, 65, 0.50)",
                    lineHeight: 1.4,
                    maxWidth: "200px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Outcome cards ────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainerVariants}
          className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6"
          style={{ maxWidth: "1100px", marginBottom: "72px" }}
        >
          {outcomes.map((card) => (
            <motion.div
              key={card.headline}
              variants={fadeUp}
              className="group flex flex-col"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(6, 19, 65, 0.08)",
                borderRadius: "16px",
                padding: "36px 32px",
                boxShadow: "0 2px 12px rgba(6, 19, 65, 0.06)",
                transition: "box-shadow 200ms ease, transform 200ms ease",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 32px rgba(6, 19, 65, 0.12)",
              }}
            >
              {/* Logo or tag */}
              <div style={{ minHeight: "28px" }}>
                {card.logo ? (
                  <img
                    src={card.logo}
                    alt={card.logoAlt}
                    className="group-hover:opacity-100 transition-opacity duration-200"
                    style={{ maxHeight: "28px", width: "auto", opacity: 0.7 }}
                  />
                ) : (
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      fontSize: "11px",
                      color: "rgba(6, 19, 65, 0.40)",
                      background: "rgba(6, 19, 65, 0.06)",
                      borderRadius: "20px",
                      padding: "4px 12px",
                    }}
                  >
                    {card.logoAlt}
                  </span>
                )}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(6, 19, 65, 0.08)",
                  margin: "20px 0",
                }}
              />

              {/* Outcome headline */}
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#061341",
                  lineHeight: 1.25,
                  marginBottom: "12px",
                }}
              >
                {card.headline}
              </h3>

              {/* Outcome body */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "rgba(6, 19, 65, 0.55)",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                  flex: 1,
                }}
              >
                {card.body}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "#0AA891",
                      background: "rgba(12, 244, 223, 0.10)",
                      borderRadius: "20px",
                      padding: "4px 10px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Logo bar ─────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="text-center"
        >
          {/* Logo eyebrow */}
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "10px",
              color: "rgba(6, 19, 65, 0.30)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Trusted By
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="flex-shrink-0 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-200"
                style={{ maxHeight: logo.height, width: "auto", opacity: 0.4 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
