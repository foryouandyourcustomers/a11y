<script lang="ts">
	import SuccessIcon from '~icons/solar/smile-circle-line-duotone'
	import WarningIcon from '~icons/solar/sad-circle-line-duotone'
	import DangerIcon from '~icons/solar/confounded-circle-line-duotone'
	export let value: number
	export let type: 'success' | 'warning' | 'danger'
	export let label: string
</script>

<div class="value {type}">
	<div class="number">
		{#if type === 'success'}
			<SuccessIcon />
		{:else if type === 'warning'}
			<WarningIcon />
		{:else}
			<DangerIcon />
		{/if}
		{value}
	</div>

	<div class="label">
		{label}
	</div>
</div>

<style lang="postcss">
	.value {
		border: 1px solid var(--color-border);
		padding: 1rem;
		border-radius: var(--radius-default);

		.number {
			font-size: var(--scale-3);
			font-weight: bold;
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}
</style>
