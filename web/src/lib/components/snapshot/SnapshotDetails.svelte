<script lang="ts">
	import type { WebsiteSnapshot } from '$lib/reports/types'
	import { format } from 'date-fns'

	export let snapshot: WebsiteSnapshot
</script>

<div class="details">
	{format(new Date(snapshot.date), 'PPP')}<br />
	{snapshot.name}
	<details>
		<summary> Details </summary>
		<dl>
			<dt>Exact time</dt>
			<dd>{snapshot.reports[0].timestamp}</dd>
			<dt>URL</dt>
			<dd>{snapshot.reports[0].url}</dd>
		</dl>
		<pre>{JSON.stringify(snapshot.reports[0].testEnvironment)}</pre>
	</details>
</div>

<style lang="postcss">
	.details {
		background: #efefef;
		border-radius: 0.25rem;
		padding: 1rem;
		overflow-x: scroll;
	}
</style>
