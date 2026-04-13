# Salesforce HC Personalization Demo

Vite + React mock healthcare marketing site for personalization demos (anonymous → signup/login → known user), with **mock** on-site personalization and **client-side engagement events** for Data Cloud / injected scripts.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## GitHub Pages

Production build uses `base: /makana-salesforce-personalization/` (must match the repository name for GitHub project pages). Change `repoBase` in `vite.config.ts` if you rename the repo.

Static `404.html` + `index.html` script support client-side routing on GitHub Pages (see [spa-github-pages](https://github.com/rafgraph/spa-github-pages)).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Vertical picker |
| `/v/:verticalId` | Demo site (`provider`, `payer`, `pharma`, `medtech`, `custom`) |
| `/v/:verticalId/signup` | Simulated email capture |
| `/v/:verticalId/login` | Simulated portal login |

## Events

`window` dispatches `sfhc:demo` CustomEvents; `window.dataLayer` is also appended for tag/extension integration. See `src/events/emit.ts`.

## Compliance

Demonstration only — no PHI; synthetic emails in forms. See footer disclaimer in the app.
