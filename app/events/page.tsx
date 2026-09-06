import type { Metadata } from "next";
import { EventCard } from "../components/EventCard";
import { PageHero, PageShell } from "../components/PageShell";
import { events } from "../data/events";

export const metadata: Metadata = {
  title: "イベント",
  description: "HRコモンズで開催予定の、採用担当者限定クローズドイベントをご紹介します。",
};

export default function EventsPage() {
  return (
    <PageShell>
      <PageHero
        label="EVENTS"
        title={<>同じ問いを持つ人と、<br /><em>深く話す時間。</em></>}
        lead={<>参加者同士の対話を中心にした、少人数のクローズドセッション。<br />表に出にくい実務のリアルを持ち寄ります。</>}
      />
      <section className="subpage-section">
        <div className="filter-row">
          <button className="filter-active" type="button">開催予定</button>
          <button type="button">過去のイベント</button>
          <span>{String(events.length).padStart(2, "0")} SESSIONS</span>
        </div>
        <div className="event-list">
          {events.map((event) => <EventCard key={event.slug} event={event} />)}
        </div>
        <p className="sample-note">※ 日程・登壇者情報はサイト構成確認用のサンプルです。</p>
      </section>
    </PageShell>
  );
}
