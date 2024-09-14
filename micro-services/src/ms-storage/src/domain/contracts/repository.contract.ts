export interface StorageRepositoryContract<
	Key extends string,
	Value extends string,
> {
	addItem(key: Key, value: Value): void
	getItem(key: Key): string | null
	isItemExist(key: Key): boolean
	removeItem(key: Key): void
	clearAll(): void
}
