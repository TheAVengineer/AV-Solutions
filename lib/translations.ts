/**
 * All site translations live here. Add or edit copy by changing these objects.
 * Keep the same keys across all three languages.
 */

export type Locale = "en" | "bg" | "de";

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "bg", label: "Български", flag: "🇧🇬" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const SERVICE_SLUGS = {
  workflow: "workflow-automation",
  integrations: "integrations",
  customAI: "custom-ai",
  chatbots: "chatbots",
  selfHosted: "self-hosted-llms",
} as const;

export type ServiceKey = keyof typeof SERVICE_SLUGS;

const en = {
  nav: {
    home: "Home",
    services: "Services",
    howItWorks: "How It Works",
    contact: "Contact",
    faq: "FAQ",
    cta: "Get In Touch",
  },
  hero: {
    badge: "AV Solutions",
    titleLine1: "AI & Automation",
    titleLine2: "for Smarter Businesses",
    subtitle:
      "We help businesses eliminate manual work, automate processes, and scale using AI-powered systems.",
    cta: "Book a free consultation",
    footerLine1: "Creating latest solutions that redefine innovation.",
    footerLine2: "Stay ahead with AI-powered technology for the future.",
  },
  services: {
    badge: "Services",
    titleLine1: "We Build Systems That",
    titleLine2: "Work Instead of You",
    subtitle:
      "We design and build automation systems that save time, reduce costs, and help your business run more efficiently.",
    cta: "See How Your Business Can Be Automated",
    workflowTitle: "Workflow Automation",
    workflowDesc:
      "Eliminate repetitive tasks and automate your daily operations to save hours every week.",
    integrationsTitle: "Tool & System Integrations",
    integrationsDesc:
      "Connect your tools, APIs, and workflows so everything runs automatically without manual work.",
    customAITitle: "Custom AI Solutions",
    customAIDesc:
      "Tailored systems built around your business — from automation to intelligent workflows.",
    chatbotsTitle: "AI Chatbots",
    chatbotsDesc:
      "Handle customer inquiries automatically 24/7 and never miss a lead.",
    selfHostedTitle: "Self-Hosted LLMs",
    selfHostedDesc:
      "Deploy Llama, Mistral, and other open-source models on your own infrastructure — total data privacy and predictable costs.",
    selfHostedBadge: "Advanced",
    footer: "Need something custom? We build tailored solutions based on your business needs.",
    learnMore: "Learn more",
  },
  howItWorks: {
    badge: "How It Works",
    title:
      "A simple process to understand your business, automate your workflows, and deliver real results.",
    subtitle:
      "With a focus on innovation and efficiency, we help you stay ahead in an ever-evolving digital landscape.",
    step1Title: "1. Understand Your Business",
    step1Desc:
      "We analyze your current processes, identify inefficiencies, and find opportunities for automation.",
    step2Title: "2. Build Your System",
    step2Desc:
      "We design and develop custom automation and AI solutions tailored to your specific needs.",
    step3Title: "3. Launch & Optimize",
    step3Desc:
      "We implement everything, test it, and continuously improve it to maximize efficiency.",
    footer: "No technical knowledge required — we handle everything for you.",
  },
  faq: {
    badge: "FAQ",
    title: "Frequently asked questions.",
    items: [
      {
        q: "What kind of businesses do you work with?",
        a: "We work with small to mid-sized businesses across any industry — if you have manual processes, repetitive admin work, or want to leverage AI to scale, we can help.",
      },
      {
        q: "How long does a typical project take?",
        a: "Most automation projects ship in 2–4 weeks. Larger custom AI systems can take 6–10 weeks. We give you a clear timeline before any work starts.",
      },
      {
        q: "Do I need any technical knowledge?",
        a: "No. We handle everything end-to-end — strategy, build, integration, and training. You just tell us what you want automated.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing depends on the scope. We offer fixed-price packages for common automations and custom quotes for larger systems. The first consultation is always free.",
      },
      {
        q: "Will my data stay secure?",
        a: "Yes. We follow industry best practices for data security, use trusted infrastructure providers, and sign NDAs before any sensitive work begins.",
      },
    ],
  },
  cta: {
    badge: "Become a Part of Us",
    titleLine1: "Ready to Automate Your Business",
    titleLine2: "with AI-Powered Systems?",
    subtitle:
      "Ready to take the next step? Book a free consultation and let's explore how we can transform your workflows.",
    button: "Book a free consultation",
  },
  footer: {
    brandTagline: "Tech · Software · Real Impact",
    description:
      "AI & automation for businesses that want to grow faster without growing their headcount.",
    pages: "Pages",
    contact: "Contact",
    sendMessage: "Send a message →",
    follow: "Follow",
    copyright: "All rights reserved.",
    terms: "Terms",
    privacy: "Privacy",
    imprint: "Imprint",
    cookieSettings: "Cookie settings",
  },
  cookies: {
    title: "We value your privacy",
    body: "We use only the cookies strictly necessary to run this site (e.g. saving your language). Optional analytics are off by default — enable them to help us improve the site.",
    learnMore: "Read our Privacy Policy",
    accept: "Accept analytics",
    reject: "Reject",
  },
  servicePage: {
    backToHome: "← Back to all services",
    overviewTitle: "Overview",
    featuresTitle: "What's Included",
    useCasesTitle: "Use Cases",
    useCaseLabel: "Example",
    bookConsultation: "Book a free consultation",
    notFound: "Service not found.",
    backHome: "Back to home",
  },
  chatbot: {
    title: "AV Assistant",
    subtitle: "Online · powered by Claude",
    greeting:
      "Hi! 👋 I'm AV Assistant. Ask me about our services, timelines, pricing, or how AI could help your business.",
    placeholder: "Type your question…",
    poweredBy: "Powered by Claude Haiku 4.5",
    errorGeneric: "Something went wrong. Please try again or email us directly.",
    tooLong: "Message is too long. Please shorten it.",
    rateLimitMinute: "Slow down a bit — please wait {s}s before sending again.",
    rateLimitHour: "You've sent a lot of messages this hour. Please try again later or email us directly.",
    rateLimitDay: "Daily message limit reached. Please book a free consultation instead — use the \"Get In Touch\" button at the top of the page.",
    rateLimitGeneric: "Too many requests. Please wait a moment.",
    banned: "Your access has been temporarily blocked. Please email us if you need help.",
    blocked: "Access blocked — please email us instead",
  },
  serviceDetails: {
    workflow: {
      title: "Workflow Automation",
      pitch:
        "Turn repetitive tasks into automated systems that run themselves — 24/7.",
      description:
        "Workflow automation is about freeing your team from manual, repetitive work. We map your daily processes, identify what a computer can do better, and build automated systems to handle it. Your team focuses on work that actually requires their expertise — judgment, creativity, relationships — while the machines handle the rest.",
      features: [
        "Automate data entry, report generation, and document handling",
        "Schedule and trigger workflows based on events or time",
        "Connect any system that exposes an API",
        "Get notifications and approvals via Slack, email, or SMS",
        "Full visibility into what's running, when, and why",
      ],
      useCases: [
        "Automatically process incoming invoices and route them for approval",
        "Generate weekly reports from multiple data sources without lifting a finger",
        "Onboard new clients with automated welcome sequences and document collection",
        "Sync customer data between CRM, billing, and support tools in real time",
      ],
    },
    integrations: {
      title: "Tool & System Integrations",
      pitch:
        "Connect your tools so they work together — not against each other.",
      description:
        "Most businesses end up with a stack of tools that don't talk to each other — sales tool here, finance tool there, support tool over there, all running in their own silos. We build the connections (APIs, webhooks, custom middleware) so your tools share data automatically. No more manual copy-paste, no more out-of-date spreadsheets, no more 'whoops, didn't sync that'.",
      features: [
        "Custom API integrations for any modern tool",
        "Webhook setups for real-time data sync",
        "Middleware solutions when tools don't natively connect",
        "Two-way sync — changes in one tool update the others",
        "Robust error handling, monitoring, and retry logic",
      ],
      useCases: [
        "Sync HubSpot CRM contacts to Mailchimp campaigns automatically",
        "Connect e-commerce orders to inventory and shipping platforms",
        "Push support tickets straight to your engineering team's project board",
        "Aggregate analytics from Google, Meta, and LinkedIn into a single dashboard",
      ],
    },
    customAI: {
      title: "Custom AI Solutions",
      pitch:
        "AI that's built around your business — not a generic tool you have to adapt to.",
      description:
        "Off-the-shelf AI tools rarely fit perfectly. We build custom AI systems trained on your data, integrated with your existing tools, and tuned for your specific use cases. From document processing to intelligent agents that take real actions across your stack, we deliver AI that actually solves your problem — not just impresses in a demo.",
      features: [
        "Custom RAG (Retrieval-Augmented Generation) systems trained on your docs",
        "AI agents that take real actions across your tools",
        "Document intelligence — extract, classify, and summarize at scale",
        "Built on frontier AI models (Claude Opus 4.6, latest GPT) with full data privacy",
        "Continuous improvement based on real usage and feedback",
      ],
      useCases: [
        "Internal knowledge assistant trained on your company documentation",
        "Automated lead qualification and personalized outreach at scale",
        "Smart document processing for contracts, invoices, and forms",
        "Customer support agent that handles 80% of inquiries autonomously",
      ],
    },
    chatbots: {
      title: "AI Chatbots",
      pitch:
        "24/7 customer support that never misses a lead — and actually helps.",
      description:
        "We build AI chatbots that go beyond simple FAQ scripts. They understand context, remember conversation history, integrate with your CRM and support tools, escalate to humans when needed, and learn from every conversation. Whether on your website, WhatsApp, or in your app — your customers get instant, helpful responses anytime.",
      features: [
        "Multi-channel deployment (web, WhatsApp, Telegram, in-app)",
        "Trained on your knowledge base, FAQs, and product docs",
        "Seamless human handoff when the bot can't help",
        "Lead qualification and CRM integration built in",
        "Multi-language support out of the box",
      ],
      useCases: [
        "Pre-sales chatbot that books demos and qualifies leads automatically",
        "Tier 1 customer support — refunds, status checks, common FAQs",
        "Internal HR assistant that answers employee policy questions",
        "WhatsApp bot for appointment booking, reminders, and confirmations",
      ],
    },
    selfHosted: {
      title: "Self-Hosted LLMs",
      pitch:
        "Run AI on your own infrastructure — total data privacy, predictable costs, no vendor lock-in.",
      description:
        "Sometimes you can't — or shouldn't — send your data to OpenAI or Anthropic. Maybe you're in healthcare, legal, finance, or government, where regulation rules out external APIs. Maybe you're processing sensitive IP. Or maybe you just don't want your costs to scale linearly with usage. We deploy open-source models — Llama, Mistral, Qwen, DeepSeek — on your own infrastructure, on-premise or in your private cloud. Full control, zero data leaving your environment, predictable costs.",
      features: [
        "Deployment of Llama, Mistral, Qwen, DeepSeek and other leading open-source models",
        "On-premise, private cloud (AWS, Azure, GCP), or hybrid architectures",
        "Custom fine-tuning on your domain-specific data",
        "GDPR, SOC2, and HIPAA-compliant deployments",
        "Predictable costs — no per-token fees, no rate limits",
        "Air-gapped setups for high-security environments",
      ],
      useCases: [
        "Healthcare providers needing HIPAA-compliant patient data analysis",
        "Legal firms processing confidential client documents and contracts",
        "Government and defense agencies with strict data sovereignty rules",
        "High-volume products where API costs become prohibitive",
      ],
    },
  },
};

