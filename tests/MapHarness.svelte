<script>
	import { LeafletMap, Marker, Popup, TileLayer } from '$lib/index.js';

	let { height = '300px', center = [0, 0], zoom = 2 } = $props();

	const tileUrl = 'https://tile.example.com/{z}/{x}/{y}.png';
</script>

<LeafletMap {height} {center} {zoom}>
	<TileLayer url={tileUrl} />
	<Marker latLng={[0, 0]}>
		<Popup>hello</Popup>
	</Marker>
</LeafletMap>
