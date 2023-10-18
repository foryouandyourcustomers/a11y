/**
 * Dynamically loads the svelte component for the post (only possible in +page.js)
 * and pass on the data from +page.server.js
 *
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ data }) {
	const component = await import(`../../../../../wiki/${data.post.slug}.md`)

	return {
		post: data.post,
		component: component.default,
		layout: {
			fullWidth: true
		}
	}
}
