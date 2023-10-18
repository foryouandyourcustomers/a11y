<script lang="ts">
	import '$lib/style/app.css'
	import Header from '$lib/components/Header.svelte'

	import { base } from '$app/paths'
</script>

<svelte:head>
	{#if base}
		<base href="https://foryouandyourcustomers.github.io{base}" />
	{/if}
</svelte:head>

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
