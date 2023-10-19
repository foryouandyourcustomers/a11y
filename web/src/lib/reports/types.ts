export type WebsitesConfig = {
	include: WebsiteConfig[]
}

export type WebsiteConfig = {
	name: string
	urls: string[]
}

export type WebsiteIndex = {
	reports: string[]
}

export type WebsiteReport = {
	timestamp: string
	url: string
	testEnvironment: Record<string, unknown>
	passes: unknown[]
	incomplete: unknown[]
	violations: unknown[]
}

export type WebsiteSnapshot = {
	name: string
	date: string
	reports: WebsiteReport[]
}
