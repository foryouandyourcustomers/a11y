<script lang="ts">
	import { page } from '$app/stores'
	import SnapshotDetails from '$lib/components/snapshot/SnapshotDetails.svelte'
	import SnapshotSummary from '$lib/components/snapshot/SnapshotSummary.svelte'
	import SnapshotsGraph from '$lib/components/snapshot/SnapshotsGraph.svelte'
	import { mapSnapshotsToDataPoints } from '$lib/reports/utils.js'

	export let data

	$: lastSnapshot = data.snapshots[data.snapshots.length - 1]

	$: dataPoints = mapSnapshotsToDataPoints(data.snapshots)
</script>

<h1>{$page.params.website}</h1>

{#if lastSnapshot}
	<SnapshotSummary snapshot={lastSnapshot} />
	<SnapshotDetails snapshot={lastSnapshot} />
{/if}

<SnapshotsGraph {dataPoints} />
