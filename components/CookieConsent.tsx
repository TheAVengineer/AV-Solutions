"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "./LanguageProvider";

const STORAGE_KEY = "cookie-consent";

type Consent = "accepted" | "rejected";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === "accepted";
}

export function openCookieBanner() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-banner"));
  }
}

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
    const onOpen = () => setVisible(true);
    window.addEventListener("open-cookie-banner", onOpen);
    return () => window.removeEventListener("open-cookie-banner", onOpen);
  }, []);

  const decide = (choice: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: choice }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookies.title}
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0a0612]/95 backdrop-blur-xl shadow-2xl shadow-black/50 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 text-sm text-white/75 leading-relaxed">
            <h2 className="text-white font-semibold mb-1">{t.cookies.title}</h2>
            <p>
              {t.cookies.body}{" "}
              <Link href="/privacy" className="text-violet-400 hover:text-violet-300 underline">
                {t.cookies.learnMore}
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <button
              type="button"
              onClick={() => decide("rejected")}
              className="px-4 py-2 rounded-lg border border-white/15 bg-white/[0.04] text-white/80 hover:bg-white/[0.08] hover:text-white text-sm font-medium transition-colors"
            >
              {t.cookies.reject}
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              {t.cookies.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
