# Krontium

Krontium is a no-text mineral generative art site.

The site is built with Astro and Three.js for static deployment on GitHub Pages. Compatibility routes render the same browser-native artwork.

## Commands

```sh
npm install
npm run dev
npm run check
npm run build
```

## Project Shape

- `docs/vision.md`: current mineral visual direction
- `docs/content-model.md`: compatibility route and material-state model
- `src/data/`: material and compatibility-route data
- `src/pages/`: Astro routes
- `.github/workflows/deploy.yml`: GitHub Pages deployment

## Deployment

This repository deploys to GitHub Pages through GitHub Actions.
