import type { Metadata } from "next";
import { PageHero, PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "HRコモンズの運営者情報です。",
};

export default function CompanyPage() {
  return (
    <PageShell>
      <PageHero label="OPERATOR" title={<>運営者情報。</>} />
      <section className="legal-section">
        <dl className="company-table">
          <div><dt>サイト名</dt><dd>HRコモンズ</dd></div>
          <div><dt>運営会社</dt><dd>株式会社〇〇（公開前に正式情報へ差し替えてください）</dd></div>
          <div><dt>所在地</dt><dd>東京都〇〇区〇〇 0-0-0</dd></div>
          <div><dt>代表者</dt><dd>〇〇 〇〇</dd></div>
          <div><dt>お問い合わせ</dt><dd>contact@hr-commons.example.com</dd></div>
          <div><dt>事業内容</dt><dd>採用コミュニティの企画・運営</dd></div>
        </dl>
        <p className="legal-note">※ 本ページの運営者情報はプレースホルダーです。公開前に正式な法人情報へ差し替えてください。</p>
      </section>
    </PageShell>
  );
}
