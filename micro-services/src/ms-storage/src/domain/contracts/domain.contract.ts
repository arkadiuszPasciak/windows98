import type { Maybe } from "@windows98/toolkit"

export interface StorageDomainContract<Key, Value> {
	set(key: Key, value: Value): void
	get(key: Key): Maybe<Value>
	exists(key: Key): boolean
	remove(key: Key): void
}
