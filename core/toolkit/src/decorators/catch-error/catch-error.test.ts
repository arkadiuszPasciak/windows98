import { describe, expect, it } from "vitest"
import { CatchError } from "./catch-error.decorator"

describe("CatchError decorator", () => {
	it("should throw error with class and method name", () => {
		class TestClass {
			@CatchError()
			methodThatThrows() {
				throw new Error("Original error message")
			}
		}
		const instance = new TestClass()
		try {
			instance.methodThatThrows()
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			if (error instanceof Error) {
				expect(error.message).toContain("Original error message")
				expect(error.name).toBe("[TestClass]<methodThatThrows>")
			}
		}
	})

	it("should use 'Unknown error message' if no message is provided", () => {
		class TestClass {
			@CatchError()
			methodThatThrows() {
				throw {}
			}
		}
		const instance = new TestClass()
		try {
			instance.methodThatThrows()
		} catch (error) {
			expect(error).toBeInstanceOf(Error)
			if (error instanceof Error) {
				expect(error.message).toContain("Unknown error message")
			}
		}
	})
})
