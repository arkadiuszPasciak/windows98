import type { Maybe } from "@windows98/toolkit/src/types"

export default interface BrowserEnvRepositoryContract<T> {
	getName(): Maybe<T>
}
