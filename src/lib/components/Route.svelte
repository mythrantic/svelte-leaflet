<script>
	import { getContext, onMount } from 'svelte';
	import L from '$lib/leaflet';

	const { getMap } = getContext(L);

	let {
		start = [],
		destination = [],
		waypoints = [],
		onRouteFound,
		children
	} = $props();

	let routeCoordinates = $state([]);
	let summary = $state(null);
	let instructions = $state(null);
	let router = $state(null);

	let waypointsArray = $derived([start, ...waypoints, destination].map((wp) => L.latLng(wp)));

	onMount(() => {
		let disposed = false;

		// leaflet-routing-machine is a side-effectful plugin that expects a DOM,
		// so it must only be loaded in the browser.
		(async () => {
			if (typeof window === 'undefined') return;

			await import('leaflet-routing-machine');
			await import('leaflet-routing-machine/dist/leaflet-routing-machine.css');

			if (disposed || !start.length || !destination.length) return;

			router = L.Routing.control({
				waypoints: waypointsArray,
				routeWhileDragging: false,
				showAlternatives: false
			}).addTo(getMap());

			router.on('routesfound', (e) => {
				routeCoordinates = e.routes[0].coordinates;
				summary = e.routes[0].summary;
				instructions = e.routes[0].instructions;
				onRouteFound?.(e.routes[0]);
			});
		})();

		return () => {
			disposed = true;
			router?.remove();
		};
	});

	$effect(() => {
		if (router && start.length && destination.length) {
			router.setWaypoints(waypointsArray);
		}
	});
</script>

{#if start.length && destination.length}
	{@render children?.({ routeCoordinates })}
{/if}
