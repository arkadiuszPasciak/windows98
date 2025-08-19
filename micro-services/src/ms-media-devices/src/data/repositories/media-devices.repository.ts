import type { MediaDevicesAPIRepositoryContract } from "../../domain/contracts"

export class MediaDevicesRepository
	implements MediaDevicesAPIRepositoryContract
{
	async getUserMedia(
		constraints: MediaStreamConstraints,
	): Promise<MediaStream> {
		return navigator.mediaDevices.getUserMedia(constraints)
	}

	async enumerateDevices(): Promise<MediaDeviceInfo[]> {
		return navigator.mediaDevices.enumerateDevices()
	}

	onDeviceChange(callback: () => void): void {
		navigator.mediaDevices.ondevicechange = callback
	}
}
