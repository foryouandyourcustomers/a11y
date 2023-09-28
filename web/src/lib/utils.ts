import type SampleJson from '../../../results/foryouandyourcustomers/2023-09-26.json'

export type WebsiteReport = typeof SampleJson[number]

export const loadAllWebsites = async () => {
	const websites = (await import('../../../websites.json')).include
	return websites
}

// type ReportType = Awaited<ReturnType<typeof _internalLoad>>['default']

export type WebsiteSnapshot = {
	name: string
	date: string
	report: WebsiteReport
}

export const loadWebsiteSnapshots = async (websiteName: string): Promise<WebsiteSnapshot[]> => {
	const jsonFiles = await import.meta.glob(`../../../results/**/*.json`)

	const correctFileNames = Object.keys(jsonFiles).filter((name) =>
		name.match(`results/${websiteName}`)
	)

	const results = await Promise.all(
		correctFileNames.map(async (fileName) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const report = (await (jsonFiles[fileName] as any)()).default[0] as WebsiteReport

			const date = fileName.replace(/^.*results\/[^/]+\//, '').replace(/\.json$/, '')

			return { name: websiteName, date, report } satisfies WebsiteSnapshot
		})
	)

	return results
}

export const loadWebsiteSnapshot = async (
	websiteName: string,
	reportDate: string
): Promise<WebsiteSnapshot> => {
	const report = (await import(`../../../results/${websiteName}/${reportDate}.json`))
		.default[0] as WebsiteReport
	return { name: websiteName, date: reportDate, report } satisfies WebsiteSnapshot
}
