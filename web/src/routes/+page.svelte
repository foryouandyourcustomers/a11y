<script type="ts">
	import SnapshotsGraph from '$lib/components/snapshot/SnapshotsGraph.svelte'

	export let data
</script>

<ul>
	{#each data.websites as website}
		<li>
			<a href="/monitor/{website.name}"
				>{website.name}

				<SnapshotsGraph dataPoints={website.dataPoints} />
			</a>
		</li>
	{/each}
</ul>
