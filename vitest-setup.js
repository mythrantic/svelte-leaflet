import { vi } from 'vitest';

// jsdom does not implement ResizeObserver or matchMedia. LeafletMap uses the
// former; provide minimal, overridable stubs so component tests can run.
if (typeof globalThis.ResizeObserver === 'undefined') {
	globalThis.ResizeObserver = class ResizeObserver {
		observe() {}
		unobserve() {}
		disconnect() {}
	};
}

if (typeof globalThis.matchMedia === 'undefined') {
	globalThis.matchMedia = vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(),
		removeListener: vi.fn(),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}));
}
