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
		fill = true,
		fillColor = '#3388ff',
		fillOpacity = 0.2,
		fillRule = 'evenodd',
		options = {},
		events = [],
		children
	} = $props();

	let polygon = $state(null);
	let eventBridge = $state(null);

	setContext(L.Layer, {
		getLayer: () => polygon
	});

	onMount(() => {
		polygon = L.polygon(latLngs, options).addTo(getMap());
		eventBridge = new EventBridge(polygon, () => {}, events);

		return () => {
			eventBridge?.unregister();
			polygon?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (polygon) {
			polygon.setLatLngs(latLngs);
			polygon.setStyle({
				color: color,
				weight: weight,
				opacity: opacity,
				lineCap: lineCap,
				lineJoin: lineJoin,
				dashArray: dashArray,
				dashOffset: dashOffset,
				fill: fill,
				fillColor: fillColor,
				fillOpacity: fillOpacity,
				fillRule: fillRule
			});
		}
	});

	export function getPolygon() {
		return polygon;
	}
</script>

<div>
	{#if polygon}
		{@render children?.()}
	{/if}
</div>
