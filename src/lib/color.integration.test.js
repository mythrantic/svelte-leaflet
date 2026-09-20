import { describe, it, expect, beforeAll, afterEach } from 'vitest';
import { render } from '@testing-library/svelte';

import L from '$lib/leaflet';
import ColorHarness from '../../tests/ColorHarness.svelte';

beforeAll(() => {
	// jsdom has no canvas, so Leaflet would otherwise pick the Canvas renderer.
	L.Browser.svg = true;
});

afterEach(() => {
	document.documentElement.style.removeProperty('--brand-color');
});

describe('CSS-variable colour handling in vector layers', () => {
	it('resolves a theme token to a real colour', () => {
		document.documentElement.style.setProperty('--brand-color', '#00ff00');

		const { container } = render(ColorHarness, {
			props: { color: 'var(--brand-color)' }
		});

		const path = container.querySelector('.leaflet-overlay-pane path');
		expect(path).not.toBeNull();
		expect(path.getAttribute('stroke')).toBe('#00ff00');
	});

	it('falls back instead of throwing when the token cannot be resolved', () => {
		const { container } = render(ColorHarness, {
			props: { color: 'var(--does-not-exist)' }
		});

		const path = container.querySelector('.leaflet-overlay-pane path');
		expect(path).not.toBeNull();
		expect(path.getAttribute('stroke')).toBe('#3388ff');
	});
});
