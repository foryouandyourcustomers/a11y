import { loadWebsiteSnapshots } from '$lib/reports/utils'

export const load = async ({ params }) => {
	const snapshots = await loadWebsiteSnapshots(params.website)

	return {
		snapshots
	}
}
