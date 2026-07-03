import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Glyph: two "I" pillars + center "V" = the IVI/M monogram, in white.
const glyph = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><g fill='#ffffff'><rect x='22' y='24' width='16' height='72' rx='3'/><rect x='82' y='24' width='16' height='72' rx='3'/><path d='M44 24 L60 92 L76 24 L66 24 L60 70 L54 24 Z'/></g></svg>`
)}`;

// Generated Apple touch icon: the mark on the brand violet.
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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={glyph} width={120} height={120} alt="" />
      </div>
    ),
    { ...size }
  );
}
