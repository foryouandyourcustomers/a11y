<script lang="ts">
	import type { WebsiteSnapshot } from '$lib/reports/types'
	import SnapshotValue from './SnapshotValue.svelte'

	export let snapshot: WebsiteSnapshot
</script>

<div class="values">
	<SnapshotValue
		value={snapshot.reports.reduce((prev, report) => prev + report.passes.length, 0)}
		type="success"
		label="Passes"
	/>
	<SnapshotValue
		value={snapshot.reports.reduce((prev, report) => prev + report.incomplete.length, 0)}
		type="warning"
		label="Incomplete"
	/>
	<SnapshotValue
		value={snapshot.reports.reduce((prev, report) => prev + report.violations.length, 0)}
		type="danger"
		label="Violations"
	/>
</div>

<style lang="postcss">
	.values {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
</style>
