import type { Metadata } from "next";
import { PageHero, PageShell } from "../components/PageShell";
import { TrackedLink } from "../components/TrackedLink";

export const metadata: Metadata = {
  title: "コミュニティについて",
  description: "HRコモンズが大切にすること、参加対象、コミュニティガイドラインをご案内します。",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="ABOUT HR COMMONS"
        title={<>採用のリアルを、<br /><em>安心してひらける場所。</em></>}
        lead={<>知識を受け取るだけではなく、互いの経験を持ち寄る。<br />HRコモンズは、採用実務者のためのクローズドコミュニティです。</>}
      />
      <section className="subpage-section about-story">
        <div className="story-number">01</div>
        <div>
          <small>OUR PURPOSE</small>
          <h2>検索ではたどり着けない<br />「判断の背景」を共有する。</h2>
        </div>
        <div className="story-copy">
          <p>採用活動には、ひとつの正解がありません。会社のフェーズ、事業、組織、候補者によって、必要な判断は変わります。</p>
          <p>だからこそ、完成された事例だけではなく「なぜそう考えたか」「何がうまくいかなかったか」を話せることに価値があると、私たちは考えています。</p>
        </div>
      </section>
      <section className="about-dark">
        <div className="subpage-section">
          <div className="about-dark-head"><span>02</span><small>COMMUNITY PRINCIPLES</small><h2>安心して話すための、<br />5つの約束。</h2></div>
          <div className="principle-detail">
            {[
              ["採用担当者・人事責任者限定", "参加者の立場が近いからこそ、前提を共有して深く話せます。"],
              ["営業・勧誘は禁止", "サービスの売り込みやリード獲得を目的とした参加はお断りします。"],
              ["守秘とプライバシーを尊重", "所属企業や個人を特定できる情報の無断転載・共有は禁止です。"],
              ["経験を持ち寄る", "一方的に教わるのではなく、一人ひとりの経験がコミュニティをつくります。"],
              ["運営による参加審査", "安心できる場を守るため、お申し込み内容を確認しています。"],
            ].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>
      <section className="subpage-section fit-section">
        <div><small>WHO IT&apos;S FOR</small><h2>こんな方のための<br />コミュニティです。</h2></div>
        <ul>
          <li>年間10名以上の中途採用に携わっている</li>
          <li>事業会社の採用担当者・採用責任者・人事責任者</li>
          <li>他社の採用実務から学び、自社の判断に生かしたい</li>
          <li>自身の経験も、可能な範囲で共有したい</li>
        </ul>
        <div className="fit-note"><strong>PLEASE NOTE</strong><p>採用支援サービスの営業・勧誘、情報収集のみを目的とした方はご参加いただけません。</p></div>
      </section>
      <section className="inline-cta">
        <p>立場が近いから、話せることがある。</p>
        <TrackedLink className="button button-primary" href="/join" location="about_bottom">コミュニティに参加する <span>↗</span></TrackedLink>
      </section>
    </PageShell>
  );
}
