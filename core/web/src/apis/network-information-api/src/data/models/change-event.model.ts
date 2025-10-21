import type {
	NetworkConnectionType,
	NetworkEffectiveConnectionType,
} from "./connection.model"
import type { NetworkInformationState } from "./state.model"

export interface NetworkChangeEvent {
	previousType?: NetworkConnectionType
	previousEffectiveType?: NetworkEffectiveConnectionType
	previousDownlink?: number
	previousRtt?: number
	previousSaveData?: boolean
	current: NetworkInformationState
}
