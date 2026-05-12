"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { hasAnalyticsConsent } from "./CookieConsent";

export default function ConsentAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasAnalyticsConsent());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<"accepted" | "rejected">).detail;
      setEnabled(detail === "accepted");
    };
    window.addEventListener("cookie-consent-change", onChange);
    return () => window.removeEventListener("cookie-consent-change", onChange);
  }, []);

  if (!enabled) return null;
  return <Analytics />;
}
