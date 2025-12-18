export interface NetworkInformation {
	connectionType: string
	effectiveConnectionType: string
	downlinkInMbps: number
	downlinkMaxInMbps: number
	roundTripTimeInMilliseconds: number
	isSaveData: boolean
}
