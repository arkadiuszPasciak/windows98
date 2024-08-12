import type { Maybe } from "@windows98/toolkit"

export default interface BrowserEnvRepositoryContract<T> {
	get(): Maybe<T>
}
