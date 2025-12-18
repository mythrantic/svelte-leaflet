<script>
	import { setContext } from 'svelte';
	import L from 'leaflet';

	import EventBridge from '$lib/EventBridge';

	let { options = {}, events = [], children } = $props();

	let map = $state(null);
	let eventBridge = $state(null);

	setContext(L, {
		getMap: () => map
	});

	function initialize(container) {
		map = L.map(container, options);
		eventBridge = new EventBridge(map, (name, detail) => {
			// Dispatch custom events on the container
			container.dispatchEvent(new CustomEvent(name, { detail }));
		}, events);
		return {
			destroy: () => {
				eventBridge?.unregister();
				map?.remove();
			}
		};
	}

	export function getMap() {
		return map;
	}
</script>

<div style="height:100%; width:100%;" use:initialize>
	{#if map}
		{@render children?.()}
	{/if}
</div>
