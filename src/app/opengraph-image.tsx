import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.legalName} — restorative wellness in the Lehigh Valley`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#155C55",
          color: "#F7F4EE",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#C9D6C1",
          }}
        >
          Care Collective
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 78,
            lineHeight: 1.05,
            fontWeight: 600,
          }}
        >
          ThriveWell
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#F98E77", maxWidth: 860 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 36, fontSize: 24, color: "#E8DCCB" }}>
          {siteConfig.location}
        </div>
      </div>
    ),
    size,
  );
}
