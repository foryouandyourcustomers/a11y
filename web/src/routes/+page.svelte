<script type="ts">
	import { base } from '$app/paths'

	export let data
</script>

<ul>
	{#each data.websites as website}
		<li>
			<a href="{base}/monitor/{website.name}">{website.name}</a>
		</li>
	{/each}
</ul>
