<script type="ts">
	export let data
</script>

<ul>
	{#each data.websites as website}
		<li>
			<a href="/monitor/{website.name}">{website.name}</a>
		</li>
	{/each}
</ul>
