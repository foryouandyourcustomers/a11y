<script>
	/** @type {import('./$types').PageData} */
	export let data
</script>

<svelte:head>
	<title>Wiki</title>
</svelte:head>

<section class="content">
	<div class="wikis-section">
		{#each data.posts as post}
			<a href={`/wiki/${post.slug}`} class="wiki">
				<div class="wiki-title">{post.slug}</div>
			</a>
		{/each}
	</div>
</section>
