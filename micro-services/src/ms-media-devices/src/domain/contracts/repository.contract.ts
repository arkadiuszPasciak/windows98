export interface MediaDevicesAPIRepositoryContract {
	getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream>
	enumerateDevices(): Promise<MediaDeviceInfo[]>
	onDeviceChange(callback: () => void): void
}
