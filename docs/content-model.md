# Krontium Content Model

## Languages

Compatibility language routes:

- English: `/en/`
- Korean: `/ko/`
- Chinese: `/zh/`
- Japanese: `/ja/`

The same route structure may exist across languages for URL compatibility, but visible multilingual UI is not part of the current no-text site.

## World Data

Shared world data lives in `src/data/krontium.ts`.

Initial entities:

- ancient gods
- peoples
- neutral orders
- historical pressures
- sample chronicle excerpts

## Long-form Fiction

Long-form fiction is intentionally out of scope for the current website. If prose is added later, use content collections or MDX. Until then, route content should remain textless and visual.

## Routing Pattern

```txt
/
/{lang}/
/{lang}/chronicles/book-01/chapter-001/
```
