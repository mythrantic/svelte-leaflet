<script>
	let { properties } = $props();
</script>

<h2 class="text-2xl font-bold mb-4 text-black">Properties</h2>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
	{#each Object.entries(properties) as [key, value]}
		<code class="neobrutalism-card p-4 bg-green-500 text-black font-medium rounded-none"
			>{key} | {value.description} | {value.type} {value.bindable ? '(bindable)' : ''}</code
		>
	{/each}
</div>
