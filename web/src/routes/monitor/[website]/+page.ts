import { loadWebsiteSnapshots } from '$lib/utils'

export const load = async ({ params }) => {
	const snapshots = await loadWebsiteSnapshots(params.website)

	return {
		snapshots
	}
}
