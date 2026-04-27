"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import GlowCard from "@/components/GlowCard";
import Reveal from "@/components/Reveal";
import { useTranslation } from "@/components/LanguageProvider";
import { ServiceKey, SERVICE_SLUGS } from "@/lib/translations";

// slug → key mapping (reverse of SERVICE_SLUGS)
const SLUG_TO_KEY: Record<string, ServiceKey> = Object.fromEntries(
  Object.entries(SERVICE_SLUGS).map(([k, v]) => [v, k as ServiceKey])
);

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { t } = useTranslation();
  const key = SLUG_TO_KEY[params.slug];

  // Invalid slug — show fallback
  if (!key) {
    return (
      <main className="min-h-screen relative">
        <Nav />
        <div className="pt-40 pb-20 px-6 text-center">
          <h1 className="text-3xl font-semibold mb-4">{t.servicePage.notFound}</h1>
          <Link href="/" className="text-violet-400 hover:text-violet-300">
            {t.servicePage.backHome}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const detail = t.serviceDetails[key];

  return (
    <main className="min-h-screen relative">
      <Nav />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 mb-8 transition-colors"
            >
              {t.servicePage.backToHome}
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              <span className="gradient-text">{detail.title}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {detail.pitch}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="pill-badge mb-8">
              <span className="pill-icon">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                </svg>
              </span>
              {t.servicePage.overviewTitle}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-white/75 leading-relaxed">
              {detail.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <div className="pill-badge mb-6">
                <span className="pill-icon">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t.servicePage.featuresTitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t.servicePage.featuresTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {detail.features.map((f, idx) => (
              <Reveal key={f} delay={idx * 70}>
                <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-violet-500/30 transition-colors">
                  <span className="h-8 w-8 rounded-full bg-violet-500/15 border border-violet-500/30 grid place-items-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-white/85 leading-relaxed">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <div className="pill-badge mb-6">
                <span className="pill-icon">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </span>
                {t.servicePage.useCasesTitle}
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t.servicePage.useCasesTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {detail.useCases.map((uc, idx) => (
              <Reveal key={uc} delay={idx * 70}>
                <GlowCard className="p-7 h-full">
                  <div className="text-violet-400 text-xs uppercase tracking-widest font-semibold mb-3">
                    {t.servicePage.useCaseLabel} {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-white/85 leading-relaxed">{uc}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
