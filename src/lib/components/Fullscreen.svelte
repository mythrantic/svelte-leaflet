<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';
	import 'leaflet.fullscreen';

	const { getMap } = getContext(L);

	let { position = 'bottomright', options = {} } = $props();

	let fullscreen = $state(null);

	onMount(() => {
		fullscreen = L.control.fullscreen(options).addTo(getMap());

		return () => {
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
