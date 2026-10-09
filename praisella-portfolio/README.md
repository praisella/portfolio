# Praisella Yosep — portfolio

A Next.js site, ready to deploy on Vercel.

## Deploy (about 5 minutes)

1. Create a new, empty repository on GitHub (e.g. `portfolio`).
2. Upload this folder to it — either drag the files into GitHub's "upload files" page, or:
   ```
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/portfolio.git
   git push -u origin main
   ```
3. In Vercel: **Add New → Project → Import** the repository. Leave every setting on its default and click **Deploy**.
4. Optional: add your own domain under **Project → Settings → Domains**.

Every push to `main` redeploys automatically.

## Edit content

All text lives in `content/projects/` — one Markdown file per project. No code needed.

- **The top block** (between the `---` lines) holds the list details: title, year, the one-line summary and result shown on the home page, the case-page headline, the role/timeline/team/tools row, and the four big numbers.
- **The body** becomes the tabs on the case page. Each `## Heading` is a tab; the first `### line` under it is the tab's big heading.
- **Rows:** write a list item as `- **Label** text` to get the two-column rows.
- **Pull quote:** start a line with `> `.
- **Images:** put them in `public/images/<project>/` and use `![description](/images/<project>/file.jpg)`. Put several images on one line to show them side by side.
- **Order:** change `order:` in the top block. Set `hasCase: false` for a brief entry with no case page.

Home-page copy (intro, ticker numbers, path, toolkit) is in `components/Hero.jsx`, `components/Ticker.jsx` and `app/page.js`. Colours and fonts are at the top of `app/globals.css` — the accent is `--accent`.

## Run locally (optional)

```
npm install
npm run dev
```
Then open http://localhost:3000.
