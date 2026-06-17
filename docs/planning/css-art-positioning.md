# Mineral Field Positioning

Status: active direction for the website.

## Decision

Krontium's website is a no-text mineral generative art site.

## Design Brief

Audience:

- visitors encountering an unidentified mineral field
- the author, using the site as a material/wordmark identity lab

Primary action:

- look and inspect without reading

Non-goals:

- publish fiction
- build explanatory content UI
- explain a world
- market with a generic hero section

## Visual Direction

Build a browser-native mineral pressure field.

- black mineral core
- crystalline shards
- accretion dust and pressure rings
- graphite darkness, bone-gold highlights, oxidized green-blue and ember accents
- slow rotational mass
- no visible labels

The page should feel like Krontium is a material under pressure, not a poster.

## Implementation Rules

- Prefer Three.js/WebGL for the primary visual field.
- Use CSS for framing, darkness, grain, and responsive canvas behavior.
- Keep visible copy at zero.
- Preserve old routes only for compatibility.
- Avoid cards, panels, explanatory HUDs, and labels.
- Reject variants that read as mascot, map, or generic sci-fi dashboard.
