export interface NetworkInformation {
	connectionType: string
	effectiveConnectionType: string
	downlinkInMbps: number
	downlinkMaxInMbps: number
	roundeTripTimeInMiliseconds: number
	isSaveData: boolean
}
