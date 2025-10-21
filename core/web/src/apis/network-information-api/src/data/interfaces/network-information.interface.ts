import type {
	NetworkConnectionType,
	NetworkEffectiveConnectionType,
} from "../models"

export interface NetworkInformationInterface {
	readonly type: NetworkConnectionType
	readonly effectiveType: NetworkEffectiveConnectionType
	readonly downlink: number
	readonly downlinkMax: number
	readonly rtt: number
	readonly saveData: boolean

	addEventListener(
		type: "change",
		listener: (this: NetworkInformationInterface, event: Event) => void,
	): void
	removeEventListener(
		type: "change",
		listener: (this: NetworkInformationInterface, event: Event) => void,
	): void
}
