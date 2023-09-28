<script lang="ts">
	import { page } from '$app/stores'
	import SnapshotSummary from '$lib/components/snapshot/SnapshotSummary.svelte'
	import SnapshotDetails from '$lib/components/snapshot/SnapshotDetails.svelte'
	import SnapshotsGraph from '$lib/components/snapshot/SnapshotsGraph.svelte'

	export let data

	$: lastSnapshot = data.snapshots[data.snapshots.length - 1]
</script>

<h1>{$page.params.website}</h1>

{#if lastSnapshot}
	<SnapshotSummary snapshot={lastSnapshot} />
	<SnapshotDetails report={lastSnapshot.report} />
{/if}

<SnapshotsGraph snapshots={data.snapshots} />
