import { loadWebsiteSnapshot } from '$lib/reports/utils'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		const snapshot = await loadWebsiteSnapshot(params.website, params.snapshot)
		return { snapshot }
	} catch (e) {
		throw error(404, 'Website or report not found')
	}
}
