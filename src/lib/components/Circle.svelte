<script>
	import { getContext, setContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	let {
		latLng,
		radius = 10,
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

	let circle = $state(null);
	let eventBridge = $state(null);

	setContext(L.Layer, {
		getLayer: () => circle
	});

	onMount(() => {
		circle = L.circle(latLng, options).addTo(getMap());
		eventBridge = new EventBridge(circle, () => {}, events);

		return () => {
			eventBridge?.unregister();
			circle?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (circle) {
			circle.setLatLng(latLng);
			circle.setRadius(radius);
			circle.setStyle({
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

	export function getCircle() {
		return circle;
	}
</script>

<div>
	{#if circle}
		{@render children?.()}
	{/if}
</div>
