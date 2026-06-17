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

Krontium is a multilingual literary archive for a grounded epic fantasy novel. The site should feel like a historical record, biological specimen room, war chronicle, and monastic archive, not a generic fantasy landing page.

## Implementation

- Target static deployment on GitHub Pages.
- Prefer Astro pages and content-first structure.
- Use React only for isolated interactive islands.
- Keep typography readable for long-form fiction.
- Maintain language routes for English, Korean, Chinese, and Japanese.

## Verification

Before deployment, run:

```sh
npm run check
npm run build
```

When visual changes are meaningful, inspect desktop and mobile widths.
