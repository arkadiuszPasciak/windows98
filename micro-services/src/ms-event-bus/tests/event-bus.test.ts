import { describe, expect, it, vi } from "vitest"
import { MSEventBus } from "../src/domain/domains"

describe("EventBusDomain", () => {
	it("should register an event listener with on method", async () => {
		const eventBus = MSEventBus
		const listener = vi.fn()

		eventBus.on("testEvent", listener)
		eventBus.emit("testEvent")

		expect(listener).toHaveBeenCalled()
	})

	it("should register a one-time event listener with once method", async () => {
		const eventBus = MSEventBus
		const listener = vi.fn()

		eventBus.once("testEvent", listener)
		eventBus.emit("testEvent")
		eventBus.emit("testEvent")

		expect(listener).toHaveBeenCalledTimes(1)
	})

	it("should remove an event listener with off method", async () => {
		const eventBus = MSEventBus
		const listener = vi.fn()

		eventBus.on("testEvent", listener)
		eventBus.off("testEvent", listener)
		eventBus.emit("testEvent")

		expect(listener).not.toHaveBeenCalled()
	})

	it("should emit an event with emit method", async () => {
		const eventBus = MSEventBus
		const listener = vi.fn()

		eventBus.on("testEvent", listener)
		eventBus.emit("testEvent", { data: "testData" })

		expect(listener).toHaveBeenCalledWith({ data: "testData" })
	})
})
