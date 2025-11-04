import type { ScreenOrientationAPIRepositoryContract } from "../contracts"
import type { OrientationLockType, ScreenOrientationState } from "../models"

export class ScreenOrientationAPIRepository
	implements ScreenOrientationAPIRepositoryContract
{
	public get type(): OrientationType {
		return window.screen.orientation.type
	}

	public get angle(): number {
		return window.screen.orientation.angle
	}

	public async unlock(): Promise<void> {
		window.screen.orientation.unlock()
	}

	public addEventListener(
		type: "change",
		listener: (this: ScreenOrientationAPIRepository, event: Event) => void,
	): void {
		window.screen.orientation.addEventListener(type, listener)
	}

	public removeEventListener(
		type: "change",
		listener: (this: ScreenOrientationAPIRepository, event: Event) => void,
	): void {
		window.screen.orientation.removeEventListener(type, listener)
	}

	public getState(): ScreenOrientationState {
		return {
			type: this.type,
			angle: this.angle,
			isLocked: window.screen.orientation.type.includes("lock"),
			lockedType: window.screen.orientation.type.includes("lock")
				? (this.type as OrientationLockType)
				: undefined,
		}
	}
}
