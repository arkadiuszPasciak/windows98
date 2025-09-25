import type { ScreenAPIRepositoryContract } from "../contracts"

export class ScreenAPIRepository implements ScreenAPIRepositoryContract {
	public getHeight(): number {
		return window.screen.height
	}

	public getWidth(): number {
		return window.screen.width
	}
}
