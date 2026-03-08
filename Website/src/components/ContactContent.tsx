"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DEEP_NAVY = "#061341";
const TEAL = "#00BBA5";
const mainMinimal = "linear-gradient(135deg, #7C316D 0%, #0B0B3C 55%, #1A2E73 100%)";

const MainMinimalOverlay = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 600 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax slice"
    aria-hidden="true"
  >
    <path d="M600 500 L600 180 L420 0 L220 0 L440 220 L440 500 Z" fill="white" fillOpacity="0.05" />
    <path d="M600 500 L600 300 L380 80 L180 80 L380 280 L380 500 Z" fill="white" fillOpacity="0.04" />
  </svg>
);

const contactCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Email Us",
    description: "Inquiries, partnerships, or support.",
    action: "hello@entevate.com",
    href: "mailto:hello@entevate.com",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Call Us",
    description: "Monday through Friday, 9am to 5pm CT.",
    action: "1 (972) 200-3445",
    href: "tel:19722003445",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Visit Us",
    description: "ENTEVATE, INC. headquarters.",
    action: "5 Cowboys Way, Frisco, TX 75034",
    href: "https://maps.google.com/?q=5+Cowboys+Way+Frisco+TX+75034",
  },
];

export default function ContactContent() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden"
          style={{
            backgroundSize: "200% 200%",
            animation: "bgShift 16s ease-in-out infinite",
            backgroundImage: mainMinimal,
            minHeight: "440px",
          }}
        >
          <MainMinimalOverlay />
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: "radial-gradient(circle, #3A2073, transparent 70%)", top: "10%", left: "55%", animation: "ambientFloat1 12s ease-in-out infinite" }} />
            <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px]" style={{ background: "radial-gradient(circle, #00BBA5, transparent 70%)", bottom: "0%", left: "10%", animation: "ambientFloat2 15s ease-in-out infinite" }} />
            <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[80px]" style={{ background: "radial-gradient(circle, #1A56DB, transparent 70%)", top: "40%", right: "5%", animation: "ambientFloat3 18s ease-in-out infinite" }} />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 flex items-center" style={{ minHeight: "440px" }}>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "11px", color: TEAL, letterSpacing: "0.14em", textTransform: "uppercase" as const, marginBottom: "16px" }}
              >
                Get in Touch
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="leading-[1.05]"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "clamp(34px, 5vw, 52px)", color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "24px" }}
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "15px", color: "rgba(255, 255, 255, 0.55)", lineHeight: 1.5, maxWidth: "680px" }}
              >
                Have a question about the Momentify platform?
                <br />
                Want to see it in action? We&apos;re here to help.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section style={{ padding: "80px 0" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                  style={{
                    display: "block",
                    background: "#F8F9FC",
                    border: "1px solid rgba(6,19,65,0.08)",
                    borderRadius: "16px",
                    padding: "36px 32px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(6,19,65,0.08)" }}
                >
                  <div style={{ marginBottom: "20px" }}>{card.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "20px", color: DEEP_NAVY, marginBottom: "8px" }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400, fontSize: "14px", color: "rgba(6,19,65,0.55)", lineHeight: 1.6, marginBottom: "16px" }}>
                    {card.description}
                  </p>
                  <span style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "14px", color: TEAL }}>
                    {card.action}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule a Demo CTA */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: "linear-gradient(135deg, #0B0B3C 0%, #1A2E73 100%)",
                borderRadius: "20px",
                padding: "56px 48px",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontFamily: "var(--font-inter)", fontWeight: 500, fontSize: "clamp(24px, 3.5vw, 36px)", color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Ready to see Momentify in action?
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "520px", margin: "0 auto 32px" }}>
                Schedule a personalized demo and learn how ROX scoring can transform your in-person interactions into measurable outcomes.
              </p>
              <a
                href="/demo?source=contact"
                className="inline-flex items-center justify-center text-[14px] py-3.5 px-8 transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "linear-gradient(135deg, #00BBA5, #1A56DB)",
                  borderRadius: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                Schedule a Demo
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
