export interface CanvasAPIRepositoryContract {
	createCanvas(width: number, height: number): HTMLCanvasElement
	convertCanvas(
		canvasElement: HTMLCanvasElement,
		format: string,
		quality?: number,
	): string
	getSnapshot(videoElement: HTMLVideoElement): Promise<string>
}