const bg: typeof en = {
  nav: {
    home: "Начало",
    services: "Услуги",
    howItWorks: "Как работи",
    contact: "Контакт",
    faq: "ЧЗВ",
    cta: "Свържи се с нас",
  },
  hero: {
    badge: "AV Solutions",
    titleLine1: "AI и автоматизация",
    titleLine2: "за по-умен бизнес",
    subtitle:
      "Помагаме на бизнеси да премахнат ръчната работа, да автоматизират процесите и да растат с AI-задвижвани системи.",
    cta: "Запази безплатна консултация",
    footerLine1: "Създаваме нови решения, които предефинират иновациите.",
    footerLine2: "Бъдете в крак с AI-технологиите на бъдещето.",
  },
  services: {
    badge: "Услуги",
    titleLine1: "Изграждаме системи, които",
    titleLine2: "работят вместо вас",
    subtitle:
      "Проектираме и изграждаме системи за автоматизация, които спестяват време, намаляват разходите и помагат на бизнеса ви да работи по-ефективно.",
    cta: "Вижте как бизнесът ви може да бъде автоматизиран",
    workflowTitle: "Автоматизация на работни процеси",
    workflowDesc:
      "Премахнете повтарящите се задачи и автоматизирайте ежедневните операции, за да спестявате часове всяка седмица.",
    integrationsTitle: "Интеграции на инструменти и системи",
    integrationsDesc:
      "Свържете вашите инструменти, API-та и работни процеси, така че всичко да работи автоматично без ръчна работа.",
    customAITitle: "Персонализирани AI решения",
    customAIDesc:
      "Специално изградени системи около вашия бизнес — от автоматизация до интелигентни процеси.",
    chatbotsTitle: "AI чатботове",
    chatbotsDesc:
      "Обработвайте клиентски запитвания автоматично 24/7 и никога не пропускайте клиент.",
    selfHostedTitle: "Самостоятелно хостване на LLM",
    selfHostedDesc:
      "Деплойнете Llama, Mistral и други open-source модели върху собствената ви инфраструктура — пълна защита на данните и предвидими разходи.",
    selfHostedBadge: "Напреднало",
    footer:
      "Нужно ви е нещо специално? Изграждаме персонализирани решения според вашите нужди.",
    learnMore: "Научи повече",
  },
  howItWorks: {
    badge: "Как работи",
    title:
      "Прост процес за разбиране на бизнеса ви, автоматизация на работните процеси и постигане на реални резултати.",
    subtitle:
      "С фокус върху иновациите и ефективността ви помагаме да сте в крак с постоянно развиващия се дигитален свят.",
    step1Title: "1. Разбираме бизнеса ви",
    step1Desc:
      "Анализираме текущите ви процеси, идентифицираме неефективностите и откриваме възможности за автоматизация.",
    step2Title: "2. Изграждаме системата ви",
    step2Desc:
      "Проектираме и разработваме персонализирани решения за автоматизация и AI, съобразени с вашите нужди.",
    step3Title: "3. Стартираме и оптимизираме",
    step3Desc:
      "Имплементираме всичко, тестваме го и непрекъснато го подобряваме за максимална ефективност.",
    footer:
      "Не са необходими технически знания — ние се грижим за всичко.",
  },
  faq: {
    badge: "ЧЗВ",
    title: "Често задавани въпроси.",
    items: [
      {
        q: "С какви бизнеси работите?",
        a: "Работим с малки и средни бизнеси във всички индустрии — ако имате ръчни процеси, повтаряща се административна работа или искате да използвате AI за растеж, можем да помогнем.",
      },
      {
        q: "Колко време отнема един типичен проект?",
        a: "Повечето проекти за автоматизация се пускат за 2–4 седмици. По-големите персонализирани AI системи могат да отнемат 6–10 седмици. Даваме ви ясен график преди започване на работата.",
      },
      {
        q: "Нужни ли са ми технически знания?",
        a: "Не. Грижим се за всичко от край до край — стратегия, изграждане, интеграция и обучение. Вие просто ни казвате какво искате да автоматизирате.",
      },
      {
        q: "Колко струва?",
        a: "Цената зависи от обхвата. Предлагаме фиксирани пакети за често срещани автоматизации и персонализирани оферти за по-големи системи. Първата консултация винаги е безплатна.",
      },
      {
        q: "Ще остане ли информацията ми сигурна?",
        a: "Да. Следваме най-добрите практики за защита на данните, използваме доверени инфраструктурни доставчици и подписваме NDA преди всяка чувствителна работа.",
      },
    ],
  },
  cta: {
    badge: "Станете част от нас",
    titleLine1: "Готови ли сте да автоматизирате бизнеса си",
    titleLine2: "с AI-задвижвани системи?",
    subtitle:
      "Готови ли сте за следващата стъпка? Запазете безплатна консултация и нека разгледаме как можем да трансформираме работните ви процеси.",
    button: "Запази безплатна консултация",
  },
  footer: {
    brandTagline: "Тех · Софтуер · Реално Въздействие",
    description:
      "AI и автоматизация за бизнеси, които искат да растат по-бързо без увеличение на персонала.",
    pages: "Страници",
    contact: "Контакт",
    sendMessage: "Изпрати съобщение →",
    follow: "Последвай",
    copyright: "Всички права запазени.",
    terms: "Условия",
    privacy: "Поверителност",
    imprint: "Импресум",
    cookieSettings: "Настройки за бисквитки",
  },
  cookies: {
    title: "Цените вашата поверителност",
    body: "Използваме само бисквитките, които са строго необходими за работата на сайта (напр. запазване на езика). По избор анализи са изключени по подразбиране — включете ги, за да ни помогнете да подобрим сайта.",
    learnMore: "Прочетете нашата Политика за поверителност",
    accept: "Приемам анализите",
    reject: "Отказвам",
  },
  servicePage: {
    backToHome: "← Обратно към всички услуги",
    overviewTitle: "Преглед",
    featuresTitle: "Какво включва",
    useCasesTitle: "Примерни случаи",
    useCaseLabel: "Пример",
    bookConsultation: "Запази безплатна консултация",
    notFound: "Услугата не е намерена.",
    backHome: "Към началната страница",
  },
  chatbot: {
    title: "AV Асистент",
    subtitle: "Онлайн · базиран на Claude",
    greeting:
      "Здравейте! 👋 Аз съм AV Асистент. Питайте ме за нашите услуги, срокове, цени или как AI може да помогне на бизнеса ви.",
    placeholder: "Въведете вашия въпрос…",
    poweredBy: "Базиран на Claude Haiku 4.5",
    errorGeneric: "Нещо се обърка. Моля, опитайте отново или ни пишете директно.",
    tooLong: "Съобщението е твърде дълго. Моля, съкратете го.",
    rateLimitMinute: "По-бавно — моля, изчакайте {s} сек. преди да изпратите отново.",
    rateLimitHour: "Изпратихте много съобщения този час. Моля, опитайте по-късно или ни пишете директно.",
    rateLimitDay: "Достигнат е дневният лимит за съобщения. Моля, запазете безплатна консултация чрез бутона „Get In Touch&ldquo; в горната част на страницата.",
    rateLimitGeneric: "Твърде много заявки. Моля, изчакайте малко.",
    banned: "Достъпът ви е временно блокиран. Моля, пишете ни, ако имате нужда от помощ.",
    blocked: "Достъпът е блокиран — моля, пишете ни директно",
  },
  serviceDetails: {
    workflow: {
      title: "Автоматизация на работни процеси",
      pitch:
        "Превърнете повтарящите се задачи в автоматизирани системи, които работят сами — 24/7.",
      description:
        "Автоматизацията на работни процеси освобождава екипа ви от ръчна, повтаряща се работа. Анализираме ежедневните ви процеси, идентифицираме какво може да направи компютър по-добре и изграждаме системи, които да го извършват. Екипът ви се фокусира върху работа, която изисква експертиза — преценка, креативност, взаимоотношения — а машините се грижат за останалото.",
      features: [
        "Автоматизация на въвеждане на данни, генериране на отчети и обработка на документи",
        "Планиране и задействане на работни процеси по събития или време",
        "Връзка с всяка система, която предоставя API",
        "Получавайте известия и одобрения чрез Slack, имейл или SMS",
        "Пълна видимост какво работи, кога и защо",
      ],
      useCases: [
        "Автоматична обработка на входящи фактури и насочването им за одобрение",
        "Генериране на седмични отчети от множество източници без намеса",
        "Онбординг на нови клиенти с автоматизирани последователности",
        "Синхронизиране на клиентски данни между CRM, фактуриране и поддръжка в реално време",
      ],
    },
    integrations: {
      title: "Интеграции на инструменти и системи",
      pitch:
        "Свържете инструментите си, така че да работят заедно — а не един срещу друг.",
      description:
        "Повечето бизнеси се оказват с набор от инструменти, които не комуникират помежду си — продажбен инструмент тук, финансов там, поддръжка някъде другаде, всичко в собствените си силози. Изграждаме връзките (API-та, webhooks, персонализиран middleware), така че инструментите ви да обменят данни автоматично. Без ръчно копиране, без остарели електронни таблици.",
      features: [
        "Персонализирани API интеграции за всеки модерен инструмент",
        "Webhook настройки за синхронизация на данни в реално време",
        "Middleware решения, когато инструментите не се свързват директно",
        "Двупосочна синхронизация — промените в един инструмент обновяват останалите",
        "Надеждна обработка на грешки, мониторинг и логика за повторни опити",
      ],
      useCases: [
        "Автоматично синхронизиране на контакти от HubSpot CRM към Mailchimp кампании",
        "Свързване на e-commerce поръчки с платформи за инвентар и доставка",
        "Изпращане на тикети за поддръжка директно към проектната дъска на разработчиците",
        "Обединяване на анализи от Google, Meta и LinkedIn в едно табло",
      ],
    },
    customAI: {
      title: "Персонализирани AI решения",
      pitch:
        "AI, изграден около вашия бизнес — а не общ инструмент, към който трябва да се адаптирате.",
      description:
        "Готовите AI инструменти рядко се вписват перфектно. Изграждаме персонализирани AI системи, обучени на вашите данни, интегрирани с инструментите ви и настроени за конкретните ви случаи. От обработка на документи до интелигентни агенти, които предприемат реални действия — доставяме AI, който решава проблема ви, а не просто впечатлява в демо.",
      features: [
        "Персонализирани RAG системи, обучени на вашата документация",
        "AI агенти, които предприемат реални действия във вашите инструменти",
        "Интелигентна обработка на документи — извличане, класификация, резюмиране",
        "Изградени върху водещите AI модели (Claude Opus 4.6, най-новите GPT) с пълна защита на данните",
        "Непрекъснато подобрение на база реална употреба и обратна връзка",
      ],
      useCases: [
        "Вътрешен асистент за знания, обучен на документацията на компанията ви",
        "Автоматизирана квалификация на потенциални клиенти и персонализиран контакт",
        "Интелигентна обработка на документи — договори, фактури, формуляри",
        "Агент за поддръжка, който обработва 80% от запитванията автономно",
      ],
    },
    chatbots: {
      title: "AI чатботове",
      pitch:
        "Поддръжка 24/7, която не пропуска клиент — и наистина помага.",
      description:
        "Изграждаме AI чатботове, които надхвърлят простите FAQ скриптове. Те разбират контекста, помнят историята на разговора, интегрират се с CRM и инструменти за поддръжка, ескалират към хора, когато е необходимо, и се учат от всеки разговор. Независимо дали на сайта ви, в WhatsApp или в приложението — клиентите ви получават моментални, полезни отговори.",
      features: [
        "Многоканален деплоймент (web, WhatsApp, Telegram, в приложение)",
        "Обучени на вашата база знания, FAQ-та и продуктови документи",
        "Безпроблемно прехвърляне към човек, когато ботът не може да помогне",
        "Вградена квалификация на клиенти и CRM интеграция",
        "Многоезична поддръжка по подразбиране",
      ],
      useCases: [
        "Pre-sales чатбот, който резервира демонстрации и квалифицира клиенти",
        "Поддръжка от ниво 1 — възстановявания, проверки на статус, чести въпроси",
        "Вътрешен HR асистент за въпроси относно политики на компанията",
        "WhatsApp бот за резервации, напомняния и потвърждения",
      ],
    },
    selfHosted: {
      title: "Самостоятелно хостване на LLM",
      pitch:
        "Стартирайте AI върху собствената си инфраструктура — пълна защита на данните, предвидими разходи, без зависимост от външен доставчик.",
      description:
        "Понякога не можете — или не би трябвало — да изпращате данните си до OpenAI или Anthropic. Може би сте в здравеопазването, право, финанси или държавна администрация, където регулациите изключват външни API-та. Може би обработвате чувствителна интелектуална собственост. Или просто не искате разходите ви да растат пропорционално с използването. Деплойваме open-source модели — Llama, Mistral, Qwen, DeepSeek — върху вашата инфраструктура, on-premise или в частния ви облак. Пълен контрол, нулева загуба на данни, предвидими разходи.",
      features: [
        "Деплоймент на Llama, Mistral, Qwen, DeepSeek и други водещи open-source модели",
        "On-premise, частен облак (AWS, Azure, GCP) или хибридни архитектури",
        "Персонализиран fine-tuning върху вашите специфични данни",
        "GDPR, SOC2 и HIPAA-съвместими деплойменти",
        "Предвидими разходи — без такса на токен, без лимити",
        "Air-gapped инсталации за среди с висока сигурност",
      ],
      useCases: [
        "Здравни доставчици, нуждаещи се от HIPAA-съвместим анализ на пациентски данни",
        "Юридически фирми, обработващи поверителни клиентски документи и договори",
        "Държавни и отбранителни организации със строги изисквания за суверенитет на данните",
        "Високообемни продукти, при които API разходите стават прекомерни",
      ],
    },
  },
};

