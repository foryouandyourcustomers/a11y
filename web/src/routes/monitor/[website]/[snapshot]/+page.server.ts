import { loadAllWebsites, loadWebsiteSnapshots } from '$lib/reports/utils'

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
