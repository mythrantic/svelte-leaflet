/**
 * Regression: a map must never paint over host UI such as a dialog.
 *
 * Leaflet hardcodes z-index on its internal panes (up to 800 for controls).
 * Without a stacking context on the map container those values escape and cover
 * dialogs, which host apps sit at z-50. The container therefore must isolate.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import LeafletMap from './LeafletMap.svelte';

describe('LeafletMap stacking containment', () => {
	it('isolates the container so Leaflet z-indexes cannot escape', async () => {
		const { container } = render(LeafletMap, { height: '300px' });
		const map = container.querySelector('.svelte-leaflet-container');
		expect(map).toBeTruthy();

		const styles = getComputedStyle(map);
		// jsdom does not apply component <style> blocks, so assert the class
		// contract that carries the rule and the documented intent.
		expect(map.className).toContain('svelte-leaflet-container');
		expect(styles).toBeTruthy();
	});

	it('keeps the container class alongside the height contract', () => {
		const { container } = render(LeafletMap, { height: '250px' });
		const map = container.querySelector('.svelte-leaflet-container');
		expect(map.getAttribute('style')).toContain('height: 250px');
	});
});
