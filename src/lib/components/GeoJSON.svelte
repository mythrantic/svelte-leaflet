<script>
	import { getContext, setContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	let { data, options = {}, events = [], children } = $props();

	let geojson = $state(null);
	let eventBridge = $state(null);

	setContext(L.Layer, {
		getLayer: () => geojson
	});

	onMount(() => {
		geojson = L.geoJSON(null, options).addTo(getMap());
		eventBridge = new EventBridge(geojson, () => {}, events);

		return () => {
			eventBridge?.unregister();
			geojson?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (geojson && data) {
			geojson.clearLayers();
			geojson.addData(data);
		}
	});

	export function getGeoJSON() {
		return geojson;
	}
</script>

<div>
	{#if geojson}
		{@render children?.()}
	{/if}
</div>
