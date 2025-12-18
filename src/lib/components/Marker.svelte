<script>
	import { getContext, setContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getMap } = getContext(L);

	const defaultIcon = L.icon({
		iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
		iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		tooltipAnchor: [16, -28],
		shadowSize: [41, 41]
	});

	let { 
		latLng,
		zIndexOffset = 0,
		icon = defaultIcon,
		opacity = 1.0,
		options = {},
		events = [],
		rotationAngle = 0,
		rotationOrigin = 'center bottom',
		children
	} = $props();

	let marker = $state(null);
	let eventBridge = $state(null);

	setContext(L.Layer, {
		getLayer: () => marker
	});
	setContext(L.Marker, {
		getMarker: () => marker
	});

	onMount(() => {
		marker = L.marker(latLng, options).addTo(getMap());
		eventBridge = new EventBridge(marker, (name, detail) => {
			// Event handling without createEventDispatcher
		}, events);

		return () => {
			eventBridge?.unregister();
			marker?.removeFrom(getMap());
		};
	});

	$effect(() => {
		if (marker) {
			marker.setLatLng(latLng);
			marker.setZIndexOffset(zIndexOffset);
			marker.setIcon(icon);
			marker.setOpacity(opacity);
			marker.setRotationAngle(rotationAngle);
			marker.setRotationOrigin(rotationOrigin);
		}
	});

	export function getMarker() {
		return marker;
	}
</script>

<div>
	{#if marker}
		{@render children?.()}
	{/if}
</div>
