import { CatchError } from "@windows98/toolkit"
import type { MediaStreamImageCaptureAPIRepositoryContract } from "../contracts"

export class MediaStreamImageCaptureAPIRepository
	implements MediaStreamImageCaptureAPIRepositoryContract
{
	@CatchError()
	public async enumerateDevices(): Promise<MediaDeviceInfo[]> {
		if (!navigator.mediaDevices?.enumerateDevices) {
			throw new Error("MediaDevices API not supported.")
		}

		return await navigator.mediaDevices.enumerateDevices()
	}

	@CatchError()
	public async getDisplayMedia(
		options?: DisplayMediaStreamOptions,
	): Promise<MediaStream> {
		if (!navigator.mediaDevices?.getDisplayMedia) {
			throw new Error("getDisplayMedia API not supported.")
		}

		return await navigator.mediaDevices.getDisplayMedia(options)
	}

	@CatchError()
	public getSupportedConstraints(): MediaTrackSupportedConstraints {
		if (!navigator.mediaDevices?.getSupportedConstraints) {
			throw new Error("getSupportedConstraints API not supported.")
		}

		return navigator.mediaDevices.getSupportedConstraints()
	}

	@CatchError()
	public async getUserMedia(
		constraints?: MediaStreamConstraints,
	): Promise<MediaStream> {
		if (!navigator.mediaDevices?.getUserMedia) {
			throw new Error("getUserMedia API not supported.")
		}

		return await navigator.mediaDevices.getUserMedia(constraints ?? {})
	}

	@CatchError()
	public createImageCaptureFromTrack(
		videoTrack: MediaStreamTrack,
	): ImageCapture {
		if (typeof ImageCapture === "undefined") {
			throw new Error("ImageCapture API not supported.")
		}

		return new ImageCapture(videoTrack)
	}
}
