<script lang="ts">
	import type { WebsiteSnapshot } from '$lib/reports/utils'
	import SnapshotValue from './SnapshotValue.svelte'

	export let snapshot: WebsiteSnapshot
</script>

<div class="values">
	<SnapshotValue value={snapshot.report.passes.length} type="success" label="Passes" />
	<SnapshotValue value={snapshot.report.incomplete.length} type="warning" label="Incomplete" />
	<SnapshotValue value={snapshot.report.violations.length} type="danger" label="Violations" />
</div>

<style lang="postcss">
	.values {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
</style>
