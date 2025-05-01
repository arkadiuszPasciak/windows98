import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ShutdownDomain } from "../../src/domain/domains"
import { EShutdownPresets } from "../../src/domain/models"

describe("ShutdownDomain", () => {
	const shutdownDomain = new ShutdownDomain()

	beforeEach(() => {
		vi.stubGlobal("location", {
			reload: vi.fn(),
			href: "",
		})
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it("restartApplication should reload the browser", () => {
		shutdownDomain.restartApplication()

		expect(window.location.reload).toHaveBeenCalled()
	})

	it("turnOffApplication should redirect to 'https://google.com'", () => {
		shutdownDomain.shutdownApplication()

		expect(window.location.href).toBe("https://google.com")
	})

	it("changePreset should change the preset correctly", () => {
		shutdownDomain.changePreset(EShutdownPresets.RESTART)
		expect(shutdownDomain.preset).toBe(EShutdownPresets.RESTART)

		shutdownDomain.changePreset(EShutdownPresets.SHUTDOWN)
		expect(shutdownDomain.preset).toBe(EShutdownPresets.SHUTDOWN)

		shutdownDomain.changePreset(EShutdownPresets.RESTART)
		expect(shutdownDomain.preset).toBe(EShutdownPresets.RESTART)
	})

	it("changePreset should not change the preset if the same preset is passed", () => {
		shutdownDomain.changePreset(EShutdownPresets.RESTART)
		expect(shutdownDomain.preset).toBe(EShutdownPresets.RESTART)

		shutdownDomain.changePreset(EShutdownPresets.RESTART)
		expect(shutdownDomain.preset).toBe(EShutdownPresets.RESTART)
	})
})
