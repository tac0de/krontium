# Krontium Project Instructions

This project follows the lightweight Deterministic Trace Protocol.

## Source Of Truth

Use project-local files before global preferences or memory:

1. `docs/vision.md`
2. `docs/content-model.md`
3. `README.md`
4. Existing source files and build scripts

Historical notes and brainstorming are advisory only. Do not treat them as canonical story truth unless they are written into `docs/`.

## Product Direction

Krontium is an experimental no-text CSS art website. Treat the novel itself as out of scope for the website unless the user explicitly asks to publish prose. The site should foreground kinetic browser-native composition and abstract biological/mythic motifs rather than a conventional book site, archive, landing page, lore encyclopedia, or multilingual text surface.

## Implementation

- Target static deployment on GitHub Pages.
- Prefer Astro pages and content-first structure.
- Use React only for isolated interactive islands.
- Keep visible copy at zero by default.
- Language routes may remain for URL compatibility, but they should not create visible multilingual UI unless explicitly requested.

## Verification

Before deployment, run:

```sh
npm run check
npm run build
```

When visual changes are meaningful, inspect desktop and mobile widths.
