<script>
	import { afterNavigate } from '$app/navigation'

	/** @type {import('./$types').PageData} */
	export let data

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.
	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.post.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

	//const url = `${website}/${data.post.slug}`;

	// if we came from /posts, we will use history to go back to preserve
	// posts pagination
	let canGoBack = false
	afterNavigate(({ from }) => {
		if (from && from.url.pathname.startsWith('/posts')) {
			canGoBack = true
		}
	})

	function goBack() {
		if (canGoBack) {
			history.back()
		}
	}
</script>

<svelte:head>
	<title>{data.post.slug}</title>
	<meta name="description" content={data.post.preview.text} />
	<!-- <meta name="author" content={name} /> -->

	<!-- Facebook Meta Tags -->
	<!-- <meta property="og:url" content={url} /> -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.preview.text} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<!-- <meta property="twitter:domain" content={website} />
	<meta property="twitter:url" content={url} /> -->
	<meta name="twitter:title" content={data.post.title} />
	<meta name="twitter:description" content={data.post.preview.text} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<section class="content">
	<div>
		<article>
			<header class="post-header">
				<h1 class="post-title">
					{data.post.slug}
				</h1>
				<!-- TODO <PostDate post={data.post} /> -->
			</header>

			<!-- render the post -->
			<div class="post-content">
				<svelte:component this={data.component} />
			</div>
		</article>
	</div>
</section>

<style lang="postcss">
	.root {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media screen and (min-width: 1024px) {
		.root {
			grid-template-columns: 1fr 42rem 1fr;
		}
	}

	.post-header {
		display: flex;
		flex-direction: column;
	}

	.post-title {
		margin-top: 1.5rem; /* mt-6 */
		font-size: 2.25rem; /* text-4xl */
		font-weight: bold; /* font-bold */
		letter-spacing: -0.025em; /* tracking-tight */

		/* Screen size adjustments */
		@media (min-width: 640px) {
			font-size: 3rem; /* sm:text-5xl */
		}
	}

	.post-date {
		font-size: 0.875rem; /* text-sm */

		@media (min-width: 640px) {
			font-size: 1rem; /* sm:text-base */
		}
	}

	.post-content {
		line-height: 1.65;
		/* You may need to add more styles depending on the typography settings you want. */
	}
	.container {
		padding: 2rem 0; /* py-8 */
	}

	.grid-layout {
		display: grid;
		gap: 2rem; /* gap-8 */
	}

	.social-links,
	.avatar-container {
		display: flex;
		justify-content: center;
		gap: 1.5rem; /* gap-6 */
		order: 2;
		grid-column: span 2;
	}

	.avatar-link {
		display: inline-block;
		border-radius: 9999px; /* rounded-full */
	}

	.avatar-image {
		width: 6rem; /* w-24 */
		height: 6rem; /* h-24 */
		margin: 0 auto; /* mx-auto */
	}

	@media (min-width: 768px) {
		/* md: */
		.social-links {
			order: 2;
		}

		.avatar-container {
			order: 1;
			grid-column: span 2;
		}

		.avatar-image {
			width: 7rem; /* md:w-28 */
			height: 7rem; /* md:h-28 */
		}
	}

	.bio-text {
		order: 3;
		font-size: 1rem; /* text-base */
		color: #718096; /* text-zinc-600, adjust the hex value to your preference */
	}
	.toc-container {
		display: none; /* Initially hidden */

		@media (min-width: 1280px) {
			/* xl: */
			display: block;
			padding-top: 2.5rem; /* pt-10 */
		}
	}

	.toc {
		position: -webkit-sticky; /* For Safari support */
		position: sticky;
		top: 2rem; /* top-8 */
		width: 12rem; /* w-48 */
		margin-left: 2rem; /* ml-8 */

		/* This makes the element only visible on larger screens, mirroring the xl:block utility */
		display: none;

		@media (min-width: 1280px) {
			/* xl: */
			display: block;
		}
	}
	.root-container {
		max-width: 36rem; /* max-w-2xl */
		margin-left: auto;
		margin-right: auto;

		@media (min-width: 1024px) {
			/* lg: */
			max-width: none;
		}
	}

	.full-width-container {
		width: 100%; /* w-full */
		margin-left: auto;
		margin-right: auto;
		overflow-x: hidden;
	}
</style>
