import type { MediaDevicesAPIRepositoryContract } from "../contracts"

export class MediaDevicesAPIRepository
	implements MediaDevicesAPIRepositoryContract
{
	public async getUserMedia(
		constraints: MediaStreamConstraints,
	): Promise<MediaStream> {
		return window.navigator.mediaDevices.getUserMedia(constraints)
	}
}
