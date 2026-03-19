"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { instances, type ExplorerInstance } from "./instances";

interface ViewData {
  [slug: string]: { views: number; lastViewed: string };
}

function formatDate(iso: string) {
  if (!iso) return "--";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function InstanceCard({
  instance,
  viewData,
}: {
  instance: ExplorerInstance;
  viewData?: { views: number; lastViewed: string };
}) {
  return (
    <Link
      href={`/prototypes/explorer/${instance.slug}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          background: "#0F1035",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          padding: 0,
          overflow: "hidden",
          transition: "border-color 0.2s, transform 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            height: 3,
            background: instance.accentColor,
          }}
        />

        <div style={{ padding: "24px 28px" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            {instance.logo && (
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <img
                  src={instance.logo}
                  alt={instance.company}
                  style={{ height: 30, width: "auto" }}
                />
              </div>
            )}
            <div>
              <div
                style={{
                  color: "#E8EAF6",
                  fontSize: 16,
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                {instance.name}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                {instance.company} &middot; {instance.industry}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: 24,
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: 16,
            }}
          >
            <div>
              <div
                style={{
                  color: instance.accentColor,
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {viewData?.views ?? 0}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Views
              </div>
            </div>
            <div>
              <div
                style={{
                  color: "#E8EAF6",
                  fontSize: 13,
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {viewData?.lastViewed
                  ? formatDate(viewData.lastViewed)
                  : "Never"}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Last Viewed
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ExplorerDashboard() {
  const [viewData, setViewData] = useState<ViewData>({});

  useEffect(() => {
    fetch("/api/prototypes/track")
      .then((r) => r.json())
      .then(setViewData)
      .catch(() => {});
  }, []);

  return (
    <div style={{ padding: "40px 32px", maxWidth: 960, margin: "0 auto", width: "100%" }}>
      <div style={{ marginBottom: 32 }}>
        <h1
          style={{
            color: "#E8EAF6",
            fontSize: 26,
            fontWeight: 500,
            marginBottom: 6,
          }}
        >
          Explorer Instances
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: 14,
            fontWeight: 300,
          }}
        >
          Personalized product discovery experiences for each client
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 20,
        }}
      >
        {instances.map((instance) => (
          <InstanceCard
            key={instance.slug}
            instance={instance}
            viewData={viewData[instance.slug]}
          />
        ))}
      </div>
    </div>
  );
}
