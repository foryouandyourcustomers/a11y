<script lang="ts">
	import '$lib/style/app.css'
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		max-width: var(--content-width);
		margin: 3rem auto;
	}
</style>
