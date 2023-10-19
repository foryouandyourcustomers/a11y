/**
 * A type safe version of Object.entries that will maintain the type of the
 * keys.
 *
 * Technically this is not correct, because objects can contain additional
 * elements without typescript knowing. But if used in a controlled environment
 * this is fine.
 */
export const entries = <T extends Record<PropertyKey, unknown>>(
	obj: T
): { [K in keyof T]: [K, T[K]] }[keyof T][] => {
	return Object.entries(obj) as { [K in keyof T]: [K, T[K]] }[keyof T][]
}
