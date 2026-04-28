"use client";

import { useTranslation } from "./LanguageProvider";
import ConnectionGraph from "./ConnectionGraph";
import { calButtonProps } from "./CalProvider";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative pt-40 pb-32 px-6 overflow-hidden"
    >
      {/* Decorative connection graph background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <ConnectionGraph opacity={0.5} />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="pill-badge animate-fade-in">
          <span className="pill-icon">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          {t.hero.badge}
        </div>

        <h1 className="mt-10 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[1.05] animate-fade-in-up">
          <span className="gradient-text">{t.hero.titleLine1}</span>
          <br />
          {t.hero.titleLine2}
        </h1>

        <p
          className="mt-10 text-lg md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="mt-12 flex justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <button {...calButtonProps} className="btn-primary">
            {t.hero.cta}
          </button>
        </div>

        <div
          className="mt-24 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm leading-relaxed">
            {t.hero.footerLine1}
            <br />
            {t.hero.footerLine2}
          </div>
        </div>
      </div>
    </section>
  );
}
