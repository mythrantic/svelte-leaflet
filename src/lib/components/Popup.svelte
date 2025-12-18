<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getLayer } = getContext(L.Layer);

	let { events = [], options = {}, children } = $props();

	let popup = $state(null);
	let element = $state(null);
	let eventBridge = $state(null);

	onMount(() => {
		popup = L.popup(options);
		eventBridge = new EventBridge(popup, () => {}, events);
		getLayer()?.bindPopup(popup);

		return () => {
			eventBridge?.unregister();
		};
	});

	$effect(() => {
		if (popup && element) {
			popup.setContent(element);
		}
	});

	export function getPopup() {
		return popup;
	}
</script>

<div style="display: none;">
	<div bind:this={element}>
		{@render children?.()}
	</div>
</div>
