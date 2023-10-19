import { loadAllWebsites } from '$lib/reports/utils'

export const load = async () => {
	const websites = await loadAllWebsites()
	return { websites }
}
