<script lang="ts">
	import { page } from '$app/stores'
	import SnapshotSummary from '$lib/components/snapshot/SnapshotSummary.svelte'
	import SnapshotDetails from '$lib/components/snapshot/SnapshotDetails.svelte'

	export let data

	$: snapshot = data.snapshot
</script>

<a href="/monitor/{$page.params.website}">Back to overview</a>

<SnapshotSummary {snapshot} />

<SnapshotDetails {snapshot} />
