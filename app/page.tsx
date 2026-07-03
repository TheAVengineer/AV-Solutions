import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { translations } from "@/lib/translations";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: translations.en.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <JsonLd data={FAQ_SCHEMA} />
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
