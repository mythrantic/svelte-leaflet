<script>
	import { Circle, LeafletMap } from '$lib/index.js';

	let { color = 'var(--brand-color)' } = $props();
</script>

<LeafletMap height="300px" options={{ center: [0, 0], zoom: 2 }}>
	<Circle latLng={[0, 0]} radius={1000} {color} fillColor={color} />
</LeafletMap>
