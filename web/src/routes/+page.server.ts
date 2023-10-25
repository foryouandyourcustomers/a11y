import { mapSnapshotsToDataPoints } from '$lib/reports/utils'
import { loadAllWebsites, loadWebsiteSnapshots } from '$lib/reports/utils.server'

export const load = async () => {
	const websites = await loadAllWebsites()

	const data = []

	for (const website of websites) {
		const snapshots = await loadWebsiteSnapshots(website.name)
		data.push({ name: website.name, dataPoints: mapSnapshotsToDataPoints(snapshots) })
	}

	return { websites: data }
}
