# Krontium Project Instructions

This project follows the lightweight Deterministic Trace Protocol.

## Source Of Truth

Use project-local files before global preferences or memory:

1. `docs/vision.md`
2. `docs/content-model.md`
3. `README.md`
4. Existing source files and build scripts

Historical notes and brainstorming are advisory only. Project truth lives in the current docs.

## Product Direction

Krontium is a no-text mineral generative art website. The site should foreground browser-native material pressure, crystalline motion, ore-like color, and the word's mineral feeling without language UI or explanation.

## Implementation

- Target static deployment on GitHub Pages.
- Prefer Astro pages with browser-native generative art components.
- Use React only if an interaction requires it.
- Keep visible copy at zero by default.
- Language and old chapter routes may remain for URL compatibility, but they should render the same no-text artwork unless explicitly requested.

## Verification

Before deployment, run:

```sh
npm run check
npm run build
```

When visual changes are meaningful, inspect desktop and mobile widths.
