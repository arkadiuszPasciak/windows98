import { describe, expect, it } from "vitest"
import { SingletonFactory } from "./singleton-factory.util"

class TestClass {
	constructor(public value: number) {}
}

describe("SingletonFactory", () => {
	it("should create a new instance if one does not exist", () => {
		const instance = SingletonFactory.getInstance(TestClass, 42)
		expect(instance).toBeInstanceOf(TestClass)
		expect(instance.value).toBe(42)
	})

	it("should return the same instance if one already exists", () => {
		const instance1 = SingletonFactory.getInstance(TestClass, 42)
		const instance2 = SingletonFactory.getInstance(TestClass, 99)
		expect(instance1).toBe(instance2)
		expect(instance2.value).toBe(42)
	})

	it("should create different instances for different classes", () => {
		class AnotherClass {
			constructor(public name: string) {}
		}

		const instance1 = SingletonFactory.getInstance(TestClass, 42)
		const instance2 = SingletonFactory.getInstance(AnotherClass, "test")
		expect(instance1).not.toBe(instance2)
		expect(instance1).toBeInstanceOf(TestClass)
		expect(instance2).toBeInstanceOf(AnotherClass)
		expect(instance2.name).toBe("test")
	})
})
