import type { Metadata } from "next";
import { JoinForm } from "../components/JoinForm";
import { PageHero, PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "参加申し込み",
  description: "HRコモンズへの参加申し込み。採用担当者・人事責任者限定の審査制コミュニティです。",
};

export default function JoinPage() {
  return (
    <PageShell>
      <PageHero
        label="JOIN HR COMMONS"
        title={<>話せる相手がいると、<br /><em>採用はもっと前に進む。</em></>}
        lead={<>HRコモンズは、採用担当者・人事責任者限定の審査制コミュニティです。<br />内容を確認し、原則3営業日以内にご連絡します。</>}
      />
      <section className="join-layout">
        <aside className="join-aside">
          <small>BEFORE YOU APPLY</small>
          <h2>参加対象について</h2>
          <ul>
            <li>事業会社の採用担当者・人事責任者</li>
            <li>年間10名以上の中途採用に携わる方を中心にご案内</li>
            <li>互いの経験を尊重し、可能な範囲で共有できる方</li>
          </ul>
          <div className="no-sales">
            <span>NO SALES</span>
            <p>サービス営業や勧誘、リード獲得を目的とした参加はお断りしています。</p>
          </div>
        </aside>
        <div className="form-wrap">
          <div className="form-head"><span>APPLICATION FORM</span><p><b>*</b> 必須項目</p></div>
          <JoinForm />
        </div>
      </section>
    </PageShell>
  );
}
