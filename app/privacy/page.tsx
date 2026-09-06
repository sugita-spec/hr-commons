import type { Metadata } from "next";
import { PageHero, PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "HRコモンズにおける個人情報の取り扱いについて。",
};

const clauses = [
  ["1. 個人情報の取得", "当コミュニティは、参加申し込み、お問い合わせ、イベント運営に必要な範囲で、氏名、会社名、部署・役職、メールアドレスその他の情報を取得します。"],
  ["2. 利用目的", "取得した情報は、参加資格の確認、コミュニティおよびイベントの案内、問い合わせ対応、サービス改善、重要なお知らせの送付のために利用します。"],
  ["3. 第三者提供", "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。業務委託先に取り扱いを委託する場合は、適切な監督を行います。"],
  ["4. 安全管理", "個人情報への不正アクセス、紛失、漏えい等を防ぐため、合理的な安全管理措置を講じます。"],
  ["5. アクセス解析", "当サイトでは、利用状況を把握し改善するため、Google Analytics 4およびGoogle Tag Managerを利用する場合があります。"],
  ["6. 開示・訂正・削除", "ご本人から個人情報の開示、訂正、利用停止または削除のお申し出があった場合は、本人確認のうえ、法令に従って対応します。"],
  ["7. お問い合わせ", "個人情報の取り扱いに関するお問い合わせは、運営者情報に記載の窓口までご連絡ください。"],
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero label="PRIVACY POLICY" title={<>プライバシー<br /><em>ポリシー。</em></>} />
      <section className="legal-section policy">
        <p className="policy-intro">HRコモンズ運営者（以下「当運営者」といいます）は、当サイトおよびコミュニティで取り扱う個人情報を、以下の方針に基づいて適切に管理します。</p>
        {clauses.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}
        <div className="policy-date">制定日：2026年9月6日</div>
        <p className="legal-note">※ 本内容はサイト構成用のひな形であり、公開前に専門家による確認を推奨します。</p>
      </section>
    </PageShell>
  );
}
