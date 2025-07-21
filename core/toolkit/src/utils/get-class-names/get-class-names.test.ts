import { describe, expect, it } from "vitest"
import { getClassNames } from "./get-class-names.util"

describe("getClassNames", () => {
	it("should join class names with a space", () => {
		const result = getClassNames(["foo", "bar"])
		expect(result).toBe("foo bar")
	})

	it("should ignore empty strings and whitespace-only class names", () => {
		const result = getClassNames(["foo", "", "  ", "bar"])
		expect(result).toBe("foo bar")
	})

	it("should return a single class name if only one is present", () => {
		const result = getClassNames(["baz"])
		expect(result).toBe("baz")
	})

	it("should return an empty string if all class names are empty or whitespace", () => {
		const result = getClassNames(["", "   "])
		expect(result).toBe("")
	})

	it("should return an empty string if the array is empty", () => {
		const result = getClassNames([])
		expect(result).toBe("")
	})
})
