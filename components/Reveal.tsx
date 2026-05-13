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

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reveal when intersecting OR when already scrolled past
        // (page loaded with /#services or similar — element is above
        // the viewport so isIntersecting is false but it should be visible).
        if (entry.isIntersecting || entry.boundingClientRect.bottom <= 0) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);

    // Re-check after the browser has finished any hash-scroll / scroll
    // restoration. The initial observer fire can race against scroll-to-hash
    // and report isIntersecting=false even when the element is in/above view.
    const raf = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= vh * 0.9) {
        setVisible(true);
        observer.disconnect();
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
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
