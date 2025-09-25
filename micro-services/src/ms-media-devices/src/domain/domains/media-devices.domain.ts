import { CanvasAPI } from "@windows98/web-apis"
import { MediaDevicesRepository } from "../../data/repositories"
import type {
	MediaDevicesAPIRepositoryContract,
	MediaDevicesDomainContract,
} from "../contracts"

class MediaDevicesDomain implements MediaDevicesDomainContract {
	private readonly mediaDevicesAPI: MediaDevicesAPIRepositoryContract
	private readonly canvasAPI: CanvasAPI

	constructor() {
		this.mediaDevicesAPI = new MediaDevicesRepository()
		this.canvasAPI = new CanvasAPI()
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
