<script>
	let codeSnippet = `
        &lt;script&gt;
        import { LeafletMap, TileLayer } from '$lib/index';

        const mapOptions = {
            center: [1.364917, 103.822872],
            zoom: 11
        };
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tileLayerOptions = {
            minZoom: 0,
            maxZoom: 20,
            maxNativeZoom: 19,
            attribution: '© OpenStreetMap contributors'
        };

        let leafletMap;
        &lt;/script&gt;

        &lt;div class="container mx-auto p-8"&gt;
            &lt;div class="mb-4 h-96"&gt;
                &lt;LeafletMap bind:this={leafletMap} options={mapOptions}&gt;
                    &lt;TileLayer url={tileUrl} options={tileLayerOptions} /&gt;
                &lt;/LeafletMap&gt;
            &lt;/div&gt;
        &lt;/div&gt;`;

	function copyToClipboard() {
		const textToCopy = codeSnippet.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => alert('Code copied to clipboard!'))
			.catch((err) => console.error('Error copying text: ', err));
	}
</script>

<svelte:head>
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<!-- Prism.js JavaScript -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"></script>
	<!-- Prism.js theme CSS -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css"
	/>
</svelte:head>

<main class="w-full mx-auto">
	<section class="text-center py-16 bg-green-500 border-b-8 border-black">
		<h1 class="text-6xl font-bold text-black">Svelte-Leaflet</h1>
		<p class="text-2xl mt-6 text-black font-semibold">Map Your Ideas into Reality</p>
	</section>

	<section class="p-16 bg-white container mx-auto">
		<h2 class="text-4xl font-semibold text-center mb-12 text-black">Unleash the Power of Maps</h2>
		<div class="grid md:grid-cols-3 gap-8 text-center">
			<div class="neobrutalism-card bg-orange-500 rounded-none p-10">
				<span class="block text-3xl text-black font-bold mb-4">🌍 Dynamic</span>
				<p class="text-black font-medium">
					Instantly visualize data with interactive and customizable maps.
				</p>
			</div>
			<div class="neobrutalism-card bg-green-500 rounded-none p-10">
				<span class="block text-3xl text-black font-bold mb-4">⚡ Efficient</span>
				<p class="text-black font-medium">
					Highly optimized for speed and performance, keeping your app swift.
				</p>
			</div>
			<div class="neobrutalism-card bg-orange-500 rounded-none p-10">
				<span class="block text-3xl text-black font-bold mb-4">🎨 Customizable</span>
				<p class="text-black font-medium">
					Full control over styling and features to suit your application's design.
				</p>
			</div>
		</div>
	</section>
	<section class="py-16 bg-orange-500 border-y-8 border-black text-black">
		<h2 class="text-4xl font-semibold text-center mb-12 font-bold">Easy Integration</h2>

		<div class="flex flex-wrap justify-center gap-8 mx-4">
			<div class="max-w-md">
				<h3 class="text-2xl font-semibold mb-4">Quick Start</h3>
				<p class="text-lg mb-4 font-medium">
					Begin with <code class="bg-black text-white px-2 py-1 border-2 border-black"
						>npm install @mythrantic/svelte-leaflet</code
					>. Import
					<code class="bg-black text-white px-2 py-1 border-2 border-black">&lt;LeafletMap&gt;</code
					>
					and
					<code class="bg-black text-white px-2 py-1 border-2 border-black">&lt;TileLayer&gt;</code>
					to create stunning maps.
				</p>
			</div>
			<div class="max-w-md">
				<h3 class="text-2xl font-semibold mb-4">Extensive Documentation</h3>
				<p class="text-lg font-medium">
					Explore our comprehensive guides and examples in the <a
						href="/components"
						class="text-black underline font-bold hover:text-white">documentation</a
					>. Learn how to utilize components like
					<code class="bg-black text-white px-2 py-1 border-2 border-black">LeafletMap</code>
					and <code class="bg-black text-white px-2 py-1 border-2 border-black">TileLayer</code> in your
					projects.
				</p>
			</div>

			<div class="w-full md:w-3/4">
				<!-- snippet of code that will be displayed in the code snippet box, with syntax highlighting and copy button -->
				<div
					class="mx-auto mt-14 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none overflow-hidden"
				>
					<div class="p-4 bg-green-500 border-b-4 border-black">
						<div class="flex items-center justify-between">
							<span class="text-black text-xl font-bold">Code Snippet</span>
							<button
								id="copyButton"
								class="neobrutalism-btn px-4 py-2 text-black bg-white rounded-none"
								on:click={copyToClipboard}>Copy</button
							>
						</div>
					</div>

					<div class="px-3 py-2 bg-gray-900">
						<pre class="language-html"><code class="text-sm">
        {@html codeSnippet}
    </code></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	a:hover::before {
		transform: scale(1.05);
		opacity: 1;
	}
</style>
