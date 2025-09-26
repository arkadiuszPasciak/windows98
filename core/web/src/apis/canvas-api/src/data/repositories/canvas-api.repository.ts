import type { CanvasAPIRepositoryContract } from "../contracts"

export class CanvasAPIRepository implements CanvasAPIRepositoryContract {
	public async getSnapshot(videoElement: HTMLVideoElement): Promise<string> {
		const canvas = document.createElement("canvas")
		canvas.width = videoElement.videoWidth
		canvas.height = videoElement.videoHeight

		const context = canvas.getContext("2d")
		context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

		return canvas.toDataURL("image/png")
	}
}
