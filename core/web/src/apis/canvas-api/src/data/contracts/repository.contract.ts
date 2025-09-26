export interface CanvasAPIRepositoryContract {
	getSnapshot(videoElement: HTMLVideoElement): Promise<string>
}
