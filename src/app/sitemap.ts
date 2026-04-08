import { MetadataRoute } from "next";
import { getSitemapData } from "@/lib/wp-api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://baohiem.online";

// Static pages
const staticPages = [
  { url: "/", priority: 1.0, changeFrequency: "daily" },
  { url: "/bao-hiem-suc-khoe/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/bao-hiem-xe-co-gioi/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/bao-hiem-du-lich/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/bao-hiem-tai-nan/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/bao-hiem-nhan-tho/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/bao-hiem-khac/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/blog/", priority: 0.8, changeFrequency: "daily" },
  { url: "/gioi-thieu/", priority: 0.7, changeFrequency: "monthly" },
  { url: "/lien-he/", priority: 0.8, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts, pages } = await getSitemapData();

  const wpPosts = posts.map((p: { slug: string; modified?: string }) => ({
    url: `${BASE_URL}/${p.slug}/`,
    lastModified: p.modified ? new Date(p.modified) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const wpPages = pages
    .filter((p: { slug: string }) => !["home", "sample-page"].includes(p.slug))
    .map((p: { slug: string; modified?: string }) => ({
      url: `${BASE_URL}/${p.slug}/`,
      lastModified: p.modified ? new Date(p.modified) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const statics = staticPages.map((p) => ({
    url: `${BASE_URL}${p.url}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: p.priority,
  }));

  return [...statics, ...wpPosts, ...wpPages];
}
