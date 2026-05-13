"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * Wraps children to fade in + slide up when scrolled into view.
 * Use the optional `delay` prop (ms) to stagger reveals.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the page loaded with a hash anchor (e.g. /#services, /#contact),
    // the user arrived mid-page and expects to see the content immediately.
    // The IntersectionObserver can't reliably tell what's "in view" during
    // the initial hash-scroll, so just reveal everything on hash loads.
    if (typeof window !== "undefined" && window.location.hash && window.location.hash !== "#top") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
