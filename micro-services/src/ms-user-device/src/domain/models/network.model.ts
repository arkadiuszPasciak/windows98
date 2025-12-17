export interface NetworkInformation {
	connectionType: string
	effectiveConnectionType: string
	downlinkInMbps: number
	downlinkMaxInMbps: number
	roundeTripTimeMiliseconds: number
	isSaveData: boolean
}
