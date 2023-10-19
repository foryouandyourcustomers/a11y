import { REPORTS_URL } from '$env/static/private'
import type { WebsiteIndex, WebsiteReport, WebsiteSnapshot, WebsitesConfig } from './types'

export const loadAllWebsites = async () => {
	const websitesConfig = (await fetch(`${REPORTS_URL}/config.json`).then((res) =>
		res.json()
	)) as WebsitesConfig
	return websitesConfig.include
}

export const loadWebsiteSnapshots = async (websiteName: string): Promise<WebsiteSnapshot[]> => {
	const index = (await fetch(`${REPORTS_URL}/${websiteName}/index.json`).then((res) =>
		res.json()
	)) as WebsiteIndex

	const results = await Promise.all(
		index.reports.map(async (filename) => {
			const reports = (await fetch(`${REPORTS_URL}/${websiteName}/${filename}`).then((res) =>
				res.json()
			)) as WebsiteReport[]

			const date =
				filename
					.split('/')
					.at(-1)
					?.replace(/\.json$/, '') ?? '2000-01-01'

			return { name: websiteName, date, reports } satisfies WebsiteSnapshot
		})
	)

	return results
}

export const loadWebsiteSnapshot = async (
	websiteName: string,
	reportDate: string
): Promise<WebsiteSnapshot> => {
	const reports = (await fetch(`${REPORTS_URL}/${websiteName}/${reportDate}.json`).then((res) =>
		res.json()
	)) as WebsiteReport[]
	return { name: websiteName, date: reportDate, reports } satisfies WebsiteSnapshot
}
