"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [{ label: "Explorer", href: "/prototypes/explorer" }];

export default function PrototypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div
      style={{
        background: "#07081F",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <img
              src="/Momentify-Icon.svg"
              alt="Momentify"
              style={{ height: 28, width: "auto" }}
            />
            <span
              style={{
                color: "#E8EAF6",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Momentify
            </span>
          </Link>

          <span
            style={{
              width: 1,
              height: 20,
              background: "rgba(255,255,255,0.1)",
            }}
          />

          <span
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Prototypes
          </span>

          <nav style={{ display: "flex", gap: 4 }}>
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 500,
                    color: isActive ? "#0CF4DF" : "rgba(255,255,255,0.55)",
                    background: isActive
                      ? "rgba(12,244,223,0.08)"
                      : "transparent",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </main>
    </div>
  );
}
