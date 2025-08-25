import { describe, expect, it } from "vitest"
import { MSCaseConverter } from "../../src"

describe("CaseConverterDomain", () => {
	it("toAlternateCase()", () => {
		const result = MSCaseConverter.toAlternateCase("hello world")
		expect(result).toBe("hElLo wOrLd")
	})

	it("toCamelCase()", () => {
		const result = MSCaseConverter.toCamelCase("hello world test")
		expect(result).toBe("helloWorldTest")
	})

	it("toConstantCase()", () => {
		const result = MSCaseConverter.toConstantCase("hello world test")
		expect(result).toBe("HELLO_WORLD_TEST")
	})

	it("toDotCase()", () => {
		const result = MSCaseConverter.toDotCase("hello world test")
		expect(result).toBe("hello.world.test")
	})

	it("toKebabCase()", () => {
		const result = MSCaseConverter.toKebabCase("hello world test")
		expect(result).toBe("hello-world-test")
	})

	it("toLowercase()", () => {
		const result = MSCaseConverter.toLowercase("Hello World")
		expect(result).toBe("hello world")
	})

	it("toPascalCase()", () => {
		const result = MSCaseConverter.toPascalCase("hello world test")
		expect(result).toBe("HelloWorldTest")
	})

	it("toPathCase()", () => {
		const result = MSCaseConverter.toPathCase("hello world test")
		expect(result).toBe("hello/world/test")
	})

	it("toSentenceCase()", () => {
		const result = MSCaseConverter.toSentenceCase("hello world TEST")
		expect(result).toBe("Hello world test")
	})

	it("toSnakeCase()", () => {
		const result = MSCaseConverter.toSnakeCase("hello world test")
		expect(result).toBe("hello_world_test")
	})

	it("toTitleCase()", () => {
		const result = MSCaseConverter.toTitleCase("hello world test")
		expect(result).toBe("Hello World Test")
	})

	it("toUppercase()", () => {
		const result = MSCaseConverter.toUppercase("hello world test")
		expect(result).toBe("HELLO WORLD TEST")
	})
})
