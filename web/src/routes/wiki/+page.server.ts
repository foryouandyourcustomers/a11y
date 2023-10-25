import { posts } from '$lib/server/posts'

export async function load() {
	return {
		posts: posts
	}
}
