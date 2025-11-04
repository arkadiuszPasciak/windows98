export interface PointerMovement {
	movementX: number
	movementY: number
}

export interface PointerMovementEvent extends PointerMovement {
	timestamp: number
}
