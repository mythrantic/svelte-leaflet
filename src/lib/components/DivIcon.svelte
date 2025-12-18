<script>
	import { getContext, untrack } from 'svelte';
	import L from 'leaflet';

	const { getMarker } = getContext(L.Marker);

	let { options = {}, children } = $props();

	let icon = $state(null);
	let html = $state(null);

	$effect(() => {
		if (html) {
			const newIcon = L.divIcon({ ...{ html }, ...options });
			untrack(() => {
				icon = newIcon;
			});
			getMarker()?.setIcon(newIcon);
		}
	});

	export function getIcon() {
		return icon;
	}
</script>

<div bind:this={html}>
	{@render children?.()}
</div>
