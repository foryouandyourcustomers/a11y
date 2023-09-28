import { loadAllWebsites } from '$lib/utils'

export const entries = async () => {
	const websites = await loadAllWebsites()

	return websites.map((website) => ({
		website: website.name
	}))
}
