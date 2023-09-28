import { loadAllWebsites } from '$lib/utils'

export const load = async () => {
	const websites = await loadAllWebsites()
	return { websites }
}
