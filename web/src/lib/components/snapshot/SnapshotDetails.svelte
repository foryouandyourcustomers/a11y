<script lang="ts">
	import { format } from 'date-fns'
	import type { WebsiteReport } from '$lib/utils'

	export let report: WebsiteReport
</script>

<div class="details">
	{format(new Date(report.timestamp), 'PPP')}<br />
	{report.url}
	<details>
		<summary> Details </summary>
		<dl>
			<dt>Exact time</dt>
			<dd>{report.timestamp}</dd>
			<dt>URL</dt>
			<dd>{report.url}</dd>
		</dl>
		<pre>{JSON.stringify(report.testEnvironment)}</pre>
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
