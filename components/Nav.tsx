"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "./LanguageProvider";
import { calButtonProps } from "./CalProvider";

export default function Nav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#top", label: t.nav.home },
    { href: "#services", label: t.nav.services },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#contact", label: t.nav.contact },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-lg overflow-hidden">
            <Logo variant="mark" className="h-full w-full object-contain" />
          </div>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide">AV SOLUTIONS</span>
            <span className="text-[9px] text-white/40 tracking-widest uppercase">
              {t.footer.brandTagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10 text-[15px] text-white/60">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side: Language + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <button {...calButtonProps} className="btn-primary">
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-black/90 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button {...calButtonProps} className="btn-primary justify-center mt-2" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
