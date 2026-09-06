import Link from "next/link";
import { TrackedLink } from "./TrackedLink";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link className="brand brand-light" href="/">
            <span className="brand-mark brand-mark-light">H</span>
            <span>HRコモンズ</span>
          </Link>
          <p>採用のリアルを、ひらく。<br />採用担当者限定のクローズドコミュニティ。</p>
        </div>
        <div className="footer-links">
          <div>
            <span>COMMUNITY</span>
            <Link href="/about">コミュニティについて</Link>
            <Link href="/events">イベント</Link>
            <TrackedLink href="/join" location="footer">参加申し込み</TrackedLink>
          </div>
          <div>
            <span>INFORMATION</span>
            <Link href="/company">運営者情報</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 HR COMMONS</span>
        <span>FOR RECRUITERS, BY RECRUITERS</span>
      </div>
    </footer>
  );
}
