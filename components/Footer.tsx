"use client";

import Logo from "./Logo";
import { useTranslation } from "./LanguageProvider";

// ─── SOCIAL LINKS ───────────────────────────────────────────────────────────
const SOCIAL_LINKS = {
  github: "https://github.com/TheAVengineer",
  linkedin: "https://www.linkedin.com/in/alexander-videnov-60b221272",
  email: "contact@avsolutions.dev",
};
// ────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative pt-20 pb-10 px-6 border-t border-white/5">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg overflow-hidden">
                <Logo variant="mark" className="h-full w-full object-contain" />
              </div>
              <span className="font-bold tracking-wide">AV SOLUTIONS</span>
            </div>
            <p className="mt-6 text-white/45 text-sm leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-medium mb-4">{t.footer.pages}</h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li><a href="#top" className="hover:text-white">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-white">{t.nav.services}</a></li>
              <li><a href="#how-it-works" className="hover:text-white">{t.nav.howItWorks}</a></li>
              <li><a href="#faq" className="hover:text-white">{t.nav.faq}</a></li>
              <li><a href="#contact" className="hover:text-white">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="mailto:contact@avsolutions.dev" className="hover:text-white break-all">
                  contact@avsolutions.dev
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  {t.footer.sendMessage}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">{t.footer.follow}</h4>
            <div className="flex gap-2">
              {SOCIAL_LINKS.github && (
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] hover:bg-violet-600 hover:border-violet-500 grid place-items-center text-white/60 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </a>
              )}
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] hover:bg-violet-600 hover:border-violet-500 grid place-items-center text-white/60 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.78-1.75-1.73s.78-1.73 1.75-1.73 1.75.78 1.75 1.73-.78 1.73-1.75 1.73zm13.5 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46z" />
                  </svg>
                </a>
              )}
              {SOCIAL_LINKS.email && (
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  aria-label="Email"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] hover:bg-violet-600 hover:border-violet-500 grid place-items-center text-white/60 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <span>© {new Date().getFullYear()} AV Solutions. {t.footer.copyright}</span>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-white">{t.footer.terms}</a>
            <span className="text-white/20">|</span>
            <a href="/privacy" className="hover:text-white">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
