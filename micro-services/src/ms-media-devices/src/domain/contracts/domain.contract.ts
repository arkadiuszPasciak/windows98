export interface MediaDevicesDomainContract {
	requestCameraStream(constraints: MediaStreamConstraints): Promise<MediaStream>
	getSnapshot(videoElement: HTMLVideoElement): Promise<string>
}
