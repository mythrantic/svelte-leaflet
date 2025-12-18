<script>
	import { getContext, onMount } from 'svelte';
	import L from 'leaflet';

	const { getMap } = getContext(L);

	let { position = 'topright', options = {} } = $props();

	let scaleControl = $state(null);

	onMount(() => {
		scaleControl = L.control.scale(options).addTo(getMap());

		return () => {
			scaleControl?.remove();
		};
	});

	$effect(() => {
		if (scaleControl) {
			scaleControl.setPosition(position);
		}
	});

	export function getScaleControl() {
		return scaleControl;
	}
</script>
