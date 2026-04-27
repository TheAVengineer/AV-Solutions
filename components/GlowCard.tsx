"use client";

import { useRef, ReactNode } from "react";

/**
 * Card with mouse-tracking spotlight, gradient border, and hover lift.
 * Tracks cursor position and updates CSS vars so the inner glow follows
 * the mouse inside this specific card.
 */
export default function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--cx", `${x}%`);
    el.style.setProperty("--cy", `${y}%`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={`glow-card ${className}`}>
      {children}
    </div>
  );
}
