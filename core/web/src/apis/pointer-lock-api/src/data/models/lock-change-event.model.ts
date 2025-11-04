export interface PointerLockChangeEvent {
	previousElement: HTMLElement | null
	currentElement: HTMLElement | null
	isLocked: boolean
	timestamp: number
}
