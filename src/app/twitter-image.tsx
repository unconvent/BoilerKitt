import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  const gradient = "linear-gradient(135deg, #0c1325 0%, #5B7CFF 50%, #FF4D00 100%)";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: 64,
          background: gradient,
        }}
      >
        <div
          style={{
            color: "#fff",
            fontSize: 60,
            fontWeight: 800,
            textShadow: "0 8px 24px rgba(0,0,0,0.25)",
          }}
        >
          BoilerKitt
        </div>
        <div
          style={{
            marginTop: 12,
            color: "rgba(255,255,255,0.95)",
            fontSize: 36,
            maxWidth: 900,
          }}
        >
          An amazing, FREE, Open‑source SaaS Boilerplate
        </div>
      </div>
    ),
    { ...size }
  );
}

