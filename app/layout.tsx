import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { Analytics } from "./components/Analytics";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "hr-commons.kameya-hldgs.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const ogImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: { default: "HRコモンズ", template: "%s｜HRコモンズ" },
    description: "採用担当者が、採用担当者と本音で話せるクローズドコミュニティ。",
    icons: { icon: "/favicon.svg" },
    openGraph: {
      title: "HRコモンズ｜採用担当者が、本音で話せる場所",
      description: "Web検索だけでは分からない、他社のリアルな採用を共有する採用担当者限定コミュニティ。",
      type: "website",
      locale: "ja_JP",
      siteName: "HRコモンズ",
      images: [{ url: ogImage, width: 1619, height: 971, alt: "HRコモンズ" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "HRコモンズ｜採用担当者が、本音で話せる場所",
      description: "Web検索だけでは分からない、他社のリアルな採用を共有する採用担当者限定コミュニティ。",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}<Analytics /></body>
    </html>
  );
}
