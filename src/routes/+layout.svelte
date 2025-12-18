<script>
	import '../app.css';
	import 'leaflet/dist/leaflet.css';
	import { Toaster } from 'svelte-sonner';
	
	let { children } = $props();
	
	const socialLinks = [
		{ url: 'https://github.com/valiantlynx/svelte-leaflet', icon: '/icons/github.svg' },
		{ url: 'https://twitter.com/valiantlynx42', icon: '/icons/twitter.svg' },
		{ url: 'https://www.linkedin.com/in/gormery-wanjiru-02b737314', icon: '/icons/linkedin.svg' }
	];
	// Sample data for components
	let components = [
		{ name: 'Router', link: '/components/router', description: 'Efficient routing management.' },
		{
			name: 'Leaflet Map',
			link: '/components/leaflet-map',
			description: 'Interactive map integration.'
		},
		{ name: 'Polygon', link: '/components/polygon', description: 'Draw and edit polygons.' },
		{ name: 'Marker', link: '/components/marker', description: 'Place markers on the map.' }
		// Add more components as needed
	];
</script>

<svelte:head />

<Toaster />

<nav class="bg-green-500 p-4 text-black border-b-8 border-black">
	<div class="flex items-center justify-between">
		<!-- Your logo or site name -->
		<a href="https://svelte-leaflet.valiantlynx.com">
			<img src="/logo.svg" alt="Svelte Leaflet Logo" class="h-12 w-12 border-4 border-black" />
		</a>

		<div class="flex items-center space-x-4">
			<!-- Navigation Links -->
			<a href="/">
				<h1 class="text-2xl font-bold">Svelte Leaflet</h1>
			</a>
		</div>

		<!-- Social Media Links -->
		<div class="flex items-center space-x-4">
			<!-- Componest button -->
			<a
				href="/components"
				class="neobrutalism-btn bg-orange-500 text-black px-6 py-2 rounded-none"
			>
				Components
			</a>
			{#each socialLinks as { icon, url }}
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img src={icon} class=" w-6 h-6" alt="Social Media Icon for valiantlynx" />
				</a>
			{/each}
		</div>
	</div>
</nav>

{@render children?.()}

<section class="py-16 bg-white">
	<h2 class="text-4xl font-semibold text-center mb-12 text-black">Explore Our Components</h2>
	<div class="container mx-auto p-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
			<!-- Component Cards -->
			{#each components as component}
				<div class="neobrutalism-card bg-green-500 rounded-none p-6">
					<a href={component.link} class="text-lg font-bold text-black hover:underline"
						>{component.name}</a
					>
					<p class="text-black mt-2 font-medium">{component.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 flex justify-center">
			<a
				href="/components"
				class="neobrutalism-btn w-full md:w-auto bg-orange-500 text-black py-3 px-6 rounded-none"
			>
				<span>See All Components</span>
			</a>
		</div>
	</div>
</section>

<section class="py-16 bg-orange-500 border-y-8 border-black text-black">
	<h2 class="text-4xl font-semibold text-center mb-12 font-bold">Frequently Asked Questions</h2>
	<div class="accordion max-w-4xl mx-auto">
		<div class="join join-vertical w-full space-y-4">
			<div class="neobrutalism-card bg-white rounded-none">
				<input type="radio" name="my-accordion" />
				<div class="collapse-title text-xl font-bold text-black">What is Svelte-Leaflet?</div>
				<div class="collapse-content">
					<p class="text-black">
						Svelte-Leaflet is a Svelte library that makes integrating and managing Leaflet maps in
						Svelte applications effortless and efficient.
					</p>
				</div>
			</div>

			<!-- More FAQ items -->
			<div class="neobrutalism-card bg-white rounded-none">
				<input type="radio" name="my-accordion" />
				<div class="collapse-title text-xl font-bold text-black">
					How do I install Svelte-Leaflet?
				</div>
				<div class="collapse-content">
					<p class="text-black">
						Install Svelte-Leaflet by running `npm install @mythrantic/svelte-leaflet` in your
						project. Then, import and use Leaflet components as needed.
					</p>
				</div>
			</div>

			<div class="neobrutalism-card bg-white rounded-none">
				<input type="radio" name="my-accordion" />
				<div class="collapse-title text-xl font-bold text-black">
					How do I use the Leaflet Map component in my project?
				</div>
				<div class="collapse-content">
					<p class="text-black">
						The Leaflet Map component can be easily integrated by importing it into your Svelte file
						and adding it as a Svelte component with custom properties for customization.
					</p>
				</div>
			</div>

			<!-- Add as many FAQs as needed -->
		</div>
	</div>
</section>

<footer class="bg-black text-white border-t-8 border-black">
	<div class="container mx-auto px-6 py-10 md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<a href="/" class="text-2xl font-bold text-green-500 hover:text-orange-500">Svelte-Leaflet</a>
			<p class="mt-2 text-gray-300">The ultimate Svelte library for Leaflet maps.</p>
		</div>

		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			<div>
				<h2 class="text-xl font-semibold mb-3 text-green-500">Resources</h2>
				<ul class="text-gray-300">
					<li class="mb-2"><a href="/components" class="hover:text-white">Documentation</a></li>
					<li class="mb-2"><a href="/components" class="hover:text-white">Components</a></li>
					<li><a href="https://valiantlynx.com" class="hover:text-white">Tutorials</a></li>
				</ul>
			</div>
			<div>
				<h2 class="text-xl font-semibold mb-3 text-orange-500">Support</h2>
				<ul class="text-gray-300">
					<li class="mb-2">
						<a href="https://github.com/mythrantic/svelte-leaflet/discussions" class="hover:text-white">FAQs</a>
					</li>
					<li class="mb-2">
						<a href="https://github.com/mythrantic/svelte-leaflet/discussions" class="hover:text-white">Contact Us</a>
					</li>
					<li><a href="https://github.com/mythrantic/svelte-leaflet/discussions" class="hover:text-white">Community</a></li>
				</ul>
			</div>
			<div class="col-span-2 md:col-auto">
				<h2 class="text-xl font-semibold mb-3 text-green-500">Stay Connected</h2>
				<div class="flex mt-4">
					{#each socialLinks as { icon, url }}
						<a href={url} class="mr-6 text-gray-400 hover:text-orange-500">
							<img src={icon} class=" w-6 h-6" alt="Social Media Icon for valiantlynx" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="border-t border-gray-800 text-center py-4">
		<p>&copy; 2023 mythrantic. All Rights Reserved.</p>
	</div>
</footer>
