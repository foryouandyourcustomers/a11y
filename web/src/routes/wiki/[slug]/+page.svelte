<script>
	/** @type {import('./$types').PageData} */
	export let data

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.
	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.post.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`
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

<style lang="postcss">
	.post-content {
		:global(h3) {
			font-size: var(--scale-3);
			margin-bottom: 1rem;
		}
		:global(p) {
			margin-block: 1rem;
		}
	}
</style>
