<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';
	import 'leaflet-routing-machine';
	import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

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
		if (start.length && destination.length) {
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
		}

		return () => {
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
