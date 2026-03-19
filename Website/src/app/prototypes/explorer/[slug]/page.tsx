"use client";

import { useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import { instances } from "../instances";

export default function ExplorerInstancePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const instance = instances.find((i) => i.slug === slug);

  useEffect(() => {
    if (!instance) return;
    fetch("/api/prototypes/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    }).catch(() => {});
  }, [slug, instance]);

  if (!instance) {
    notFound();
  }

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Floating back button */}
      <button
        onClick={() => router.push("/prototypes/explorer")}
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 14px",
          borderRadius: 8,
          border: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(7,8,31,0.85)",
          backdropFilter: "blur(12px)",
          color: "rgba(255,255,255,0.6)",
          fontSize: 12,
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          e.currentTarget.style.color = "#E8EAF6";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          e.currentTarget.style.color = "rgba(255,255,255,0.6)";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Dashboard
      </button>

      <iframe
        src={instance.prototypeFile}
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          background: "#0a0a0a",
        }}
        allow="fullscreen"
      />
    </div>
  );
}
