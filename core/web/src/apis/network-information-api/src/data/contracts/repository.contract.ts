import type { NetworkInformationInterface } from "../interfaces"
import type { NetworkChangeEvent, NetworkInformationState } from "../models"

export interface NetworkInformationAPIRepositoryContract
	extends NetworkInformationInterface {
	getState(): NetworkInformationState
	onChange(listener: (event: NetworkChangeEvent) => void): void
	offChange(listener: (event: NetworkChangeEvent) => void): void
}
