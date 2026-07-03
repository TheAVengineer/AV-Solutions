import type { MetadataRoute } from "next";
import { SERVICE_SLUGS } from "@/lib/translations";

const SITE_URL = "https://avsolutions.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const services: MetadataRoute.Sitemap = Object.values(SERVICE_SLUGS).map(
    (slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const legal: MetadataRoute.Sitemap = ["imprint", "privacy", "terms"].map(
    (path) => ({
      url: `${SITE_URL}/${path}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    })
  );

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services,
    ...legal,
  ];
}
