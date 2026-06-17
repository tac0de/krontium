# Krontium Content Model

## Routes

Current public routes are compatibility shells:

- `/`
- `/en/`
- `/ko/`
- `/zh/`
- `/ja/`
- legacy deep links

They should render the same no-text mineral field unless a future decision changes the routing model.

## Data

`src/data/krontium.ts` stores material-state vocabulary only.

Current states:

- basal ore
- oxide shear
- ember inclusion

## Text

Visible text is out of scope by default. Metadata and hidden accessibility labels may exist, but the rendered page should remain no-text.

## Scope

No visible text UI by default. No content model beyond material-state vocabulary.
