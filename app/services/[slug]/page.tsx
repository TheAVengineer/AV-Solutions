import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceKey, SERVICE_SLUGS, translations } from "@/lib/translations";
import JsonLd from "@/components/JsonLd";
import ServiceDetailClient from "./ServiceDetailClient";

const SITE_URL = "https://avsolutions.dev";

// slug → key mapping (reverse of SERVICE_SLUGS)
const SLUG_TO_KEY: Record<string, ServiceKey> = Object.fromEntries(
  Object.entries(SERVICE_SLUGS).map(([k, v]) => [v, k as ServiceKey])
);

// Pre-render every service page at build time.
export function generateStaticParams() {
  return Object.values(SERVICE_SLUGS).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const key = SLUG_TO_KEY[params.slug];
  if (!key) return {};

  const detail = translations.en.serviceDetails[key];
  const url = `${SITE_URL}/services/${params.slug}`;

  return {
    title: detail.title,
    description: detail.pitch,
    alternates: { canonical: url },
    openGraph: {
      title: `${detail.title} · AV Solutions`,
      description: detail.pitch,
      url,
      type: "website",
      // Reuse the site-wide generated card (resolved via metadataBase).
      images: ["/opengraph-image"],
    },
    twitter: {
      title: `${detail.title} · AV Solutions`,
      description: detail.pitch,
      images: ["/opengraph-image"],
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const key = SLUG_TO_KEY[params.slug];
  if (!key) notFound();

  const detail = translations.en.serviceDetails[key];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail.title,
    description: detail.description,
    url: `${SITE_URL}/services/${params.slug}`,
    provider: {
      "@type": "Organization",
      name: "AV Solutions",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServiceDetailClient slug={params.slug} />
    </>
  );
}
