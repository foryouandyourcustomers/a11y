import { entries } from '$lib/utils'
import { format } from 'date-fns'
import { parse } from 'node-html-parser'

export type Metadata = {
	title?: string
	preview?: string
	date?: string
}

// Get all posts and add metadata
export const posts = entries(import.meta.glob('../../../../wiki/**/*.md', { eager: true }))
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	.map(([filepath, post]: [string, any]) => {
		const html = parse(post.default.render().html)

		const metadata = post.metadata as Metadata
		const preview = metadata.preview ? parse(metadata.preview) : html.querySelector('p')

		return {
			...post.metadata,

			// generate the slug from the file path
			slug: filepath
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop(),

			// format date as yyyy-MM-dd
			date: metadata.date
				? format(
						// offset by timezone so that the date is correct
						addTimezoneOffset(new Date(metadata.date)),
						'yyyy-MM-dd'
				  )
				: undefined,

			preview: {
				html: preview?.toString() ?? '',
				// text-only preview (i.e no html elements), used for SEO
				text: preview?.structuredText ?? preview?.toString() ?? ''
			}
		}
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((post, index, allPosts) => ({
		...post,
		next: allPosts[index - 1],
		previous: allPosts[index + 1]
	}))

function addTimezoneOffset(date: Date) {
	const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000
	return new Date(new Date(date).getTime() + offsetInMilliseconds)
}
