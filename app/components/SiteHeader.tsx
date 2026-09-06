import Link from "next/link";
import { TrackedLink } from "./TrackedLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="HRコモンズ ホーム">
        <span className="brand-mark" aria-hidden="true">H</span>
        <span>HRコモンズ</span>
      </Link>
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        <Link href="/events">イベント</Link>
        <Link href="/about">コミュニティについて</Link>
        <TrackedLink className="nav-cta" href="/join" location="header">
          コミュニティに参加する
        </TrackedLink>
      </nav>
    </header>
  );
}
