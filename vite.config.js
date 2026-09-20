import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		globals: true,
		setupFiles: ['./vitest-setup.js'],
		projects: [
			{
				extends: true,
				resolve: {
					// Svelte 5 ships separate browser/server entry points. Component
					// tests must resolve the browser build so `mount()` exists.
					conditions: ['browser']
				},
				test: {
					name: 'client',
					environment: 'jsdom',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.ssr.test.{js,ts}']
				}
			},
			{
				extends: true,
				test: {
					name: 'ssr',
					environment: 'node',
					include: ['src/**/*.ssr.test.{js,ts}']
				}
			}
		]
	}
});
