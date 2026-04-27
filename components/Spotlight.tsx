"use client";

import { useEffect, useRef } from "react";

/**
 * Mouse-follow purple spotlight.
 * A soft violet glow follows the cursor, making the page feel alive.
 * Disabled on touch devices (no mouse).
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch / coarse pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let pendingX = window.innerWidth / 2;
    let pendingY = window.innerHeight / 2;

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty("--mx", `${pendingX}px`);
          el.style.setProperty("--my", `${pendingY}px`);
          raf = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="spotlight" aria-hidden />;
}
