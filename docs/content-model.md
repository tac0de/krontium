# Krontium Content Model

## Languages

Supported language routes:

- English: `/en/`
- Korean: `/ko/`
- Chinese: `/zh/`
- Japanese: `/ja/`

The same route structure should exist across languages when possible.

## World Data

Shared world data lives in `src/data/krontium.ts`.

Initial entities:

- ancient gods
- peoples
- neutral orders
- historical pressures
- sample chronicle excerpts

## Long-form Fiction

Chapters should eventually move into content collections or MDX files. The first prototype keeps a sample chapter page in Astro to establish layout, navigation, annotations, and multilingual routing.

## Routing Pattern

```txt
/
/{lang}/
/{lang}/chronicles/book-01/chapter-001/
```
