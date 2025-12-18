<script>
	import { getContext, setContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	let {
		latLngBounds,
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

	let rectangle = $state(null);
	let eventBridge = $state(null);

	setContext(L.Layer, {
		getLayer: () => rectangle
	});

	onMount(() => {
		rectangle = L.rectangle(latLngBounds, options).addTo(getMap());
		eventBridge = new EventBridge(rectangle, () => {}, events);

		return () => {
			eventBridge?.unregister();
			rectangle?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (rectangle) {
			rectangle.setBounds(latLngBounds);
			rectangle.setStyle({
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

	export function getRectangle() {
		return rectangle;
	}
</script>

<div>
	{#if rectangle}
		{@render children?.()}
	{/if}
</div>
