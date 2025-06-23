import { describe, expect, it, vi } from "vitest"
import { ObserverHelper } from "./observer.helper"

describe("ObserverHelper", () => {
	it("should allow subscribing to changes", () => {
		const observer = new ObserverHelper<number>()
		const callback = vi.fn()

		observer.subscribe(callback)
		observer.notify(42, 24)

		expect(callback).toHaveBeenCalledTimes(1)
		expect(callback).toHaveBeenCalledWith(42, 24)
	})

	it("should allow unsubscribing", () => {
		const observer = new ObserverHelper<number>()
		const callback = vi.fn()

		observer.subscribe(callback)
		observer.unsubscribe(callback)
		observer.notify(42, 24)

		expect(callback).not.toHaveBeenCalled()
	})

	it("should notify all subscribers when a change occurs", () => {
		const observer = new ObserverHelper<string>()
		const callback1 = vi.fn()
		const callback2 = vi.fn()

		observer.subscribe(callback1)
		observer.subscribe(callback2)
		observer.notify("newValue", "oldValue")

		expect(callback1).toHaveBeenCalledTimes(1)
		expect(callback1).toHaveBeenCalledWith("newValue", "oldValue")
		expect(callback2).toHaveBeenCalledTimes(1)
		expect(callback2).toHaveBeenCalledWith("newValue", "oldValue")
	})

	it("should handle no subscribers gracefully", () => {
		const observer = new ObserverHelper<boolean>()

		expect(() => observer.notify(true, false)).not.toThrow()
	})
})
