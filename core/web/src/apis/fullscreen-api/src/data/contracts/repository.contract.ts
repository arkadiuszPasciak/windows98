export interface FullscreenAPIRepositoryContract {
	exitFullscreen(): Promise<void>
	requestFullscreen(): Promise<void>
	isFullscreen(): boolean
}
