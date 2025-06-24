import type { Constructor } from "./singleton-factory.types"

// biome-ignore lint/complexity/noStaticOnlyClass: this is a utility class singleton
export class SingletonFactory {
	// biome-ignore lint/suspicious/noExplicitAny: accept any arguments
	private static instances: Map<Constructor<any>, any> = new Map()

	public static getInstance<T>(
		classConstructor: Constructor<T>,
		...args: unknown[]
	): T {
		let instance = SingletonFactory.instances.get(classConstructor)

		if (!instance) {
			instance = new classConstructor(...args)
			SingletonFactory.instances.set(classConstructor, instance)
		}

		return instance
	}
}
