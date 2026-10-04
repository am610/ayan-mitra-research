import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ayan-mitra-research.vercel.app/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
