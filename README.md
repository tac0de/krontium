# Krontium

Krontium is a multilingual archive-style website for a grounded epic fantasy long-form novel.

The site is built with Astro for static deployment on GitHub Pages. It serves English, Korean, Chinese, and Japanese entry points with a shared world model.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
```

## Project Shape

- `docs/vision.md`: canonical visual and story direction
- `docs/content-model.md`: data and localization model
- `src/data/`: shared world and language data
- `src/pages/`: Astro routes
- `.github/workflows/deploy.yml`: GitHub Pages deployment

## Deployment

This repository deploys to GitHub Pages through GitHub Actions.
