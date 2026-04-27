/**
 * Animated mesh gradient background — 4 layers:
 *   1. Base atmosphere (deep navy → black radial)
 *   2. Animated blobs (violet, fuchsia, blue)
 *   3. Subtle grid overlay (tech feel)
 *   4. Vignette (depth at corners)
 */
export default function MeshBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none"
    >
      {/* Layer 1 — base atmosphere: very subtle violet at center, deep black at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(76,29,149,0.25)_0%,_rgba(0,0,0,1)_75%)]" />

      {/* Layer 2 — animated blobs */}
      <div className="absolute top-[-15%] left-[-15%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full bg-violet-500/55 blur-[120px] mesh-blob mesh-blob-1" />
      <div className="absolute top-[10%] right-[-15%] h-[55vw] w-[55vw] max-h-[750px] max-w-[750px] rounded-full bg-fuchsia-600/45 blur-[120px] mesh-blob mesh-blob-2" />
      <div className="absolute bottom-[-10%] left-[10%] h-[55vw] w-[55vw] max-h-[750px] max-w-[750px] rounded-full bg-blue-600/40 blur-[130px] mesh-blob mesh-blob-3" />
      <div className="absolute top-[40%] left-[35%] h-[40vw] w-[40vw] max-h-[600px] max-w-[600px] rounded-full bg-indigo-500/35 blur-[140px] mesh-blob mesh-blob-4" />
      <div className="absolute bottom-[5%] right-[5%] h-[45vw] w-[45vw] max-h-[650px] max-w-[650px] rounded-full bg-violet-700/45 blur-[120px] mesh-blob mesh-blob-5" />

      {/* Layer 3 — subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Layer 4 — vignette to add depth at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.7)_100%)]" />
    </div>
  );
}
