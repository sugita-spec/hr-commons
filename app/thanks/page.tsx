import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/PageShell";

export const metadata: Metadata = {
  title: "お申し込みを受け付けました",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <PageShell>
      <section className="thanks">
        <div className="thanks-mark"><span>✓</span></div>
        <div className="eyebrow"><span /> APPLICATION RECEIVED</div>
        <h1>お申し込みを<br />受け付けました。</h1>
        <p>HRコモンズに関心をお寄せいただき、ありがとうございます。<br />内容を確認し、原則3営業日以内にメールでご連絡します。</p>
        <div className="thanks-next">
          <small>NEXT STEP</small>
          <div><span>01</span><p>運営が申し込み内容を確認します</p></div>
          <div><span>02</span><p>ご登録のメールアドレスへご案内します</p></div>
        </div>
        <Link className="text-link" href="/">トップページへ戻る <span>→</span></Link>
      </section>
    </PageShell>
  );
}
