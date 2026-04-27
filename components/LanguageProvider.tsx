"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { translations, Locale, Translations } from "@/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && (saved === "en" || saved === "bg" || saved === "de")) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    } else {
      // Auto-detect from browser
      const browser = navigator.language.toLowerCase();
      if (browser.startsWith("bg")) setLocaleState("bg");
      else if (browser.startsWith("de")) setLocaleState("de");
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
    setLocaleState(newLocale);
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used inside LanguageProvider");
  }
  return ctx;
}
