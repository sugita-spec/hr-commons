# HRコモンズ

採用担当者が、採用担当者と本音で話せるクローズドコミュニティの公式Webサイトです。

## Tech stack

- Next.js compatible App Router (vinext)
- React 19
- TypeScript
- Tailwind CSS
- Cloudflare Workers / Sites

## Development

```bash
pnpm install
pnpm dev
```

本番ビルド:

```bash
pnpm build
```

Cloudflare Workersへのデプロイ:

```bash
pnpm deploy
```

`main`ブランチへの更新はCloudflare Workers Buildsから自動デプロイされます。

## Environment variables

`.env.example` を参考に設定してください。

- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager ID
- `NEXT_PUBLIC_GA4_ID`: GA4 Measurement ID（GTMを使わない場合）
- `NEXT_PUBLIC_FORM_ENDPOINT`: 参加フォームの送信先

## Main routes

- `/`: トップ
- `/events`: イベント一覧
- `/events/[slug]`: イベント詳細
- `/about`: コミュニティについて
- `/join`: 参加申し込み
- `/company`: 運営者情報
- `/privacy`: プライバシーポリシー
- `/thanks`: 送信完了

## Before launch

イベント、登壇者、参加者の声、運営会社情報は公開前に正式情報へ差し替えてください。
