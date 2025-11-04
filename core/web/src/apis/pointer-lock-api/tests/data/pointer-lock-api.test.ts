import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { pointerLockAPIMock } from "../../../../../@test/vitest/mocks"
import type { ElementWithPointerLockInterface } from "../../src/data/interfaces/element.interface"
import type { PointerLockChangeEvent } from "../../src/data/models/lock-change-event.model"
import { PointerLockAPIRepository } from "../../src/data/repositories"

describe("PointerLockAPIRepository", () => {
	let pointerLockAPIRepository: PointerLockAPIRepository

	afterEach(() => {
		pointerLockAPIMock.reset()
	})

	beforeEach(() => {
		pointerLockAPIMock.implementMock()
		pointerLockAPIRepository = new PointerLockAPIRepository()
	})

	it("returns unlocked state initially", () => {
		const state = pointerLockAPIRepository.getState()
		expect(state.isLocked).toBe(false)
		expect(state.element).toBeNull()
	})

	it("requestPointerLock and exitPointerLock update state", async () => {
		const doc = globalThis.document as unknown as {
			createElementMock: () => { requestPointerLock: () => Promise<void> }
			dispatchMouseMove: (movementX?: number, movementY?: number) => void
			dispatchPointerLockError: () => void
		}
		const el = doc.createElementMock()

		await pointerLockAPIRepository.requestPointerLock(
			el as unknown as ElementWithPointerLockInterface,
		)

		const lockedState = pointerLockAPIRepository.getState()
		expect(lockedState.isLocked).toBe(true)
		expect(lockedState.element).toBe(el)

		pointerLockAPIRepository.exitPointerLock()

		const unlockedState = pointerLockAPIRepository.getState()
		expect(unlockedState.isLocked).toBe(false)
		expect(unlockedState.element).toBeNull()
	})

	it("onPointerLockChange listener is called with previous and current element", async () => {
		const doc = globalThis.document as unknown as {
			createElementMock: () => { requestPointerLock: () => Promise<void> }
			dispatchMouseMove: (movementX?: number, movementY?: number) => void
			dispatchPointerLockError: () => void
		}
		const el = doc.createElementMock()

		const changes: PointerLockChangeEvent[] = []
		pointerLockAPIRepository.onPointerLockChange((e) => changes.push(e))

		await pointerLockAPIRepository.requestPointerLock(
			el as unknown as ElementWithPointerLockInterface,
		)

		expect(changes.length).toBeGreaterThanOrEqual(1)
		const first = changes[0]
		expect(first.previousElement).toBeNull()
		expect(first.currentElement).toBe(el)
		expect(first.isLocked).toBe(true)

		pointerLockAPIRepository.exitPointerLock()
		expect(changes.length).toBeGreaterThanOrEqual(2)
		const second = changes[1]
		expect(second.previousElement).toBe(el)
		expect(second.currentElement).toBeNull()
		expect(second.isLocked).toBe(false)
	})

	it("onPointerMovement only fires when pointer is locked", async () => {
		const doc = globalThis.document as unknown as {
			createElementMock: () => { requestPointerLock: () => Promise<void> }
			dispatchMouseMove: (movementX?: number, movementY?: number) => void
			dispatchPointerLockError: () => void
		}
		const el = doc.createElementMock()

		const moves: Array<{
			movementX: number
			movementY: number
			timestamp?: number
		}> = []
		pointerLockAPIRepository.onPointerMovement((m) => moves.push(m))

		doc.dispatchMouseMove(1, 2)
		expect(moves.length).toBe(0)

		await pointerLockAPIRepository.requestPointerLock(
			el as unknown as ElementWithPointerLockInterface,
		)
		doc.dispatchMouseMove(5, 7)
		expect(moves.length).toBe(1)
		expect(moves[0].movementX).toBe(5)
		expect(moves[0].movementY).toBe(7)
	})

	it("onPointerLockError listener is invoked when error occurs", () => {
		const doc = globalThis.document as unknown as {
			dispatchPointerLockError: () => void
		}

		let called = false
		pointerLockAPIRepository.onPointerLockError(() => {
			called = true
		})

		doc.dispatchPointerLockError()
		expect(called).toBe(true)
	})
})
