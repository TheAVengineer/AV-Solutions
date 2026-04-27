"use client";

import { useTranslation } from "./LanguageProvider";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      num: "01",
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.3 1 2.1V18h6v-1.2c0-.8.3-1.6 1-2.1A7 7 0 0 0 12 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "02",
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: "03",
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6">
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center mb-16">
            <div className="pill-badge mb-8">
              <span className="pill-icon">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
              </span>
              {t.howItWorks.badge}
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15] max-w-3xl mx-auto">
              {t.howItWorks.title}
            </h2>

            <p className="mt-6 text-white/60 max-w-xl mx-auto">
              {t.howItWorks.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Connector line + steps */}
        <div className="relative">
          <div className="step-connector hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, idx) => (
              <Reveal key={step.num} delay={idx * 120}>
                <div className="relative">
                  {/* Glowing step badge — positioned over the connector line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-6 z-10 h-12 w-12 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-xl" />
                    <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 grid place-items-center text-white font-bold text-sm shadow-lg shadow-violet-600/60 ring-4 ring-black">
                      {step.num}
                    </div>
                  </div>

                  <GlowCard className="p-10 text-center md:pt-12">
                    {/* Mobile-only icon (since connector hidden on mobile) */}
                    <div className="md:hidden relative inline-flex items-center justify-center mb-5">
                      <div className="absolute inset-0 rounded-full bg-violet-600/40 blur-xl" />
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 grid place-items-center text-white shadow-lg shadow-violet-600/50">
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
                      {step.description}
                    </p>
                  </GlowCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <p className="mt-16 text-center text-violet-400 text-lg md:text-xl font-medium">
            {t.howItWorks.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
