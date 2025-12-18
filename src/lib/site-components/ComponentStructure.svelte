<script>
	// TODO: Update to Svelte 5 compatible version
	// import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import { writable } from 'svelte/store';
	let { title, url, jsonData, children, more } = $props();

	let contentData = writable(jsonData);

	let loading = false;

	const saveData = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Docs post updated successfully');
					await update();
					break;
				case 'error':
					toast.error(result.error.message);
					break;
				default:
					await update();
			}
			loading = false;
		};
	};

	function updateContent() {
		const data = getData(); // Get data from ValiantRichText
		contentData.set(JSON.stringify(data));
	}

	const crumbs = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'components',
			url: '/components'
		},
		{
			name: url,
			url: `/components/${url}`
		}
	];
</script>

<div class="bg-white min-h-screen">
	<!-- TODO: Update to Svelte 5 compatible version -->
	<!-- <div class="ml-4 pt-4">
		<Breadcrumbs {crumbs} />
	</div> -->

	<h1 class="text-4xl font-bold text-center text-black my-8">{title}</h1>

	<div class="m-10">
		{@render children?.()}
	</div>

	{@render more?.()}

	<form
		action="/components/{url}?/save"
		method="POST"
		class="neobrutalism-card rounded-none p-10 items-center mt-3 bg-orange-500 text-black mx-7 mb-10"
		use:enhance={saveData}
	>
		<!-- TODO: Update to Svelte 5 compatible version -->
		<!-- <ValiantRichText bind:initialData={$contentData} /> -->
		<p class="text-black mb-4">Rich text editor temporarily disabled - update to Svelte 5 version</p>

		<input type="hidden" name="content_object" bind:value={$contentData} />
		<button
			class="neobrutalism-btn bg-green-500 text-black px-6 py-3 rounded-none"
			disabled={loading}
			type="submit"
		>
			Save
		</button>
	</form>
</div>
