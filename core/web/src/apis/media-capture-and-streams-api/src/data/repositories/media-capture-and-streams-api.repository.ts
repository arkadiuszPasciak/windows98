import type { MediaCaptureAndStreamsAPIRepositoryContract } from "../contracts"
import type { MediaDevicesInterface } from "../interfaces"

export class MediaCaptureAndStreamsAPIRepository
	implements MediaCaptureAndStreamsAPIRepositoryContract
{
	public createNewMediaDevices(): MediaDevicesInterface {
		return new MediaDevices()
	}
}
