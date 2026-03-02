const solutionLinks = [
  "Trade Shows & Exhibits",
  "Technical Recruiting",
  "Field Sales Enablement",
  "Facilities",
  "Events & Venues",
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Case Studies", href: "#rox" },
  { label: "Partners", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Schedule a Demo", href: "#demo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-2">
              <svg width="22" height="19" viewBox="0 0 144 103" fill="none">
                <path d="M0.42772 92.0666L39.9572 3.39622C41.5243 -0.452991 46.6664 -1.17078 49.2277 2.1021L75.7664 33.9273C77.5509 36.2075 77.2236 39.4885 75.0238 41.3713L8.95573 98.2165C4.64682 101.904 -1.71099 97.3195 0.42772 92.0666Z" fill="url(#fg1)" />
                <path d="M129.959 97.6845L104.837 67.7751C103.619 66.1262 101.34 65.0635 99.0327 66.1262L45.1948 91.7142C39.4911 94.3412 34.6433 86.7737 39.4142 82.6905L134.154 1.31667C137.95 -1.93233 143.745 1.26227 143.025 6.20685L139.625 95.2C138.933 99.9506 132.856 101.513 129.959 97.6845Z" fill="url(#fg2)" />
                <defs>
                  <linearGradient id="fg1" x1="97" y1="3" x2="5" y2="3.5" gradientUnits="userSpaceOnUse"><stop stopColor="#00BBA5" /><stop offset="1" stopColor="#3257D9" /></linearGradient>
                  <linearGradient id="fg2" x1="173" y1="5" x2="40" y2="6" gradientUnits="userSpaceOnUse"><stop stopColor="#00BBA5" /><stop offset="1" stopColor="#3257D9" /></linearGradient>
                </defs>
              </svg>
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-charcoal">Momentify</span>
            </div>
            <p className="mt-3 text-charcoal/35 text-[13px] leading-relaxed">
              Empower Every Moment.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://linkedin.com/company/mymomentify" target="_blank" rel="noopener noreferrer" className="text-charcoal/25 hover:text-charcoal/50 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://instagram.com/mymomentify" target="_blank" rel="noopener noreferrer" className="text-charcoal/25 hover:text-charcoal/50 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="mailto:hello@mymomentifyapp.com" className="text-charcoal/25 hover:text-charcoal/50 transition-colors" aria-label="Email">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Center column */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal/30 mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-charcoal/50 hover:text-charcoal text-[13px] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal/30 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-charcoal/50 hover:text-charcoal text-[13px] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/[0.06]">
          <p className="text-charcoal/25 text-[12px]">&copy; 2026 Momentify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
