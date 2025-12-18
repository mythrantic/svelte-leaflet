<script>
	import { getContext, untrack } from 'svelte';
	import L from 'leaflet';

	const { getMarker } = getContext(L.Marker);

	let { options = {} } = $props();

	let icon = $state(null);

	$effect(() => {
		const newIcon = L.icon(options);
		untrack(() => {
			icon = newIcon;
		});
		getMarker()?.setIcon(newIcon);
	});

	export function getIcon() {
		return icon;
	}
</script>
