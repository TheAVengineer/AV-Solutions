import { ImageResponse } from "next/og";

export const alt = "AV Solutions — AI & Automation for Smarter Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated social preview card (1200x630) used for Open Graph + Twitter.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 0% 0%, #1e1b4b 0%, #0a0a0f 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
              borderRadius: 14,
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-2px",
            }}
          >
            AV
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#c4b5fd" }}>
            AV Solutions
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: 900,
            }}
          >
            AI &amp; Automation for Smarter Businesses
          </div>
          <div style={{ fontSize: 32, color: "#a1a1aa", maxWidth: 880 }}>
            Workflow automation, AI chatbots, and custom integrations that do
            the manual work for you.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#8b8b94" }}>
          avsolutions.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
