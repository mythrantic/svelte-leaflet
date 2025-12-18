<script>
	let { methods } = $props();
</script>

<h2 class="text-2xl font-bold mb-4 text-black mt-8">Methods</h2>
<div class="overflow-x-auto">
	<table class="w-full neobrutalism-card rounded-none bg-orange-500">
		<thead class="bg-green-500">
			<tr>
				<th class="border-4 border-black p-4 text-left text-black font-bold">Name</th>
				<th class="border-4 border-black p-4 text-left text-black font-bold">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.entries(methods) as [methodName, methodDetails]}
				<tr class="bg-white">
					<td class="border-4 border-black p-4 text-black font-medium">{methodName}</td>
					<td class="border-4 border-black p-4 text-black"
						>{methodDetails.description}
						<a href={methodDetails.link} target="_blank" class="text-black underline font-bold"
							>More Info</a
						></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
