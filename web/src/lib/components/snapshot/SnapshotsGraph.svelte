<script lang="ts">
	import type { WebsiteSnapshot } from '$lib/reports/utils'
	import { curveCardinal, line, scaleLinear } from 'd3'

	export let snapshots: WebsiteSnapshot[]

	$: dataPoints = snapshots.map((snapshot) => {
		return {
			passes: snapshot.report.passes.length,
			incomplete: snapshot.report.incomplete.length,
			violations: snapshot.report.violations.length
		}
	})

	// let dataPoints = [
	// 	{ passes: 5, incomplete: 10, violations: 3 },
	// 	{ passes: 7, incomplete: 10, violations: 4 },
	// 	{ passes: 9, incomplete: 7, violations: 3 },
	// 	{ passes: 11, incomplete: 7, violations: 1 }
	// ]

	$: totalCount = dataPoints.length

	$: maxValue =
		dataPoints.reduce(
			(acc, v) => Math.max(acc, Math.max(v.passes, Math.max(v.incomplete, v.violations))),
			0
		) + 2

	let width = 0
	let height = 0

	const circleRadius = 4
	const circleStrokeWidth = 1

	const x = (totalCount: number, width: number, i: number) => {
		const columnWidth = (width - paddingX * 2) / (totalCount - 1 || 1)
		return i * columnWidth + paddingX
	}
	const y = (maxValue: number, height: number, value: number) =>
		(1 - value / maxValue) * (height - (circleRadius + circleStrokeWidth) * 2) +
		circleRadius +
		circleStrokeWidth

	$: paddingX = 40
	$: paddingY = circleRadius + circleStrokeWidth

	$: dx = scaleLinear([0, totalCount - 1], [paddingX, width - paddingX])
	$: dy = scaleLinear([0, maxValue], [height - paddingY, paddingY])
	$: d = line((_, i) => dx(i), dy).curve(curveCardinal)
</script>

<div class="curve" bind:offsetWidth={width} bind:offsetHeight={height}>
	{#if width && height}
		<svg viewBox="0 0 {width} {height}" stroke-width={circleStrokeWidth}>
			<path
				fill="none"
				stroke="green"
				stroke-width="2"
				d={d(dataPoints.map((snapshot) => snapshot.passes))}
			/>
			<path
				fill="none"
				stroke="orange"
				stroke-width="2"
				d={d(dataPoints.map((snapshot) => snapshot.incomplete))}
			/>
			<path
				fill="none"
				stroke="red"
				stroke-width="2"
				d={d(dataPoints.map((snapshot) => snapshot.violations))}
			/>

			{#each dataPoints as point, i}
				<circle
					cx={x(totalCount, width, i)}
					cy={y(maxValue, height, point.passes)}
					r={circleRadius}
					fill="green"
					stroke="green"
				/>

				<circle
					cx={x(totalCount, width, i)}
					cy={y(maxValue, height, point.incomplete)}
					r={circleRadius}
					fill="orange"
					stroke="orange"
				/>

				<circle
					cx={x(totalCount, width, i)}
					cy={y(maxValue, height, point.violations)}
					r={circleRadius}
					fill="red"
					stroke="red"
				/>
			{/each}
		</svg>
	{/if}
</div>

<style lang="postcss">
	.curve {
		display: block;
		pointer-events: none;
		aspect-ratio: 1 / 2;
		width: 100%;
		height: 20rem;
		border: 1px solid var(--color-border);
	}
</style>
