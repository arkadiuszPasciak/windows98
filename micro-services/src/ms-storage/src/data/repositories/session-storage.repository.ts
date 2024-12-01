import type { StorageRepositoryStrategyContract } from "../../domain/contracts"

export class SessionStorageRepository<Key extends string, Value extends string>
	implements StorageRepositoryStrategyContract<Key, Value> {
	public getItem(key: Key): Value | null {
		return window.sessionStorage.getItem(key) as Value
	}

	public setItem(key: Key, value: Value): void {
		window.sessionStorage.setItem(key, value)
	}

	public removeItem(key: Key): void {
		window.sessionStorage.removeItem(key)
	}

	public clear(): void {
		window.sessionStorage.clear()
	}
}
