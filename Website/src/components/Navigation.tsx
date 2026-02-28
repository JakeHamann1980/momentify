"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { name: "Trade Shows & Exhibits", color: "#6B21D4", href: "#", description: "Outcome-driven booth experiences" },
  { name: "Technical Recruiting", color: "#5FD9C2", href: "#", description: "Capture and engage top talent" },
  { name: "Field Sales Enablement", color: "#F2B33D", href: "#", description: "Smart content at the job site" },
  { name: "Facilities", color: "#3A2073", href: "#", description: "Showrooms, training centers, and more" },
  { name: "Events & Venues", color: "#F25E3D", href: "#", description: "Interactive branded experiences" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Colors flip when scrolled: transparent+white text → white bg+dark text
  const linkColor = scrolled ? "text-charcoal/50 hover:text-charcoal" : "text-white/60 hover:text-white";
  const wordmarkColor = scrolled ? "text-charcoal" : "text-white";
  const hamburgerColor = scrolled ? "text-charcoal" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <svg width="28" height="24" viewBox="0 0 165 137" fill="none">
              <path d="M18.1 94.945L52.9693 9.30142C54.5558 5.4049 59.761 4.67828 62.3539 7.9914L89.2188 40.2078C91.0252 42.5161 90.6939 45.8374 88.467 47.7433L26.7328 101.171C22.3709 104.904 15.935 100.263 18.1 94.945Z" fill="url(#ng1)" />
              <path d="M144.078 104.749L118.647 74.4723C117.414 72.8031 115.107 71.7273 112.772 72.8031L60.3303 98.7056C54.5564 101.365 49.649 93.7043 54.4786 89.571L148.324 9.25522C152.167 5.96628 158.034 9.20015 157.304 14.2055L153.863 102.234C153.162 107.043 147.011 108.624 144.078 104.749Z" fill="url(#ng2)" />
              <defs>
                <linearGradient id="ng1" x1="44" y1="28" x2="73" y2="122" gradientUnits="userSpaceOnUse"><stop stopColor="#0CF4DF" /><stop offset="1" stopColor="#1F3395" /></linearGradient>
                <linearGradient id="ng2" x1="90" y1="31" x2="112" y2="131" gradientUnits="userSpaceOnUse"><stop stopColor="#0CF4DF" /><stop offset="1" stopColor="#1F3395" /></linearGradient>
              </defs>
            </svg>
            <span className={`text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${wordmarkColor}`}>Momentify</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className={`text-[13px] font-medium transition-colors duration-300 ${linkColor}`}>Solutions</button>
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] rounded-xl bg-white border border-black/[0.06] p-4 shadow-xl shadow-black/[0.04]"
                  >
                    <div className="grid grid-cols-2 gap-0.5">
                      {solutions.map((sol) => (
                        <a key={sol.name} href={sol.href} className="flex items-start gap-3 rounded-lg p-3 hover:bg-light-bg transition-colors">
                          <div className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: sol.color }} />
                          <div>
                            <div className="text-charcoal text-[13px] font-medium">{sol.name}</div>
                            <div className="text-charcoal/40 text-[11px] mt-0.5 leading-snug">{sol.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#platform" className={`text-[13px] font-medium transition-colors duration-300 ${linkColor}`}>Platform</a>
            <a href="#rox" className={`text-[13px] font-medium transition-colors duration-300 ${linkColor}`}>Case Studies</a>
            <a href="#" className={`text-[13px] font-medium transition-colors duration-300 ${linkColor}`}>Partners</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#demo"
              className={`text-[13px] font-medium px-5 py-2 rounded-md transition-all duration-300 ${
                scrolled
                  ? "bg-charcoal text-white hover:bg-charcoal/85"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              Schedule a Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className={`md:hidden p-2 transition-colors duration-300 ${hamburgerColor}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-black/[0.06]"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="space-y-1">
                <p className="text-charcoal/30 text-[10px] font-semibold uppercase tracking-[0.12em] mb-3">Solutions</p>
                {solutions.map((sol) => (
                  <a key={sol.name} href={sol.href} className="flex items-center gap-3 py-2 text-charcoal/70 text-sm">
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: sol.color }} />
                    {sol.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-black/[0.06] pt-4 space-y-3">
                <a href="#platform" className="block text-charcoal/70 text-sm">Platform</a>
                <a href="#rox" className="block text-charcoal/70 text-sm">Case Studies</a>
                <a href="#" className="block text-charcoal/70 text-sm">Partners</a>
              </div>
              <a href="#demo" className="block text-center bg-charcoal text-white text-sm font-medium px-6 py-3 rounded-md">
                Schedule a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
