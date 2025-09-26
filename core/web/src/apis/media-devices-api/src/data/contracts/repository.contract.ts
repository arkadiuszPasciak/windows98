export interface MediaDevicesAPIRepositoryContract {
	getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream>
}
