import { loadAllWebsites } from '$lib/reports/utils'

export const entries = async () => {
	const websites = await loadAllWebsites()

	return websites.map((website) => ({
		website: website.name
	}))
}
