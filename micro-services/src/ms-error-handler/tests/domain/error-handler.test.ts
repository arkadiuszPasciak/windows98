import { describe, expect, it } from "vitest"
import { MSErrorHandler } from "../../src/domain/domains"

describe("ErrorHandlerDomain", () => {
	describe("CatchError", () => {
		it("should catch and handle errors", () => {
			const testData = {
				moduleName: "ModuleName",
				methodName: "MethodName",
				errorMessage: "Original error message",
			}

			class TestClass {
				@MSErrorHandler.CatchError(testData.moduleName, testData.methodName)
				methodThatThrows() {
					throw new Error("Original error message")
				}
			}

			const testInstance = new TestClass()

			try {
				testInstance.methodThatThrows()
			} catch (error) {
				expect(error).toBeInstanceOf(Error)

				console.log(error)

				if (error instanceof Error) {
					expect(error.message).toBe(testData.errorMessage)
					expect(error.name).toBe(
						`[${testData.moduleName}]<${testData.methodName}>`,
					)
				}
			}
		})

		it("should use the unknown error message if no custom message is provided", () => {
			const testData = {
				moduleName: "ModuleName",
				methodName: "MethodName",
			}

			class TestClass {
				@MSErrorHandler.CatchError(testData.moduleName, testData.methodName)
				methodThatThrows() {
					throw new Error()
				}
			}

			const testInstance = new TestClass()

			try {
				testInstance.methodThatThrows()
			} catch (error) {
				expect(error).toBeInstanceOf(Error)

				if (error instanceof Error) {
					expect(error.message).toBe("Unknown error message")
					expect(error.name).toBe(
						`[${testData.moduleName}]<${testData.methodName}>`,
					)
				}
			}
		})
	})
})
