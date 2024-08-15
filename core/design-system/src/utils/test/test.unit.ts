import { describe, expect, it } from "vitest"
import test from "./test"

describe("empty test to run vitest unit test, to delete when will be real test", () => {
	it("should return 4", () => {
		expect(test(2, 2)).toBe(4)
	})
})
