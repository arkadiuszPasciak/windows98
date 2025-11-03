import type { PageVisibilityInterface } from "../interfaces"
import type {
	PageVisibilityChangeEvent,
	PageVisibilityStateModel,
} from "../models"

export interface NetworkInformationAPIRepositoryContract
	extends PageVisibilityInterface {
	getState(): PageVisibilityStateModel
	onVisibilityChange(listener: (event: PageVisibilityChangeEvent) => void): void
	offVisibilityChange(
		listener: (event: PageVisibilityChangeEvent) => void,
	): void
}
