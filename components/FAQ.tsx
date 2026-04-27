"use client";

import { useState } from "react";
import { useTranslation } from "./LanguageProvider";
import Reveal from "./Reveal";

export default function FAQ() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <div className="pill-badge mb-8">
              <span className="pill-icon">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01" strokeLinecap="round" />
                </svg>
              </span>
              {t.faq.badge}
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
              {t.faq.title}
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {t.faq.items.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <Reveal key={item.q} delay={idx * 80}>
                <div
                  className={`glow-card overflow-hidden ${
                    open ? "ring-1 ring-violet-500/30" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:grid h-8 w-8 rounded-full bg-violet-600/15 border border-violet-500/30 place-items-center text-violet-300 text-xs font-semibold shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-white">{item.q}</span>
                    </div>
                    <span
                      className={`h-8 w-8 rounded-full bg-violet-600/15 border border-violet-500/30 grid place-items-center text-violet-300 transition-transform shrink-0 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-white/60 leading-relaxed sm:pl-[4.5rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
