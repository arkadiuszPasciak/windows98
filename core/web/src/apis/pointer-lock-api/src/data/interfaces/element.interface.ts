export interface ElementWithPointerLockInterface extends HTMLElement {
	requestPointerLock(): Promise<void>
}
