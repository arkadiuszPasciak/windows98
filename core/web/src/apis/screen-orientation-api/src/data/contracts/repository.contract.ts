import type { ScreenOrientationInterface } from "../interfaces"
import type { ScreenOrientationState } from "../models"

export interface ScreenOrientationAPIRepositoryContract
	extends ScreenOrientationInterface {
	getState(): ScreenOrientationState
}
