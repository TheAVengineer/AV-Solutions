"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";
import { SERVICE_SLUGS } from "@/lib/translations";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";
import { calButtonProps } from "./CalProvider";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      slug: SERVICE_SLUGS.workflow,
      title: t.services.workflowTitle,
      description: t.services.workflowDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 21h20" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      slug: SERVICE_SLUGS.integrations,
      title: t.services.integrationsTitle,
      description: t.services.integrationsDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      slug: SERVICE_SLUGS.customAI,
      title: t.services.customAITitle,
      description: t.services.customAIDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="2.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      ),
    },
    {
      slug: SERVICE_SLUGS.chatbots,
      title: t.services.chatbotsTitle,
      description: t.services.chatbotsDesc,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0V7a4 4 0 0 0-4-4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  // Featured/wide card — Self-Hosted LLMs
  const featured = {
    slug: SERVICE_SLUGS.selfHosted,
    title: t.services.selfHostedTitle,
    description: t.services.selfHostedDesc,
    badge: t.services.selfHostedBadge,
    models: ["Llama", "Mistral", "Qwen", "DeepSeek"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <circle cx="7" cy="7" r="1" fill="currentColor" stroke="none" />
        <circle cx="7" cy="17" r="1" fill="currentColor" stroke="none" />
        <path d="M11 7h6M11 17h6" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <section id="services" className="relative py-32 px-6">
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="pill-badge mb-8">
              <span className="pill-icon">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </span>
              {t.services.badge}
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              {t.services.titleLine1}
              <br />
              <span className="gradient-text">{t.services.titleLine2}</span>
            </h2>

            <p className="mt-6 text-white/60 max-w-xl mx-auto">
              {t.services.subtitle}
            </p>

            <div className="mt-10">
              <button {...calButtonProps} className="btn-primary">
                {t.services.cta}
              </button>
            </div>
          </div>
        </Reveal>

        {/* 4 standard service cards */}
        <div className="grid sm:grid-cols-2 gap-5 mt-16">
          {services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 100}>
              <Link
                href={`/services/${s.slug}`}
                className="block h-full"
                aria-label={`${s.title} — ${t.services.learnMore}`}
              >
                <GlowCard className="p-8 h-full">
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute top-6 right-6 h-5 w-5 text-white/40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 grid place-items-center text-white mb-20 shadow-lg shadow-violet-600/40">
                    {s.icon}
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight mb-3 border-b border-white/10 pb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed text-[15px] mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-violet-400 font-medium">
                    {t.services.learnMore}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </GlowCard>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Featured wide card — Self-Hosted LLMs */}
        <Reveal delay={400}>
          <Link
            href={`/services/${featured.slug}`}
            className="block mt-5"
            aria-label={`${featured.title} — ${t.services.learnMore}`}
          >
            <GlowCard className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon + Models */}
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-violet-400 via-violet-500 to-violet-700 grid place-items-center text-white shadow-lg shadow-violet-500/50 mb-5">
                    {featured.icon}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.models.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-violet-500/10 border border-violet-500/30 text-violet-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 md:border-l md:border-white/10 md:pl-8">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                      {featured.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-violet-500 to-violet-700 text-white">
                      {featured.badge}
                    </span>
                  </div>
                  <p className="text-white/65 leading-relaxed mb-5 max-w-2xl">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-violet-400 font-medium">
                    {t.services.learnMore}
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                <svg
                  viewBox="0 0 24 24"
                  className="hidden md:block flex-shrink-0 h-6 w-6 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </GlowCard>
          </Link>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-16 text-center text-violet-400 text-lg md:text-xl font-medium">
            {t.services.footer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
