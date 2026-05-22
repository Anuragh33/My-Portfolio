import { ImageResponse } from "next/og";

import { siteMeta } from "@/lib/data";

export const alt = `${siteMeta.name} — ${siteMeta.title}`;
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
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #050807 0%, #070b0a 45%, #123f34 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#5ed29c"
          }}
        >
          Full-Stack AI Developer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>{siteMeta.name}</div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "#cbd5e1",
              maxWidth: 900,
              lineHeight: 1.4
            }}
          >
            {siteMeta.hero}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#94a3b8" }}>{siteMeta.location}</div>
      </div>
    ),
    { ...size }
  );
}
