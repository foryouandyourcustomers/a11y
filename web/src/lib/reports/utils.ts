import type { WebsiteSnapshot } from './types'

export const mapSnapshotsToDataPoints = (snapshots: WebsiteSnapshot[]) => {
	return snapshots.map((snapshot) => {
		return {
			passes: snapshot.reports.reduce((prev, report) => prev + report.passes.length, 0),
			incomplete: snapshot.reports.reduce((prev, report) => prev + report.incomplete.length, 0),
			violations: snapshot.reports.reduce((prev, report) => prev + report.violations.length, 0)
		}
	})
}
