import { loadAllWebsites, loadWebsiteSnapshots } from '$lib/reports/utils.server'

export const entries = async () => {
	const websites = await loadAllWebsites()

	return websites.map((website) => ({
		website: website.name
	}))
}

export const load = async ({ params }) => {
	const snapshots = await loadWebsiteSnapshots(params.website)

	return {
		snapshots
	}
}
