import { describe, it, expect, vi } from 'vitest';

import { toLatLngBounds, fitToPoints } from '$lib/bounds';

describe('toLatLngBounds', () => {
	it('builds bounds from valid [lat, lng] pairs', () => {
		const bounds = toLatLngBounds([
			[10, 20],
			[30, 40]
		]);

		expect(bounds).not.toBeNull();
		expect(bounds.isValid()).toBe(true);
		expect(bounds.getSouth()).toBe(10);
		expect(bounds.getWest()).toBe(20);
		expect(bounds.getNorth()).toBe(30);
		expect(bounds.getEast()).toBe(40);
	});

	it('accepts { lat, lng } objects and ignores invalid entries', () => {
		const bounds = toLatLngBounds([
			{ lat: 1, lng: 2 },
			[NaN, 2],
			'nope',
			null,
			{ lat: 5 },
			[200, 5],
			[4, 5]
		]);

		expect(bounds).not.toBeNull();
		expect(bounds.getSouth()).toBe(1);
		expect(bounds.getNorth()).toBe(4);
	});

	it('returns null for an empty list', () => {
		expect(toLatLngBounds([])).toBeNull();
	});

	it('returns null when every entry is invalid', () => {
		expect(toLatLngBounds(['x', null, [NaN, 1]])).toBeNull();
	});

	it('returns an existing bounds object unchanged', () => {
		const source = toLatLngBounds([
			[0, 0],
			[1, 1]
		]);
		expect(toLatLngBounds(source)).toBe(source);
	});
});

describe('fitToPoints', () => {
	it('fits valid points onto the map', () => {
		const calls = [];
		const map = { fitBounds: (...args) => calls.push(args) };

		expect(
			fitToPoints(map, [
				[10, 20],
				[30, 40]
			])
		).toBe(true);

		expect(calls).toHaveLength(1);
		expect(calls[0][0].getSouth()).toBe(10);
		expect(calls[0][0].getEast()).toBe(40);
	});

	it('does not call fitBounds for an empty list', () => {
		const map = { fitBounds: vi.fn() };

		expect(fitToPoints(map, [])).toBe(false);
		expect(map.fitBounds).not.toHaveBeenCalled();
	});

	it('ignores invalid entries without throwing', () => {
		const map = { fitBounds: vi.fn() };

		expect(fitToPoints(map, ['x', null, [1, 2]])).toBe(true);
		expect(map.fitBounds).toHaveBeenCalledTimes(1);
	});

	it('passes options through to fitBounds', () => {
		const map = { fitBounds: vi.fn() };
		const options = { padding: [10, 10] };

		fitToPoints(
			map,
			[
				[1, 2],
				[3, 4]
			],
			options
		);

		expect(map.fitBounds).toHaveBeenCalledWith(expect.anything(), options);
	});
});
