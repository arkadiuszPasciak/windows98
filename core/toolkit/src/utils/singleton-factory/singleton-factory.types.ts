// biome-ignore lint/suspicious/noExplicitAny: accept any arguments
export type Constructor<T, Args extends any[] = any[]> = new (
	...args: Args
) => T
