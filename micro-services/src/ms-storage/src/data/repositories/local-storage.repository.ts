import type { StorageRepositoryStrategyContract } from "../../domain/contracts"

export class LocalStorageRepository<Key extends string, Value extends string>
	implements StorageRepositoryStrategyContract<Key, Value> {
	public getItem(key: Key): Value | null {
		return window.localStorage.getItem(key) as Value
	}

	public setItem(key: Key, value: Value): void {
		window.localStorage.setItem(key, value)
	}

	public removeItem(key: Key): void {
		window.localStorage.removeItem(key)
	}

	public clear(): void {
		window.localStorage.clear()
	}
}
