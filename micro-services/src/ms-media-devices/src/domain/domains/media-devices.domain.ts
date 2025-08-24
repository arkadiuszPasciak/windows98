import {
	CanvasAPIRepository,
	MediaDevicesRepository,
} from "../../data/repositories"
import type {
	CanvasAPIRepositoryContract,
	MediaDevicesAPIRepositoryContract,
	MediaDevicesDomainContract,
} from "../contracts"

class MediaDevicesDomain implements MediaDevicesDomainContract {
	private readonly mediaDevicesAPI: MediaDevicesAPIRepositoryContract
	private readonly canvasAPI: CanvasAPIRepositoryContract

	constructor() {
		this.mediaDevicesAPI = new MediaDevicesRepository()
		this.canvasAPI = new CanvasAPIRepository()
	}

	async requestCameraStream(
		constraints: MediaStreamConstraints,
	): Promise<MediaStream> {
		return this.mediaDevicesAPI.getUserMedia(constraints)
	}

	async getSnapshot(videoElement: HTMLVideoElement): Promise<string> {
		return this.canvasAPI.getSnapshot(videoElement)
	}
}

export const MSMediaDevices = new MediaDevicesDomain()
