"use client";

import { useTranslation } from "./LanguageProvider";
import ConnectionGraph from "./ConnectionGraph";
import Reveal from "./Reveal";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative rounded-3xl border border-white/10 gradient-card-strong overflow-hidden p-12 md:p-20 text-center">
            {/* Connection graph inside the CTA card */}
            <div aria-hidden className="absolute inset-0 pointer-events-none">
              <ConnectionGraph opacity={0.4} />
            </div>

            <div className="relative">
              <div className="pill-badge mb-8">
                <span className="pill-icon">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t.cta.badge}
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
                <span className="gradient-text">{t.cta.titleLine1}</span>
                <br />
                <span className="text-white/50">{t.cta.titleLine2}</span>
              </h2>

              <p className="mt-8 text-white/60 max-w-xl mx-auto leading-relaxed">
                {t.cta.subtitle}
              </p>

              <div className="mt-10">
                <a
                  href="mailto:contact@avsolutions.dev?subject=AV%20Solutions%20Consultation"
                  className="btn-primary"
                >
                  {t.cta.button}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
