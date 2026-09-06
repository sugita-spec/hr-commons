"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function JoinForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  const track = (event: string, params: Record<string, unknown> = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
    window.gtag?.("event", event, params);
  };

  const handleFocus = () => {
    if (!started) {
      setStarted(true);
      track("join_form_start");
    }
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    track("join_form_submit");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("submit_failed");
      }
      track("join_form_success");
      router.push("/thanks");
    } catch {
      track("join_form_error");
      setError("送信できませんでした。時間をおいて、もう一度お試しください。");
      setSending(false);
    }
  }

  return (
    <form className="join-form" onSubmit={handleSubmit} onFocus={handleFocus}>
      <div className="form-grid">
        <label>
          <span>お名前 <b>必須</b></span>
          <input name="name" autoComplete="name" required placeholder="例）山田 太郎" />
        </label>
        <label>
          <span>会社名 <b>必須</b></span>
          <input name="company" autoComplete="organization" required placeholder="例）株式会社○○" />
        </label>
        <label>
          <span>部署・役職 <b>必須</b></span>
          <input name="role" autoComplete="organization-title" required placeholder="例）人事部 採用マネージャー" />
        </label>
        <label>
          <span>会社メールアドレス <b>必須</b></span>
          <input name="email" type="email" autoComplete="email" required placeholder="name@company.jp" />
        </label>
        <label>
          <span>年間の中途採用人数 <b>必須</b></span>
          <select name="hiringVolume" required defaultValue="">
            <option value="" disabled>選択してください</option>
            <option>10名未満</option>
            <option>10〜29名</option>
            <option>30〜49名</option>
            <option>50〜99名</option>
            <option>100名以上</option>
          </select>
        </label>
        <label>
          <span>主な担当領域 <b>必須</b></span>
          <select name="area" required defaultValue="">
            <option value="" disabled>選択してください</option>
            <option>中途採用</option>
            <option>新卒・中途採用</option>
            <option>採用企画・人事企画</option>
            <option>人事責任者・経営</option>
          </select>
        </label>
      </div>
      <label className="form-wide">
        <span>現在の採用課題 <b>必須</b></span>
        <textarea name="challenge" required rows={4} placeholder="採用活動で感じている課題を教えてください。" />
      </label>
      <label className="form-wide">
        <span>参加したい理由</span>
        <textarea name="reason" rows={4} placeholder="このコミュニティで話したいこと、知りたいことなど" />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" required name="privacy" />
        <span><Link href="/privacy">プライバシーポリシー</Link>に同意する</span>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary submit-button" type="submit" disabled={sending}>
        {sending ? "送信中…" : "参加を申し込む"} <span>↗</span>
      </button>
      <p className="form-note">お申し込み内容を確認後、通常3営業日以内にご連絡します。</p>
    </form>
  );
}
