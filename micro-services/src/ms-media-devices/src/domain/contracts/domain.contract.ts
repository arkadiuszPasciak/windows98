export interface MediaDevicesDomainContract {
	requestCameraStream(constraints: MediaStreamConstraints): Promise<MediaStream>
	listDevices(): Promise<MediaDeviceInfo[]>
	onDeviceChange(callback: () => void): void
}
