export interface ScreenOrientationInterface {
	type: OrientationType
	angle: number

	unlock(): Promise<void>
	addEventListener(
		type: "change",
		listener: (this: ScreenOrientationInterface, event: Event) => void,
	): void
	removeEventListener(
		type: "change",
		listener: (this: ScreenOrientationInterface, event: Event) => void,
	): void
}
