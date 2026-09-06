import Link from "next/link";
import { EventCard } from "./components/EventCard";
import { SectionIntro } from "./components/SectionIntro";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TrackedLink } from "./components/TrackedLink";
import { events } from "./data/events";

export const metadata = {
  title: "採用担当者が、採用担当者と本音で話せる場所",
  description:
    "Web検索だけでは分からない、他社のリアルな採用を共有する採用担当者限定コミュニティ。",
};

const worries = [
  { number: "01", title: "他社の「実際」が\n見えない", text: "成功事例は見つかっても、そこに至るまでの試行錯誤や失敗はなかなか表に出てこない。" },
  { number: "02", title: "同じ立場で話せる\n相手が少ない", text: "採用の悩みは社内で相談しづらい。判断の妥当性を確かめる機会も限られている。" },
  { number: "03", title: "営業抜きで情報交換\nできる場がない", text: "有益そうな場でも、サービス紹介が中心。純粋に実務の話だけをしたい。" },
];

const features = [
  { id: "01", en: "ROUNDTABLE", title: "少人数の対話", text: "一方的に聞くだけではなく、問いを持ち寄り、参加者全員で話すラウンドテーブル。" },
  { id: "02", en: "REAL CASES", title: "実務の共有", text: "完成された成功談ではなく、現場で起きた迷いや失敗、判断の背景まで共有します。" },
  { id: "03", en: "TRUSTED PEERS", title: "継続的なつながり", text: "立場の近い採用担当者同士で、イベント後も続く信頼関係をつくります。" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> FOR RECRUITERS, BY RECRUITERS</div>
          <h1>採用担当者が、<br />採用担当者と<br /><em>本音で話せる場所。</em></h1>
          <p className="hero-lead">
            Web検索だけでは分からない、他社のリアルな採用を共有する<br className="desktop-only" />採用担当者限定コミュニティ。
          </p>
          <div className="hero-actions">
            <TrackedLink className="button button-primary" href="/join" location="hero">コミュニティに参加する <span>↗</span></TrackedLink>
            <Link className="text-link" href="/events">開催予定を見る <span>→</span></Link>
          </div>
          <div className="trust-row" aria-label="コミュニティの特徴">
            <span>審査制</span><i />
            <span>採用担当者限定</span><i />
            <span>営業目的の参加禁止</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="HRコモンズのコミュニティイメージ">
          <div className="panel-grid" aria-hidden="true" />
          <div className="panel-top">
            <span className="live-dot" /> NEXT SESSION
            <span>2026.10.16</span>
          </div>
          <div className="conversation-card card-one">
            <div className="avatar avatar-a">採</div>
            <div>
              <span>採用責任者 / SaaS</span>
              <p>「現場を巻き込む採用設計、<br />他社ではどうしていますか？」</p>
            </div>
          </div>
          <div className="conversation-card card-two">
            <div className="avatar avatar-b">人</div>
            <div>
              <span>人事マネージャー / IT</span>
              <p>成功談だけではなく、<br />うまくいかなかった話も。</p>
            </div>
          </div>
          <div className="panel-footer">
            <div><strong>10–12</strong><span>people / session</span></div>
            <p>少人数だから、<br />肩書きを越えて話せる。</p>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <span>採用のリアルを、ひらく。</span><span>OPEN THE REAL CONVERSATION.</span><span>採用のリアルを、ひらく。</span><span>OPEN THE REAL CONVERSATION.</span>
      </div>

      <section className="section worries-section">
        <SectionIntro number="01" label="WHY WE EXIST" title={<>検索しても、採用の<br />本当のところまでは分からない。</>} />
        <div className="worry-grid">
          {worries.map((item) => (
            <article key={item.number} className="worry-card">
              <span>{item.number}</span>
              <h3>{item.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="section-statement">HRコモンズは、成功談だけでなく、<br /><strong>迷いや失敗も安心して共有できる場所</strong>です。</p>
      </section>

      <section className="section features-section">
        <SectionIntro
          number="02"
          label="WHAT WE DO"
          title={<>知るだけではなく、<br />話すことで見えてくる。</>}
          copy={<>採用の答えは、会社ごとに違う。<br />だからこそ、互いの経験を持ち寄ります。</>}
        />
        <div className="feature-list">
          {features.map((feature) => (
            <article key={feature.id} className="feature-row">
              <div className="feature-number">{feature.id}</div>
              <div className="feature-symbol" aria-hidden="true"><span /><span /><span /></div>
              <div><small>{feature.en}</small><h3>{feature.title}</h3></div>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section events-section">
        <SectionIntro
          number="03"
          label="UPCOMING EVENTS"
          title={<>次の対話が、<br />採用を一歩前へ進める。</>}
          copy={<>参加者同士の対話を中心にした、<br />少人数のクローズドセッションです。</>}
        />
        <div className="event-list">
          {events.map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
        <div className="section-link-wrap"><Link className="text-link" href="/events">すべてのイベントを見る <span>→</span></Link></div>
      </section>

      <section className="section guests-section">
        <SectionIntro number="04" label="GUESTS" title={<>肩書きではなく、<br />経験を持ち寄る。</>} />
        <div className="guest-grid">
          {events.map((event, index) => (
            <article className="guest-card" key={event.slug}>
              <div className={`guest-portrait portrait-${index + 1}`}>
                <div className="portrait-ring" />
                <span>{event.speaker.initials}</span>
                <small>GUEST 0{index + 1}</small>
              </div>
              <div className="guest-copy">
                <small>{event.speaker.role}</small>
                <h3>{event.speaker.name}</h3>
                <p>{event.title}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="sample-note">※ 登壇者情報はサイト構成確認用のサンプルです。</p>
      </section>

      <section className="community-band">
        <div className="section community-inner">
          <SectionIntro
            number="05"
            label="OUR COMMON GROUND"
            title={<>立場が近いから、<br />話せることがある。</>}
            copy={<>HRコモンズは、採用に向き合う実務者が、<br />互いを尊重しながら話せる場をつくります。</>}
          />
          <div className="principles">
            {[
              ["01", "採用担当者・人事責任者限定"],
              ["02", "営業・勧誘を目的とした参加は禁止"],
              ["03", "社外秘や個人情報を尊重"],
              ["04", "持ち帰れるのは、学びだけ"],
              ["05", "運営による参加審査あり"],
            ].map(([no, text]) => <div key={no}><span>{no}</span><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section scenes-section">
        <SectionIntro number="06" label="SCENES" title={<>聞く。話す。考える。<br />同じ目線で、深く。</>} />
        <div className="scene-grid">
          <div className="scene scene-large">
            <div className="scene-board">
              <span>HIRING<br />COMMONS</span>
              <i>OPEN<br />DIALOGUE</i>
            </div>
            <div className="people-row" aria-hidden="true">{[1,2,3,4,5].map((n) => <span key={n} />)}</div>
            <small>ROUND TABLE / TOKYO</small>
          </div>
          <div className="scene scene-small scene-blue">
            <div className="chat-lines"><i /><i /><i /></div>
            <small>HONEST QUESTIONS</small>
          </div>
          <div className="scene scene-small scene-light">
            <div className="note-stack"><i /><i /><i /></div>
            <small>SHARED LEARNINGS</small>
          </div>
        </div>
      </section>

      <section className="section voices-section">
        <SectionIntro number="07" label="VOICES" title={<>ここでしか聞けない話が、<br />次の判断を変えていく。</>} />
        <div className="voice-grid">
          <blockquote>
            <span>“</span>
            <p>成功事例ではなく、実際にうまくいかなかった話まで聞けたことが印象的でした。</p>
            <footer>IT企業／採用責任者<br />年間採用30〜50名</footer>
          </blockquote>
          <blockquote className="voice-featured">
            <span>“</span>
            <p>同じ規模・同じフェーズの会社で採用に向き合う方と、営業抜きで率直に話せる。ありそうでなかった場だと思います。</p>
            <footer>SaaS企業／人事マネージャー<br />年間採用50〜100名</footer>
          </blockquote>
          <blockquote>
            <span>“</span>
            <p>答えを教わるというより、自社で考えるための視点を持ち帰れました。</p>
            <footer>Web企業／採用担当<br />年間採用10〜30名</footer>
          </blockquote>
        </div>
        <p className="sample-note">※ 参加者の声はサイト構成確認用のサンプルです。</p>
      </section>

      <section className="section flow-section">
        <SectionIntro
          number="08"
          label="HOW TO JOIN"
          title={<>参加までの流れ。</>}
          copy={<>安心して話せる場を保つため、<br />お申し込み内容を運営が確認します。</>}
        />
        <div className="flow-grid">
          {[
            ["01", "参加申し込み", "フォームから、現在の採用状況や参加理由をお知らせください。"],
            ["02", "運営による確認", "コミュニティの参加対象に合うか、運営が内容を確認します。"],
            ["03", "参加案内", "原則3営業日以内に、メールで今後のご案内をお送りします。"],
            ["04", "コミュニティへ", "イベントや継続的な情報交換にご参加いただけます。"],
          ].map(([no, title, text]) => (
            <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-grid" aria-hidden="true" />
        <div className="eyebrow eyebrow-light"><span /> JOIN HR COMMONS</div>
        <h2>話せる相手がいると、<br />採用はもっと前に進む。</h2>
        <p>サービス営業を目的としたコミュニティではありません。<br />採用に向き合う実務者同士で、率直に話しませんか。</p>
        <TrackedLink className="button button-acid" href="/join" location="final_cta">コミュニティに参加する <span>↗</span></TrackedLink>
      </section>

      <SiteFooter />
    </main>
  );
}
