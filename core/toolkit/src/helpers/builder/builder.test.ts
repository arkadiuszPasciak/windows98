import { describe, expect, it } from "vitest"
import { Builder } from "./builder.helper"

interface TestObject {
	name: string
	value: number
}

describe("Builder", () => {
	it("should build an object with the specified properties", () => {
		const builder = new Builder<TestObject>({
			name: "",
			value: 0,
		})

		const result = builder
			.setProperty("name", "Test Object")
			.setProperty("value", 42)
			.build()

		expect(result).toEqual({
			name: "Test Object",
			value: 42,
		})
	})

	it("should return the default config if no properties are set", () => {
		const defaultConfig = { name: "Default", value: 1 }
		const builder = new Builder<TestObject>(defaultConfig)
		const result = builder.build()
		expect(result).toEqual(defaultConfig)
	})

	it("should allow chaining of setProperty", () => {
		const builder = new Builder<TestObject>({ name: "", value: 0 })
		builder.setProperty("name", "Chain").setProperty("value", 99)
		const result = builder.build()
		expect(result).toEqual({ name: "Chain", value: 99 })
	})

	it("should overwrite properties when setProperty is called multiple times for the same key", () => {
		const builder = new Builder<TestObject>({ name: "", value: 0 })
		const result = builder
			.setProperty("name", "First")
			.setProperty("name", "Second")
			.setProperty("value", 123)
			.build()
		expect(result).toEqual({ name: "Second", value: 123 })
	})

	it("should not mutate the original default config object", () => {
		const defaultConfig = { name: "Original", value: 10 }
		const builder = new Builder<TestObject>(defaultConfig)
		builder.setProperty("name", "Changed")
		expect(defaultConfig).toEqual({ name: "Original", value: 10 })
	})
})
