export interface BeaconAPIRepositoryContract {
	sendBeacon(url: string | URL, data?: BodyInit): boolean
}
