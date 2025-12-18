<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	let {
		imageUrl,
		bounds,
		opacity = 1.0,
		zIndex = 1,
		options = {},
		events = []
	} = $props();

	let imageOverlay = $state(null);
	let eventBridge = $state(null);

	onMount(() => {
		imageOverlay = L.imageOverlay(imageUrl, bounds, options).addTo(getMap());
		eventBridge = new EventBridge(imageOverlay, () => {}, events);

		return () => {
			eventBridge?.unregister();
			imageOverlay?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (imageOverlay) {
			imageOverlay.setUrl(imageUrl);
			imageOverlay.setOpacity(opacity);
			imageOverlay.setZIndex(zIndex);
		}
	});

	export function getImageOverlay() {
		return imageOverlay;
	}
</script>
