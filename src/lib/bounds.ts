import L from '$lib/leaflet';

/**
 * Bounds helpers for LeafletMap consumers.
 *
 * These accept the shapes consumers usually have on hand — `[lat, lng]` pairs,
 * `{ lat, lng }` objects, `L.LatLng` instances or an existing
 * `L.LatLngBounds` — and silently ignore anything invalid instead of throwing.
 */

type BoundsLike = {
	isValid: () => boolean;
	getSouthWest: () => unknown;
};

function isFiniteNumber(value: unknown): value is number {
	return typeof value === 'number' && Number.isFinite(value);
}

function isValidLatLng(lat: unknown, lng: unknown): boolean {
	return isFiniteNumber(lat) && isFiniteNumber(lng) && Math.abs(lat) <= 90 && Math.abs(lng) <= 180;
}

function normalizePoint(point: unknown) {
	if (!L || !point) return null;

	if (Array.isArray(point)) {
		const [lat, lng] = point;
		return isValidLatLng(lat, lng) ? L.latLng(lat as number, lng as number) : null;
	}

	if (typeof point === 'object') {
		const { lat, lng } = point as { lat?: unknown; lng?: unknown };
		return isValidLatLng(lat, lng) ? L.latLng(lat as number, lng as number) : null;
	}

	return null;
}

/**
 * Build a valid `L.LatLngBounds` from a list of points, or return `null` when
 * there is nothing usable. An existing valid bounds object is passed through
 * unchanged.
 */
export function toLatLngBounds(points: unknown) {
	if (!L || points === undefined || points === null) return null;

	if (typeof (points as BoundsLike).getSouthWest === 'function') {
		const bounds = points as BoundsLike;
		return bounds.isValid() ? (points as ReturnType<typeof L.latLngBounds>) : null;
	}

	if (!Array.isArray(points)) return null;

	const latLngs = [];
	for (const point of points) {
		const latLng = normalizePoint(point);
		if (latLng) latLngs.push(latLng);
	}

	if (latLngs.length === 0) return null;

	return L.latLngBounds(latLngs);
}

type FitTarget = {
	fitBounds: (bounds: unknown, options?: unknown) => unknown;
};

/**
 * Fit the map to the given points. Returns `true` when a fit happened and
 * `false` when the list was empty or entirely invalid (in which case the map is
 * left untouched).
 */
export function fitToPoints(map: FitTarget, points: unknown, options?: unknown): boolean {
	if (!map || typeof map.fitBounds !== 'function') return false;

	const bounds = toLatLngBounds(points);
	if (!bounds) return false;

	map.fitBounds(bounds, options);
	return true;
}
