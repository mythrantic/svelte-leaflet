---
'@mythrantic/svelte-leaflet': minor
---

Add lifecycle and view primitives so consumers stop reimplementing them:

- `LeafletMap` now handles resizing automatically (`autoResize`, on by default) with a
  `ResizeObserver` that is disconnected on destroy and guarded against a removed map.
- `LeafletMap` has an explicit height contract: a `height` prop defaulting to `400px`, and a
  development warning when no height can be resolved, so the map is never invisibly blank.
- The package is SSR-safe by default. Leaflet is loaded lazily in the browser
  (`src/lib/leaflet.js`), so importing or server-rendering `LeafletMap` no longer throws
  `window is not defined` and consumers no longer need dynamic imports in `onMount`.
- Reactive view control: `center` and `zoom` props update the map, and an optional
  `onViewChange` callback reports user pans/zooms without feedback loops.
- New exported helpers: `toLatLngBounds`, `fitToPoints` (ignore invalid points) and
  `resolveColor` (resolve CSS custom properties to real colours for Leaflet options).
- Vector layers (`Circle`, `CircleMarker`, `Polygon`, `Polyline`, `Rectangle`) resolve
  `color`/`fillColor` through `resolveColor`, so theme tokens work.
- The demo-only `stores.js` was modernised to a Svelte 5 runes module
  (`stores.svelte.js`); it is not part of the public API.
