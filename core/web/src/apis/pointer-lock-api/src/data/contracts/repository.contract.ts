import type { PointerLockInterface } from "../interfaces"
import type { PointerLockState } from "../models"

export interface PointerLockAPIRepositoryContract extends PointerLockInterface {
	getState(): PointerLockState
}
