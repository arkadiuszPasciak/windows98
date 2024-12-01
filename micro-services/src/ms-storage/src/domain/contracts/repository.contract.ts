export interface StorageRepositoryStrategyContract<
	Key extends string,
	Value extends string,
> {
	getItem(key: Key): Value | null
	setItem(key: Key, value: string): void
	removeItem(key: Key): void
	clear(): void
}
