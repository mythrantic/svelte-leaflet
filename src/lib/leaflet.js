// SSR-safe Leaflet accessor.
//
// Leaflet touches `window` while its module is evaluated, so a plain
// `import L from 'leaflet'` throws "window is not defined" during SSR. That is
// why host apps previously had to dynamically `import()` this package inside
// `onMount` just to render a map.
//
// This module loads Leaflet only in the browser. During SSR it exposes a tiny
// stub so that module-level and instance-level code such as
// `setContext(L, ...)`, `getContext(L.Layer)` and `getContext(L.Marker)` keeps
// working without ever touching Leaflet itself. Every component in this package
// only calls real Leaflet APIs inside `onMount`/`$effect`, which never run
// during SSR.
//
// The `Layer` and `Marker` values are the context keys shared between
// containers and children. They only need to be stable within a single
// environment, so symbols are perfect for the server and the real Leaflet
// objects are used in the browser.
const serverLeaflet = {
	Layer: Symbol('leaflet.Layer'),
	Marker: Symbol('leaflet.Marker')
};

let leaflet = serverLeaflet;

if (typeof window !== 'undefined') {
	leaflet = (await import('leaflet')).default;

	// Marker rotation support is installed here (rather than as a side effect of
	// the package entry point) so it is present no matter which component a
	// consumer imports.
	const { installRotatedMarkers } = await import('./extensions/RotatedMarkers.js');
	installRotatedMarkers(leaflet);
}

export default leaflet;
