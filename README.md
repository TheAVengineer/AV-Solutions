# AV Solutions

> AI & Automation for Smarter Businesses.

The website for [AV Solutions](https://avsolutions.dev) — a consultancy specializing in AI and workflow automation. Built with Next.js 14, Tailwind CSS, and an AI chatbot powered by Claude.

---

## Features

- **Single-page portfolio** with Hero, Services, How It Works, FAQ, and Contact sections
- **5 service detail pages** with full descriptions, features, and use cases
- **Multi-language support** — English, Bulgarian (Български), German (Deutsch) — instant switching, browser-detected default
- **AI Chatbot** powered by Claude Haiku 4.5 with streaming responses, multi-language, and:
  - Two-pass classifier for prompt-injection protection
  - Per-IP rate limiting (8/min, 40/hour, 200/day)
  - Auto-ban for repeat offenders (escalating: 1h → 6h → 24h)
  - Honeypot field, origin checks, and input validation
- **Animated mesh background** — purple aurora, star field, and mouse-follow spotlight
- **Contact integration** with mailto and Calendly-ready CTA placeholders
- **Legal pages** — Terms & Privacy, fully translated

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| AI | [Anthropic Claude](https://anthropic.com) (Haiku 4.5 for chatbot) |
| Hosting | [Vercel](https://vercel.com) |
| Domain & Email | [Cloudflare](https://cloudflare.com) |

---

## Local Development

### Prerequisites

- Node.js 18+ ([download](https://nodejs.org))
- An [Anthropic API key](https://console.anthropic.com/) (for the chatbot)

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/TheAVengineer/AV-Solutions.git
cd AV-Solutions

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Open .env.local and add your ANTHROPIC_API_KEY

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes (for chatbot) | Get from [console.anthropic.com](https://console.anthropic.com/) |

---

## Project Structure

```
.
├── app/
│   ├── api/chat/         AI chatbot streaming endpoint
│   ├── services/[slug]/  Dynamic service detail pages
│   ├── terms/            Terms of service
│   ├── privacy/          Privacy policy
│   ├── layout.tsx        Root layout, fonts, metadata
│   ├── page.tsx          Home page (assembles sections)
│   └── globals.css       Mesh background, card styles, animations
├── components/
│   ├── Nav.tsx           Sticky nav with language switcher
│   ├── Hero.tsx          Hero with animated gradient text
│   ├── Services.tsx      4 service cards + featured wide card
│   ├── HowItWorks.tsx    3-step process with connector line
│   ├── FAQ.tsx           Accordion FAQ
│   ├── CTA.tsx           Contact card
│   ├── Footer.tsx        Footer with social links
│   ├── Chatbot.tsx       Floating chat widget
│   ├── Spotlight.tsx     Mouse-follow purple glow
│   ├── ConnectionGraph.tsx  Animated SVG node graph
│   ├── GlowCard.tsx      Card with mouse-tracking glow
│   ├── Reveal.tsx        Scroll-triggered fade-in
│   ├── Logo.tsx          Brand mark
│   └── LanguageProvider.tsx + LanguageSwitcher.tsx
└── lib/
    └── translations.ts   All copy in EN, BG, DE
```

---

## Editing Content

All visible text lives in [`lib/translations.ts`](./lib/translations.ts) — a single file with three nested objects (`en`, `bg`, `de`).

To change copy, edit the relevant key in all three languages. Adding a new language? Add a 4th object with the same shape and register it in the `LOCALES` array at the top of the file.

---

## Deployment

This site is designed to deploy to Vercel for free.

1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add `ANTHROPIC_API_KEY` in Project Settings → Environment Variables
4. Connect a custom domain (avsolutions.dev) and update the DNS records as shown in Vercel

Every push to `main` auto-deploys to production.

---

## License

© AV Solutions. All rights reserved.
