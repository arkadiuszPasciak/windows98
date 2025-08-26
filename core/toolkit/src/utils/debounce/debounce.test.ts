import { describe, expect, it, vi } from "vitest"
import { debounce } from "./debounce.util"

describe("debounce", () => {
	it("should call the function after the specified delay", async () => {
		const callback = vi.fn()
		const waitMilliseconds = 50
		const debounced = debounce(callback, waitMilliseconds)

		debounced("test")
		expect(callback).not.toHaveBeenCalled()

		await new Promise((resolve) => setTimeout(resolve, waitMilliseconds + 10))
		expect(callback).toHaveBeenCalledWith("test")
	})

	it("should only call the function once if called multiple times quickly", async () => {
		const callback = vi.fn()
		const waitMilliseconds = 50
		const debounced = debounce(callback, waitMilliseconds)

		debounced("first")
		debounced("second")
		debounced("third")

		await new Promise((resolve) => setTimeout(resolve, waitMilliseconds + 10))
		expect(callback).toHaveBeenCalledTimes(1)
		expect(callback).toHaveBeenCalledWith("third")
	})
})
