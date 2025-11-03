import type { OrientationLockType } from "./orientation.model"

export interface ScreenOrientationState {
	type: OrientationType
	angle: number
	isLocked: boolean
	lockedType?: OrientationLockType
}
