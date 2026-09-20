// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { render } from 'svelte/server';

import LeafletMap from '$lib/components/LeafletMap.svelte';

describe('SSR safety', () => {
	it('importing the library entry does not throw without a DOM', async () => {
		const mod = await import('$lib/index.js');
		expect(mod).toBeDefined();
		expect(mod.LeafletMap).toBeDefined();
		expect(typeof mod.toLatLngBounds).toBe('function');
		expect(typeof mod.fitToPoints).toBe('function');
		expect(typeof mod.resolveColor).toBe('function');
	});

	it('renders LeafletMap server-side without a DOM', () => {
		const { body } = render(LeafletMap, { props: { height: '300px' } });
		expect(body).toBeTypeOf('string');
		expect(body.length).toBeGreaterThan(0);
	});
});
