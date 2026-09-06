import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/thanks" },
    sitemap: "https://hr-commons.kameya-hldgs.chatgpt.site/sitemap.xml",
  };
}
