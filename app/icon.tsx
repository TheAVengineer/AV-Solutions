import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Generated favicon: "AV" monogram on the brand violet.
export default function Icon() {
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
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-1px",
          borderRadius: 6,
        }}
      >
        AV
      </div>
    ),
    { ...size }
  );
}
