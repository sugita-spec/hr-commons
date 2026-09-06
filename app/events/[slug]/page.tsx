import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { TrackedLink } from "../../components/TrackedLink";
import { events, getEvent } from "../../data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "イベントが見つかりません" };
  return {
    title: event.title,
    description: event.description,
    openGraph: { title: `${event.title}｜HRコモンズ`, description: event.description, images: [] },
    twitter: { title: `${event.title}｜HRコモンズ`, description: event.description, images: [] },
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <PageShell>
      <article className="event-detail">
        <div className="event-detail-top">
          <div className="event-detail-date"><strong>{event.dateLabel}</strong><span>{event.day} / {event.time}</span></div>
          <div className="event-detail-title">
            <div className="event-meta"><span>{event.tag}</span><span className="status">{event.status}</span></div>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        </div>
        <div className="event-detail-body">
          <aside>
            <dl>
              <div><dt>DATE</dt><dd>{event.date.replaceAll("-", ".")}<br />{event.time}</dd></div>
              <div><dt>PLACE</dt><dd>{event.format}</dd></div>
              <div><dt>CAPACITY</dt><dd>{event.capacity}</dd></div>
              <div><dt>ELIGIBILITY</dt><dd>事業会社の採用担当者・人事責任者</dd></div>
            </dl>
            <TrackedLink className="button button-primary" href="/join" location={`event_${event.slug}`}>参加を申し込む <span>↗</span></TrackedLink>
          </aside>
          <div className="event-article">
            <section>
              <small>ABOUT THIS SESSION</small>
              <h2>このセッションについて</h2>
              <p>採用活動の現場には、記事やセミナーでは共有しにくい判断があります。このセッションでは、参加者それぞれが実際の経験や問いを持ち寄り、少人数で率直に話します。</p>
              <p>正解を学ぶ講義ではありません。他社の背景を知り、自社の採用を考え直すための視点を持ち帰る時間です。</p>
            </section>
            <section>
              <small>AGENDA</small>
              <h2>当日の流れ</h2>
              <ol>
                <li><span>01</span><div><strong>チェックイン</strong><p>参加者の現在地と、今日話したい問いを共有します。</p></div></li>
                <li><span>02</span><div><strong>ゲストトーク</strong><p>テーマに関する実践と、そこから得た学びを伺います。</p></div></li>
                <li><span>03</span><div><strong>ラウンドテーブル</strong><p>少人数に分かれ、それぞれの経験を持ち寄って対話します。</p></div></li>
                <li><span>04</span><div><strong>クロージング</strong><p>得られた視点と、明日から試したいことを言葉にします。</p></div></li>
              </ol>
            </section>
            <section>
              <small>GUEST</small>
              <h2>登壇ゲスト</h2>
              <div className="speaker-detail">
                <div className={`speaker-avatar ${event.speaker.color}`}>{event.speaker.initials}</div>
                <div><small>{event.speaker.role}</small><h3>{event.speaker.name}</h3><p>事業会社で中途採用の戦略設計から実行までを担当。現場との採用体制づくりや、候補者体験の改善に取り組んでいます。</p></div>
              </div>
              <p className="sample-note">※ 日程・登壇者情報はサイト構成確認用のサンプルです。</p>
            </section>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
