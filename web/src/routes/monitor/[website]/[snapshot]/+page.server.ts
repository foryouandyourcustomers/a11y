import {
	loadAllWebsites,
	loadWebsiteSnapshot,
	loadWebsiteSnapshots
} from '$lib/reports/utils.server'
import { error } from '@sveltejs/kit'

export const entries = async () => {
	const websites = await loadAllWebsites()

	const entries = []

	for (const website of websites) {
		const snapshots = await loadWebsiteSnapshots(website.name)

		for (const snapshot of snapshots) {
			entries.push({
				website: website.name,
				snapshot: snapshot.date
			})
		}
	}

	return entries
}

export const load = async ({ params }) => {
	try {
		const snapshot = await loadWebsiteSnapshot(params.website, params.snapshot)
		return { snapshot }
	} catch (e) {
		throw error(404, 'Website or report not found')
	}
}
