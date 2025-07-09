import { describe, expect, it } from "vitest"
import { getClassNames } from "./get-class-names.util"

describe("getClassNames", () => {
	it("should join class names with a space", () => {
		const result = getClassNames(["foo", "bar"])
		expect(result).toBe("foo bar")
	})

	it("should join class names and append additional class name", () => {
		const result = getClassNames(["foo", "bar"], "baz")
		expect(result).toBe("foo bar baz")
	})

	it("should return only the additional class name if className array is empty", () => {
		const result = getClassNames([], "baz")
		expect(result).toBe("baz")
	})

	it("should return an empty string if both className array and additionalClassName are empty", () => {
		const result = getClassNames([])
		expect(result).toBe("")
	})
})
