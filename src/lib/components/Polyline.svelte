<script>
	import { getContext, setContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	let {
		latLngs,
		color = '#3388ff',
		weight = 3,
		opacity = 1.0,
		lineCap = 'round',
		lineJoin = 'round',
		dashArray = null,
		dashOffset = null,
		options = {},
		events = [],
		children
	} = $props();

	let polyline = $state(null);
	let eventBridge = $state(null);

	setContext(L.Layer, {
		getLayer: () => polyline
	});

	onMount(() => {
		polyline = L.polyline(latLngs, options).addTo(getMap());
		eventBridge = new EventBridge(polyline, () => {}, events);

		return () => {
			eventBridge?.unregister();
			polyline?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (polyline) {
			polyline.setLatLngs(latLngs);
			polyline.setStyle({
				color: color,
				weight: weight,
				opacity: opacity,
				lineCap: lineCap,
				lineJoin: lineJoin,
				dashArray: dashArray,
				dashOffset: dashOffset
			});
		}
	});

	export function getPolyline() {
		return polyline;
	}
</script>

<div>
	{#if polyline}
		{@render children?.()}
	{/if}
</div>
