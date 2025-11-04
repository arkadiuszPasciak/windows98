import { vi } from "vitest"

class PointerLockAPIMock {
	public createMock() {
		type Handler = EventListener | ((...args: unknown[]) => void)

		const listeners = new Map<string, Handler[]>()

		// we'll build a mock document-like object that stores listeners and a pointerLockElement
		const mock: {
			_pointerLockElement: HTMLElement | null
			pointerLockElement: HTMLElement | null
			setPointerLockElement: (el: HTMLElement | null) => void
			createElementMock: () => { requestPointerLock: () => Promise<void> }
			addEventListener: (type: string, listener: Handler) => void
			removeEventListener: (type: string, listener: Handler) => void
			exitPointerLock: () => void
			dispatchMouseMove: (movementX?: number, movementY?: number) => void
			dispatchPointerLockError: () => void
		} = {
			_pointerLockElement: null,

			get pointerLockElement() {
				return mock._pointerLockElement
			},

			setPointerLockElement(el: HTMLElement | null) {
				mock._pointerLockElement = el
			},

			// helper to create a mock element that supports requestPointerLock
			createElementMock() {
				const el = {
					requestPointerLock: vi.fn(async () => {
						// set pointer lock to this element and notify listeners
						mock._pointerLockElement = el as unknown as HTMLElement
						const handlers = listeners.get("pointerlockchange") || []
						for (const h of handlers) {
							if (typeof h === "function") {
								h(new Event("pointerlockchange"))
							} else if (
								h &&
								typeof (h as EventListenerObject).handleEvent === "function"
							) {
								;(h as EventListenerObject).handleEvent(
									new Event("pointerlockchange"),
								)
							}
						}

						return Promise.resolve()
					}),
				}

				return el
			},

			addEventListener: vi.fn((type: string, listener: Handler) => {
				const arr = listeners.get(type) || []
				arr.push(listener)
				listeners.set(type, arr)
			}),

			removeEventListener: vi.fn((type: string, listener: Handler) => {
				const arr = listeners.get(type) || []
				listeners.set(
					type,
					arr.filter((l) => l !== listener),
				)
			}),

			exitPointerLock: vi.fn(() => {
				mock._pointerLockElement = null
				const handlers = listeners.get("pointerlockchange") || []
				for (const h of handlers) {
					if (typeof h === "function") {
						h(new Event("pointerlockchange"))
					} else if (
						h &&
						typeof (h as EventListenerObject).handleEvent === "function"
					) {
						;(h as EventListenerObject).handleEvent(
							new Event("pointerlockchange"),
						)
					}
				}
			}),

			// helpers the tests can call to simulate events
			dispatchMouseMove(movementX = 0, movementY = 0) {
				const handlers = listeners.get("mousemove") || []
				const ev = { movementX, movementY } as unknown as MouseEvent
				for (const h of handlers) {
					if (typeof h === "function") {
						h(ev)
					} else if (
						h &&
						typeof (h as EventListenerObject).handleEvent === "function"
					) {
						;(h as EventListenerObject).handleEvent(ev as unknown as Event)
					}
				}
			},

			dispatchPointerLockError() {
				const handlers = listeners.get("pointerlockerror") || []
				const ev = new Event("pointerlockerror")
				for (const h of handlers) {
					if (typeof h === "function") {
						h(ev)
					} else if (
						h &&
						typeof (h as EventListenerObject).handleEvent === "function"
					) {
						;(h as EventListenerObject).handleEvent(ev)
					}
				}
			},
		}

		return mock
	}

	public implementMock() {
		vi.stubGlobal("document", this.createMock())
	}

	public reset() {
		vi.restoreAllMocks()
	}
}

export const pointerLockAPIMock = new PointerLockAPIMock()
