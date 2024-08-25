import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ShutdownDomain } from "../../src/domain/domains"

describe("ShutdownDomain", () => {
	const shutdownDomain = new ShutdownDomain()

	beforeEach(() => {
		vi.spyOn(window.location, 'reload').mockImplementation(() => { })
		vi.spyOn(window.location, 'assign').mockImplementation(() => { })
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("restartApplication should reload the browser", () => {
		shutdownDomain.restartApplication()

		expect(window.location.reload).toHaveBeenCalled()
	})

	it("turnOffApplication should redirect to 'https://google.com'", () => {
		shutdownDomain.turnOffApplication()

		expect(window.location.assign).toHaveBeenCalledWith("https://google.com")
	})
})
