<script>
	import { ValiantRichText, getData } from '@valiantlynx/svelte-rich-text';
	import toast from 'svelte-french-toast';
	import { enhance } from '$app/forms';
	import { writable } from 'svelte/store';
    import { Breadcrumbs } from '@valiantlynx/svelte-ui';
    export let title;
    export let url;
    export let jsonData;

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

<div class="ml-4">
	<Breadcrumbs {crumbs} />
</div>

<h1 class="text-4xl font-bold text-center">{title}</h1>

<div class="m-10">
	<slot />
</div>

<slot name="more" />

<form
	action="/components/{url}?/save"
	method="POST"
	class="neobrutalism-card rounded-none p-10 items-center mt-3 bg-orange-500 text-black mx-7"
	use:enhance={saveData}
>
	<ValiantRichText bind:initialData={$contentData} />

	<input type="hidden" name="content_object" bind:value={$contentData} />
	<button class="neobrutalism-btn bg-green-500 text-black px-6 py-3 rounded-none" disabled={loading} type="submit">
		Save
	</button>
</form>
