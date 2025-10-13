import { CanvasAPI, MediaStreamImageCaptureAPI } from "@windows98/web"
import type { MediaDevicesDomainContract } from "../contracts"

class MediaDevicesDomain implements MediaDevicesDomainContract {
	private readonly canvasAPI: CanvasAPI
	private readonly mediaStreamImageCaptureAPI: MediaStreamImageCaptureAPI

	constructor() {
		this.canvasAPI = new CanvasAPI()
		this.mediaStreamImageCaptureAPI = new MediaStreamImageCaptureAPI()
	}

	async requestCameraStream(
		constraints: MediaStreamConstraints,
	): Promise<MediaStream> {
		return this.mediaStreamImageCaptureAPI.getUserMedia(constraints)
	}

	async getSnapshot(videoElement: HTMLVideoElement): Promise<string> {
		return this.canvasAPI.getSnapshot(videoElement)
	}
}

export const MSMediaDevices = new MediaDevicesDomain()
