"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

/**
 * Initializes Cal.com embed once per page load.
 * Visit cal.com (or cal.eu) to manage event types — change CAL_LINK below
 * to point at a different one (e.g. "avsolutions/15min" for a quick chat).
 *
 * If you're on cal.eu (EU users — Cal.com routes EU accounts there for
 * GDPR), keep CAL_ORIGIN as "https://cal.eu". For US accounts use
 * "https://cal.com".
 */
export const CAL_LINK = "avsolutions/30min";
export const CAL_NAMESPACE = "consultation";
export const CAL_ORIGIN = "https://cal.eu";

export default function CalProvider() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({
        namespace: CAL_NAMESPACE,
        embedJsUrl: `${CAL_ORIGIN}/embed/embed.js`,
      });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#7c3aed",
            "cal-brand-emphasis": "#8b5cf6",
            "cal-bg": "#0a0612",
            "cal-bg-emphasis": "#1a0f2e",
            "cal-bg-muted": "#0f0a1a",
          },
          light: {
            "cal-brand": "#7c3aed",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}

/**
 * Spread {...calButtonProps} onto a <button> or <a> to wire it up
 * as a Cal.com modal trigger.
 */
export const calButtonProps = {
  "data-cal-link": CAL_LINK,
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-origin": CAL_ORIGIN,
  "data-cal-config": JSON.stringify({
    layout: "month_view",
    theme: "dark",
  }),
};
