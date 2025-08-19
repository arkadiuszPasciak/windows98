import { MediaDevicesRepository } from "../../data/repositories"
import type {
	MediaDevicesAPIRepositoryContract,
	MediaDevicesDomainContract,
} from "../contracts"

class MediaDevicesDomain implements MediaDevicesDomainContract {
	private readonly repository: MediaDevicesAPIRepositoryContract

	constructor() {
		this.repository = new MediaDevicesRepository()
	}

	async requestCameraStream(
		constraints: MediaStreamConstraints,
	): Promise<MediaStream> {
		return this.repository.getUserMedia(constraints)
	}

	async listDevices(): Promise<MediaDeviceInfo[]> {
		return this.repository.enumerateDevices()
	}

	onDeviceChange(callback: () => void): void {
		this.repository.onDeviceChange(callback)
	}
}

export const MSMediaDevices = new MediaDevicesDomain()
