/**
 * Logo component — the IVI/M monogram mark.
 *
 * Rendered as inline SVG so it stays razor-sharp at any size and inherits
 * the brand violet gradient. Two "I" pillars + a center "V" notch read as
 * "IVI" up close and as an "M" silhouette from a distance.
 */

type Variant = "mark" | "full";

export default function Logo({
  variant = "mark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  // variant is kept for API compatibility (a mark+wordmark lockup can be
  // added later); today both call sites use the mark.
  void variant;

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="AV Solutions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ivi-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
      <g fill="url(#ivi-mark-gradient)">
        {/* left I */}
        <rect x="22" y="24" width="16" height="72" rx="3" />
        {/* right I */}
        <rect x="82" y="24" width="16" height="72" rx="3" />
        {/* center V (forms the M silhouette between the pillars) */}
        <path d="M44 24 L60 92 L76 24 L66 24 L60 70 L54 24 Z" />
      </g>
    </svg>
  );
}
