import type {
	NetworkConnectionType,
	NetworkEffectiveConnectionType,
} from "./connection.model"

export interface NetworkInformationState {
	type: NetworkConnectionType
	effectiveType: NetworkEffectiveConnectionType
	downlink: number
	downlinkMax: number
	rtt: number
	saveData: boolean
}
