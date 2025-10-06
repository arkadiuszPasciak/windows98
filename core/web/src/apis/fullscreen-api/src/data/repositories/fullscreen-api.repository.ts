import type { FullscreenAPIRepositoryContract } from "../contracts"

export class FullscreenAPIRepository
	implements FullscreenAPIRepositoryContract
{
	public async exitFullscreen(): Promise<void> {
		await window.document.exitFullscreen()
	}

	public async requestFullscreen(): Promise<void> {
		await window.document.documentElement.requestFullscreen()
	}

	public isFullscreen(): boolean {
		return window.document.fullscreenElement !== null
	}
}