const de: typeof en = {
  nav: {
    home: "Start",
    services: "Leistungen",
    howItWorks: "So funktioniert's",
    contact: "Kontakt",
    faq: "FAQ",
    cta: "Kontakt aufnehmen",
  },
  hero: {
    badge: "AV Solutions",
    titleLine1: "KI & Automatisierung",
    titleLine2: "für intelligentere Unternehmen",
    subtitle:
      "Wir helfen Unternehmen, manuelle Arbeit zu eliminieren, Prozesse zu automatisieren und mit KI-gestützten Systemen zu skalieren.",
    cta: "Kostenlose Beratung buchen",
    footerLine1: "Wir entwickeln innovative Lösungen, die Maßstäbe setzen.",
    footerLine2: "Bleiben Sie mit KI-Technologie der Zukunft voraus.",
  },
  services: {
    badge: "Leistungen",
    titleLine1: "Wir bauen Systeme,",
    titleLine2: "die für Sie arbeiten",
    subtitle:
      "Wir entwerfen und bauen Automatisierungssysteme, die Zeit sparen, Kosten reduzieren und Ihrem Unternehmen helfen, effizienter zu arbeiten.",
    cta: "Sehen Sie, wie Ihr Unternehmen automatisiert werden kann",
    workflowTitle: "Workflow-Automatisierung",
    workflowDesc:
      "Eliminieren Sie sich wiederholende Aufgaben und automatisieren Sie Ihren täglichen Betrieb — sparen Sie Stunden pro Woche.",
    integrationsTitle: "Tool- & System-Integrationen",
    integrationsDesc:
      "Verbinden Sie Ihre Tools, APIs und Workflows, damit alles automatisch ohne manuelle Arbeit läuft.",
    customAITitle: "Maßgeschneiderte KI-Lösungen",
    customAIDesc:
      "Individuell auf Ihr Unternehmen zugeschnittene Systeme — von Automatisierung bis zu intelligenten Workflows.",
    chatbotsTitle: "KI-Chatbots",
    chatbotsDesc:
      "Bearbeiten Sie Kundenanfragen automatisch rund um die Uhr und verpassen Sie nie einen Kontakt.",
    selfHostedTitle: "Self-Hosted LLMs",
    selfHostedDesc:
      "Deployen Sie Llama, Mistral und andere Open-Source-Modelle auf Ihrer eigenen Infrastruktur — voller Datenschutz und vorhersehbare Kosten.",
    selfHostedBadge: "Advanced",
    footer:
      "Brauchen Sie etwas Maßgeschneidertes? Wir bauen individuelle Lösungen basierend auf Ihren Anforderungen.",
    learnMore: "Mehr erfahren",
  },
  howItWorks: {
    badge: "So funktioniert's",
    title:
      "Ein einfacher Prozess, um Ihr Unternehmen zu verstehen, Ihre Workflows zu automatisieren und echte Ergebnisse zu liefern.",
    subtitle:
      "Mit Fokus auf Innovation und Effizienz helfen wir Ihnen, in einer sich ständig wandelnden digitalen Landschaft führend zu bleiben.",
    step1Title: "1. Ihr Geschäft verstehen",
    step1Desc:
      "Wir analysieren Ihre aktuellen Prozesse, identifizieren Ineffizienzen und finden Automatisierungsmöglichkeiten.",
    step2Title: "2. Ihr System bauen",
    step2Desc:
      "Wir entwerfen und entwickeln maßgeschneiderte Automatisierungs- und KI-Lösungen für Ihre Anforderungen.",
    step3Title: "3. Starten & Optimieren",
    step3Desc:
      "Wir implementieren alles, testen es und verbessern es kontinuierlich für maximale Effizienz.",
    footer: "Keine technischen Kenntnisse erforderlich — wir kümmern uns um alles.",
  },
  faq: {
    badge: "FAQ",
    title: "Häufig gestellte Fragen.",
    items: [
      {
        q: "Mit welchen Unternehmen arbeiten Sie?",
        a: "Wir arbeiten mit kleinen und mittelständischen Unternehmen aus allen Branchen — wenn Sie manuelle Prozesse, wiederkehrende Verwaltungsarbeit haben oder KI nutzen möchten, um zu skalieren, können wir helfen.",
      },
      {
        q: "Wie lange dauert ein typisches Projekt?",
        a: "Die meisten Automatisierungsprojekte werden in 2–4 Wochen ausgeliefert. Größere maßgeschneiderte KI-Systeme können 6–10 Wochen dauern. Wir geben Ihnen einen klaren Zeitplan, bevor die Arbeit beginnt.",
      },
      {
        q: "Brauche ich technisches Wissen?",
        a: "Nein. Wir kümmern uns um alles — Strategie, Aufbau, Integration und Schulung. Sie sagen uns nur, was Sie automatisieren möchten.",
      },
      {
        q: "Wie viel kostet es?",
        a: "Die Preise hängen vom Umfang ab. Wir bieten Festpreis-Pakete für gängige Automatisierungen und individuelle Angebote für größere Systeme. Die erste Beratung ist immer kostenlos.",
      },
      {
        q: "Bleiben meine Daten sicher?",
        a: "Ja. Wir folgen den besten Praktiken für Datensicherheit, nutzen vertrauenswürdige Infrastrukturanbieter und unterzeichnen NDAs vor jeder vertraulichen Arbeit.",
      },
    ],
  },
  cta: {
    badge: "Werden Sie Teil von uns",
    titleLine1: "Bereit, Ihr Unternehmen zu automatisieren",
    titleLine2: "mit KI-gestützten Systemen?",
    subtitle:
      "Bereit für den nächsten Schritt? Buchen Sie eine kostenlose Beratung und lassen Sie uns erkunden, wie wir Ihre Workflows transformieren können.",
    button: "Kostenlose Beratung buchen",
  },
  footer: {
    brandTagline: "Tech · Software · Echter Impact",
    description:
      "KI & Automatisierung für Unternehmen, die schneller wachsen wollen — ohne ihre Mitarbeiterzahl zu erhöhen.",
    pages: "Seiten",
    contact: "Kontakt",
    sendMessage: "Nachricht senden →",
    follow: "Folgen",
    copyright: "Alle Rechte vorbehalten.",
    terms: "AGB",
    privacy: "Datenschutz",
    imprint: "Impressum",
    cookieSettings: "Cookie-Einstellungen",
  },
  cookies: {
    title: "Wir respektieren Ihre Privatsphäre",
    body: "Wir verwenden nur die für den Betrieb dieser Seite zwingend erforderlichen Cookies (z. B. zum Speichern Ihrer Sprache). Optionale Analyse-Cookies sind standardmäßig deaktiviert — Sie können sie aktivieren, um uns bei der Verbesserung der Seite zu helfen.",
    learnMore: "Datenschutzerklärung lesen",
    accept: "Analyse akzeptieren",
    reject: "Ablehnen",
  },
  servicePage: {
    backToHome: "← Zurück zu allen Leistungen",
    overviewTitle: "Überblick",
    featuresTitle: "Was enthalten ist",
    useCasesTitle: "Anwendungsfälle",
    useCaseLabel: "Beispiel",
    bookConsultation: "Kostenlose Beratung buchen",
    notFound: "Leistung nicht gefunden.",
    backHome: "Zurück zur Startseite",
  },
  chatbot: {
    title: "AV Assistent",
    subtitle: "Online · powered by Claude",
    greeting:
      "Hallo! 👋 Ich bin der AV Assistent. Fragen Sie mich zu unseren Leistungen, Zeitplänen, Preisen oder wie KI Ihrem Unternehmen helfen kann.",
    placeholder: "Stellen Sie Ihre Frage…",
    poweredBy: "Powered by Claude Haiku 4.5",
    errorGeneric: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.",
    tooLong: "Nachricht ist zu lang. Bitte kürzen Sie sie.",
    rateLimitMinute: "Langsamer — bitte warten Sie {s} Sek., bevor Sie erneut senden.",
    rateLimitHour: "Sie haben in dieser Stunde viele Nachrichten gesendet. Bitte später erneut versuchen oder uns direkt schreiben.",
    rateLimitDay: "Tageslimit für Nachrichten erreicht. Bitte buchen Sie stattdessen eine kostenlose Beratung über den Button „Get In Touch&ldquo; oben auf der Seite.",
    rateLimitGeneric: "Zu viele Anfragen. Bitte einen Moment warten.",
    banned: "Ihr Zugriff wurde vorübergehend gesperrt. Bitte schreiben Sie uns, wenn Sie Hilfe benötigen.",
    blocked: "Zugriff gesperrt — bitte schreiben Sie uns direkt",
  },
  serviceDetails: {
    workflow: {
      title: "Workflow-Automatisierung",
      pitch:
        "Verwandeln Sie sich wiederholende Aufgaben in automatisierte Systeme, die rund um die Uhr laufen.",
      description:
        "Workflow-Automatisierung befreit Ihr Team von manueller, wiederkehrender Arbeit. Wir analysieren Ihre täglichen Prozesse, identifizieren, was ein Computer besser machen kann, und bauen automatisierte Systeme dafür. Ihr Team konzentriert sich auf Arbeit, die echte Expertise erfordert — Urteilsvermögen, Kreativität, Beziehungen — während die Maschinen den Rest erledigen.",
      features: [
        "Automatisierung von Dateneingabe, Berichtserstellung und Dokumentenverarbeitung",
        "Planung und Auslösung von Workflows nach Ereignissen oder Zeit",
        "Verbindung mit jedem System, das eine API bereitstellt",
        "Benachrichtigungen und Genehmigungen über Slack, E-Mail oder SMS",
        "Volle Transparenz darüber, was wann und warum läuft",
      ],
      useCases: [
        "Automatische Verarbeitung eingehender Rechnungen und Weiterleitung zur Genehmigung",
        "Wöchentliche Berichte aus mehreren Datenquellen ohne manuellen Aufwand",
        "Onboarding neuer Kunden mit automatisierten Willkommens-Sequenzen",
        "Synchronisierung von Kundendaten zwischen CRM, Buchhaltung und Support in Echtzeit",
      ],
    },
    integrations: {
      title: "Tool- & System-Integrationen",
      pitch:
        "Verbinden Sie Ihre Tools, damit sie zusammenarbeiten — nicht gegeneinander.",
      description:
        "Die meisten Unternehmen haben einen Stack aus Tools, die nicht miteinander kommunizieren — Vertrieb hier, Finanzen da, Support woanders, alles in eigenen Silos. Wir bauen die Verbindungen (APIs, Webhooks, individuelle Middleware), damit Ihre Tools automatisch Daten austauschen. Kein manuelles Kopieren, keine veralteten Tabellen mehr.",
      features: [
        "Maßgeschneiderte API-Integrationen für jedes moderne Tool",
        "Webhook-Setups für Echtzeit-Datensynchronisation",
        "Middleware-Lösungen, wenn Tools nicht nativ verbinden",
        "Bidirektionale Synchronisation — Änderungen in einem Tool aktualisieren die anderen",
        "Robuste Fehlerbehandlung, Monitoring und Wiederholungslogik",
      ],
      useCases: [
        "HubSpot-CRM-Kontakte automatisch mit Mailchimp-Kampagnen synchronisieren",
        "E-Commerce-Bestellungen mit Inventar- und Versandplattformen verbinden",
        "Support-Tickets direkt an das Projekt-Board des Engineering-Teams senden",
        "Analytics aus Google, Meta und LinkedIn in einem Dashboard zusammenführen",
      ],
    },
    customAI: {
      title: "Maßgeschneiderte KI-Lösungen",
      pitch:
        "KI, die um Ihr Unternehmen herum gebaut wird — keine generische Lösung, an die Sie sich anpassen müssen.",
      description:
        "Standard-KI-Tools passen selten perfekt. Wir bauen maßgeschneiderte KI-Systeme, die auf Ihren Daten trainiert, in Ihre bestehenden Tools integriert und für Ihre spezifischen Anwendungsfälle optimiert sind. Von Dokumentenverarbeitung bis hin zu intelligenten Agenten, die echte Aktionen ausführen — wir liefern KI, die Ihr Problem wirklich löst.",
      features: [
        "Maßgeschneiderte RAG-Systeme, trainiert auf Ihren Dokumenten",
        "KI-Agenten, die echte Aktionen in Ihren Tools ausführen",
        "Dokumenten-Intelligenz — Extrahieren, Klassifizieren, Zusammenfassen",
        "Aufgebaut auf Spitzen-KI-Modellen (Claude Opus 4.6, neueste GPT) mit vollem Datenschutz",
        "Kontinuierliche Verbesserung basierend auf Nutzung und Feedback",
      ],
      useCases: [
        "Interner Wissensassistent, trainiert auf Ihrer Unternehmensdokumentation",
        "Automatisierte Lead-Qualifizierung und personalisierte Kundenansprache",
        "Intelligente Dokumentenverarbeitung für Verträge, Rechnungen, Formulare",
        "Kundensupport-Agent, der 80 % der Anfragen autonom bearbeitet",
      ],
    },
    chatbots: {
      title: "KI-Chatbots",
      pitch:
        "24/7-Kundensupport, der nie einen Kontakt verpasst — und wirklich hilft.",
      description:
        "Wir bauen KI-Chatbots, die über einfache FAQ-Skripte hinausgehen. Sie verstehen Kontext, merken sich Gesprächsverläufe, integrieren sich in CRM und Support-Tools, eskalieren bei Bedarf an Menschen und lernen aus jedem Gespräch. Ob auf Ihrer Website, WhatsApp oder in Ihrer App — Ihre Kunden erhalten jederzeit sofortige, hilfreiche Antworten.",
      features: [
        "Multi-Channel-Bereitstellung (Web, WhatsApp, Telegram, In-App)",
        "Trainiert auf Ihrer Wissensdatenbank, FAQs und Produktdokumentation",
        "Nahtlose Übergabe an Menschen, wenn der Bot nicht weiterhelfen kann",
        "Lead-Qualifizierung und CRM-Integration eingebaut",
        "Mehrsprachige Unterstützung von Haus aus",
      ],
      useCases: [
        "Pre-Sales-Chatbot, der Demos bucht und Leads qualifiziert",
        "First-Level-Support — Rückerstattungen, Statusabfragen, häufige Fragen",
        "Interner HR-Assistent für Fragen zu Mitarbeiterrichtlinien",
        "WhatsApp-Bot für Terminbuchungen, Erinnerungen und Bestätigungen",
      ],
    },
    selfHosted: {
      title: "Self-Hosted LLMs",
      pitch:
        "Betreiben Sie KI auf Ihrer eigenen Infrastruktur — voller Datenschutz, vorhersehbare Kosten, keine Anbieterabhängigkeit.",
      description:
        "Manchmal können — oder sollten — Sie Ihre Daten nicht an OpenAI oder Anthropic senden. Vielleicht arbeiten Sie im Gesundheitswesen, Recht, Finanzen oder im öffentlichen Sektor, wo Vorschriften externe APIs ausschließen. Vielleicht verarbeiten Sie sensibles geistiges Eigentum. Oder Sie wollen einfach nicht, dass Ihre Kosten linear mit der Nutzung wachsen. Wir deployen Open-Source-Modelle — Llama, Mistral, Qwen, DeepSeek — auf Ihrer eigenen Infrastruktur, on-premise oder in Ihrer Private Cloud. Volle Kontrolle, keine Daten verlassen Ihre Umgebung, planbare Kosten.",
      features: [
        "Deployment von Llama, Mistral, Qwen, DeepSeek und anderen führenden Open-Source-Modellen",
        "On-premise, Private Cloud (AWS, Azure, GCP) oder hybride Architekturen",
        "Maßgeschneidertes Fine-Tuning auf Ihren branchenspezifischen Daten",
        "DSGVO-, SOC2- und HIPAA-konforme Deployments",
        "Vorhersehbare Kosten — keine Token-Gebühren, keine Rate Limits",
        "Air-Gapped-Setups für Hochsicherheitsumgebungen",
      ],
      useCases: [
        "Gesundheitsdienstleister mit Bedarf an HIPAA-konformer Patientendatenanalyse",
        "Anwaltskanzleien, die vertrauliche Mandantendokumente und Verträge verarbeiten",
        "Behörden und Verteidigung mit strengen Datensouveränitätsanforderungen",
        "Hochvolumige Produkte, bei denen API-Kosten unrentabel werden",
      ],
    },
  },
};

export const translations = { en, bg, de };
export type Translations = typeof en;
