export interface MediaStreamImageCaptureAPIRepositoryContract {
	enumerateDevices(): Promise<MediaDeviceInfo[]>
	getDisplayMedia(
		options?: DisplayMediaStreamOptions | undefined,
	): Promise<MediaStream>
	getSupportedConstraints(): MediaTrackSupportedConstraints
	getUserMedia(
		constraints?: MediaStreamConstraints | undefined,
	): Promise<MediaStream>
	createImageCaptureFromTrack(videoTrack: MediaStreamTrack): ImageCapture
}
