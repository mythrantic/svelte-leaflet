<script>
	import { getContext, onMount } from 'svelte';
	import L from '$lib/leaflet';

	const { getMap } = getContext(L);

	let { position = 'bottomright', options = {} } = $props();

	let fullscreen = $state(null);

	onMount(() => {
		let disposed = false;

		// leaflet.fullscreen is a side-effectful plugin that expects a DOM,
		// so it must only be loaded in the browser.
		(async () => {
			if (typeof window === 'undefined') return;

			await import('leaflet.fullscreen');

			if (disposed) return;

			fullscreen = L.control.fullscreen(options).addTo(getMap());
		})();

		return () => {
			disposed = true;
			fullscreen?.remove();
		};
	});

	$effect(() => {
		if (fullscreen) {
			fullscreen.setPosition(position);
		}
	});

	export function getFullscreen() {
		return fullscreen;
	}
</script>
