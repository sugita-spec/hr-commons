import type { MetadataRoute } from "next";
import { events } from "./data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hr-commons.kameya-hldgs.chatgpt.site";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/events`, changeFrequency: "weekly", priority: 0.9 },
    ...events.map((event) => ({ url: `${base}/events/${event.slug}`, lastModified: event.date, changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/join`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/company`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
