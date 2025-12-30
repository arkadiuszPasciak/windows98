export interface VideoManagerDomainContract {
	requestCameraStream(constraints: MediaStreamConstraints): Promise<MediaStream>
	getSnapshot(videoElement: HTMLVideoElement): Promise<string>
}
