"use client"

import { useMemo } from "react"
import CanvasEditor from "@/components/social-toolkit/CanvasEditor"
import {
  type BackgroundDef,
  type AspectRatio,
  getBrand,
  brands,
} from "@/components/social-toolkit/backgroundData"

const font = "'Inter', system-ui, -apple-system, sans-serif"

const SOLUTION_BRAND_MAP: Record<string, string> = {
  "trade-shows": "trade-shows",
  recruiting: "recruiting",
  "field-sales": "field-sales",
  facilities: "facilities",
  "events-venues": "venues",
}

const PLATFORM_ASPECT_MAP: Record<string, AspectRatio> = {
  linkedin: "1.91:1",
  twitter: "16:9",
  instagram: "4:5",
}

const PLATFORM_SCALES: Record<string, { fontScale: number; marginScale: number; logoScale: number }> = {
  linkedin: { fontScale: 0.696, marginScale: 1.0, logoScale: 100 },
  twitter: { fontScale: 0.66, marginScale: 1.0, logoScale: 100 },
  instagram: { fontScale: 1.09, marginScale: 1.5, logoScale: 127 },
}

const BASE_HEADLINE = 120
const BASE_SUBHEAD = 48
const BASE_MARGIN = 60

interface GraphicTemplatePickerProps {
  solution: string
  platform: "linkedin" | "twitter" | "instagram"
  onSelect: (background: BackgroundDef) => void
}

export default function GraphicTemplatePicker({
  solution,
  platform,
  onSelect,
}: GraphicTemplatePickerProps) {
  const brandId = SOLUTION_BRAND_MAP[solution] || "momentify"
  const brand = useMemo(() => getBrand(brandId), [brandId])
  const aspectRatio = PLATFORM_ASPECT_MAP[platform] || "1:1"
  const scales = PLATFORM_SCALES[platform] || PLATFORM_SCALES.linkedin

  // Include Momentify base backgrounds + solution-specific backgrounds
  const allBackgrounds = useMemo(() => {
    const momentifyBrand = brands.find((b) => b.id === "momentify")
    const solutionBgs = brand.backgrounds.map((bg) => ({ bg, brandId: brand.id }))
    const momentifyBgs = (momentifyBrand?.backgrounds || []).map((bg) => ({
      bg,
      brandId: "momentify",
    }))
    return [...solutionBgs, ...momentifyBgs]
  }, [brand])

  return (
    <div>
      <p
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "var(--gtm-text-primary)",
          fontFamily: font,
          marginBottom: 16,
          transition: "color 200ms ease",
        }}
      >
        Choose a template for your {platform === "linkedin" ? "LinkedIn" : platform === "twitter" ? "Twitter/X" : "Instagram"} graphic
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        {allBackgrounds.map(({ bg, brandId: bgBrandId }) => (
          <div
            key={bg.id}
            onClick={() => onSelect(bg)}
            style={{
              cursor: "pointer",
              borderRadius: 8,
              border: "1px solid var(--gtm-border)",
              overflow: "hidden",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--gtm-shadow-hover)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div style={{ pointerEvents: "none" }}>
              <CanvasEditor
                aspectRatio={aspectRatio}
                background={bg}
                brandId={bgBrandId}
                headline="Your headline here"
                subhead="Supporting message"
                bodyCopy=""
                textPosition="center"
                showLogo={true}
                logoVariant="auto"
                logoScale={scales.logoScale}
                showUrl={false}
                urlScale={100}
                headlineFontSize={Math.round(BASE_HEADLINE * scales.fontScale)}
                headlineFontWeight={600}
                subheadFontSize={Math.round(BASE_SUBHEAD * scales.fontScale)}
                subheadFontWeight={300}
                bodyFontSize={Math.round(18 * scales.fontScale)}
                bodyFontWeight={300}
                headlineAlign="left"
                subheadAlign="left"
                bodyAlign="left"
                layoutMargin={Math.round(BASE_MARGIN * scales.marginScale)}
              />
            </div>
            <div
              style={{
                padding: "8px 12px",
                background: "var(--gtm-bg-card)",
                borderTop: "1px solid var(--gtm-border)",
                transition: "all 200ms ease",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--gtm-text-primary)",
                  fontFamily: font,
                  margin: 0,
                  transition: "color 200ms ease",
                }}
              >
                {bg.label}
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "var(--gtm-text-faint)",
                  fontFamily: font,
                  margin: "2px 0 0",
                }}
              >
                {bg.isLight ? "Light" : "Dark"}{bg.pattern ? ` / ${bg.pattern}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
