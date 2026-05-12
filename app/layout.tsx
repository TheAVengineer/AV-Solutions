import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";
import { LanguageProvider } from "@/components/LanguageProvider";
import Chatbot from "@/components/Chatbot";
import CalProvider from "@/components/CalProvider";
import CookieConsent from "@/components/CookieConsent";
import ConsentAnalytics from "@/components/ConsentAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://avsolutions.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AV Solutions — AI & Automation for Smarter Businesses",
    template: "%s · AV Solutions",
  },
  description:
    "We help businesses eliminate manual work, automate processes, and scale using AI-powered systems. Workflow automation, AI chatbots, and custom integrations.",
  keywords: [
    "AI automation",
    "workflow automation",
    "AI chatbots",
    "custom AI solutions",
    "business automation",
    "AV Solutions",
  ],
  authors: [{ name: "AV Solutions" }],
  creator: "AV Solutions",
  openGraph: {
    title: "AV Solutions — AI & Automation for Smarter Businesses",
    description:
      "We help businesses eliminate manual work, automate processes, and scale using AI-powered systems.",
    url: SITE_URL,
    siteName: "AV Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AV Solutions — AI & Automation for Smarter Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Solutions — AI & Automation for Smarter Businesses",
    description:
      "We help businesses eliminate manual work, automate processes, and scale using AI-powered systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-white antialiased">
        <LanguageProvider>
          <CalProvider />
          <Spotlight />
          {children}
          <Chatbot />
          <CookieConsent />
          <ConsentAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
