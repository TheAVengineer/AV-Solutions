import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Generated Apple touch icon: "AV" monogram on the brand violet.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
          color: "#ffffff",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: "-4px",
        }}
      >
        AV
      </div>
    ),
    { ...size }
  );
}
