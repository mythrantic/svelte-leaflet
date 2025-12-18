<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	let {
		url,
		wms = false,
		opacity = 1.0,
		zIndex = 1,
		options = {},
		events = []
	} = $props();

	let tileLayer = $state(null);
	let eventBridge = $state(null);

	onMount(() => {
		tileLayer = (!wms ? L.tileLayer(url, options) : L.tileLayer.wms(url, options)).addTo(
			getMap()
		);
		eventBridge = new EventBridge(tileLayer, () => {}, events);

		return () => {
			eventBridge?.unregister();
			tileLayer?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (tileLayer) {
			tileLayer.setUrl(url);
			tileLayer.setOpacity(opacity);
			tileLayer.setZIndex(zIndex);
		}
	});

	export function getTileLayer() {
		return tileLayer;
	}
</script>
