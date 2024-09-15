import type { Maybe } from "@windows98/toolkit"

export interface StorageDomainContract<Key, Value> {
	addItem(key: Key, value: Value): void
	getItem(key: Key): Maybe<Value>
	isItemExist(key: Key): boolean
	updateItem(key: Key, value: Value): void
	removeItem(key: Key): void
}
