import { CanvasAPI, MediaDevicesAPI } from "@windows98/web-apis"
import type { MediaDevicesDomainContract } from "../contracts"

class MediaDevicesDomain implements MediaDevicesDomainContract {
	private readonly mediaDevicesAPI: MediaDevicesAPI
	private readonly canvasAPI: CanvasAPI

	constructor() {
		this.mediaDevicesAPI = new MediaDevicesAPI()
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
