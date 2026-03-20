# Stitch AI Homepage (Japanese First)

Stitch から出力したデザイン資産（`ai_interactive` / `ai_testing` / `ai_deployment`）をベースに、
日語版を主軸として Astro で再構築した静的サイトです。

## Stack

- Astro (static output)
- Custom CSS (Digital Architect tone)
- GitHub Actions + GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. リポジトリの `Settings > Pages` で `Source = GitHub Actions` を選択
2. `main` へ push
3. `.github/workflows/deploy.yml` が実行され、自動で公開

## Notes

- 既存の 3 画面（開発/テスト/デプロイ）は内容を反映。
- 未作成だった画面（要件定義/設計/保守）は同じデザイン言語でプレースホルダー実装。
- GitHub Pages のサブパス配信に対応するため、内部リンクと画像は `BASE_URL` 対応済み。
