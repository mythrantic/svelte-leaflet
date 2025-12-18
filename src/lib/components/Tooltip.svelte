<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	const { getLayer } = getContext(L.Layer);

	let { events = [], options = {}, children } = $props();

	let tooltip = $state(null);
	let element = $state(null);
	let eventBridge = $state(null);

	onMount(() => {
		tooltip = L.tooltip(options);
		eventBridge = new EventBridge(tooltip, () => {}, events);
		getLayer()?.bindTooltip(tooltip);

		return () => {
			eventBridge?.unregister();
		};
	});

	$effect(() => {
		if (tooltip && element) {
			tooltip.setContent(element);
		}
	});

	export function getTooltip() {
		return tooltip;
	}
</script>

<div style="display: none;">
	<div bind:this={element}>
		{@render children?.()}
	</div>
</div>
