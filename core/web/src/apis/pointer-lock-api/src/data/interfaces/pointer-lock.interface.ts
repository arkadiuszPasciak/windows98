import type { PointerLockChangeEvent, PointerMovementEvent } from "../models"
import type { ElementWithPointerLockInterface } from "./element.interface"

export interface PointerLockInterface {
	exitPointerLock(): void
	requestPointerLock(element: ElementWithPointerLockInterface): Promise<void>
	exitPointerLock(): void
	onPointerLockChange(listener: (event: PointerLockChangeEvent) => void): void
	offPointerLockChange(listener: (event: PointerLockChangeEvent) => void): void
	onPointerLockError(listener: (event: Event) => void): void
	offPointerLockError(listener: (event: Event) => void): void
	onPointerMovement(listener: (event: PointerMovementEvent) => void): void
	offPointerMovement(listener: (event: PointerMovementEvent) => void): void
}
