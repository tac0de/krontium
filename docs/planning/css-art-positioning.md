# CSS Art Positioning

Status: active direction for the website.

## Decision

Krontium's website is an experimental no-text CSS art site. The novel remains a separate authoring project. The website should not try to explain the novel, summarize lore, localize copy, or behave like a conventional fiction archive.

## Design Brief

Audience:

- visitors encountering a strange visual artifact
- readers who may later associate the artwork with the novel
- the author, using the site as a living visual identity lab

Primary action:

- look and inspect without reading

Non-goals:

- publish novel chapters
- build a lore wiki
- explain all worldbuilding
- market with a generic hero section

## Visual Direction

Build a kinetic browser-native sculpture:

- CSS-only black bloom
- biological rings and pressure bands
- feather-rib diagonals
- ink/sea pulse fields
- root-like vertical cuts
- no visible labels

The page should be strange, quiet, and visually self-contained.

## Implementation Rules

- Prefer CSS art over image assets.
- Keep visible copy at zero.
- Preserve `/en`, `/ko`, `/zh`, `/ja` routes only for compatibility.
- Avoid reusable card UI unless it is visually transformed into an artwork element.
- Every visual section should be inspectable on mobile.
