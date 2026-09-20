import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import { tick } from 'svelte';

import LeafletMap from '$lib/components/LeafletMap.svelte';
import MapHarness from '../../../tests/MapHarness.svelte';

class MockResizeObserver {
	static instances = [];

	constructor(callback) {
		this.callback = callback;
		this.disconnected = false;
		this.observed = [];
		MockResizeObserver.instances.push(this);
	}

	observe(element) {
		this.observed.push(element);
	}

	unobserve() {}

	disconnect() {
		this.disconnected = true;
	}
}

beforeEach(() => {
	MockResizeObserver.instances = [];
	globalThis.ResizeObserver = MockResizeObserver;
});

describe('LeafletMap height contract', () => {
	it('mounts a non-blank map when a height is given', () => {
		const { container } = render(LeafletMap, {
			props: {
				height: '320px',
				options: { center: [0, 0], zoom: 2 }
			}
		});

		expect(container.querySelector('.leaflet-container')).not.toBeNull();

		const sized = [...container.querySelectorAll('div')].find((el) =>
			(el.getAttribute('style') ?? '').includes('320px')
		);
		expect(sized).toBeDefined();
		expect(sized.getAttribute('style')).toContain('width: 100%');
	});

	it('applies a default height so the map is never invisibly blank', () => {
		const { container } = render(LeafletMap, {
			props: { options: { center: [0, 0], zoom: 2 } }
		});

		const sized = [...container.querySelectorAll('div')].find((el) =>
			(el.getAttribute('style') ?? '').includes('height')
		);
		expect(sized).toBeDefined();
		expect(sized.getAttribute('style')).toContain('400px');
	});

	it('warns in development when no height is supplied and there is no CSS height', () => {
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

		render(LeafletMap, {
			props: {
				height: null,
				options: { center: [0, 0], zoom: 2 }
			}
		});

		const heightWarning = warn.mock.calls.find(([message]) =>
			String(message).toLowerCase().includes('height')
		);
		expect(heightWarning).toBeDefined();
		warn.mockRestore();
	});
});

describe('LeafletMap resize handling', () => {
	it('calls invalidateSize on resize and disconnects the observer on destroy', () => {
		const { component, unmount } = render(LeafletMap, {
			props: {
				height: '300px',
				options: { center: [0, 0], zoom: 2 }
			}
		});

		const map = component.getMap();
		const spy = vi.spyOn(map, 'invalidateSize');
		const observer = MockResizeObserver.instances.at(-1);

		expect(observer).toBeDefined();
		observer.callback([]);

		expect(spy).toHaveBeenCalled();

		unmount();
		expect(observer.disconnected).toBe(true);
	});

	it('does not resize a removed map', () => {
		const { component, unmount } = render(LeafletMap, {
			props: {
				height: '300px',
				options: { center: [0, 0], zoom: 2 }
			}
		});

		const map = component.getMap();
		const observer = MockResizeObserver.instances.at(-1);

		unmount();

		const spy = vi.spyOn(map, 'invalidateSize');
		expect(() => observer.callback([])).not.toThrow();
		expect(spy).not.toHaveBeenCalled();
	});

	it('can opt out of automatic resizing', () => {
		render(LeafletMap, {
			props: {
				height: '300px',
				autoResize: false,
				options: { center: [0, 0], zoom: 2 }
			}
		});

		expect(MockResizeObserver.instances).toHaveLength(0);
	});
});

describe('LeafletMap reactive view', () => {
	it('updates the map when centre and zoom props change', async () => {
		const { component, rerender } = render(LeafletMap, {
			props: {
				height: '300px',
				center: [0, 0],
				zoom: 2
			}
		});

		const map = component.getMap();

		await rerender({ center: [10, 10], zoom: 5 });
		await tick();

		expect(map.getZoom()).toBe(5);
		expect(map.getCenter().lat).toBeCloseTo(10, 5);
		expect(map.getCenter().lng).toBeCloseTo(10, 5);
	});

	it('does not loop when the consumer feeds user pan/zoom back into props', async () => {
		let calls = 0;
		let lastView = null;

		const { component, rerender } = render(LeafletMap, {
			props: {
				height: '300px',
				center: [0, 0],
				zoom: 2,
				onViewChange: (view) => {
					calls += 1;
					lastView = view;
				}
			}
		});

		const map = component.getMap();

		// Simulate the user panning/zooming directly on the map.
		map.setView([5, 5], 4);
		await tick();

		expect(calls).toBe(1);
		expect(lastView.center.lat).toBeCloseTo(5, 5);

		// The consumer writes the emitted view back into the props, as a host app
		// with a `$derived` options object would.
		await rerender({
			center: [lastView.center.lat, lastView.center.lng],
			zoom: lastView.zoom
		});
		await tick();
		await tick();

		expect(calls).toBe(1);
	});
});

describe('LeafletMap existing components', () => {
	it('mounts Marker, Popup and TileLayer inside the map', () => {
		const { container } = render(MapHarness, {
			props: { height: '300px', center: [0, 0], zoom: 2 }
		});

		expect(container.querySelector('.leaflet-container')).not.toBeNull();
		expect(container.querySelector('.leaflet-marker-icon')).not.toBeNull();
		expect(container.querySelector('.leaflet-tile-pane img')).not.toBeNull();
	});
});
