import type { CanvasAPIRepositoryContract } from "../contracts"

export class CanvasAPIRepository implements CanvasAPIRepositoryContract {
	public createCanvas(width: number, height: number): HTMLCanvasElement {
		const canvas = document.createElement("canvas")
		canvas.width = width
		canvas.height = height

		return canvas
	}

	public convertCanvas(
		canvasElement: HTMLCanvasElement,
		format: string,
		quality?: number,
	): string {
		return canvasElement.toDataURL(format, quality)
	}

	public async getSnapshot(videoElement: HTMLVideoElement): Promise<string> {
		const canvas = document.createElement("canvas")
		canvas.width = videoElement.videoWidth
		canvas.height = videoElement.videoHeight

		const context = canvas.getContext("2d")
		context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

		return canvas.toDataURL("image/png")
	}
}
