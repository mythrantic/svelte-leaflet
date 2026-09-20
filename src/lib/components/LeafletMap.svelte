<script>
	import { setContext, onMount } from 'svelte';
	import { DEV } from 'esm-env';
	import L from '$lib/leaflet';

	import EventBridge from '$lib/EventBridge';
	import { fitToPoints } from '$lib/bounds';

	let {
		options = {},
		events = [],
		height = '400px',
		autoResize = true,
		center = undefined,
		zoom = undefined,
		bounds = undefined,
		onViewChange = undefined,
		children
	} = $props();

	let container = $state(null);
	let map = $state(null);
	let eventBridge = $state(null);
	let resizeObserver = $state(null);

	// Plain (non-reactive) flags: `active` guards callbacks after destroy and
	// `syncing` suppresses view-change events caused by our own prop updates,
	// which is what prevents consumer feedback loops.
	let active = false;
	let syncing = 0;

	setContext(L, {
		getMap: () => map
	});

	const hasHeight = $derived(height !== null && height !== undefined && height !== '');
	const toCssSize = (value) => (typeof value === 'number' ? `${value}px` : value);

	function sameLatLng(a, b, epsilon = 1e-7) {
		return Math.abs(a.lat - b.lat) < epsilon && Math.abs(a.lng - b.lng) < epsilon;
	}

	function emitView() {
		if (!onViewChange || syncing > 0) return;
		onViewChange({ center: map.getCenter(), zoom: map.getZoom() });
	}

	function applyView() {
		// `_loaded` is Leaflet's own flag for "a view has been set". Without it
		// `getCenter()`/`setZoom()` throw on an uninitialised map (options with
		// zoom but no centre).
		if (!map || !active || !map._loaded) return;

		syncing += 1;
		try {
			if (center !== undefined && center !== null) {
				const target = L.latLng(center);
				if (!sameLatLng(map.getCenter(), target)) {
					map.setView(target, zoom ?? map.getZoom(), { animate: false });
				}
			}
			if (zoom !== undefined && zoom !== null && map.getZoom() !== zoom) {
				map.setZoom(zoom, { animate: false });
			}
		} finally {
			syncing -= 1;
		}
	}

	function applyBounds() {
		if (!map || !active || !map._loaded || bounds === undefined || bounds === null) return;

		syncing += 1;
		try {
			fitToPoints(map, bounds, { animate: false });
		} finally {
			syncing -= 1;
		}
	}

	onMount(() => {
		if (!L) return;

		const initialOptions = { ...options };
		if (center !== undefined && center !== null) initialOptions.center = center;
		if (zoom !== undefined && zoom !== null) initialOptions.zoom = zoom;

		map = L.map(container, initialOptions);
		active = true;

		eventBridge = new EventBridge(
			map,
			(name, detail) => {
				// Dispatch custom events on the container
				container.dispatchEvent(new CustomEvent(name, { detail }));
			},
			events
		);

		map.on('moveend', emitView);

		if (bounds !== undefined && bounds !== null) applyBounds();

		// Development-only height contract check. A container with no resolvable
		// height renders a silently blank map, which is the most common
		// "the map is broken" report.
		if (DEV && !hasHeight && container.clientHeight === 0) {
			console.warn(
				'[LeafletMap] The map container has zero height, so the map will be invisible. ' +
					'Pass a `height` prop (e.g. height="400px") or give a parent an explicit CSS height.'
			);
		}

		if (autoResize && typeof ResizeObserver !== 'undefined') {
			resizeObserver = new ResizeObserver(() => {
				if (!active || !map || !container?.isConnected) return;
				map.invalidateSize({ animate: false });
			});
			resizeObserver.observe(container);
		}

		return () => {
			active = false;
			resizeObserver?.disconnect();
			resizeObserver = null;
			if (map) map.off('moveend', emitView);
			eventBridge?.unregister();
			eventBridge = null;
			map?.remove();
			map = null;
		};
	});

	$effect(() => {
		applyView();
	});

	$effect(() => {
		applyBounds();
	});

	export function getMap() {
		return map;
	}
</script>

<div
	bind:this={container}
	class="svelte-leaflet-container"
	style="width: 100%;{hasHeight ? ` height: ${toCssSize(height)};` : ''}">
	{#if map}
		{@render children?.()}
	{/if}
</div>

<style>
	/*
	 * Stacking containment.
	 *
	 * Leaflet hardcodes z-index on its internal panes: tile 200, overlay 400,
	 * shadow 500, marker 600, tooltip 650, popup 700, controls 800. Without a
	 * stacking context on this container those values escape into the page root
	 * and paint *above* host UI such as dialogs and sheets (Tailwind's z-50),
	 * so a map silently covers a modal opened over it. That bug presents as the
	 * consumer's fault, which is why it is fixed here instead.
	 *
	 * `isolation: isolate` makes this element its own stacking context, so the
	 * panes still layer correctly against each other but can never climb above
	 * sibling UI.
	 */
	.svelte-leaflet-container {
		isolation: isolate;
		z-index: 0;
	}
</style>
