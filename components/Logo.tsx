"use client";

/**
 * Logo component — shows your real logo file once you've added it.
 *
 * To use your actual logo:
 *   1. Save your logo file as `public/logo.png` (or logo.svg)
 *      → in VS Code, just drag the image into the public/ folder
 *   2. That's it — this component already points to /logo.png
 *
 * Until you add the file, a clean monogram fallback is shown.
 */

type Variant = "mark" | "full";

export default function Logo({
  variant = "mark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="AV Solutions"
      className={className}
      onError={(e) => {
        // If logo.png isn't there yet, swap to a simple text mark so it doesn't break
        const img = e.currentTarget;
        const fallback = document.createElement("div");
        fallback.className =
          "h-full w-full grid place-items-center font-bold tracking-tight text-violet-600 text-lg";
        fallback.textContent = "AV";
        img.replaceWith(fallback);
      }}
    />
  );
}
