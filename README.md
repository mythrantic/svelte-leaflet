# Svelte Leaflet

A comprehensive Svelte component library for creating interactive maps with [Leaflet](https://leafletjs.com/). Build beautiful, responsive maps in your SvelteKit applications with ease.

[![npm version](https://img.shields.io/npm/v/@valiantlynx/svelte-leaflet.svg)](https://www.npmjs.com/package/@valiantlynx/svelte-leaflet)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- **Easy Integration** - Drop-in Svelte components that wrap Leaflet functionality
- **Type Safe** - Built with TypeScript for better development experience
- **SvelteKit Ready** - Designed to work seamlessly with SvelteKit
- **Rich Component Set** - Comprehensive collection of map components
- **Reactive** - Leverages Svelte's reactivity for dynamic map updates
- **Lightweight** - Minimal bundle overhead on top of Leaflet

## Installation

```bash
npm install @valiantlynx/svelte-leaflet leaflet
```

or with yarn:

```bash
yarn add @valiantlynx/svelte-leaflet leaflet
```

## Quick Start

```svelte
<script>
	import { LeafletMap, TileLayer, Marker, Popup } from '@valiantlynx/svelte-leaflet';

	const mapOptions = {
		center: [51.505, -0.09],
		zoom: 13
	};

	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		maxZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
</script>

<div class="map-container">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />
		<Marker latLng={[51.505, -0.09]}>
			<Popup>
				<p>Hello from London!</p>
			</Popup>
		</Marker>
	</LeafletMap>
</div>

<style>
	.map-container {
		height: 400px;
		width: 100%;
	}
</style>
```

Don't forget to include Leaflet CSS in your app:

```html
<!-- In your app.html or layout -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
```

## Available Components

### Core Map

- **LeafletMap** - Main map container component

### UI Layers

- **Marker** - Place markers on the map
- **Popup** - Information popups attached to map elements
- **Tooltip** - Hover tooltips for map elements

### Raster Layers

- **TileLayer** - Tile layer for map backgrounds
- **ImageOverlay** - Display images over specific map bounds

### Vector Layers

- **Circle** - Draw circles on the map
- **CircleMarker** - Circle markers with fixed pixel radius
- **Polygon** - Draw polygons
- **Polyline** - Draw polylines/paths
- **Rectangle** - Draw rectangles
- **GeoJSON** - Display GeoJSON data

### Icons

- **Icon** - Standard Leaflet icon
- **DivIcon** - Custom HTML-based icon

### Controls

- **ScaleControl** - Display map scale
- **Fullscreen** - Fullscreen map control

### Routing

- **Route** - Display routes using leaflet-routing-machine

## Component Examples

### Adding Multiple Markers

```svelte
<script>
	import { LeafletMap, TileLayer, Marker, Popup } from '@valiantlynx/svelte-leaflet';

	const locations = [
		{ lat: 51.505, lng: -0.09, name: 'Location 1' },
		{ lat: 51.515, lng: -0.1, name: 'Location 2' },
		{ lat: 51.525, lng: -0.11, name: 'Location 3' }
	];
</script>

<LeafletMap options={{ center: [51.515, -0.1], zoom: 13 }}>
	<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
	{#each locations as location}
		<Marker latLng={[location.lat, location.lng]}>
			<Popup>{location.name}</Popup>
		</Marker>
	{/each}
</LeafletMap>
```

### Drawing Shapes

```svelte
<script>
	import { LeafletMap, TileLayer, Circle, Polygon } from '@valiantlynx/svelte-leaflet';

	const circleOptions = {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	};

	const polygonPoints = [
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	];
</script>

<LeafletMap options={{ center: [51.505, -0.09], zoom: 13 }}>
	<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
	<Circle latLng={[51.508, -0.11]} options={circleOptions} />
	<Polygon latLngs={polygonPoints} options={{ color: 'blue' }} />
</LeafletMap>
```

### Using GeoJSON

```svelte
<script>
	import { LeafletMap, TileLayer, GeoJSON } from '@valiantlynx/svelte-leaflet';

	const geojsonData = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'Point',
					coordinates: [-0.09, 51.505]
				},
				properties: {
					name: 'My Location'
				}
			}
		]
	};
</script>

<LeafletMap options={{ center: [51.505, -0.09], zoom: 13 }}>
	<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
	<GeoJSON data={geojsonData} />
</LeafletMap>
```

## Documentation

For comprehensive documentation, examples, and demos, visit:

- **Documentation & Interactive Examples**: [https://svelte-leaflet.valiantlynx.com](https://svelte-leaflet.valiantlynx.com)
- **Component Demos**: Explore the `/components` route on the documentation site for detailed examples of each component

## API Reference

Each component accepts standard Leaflet options through the `options` prop. Refer to the [Leaflet documentation](https://leafletjs.com/reference.html) for detailed configuration options.

## Development

### Prerequisites

- Node.js >= 16.14
- Yarn or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/valiantlynx/svelte-leaflet.git
cd svelte-leaflet

# Install dependencies
yarn install

# Start development server
yarn dev

# Build the library
yarn package

# Run tests
yarn test

# Lint code
yarn lint
```

### Project Structure

```
src/
  lib/
    components/     # Svelte components
    extensions/     # Leaflet extensions
  routes/          # Demo pages and examples
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/valiantlynx/svelte-leaflet/issues)
- **Discussions**: Use GitHub Discussions for questions and community support

## Acknowledgments

Built with:

- [Leaflet](https://leafletjs.com/) - The leading open-source JavaScript library for mobile-friendly interactive maps
- [Svelte](https://svelte.dev/) - Cybernetically enhanced web apps
- [SvelteKit](https://kit.svelte.dev/) - The fastest way to build Svelte apps

---

Made with ❤️ by [valiantlynx](https://www.valiantlynx.com/)
