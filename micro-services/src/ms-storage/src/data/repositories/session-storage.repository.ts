import type { Maybe } from "@windows98/toolkit"
import type { StorageRepositoryStrategyContract } from "../../domain/contracts"

export class SessionStorageRepository<StorageKeys>
	implements StorageRepositoryStrategyContract<StorageKeys>
{
	public getItem<Key extends keyof StorageKeys>(
		key: Key,
	): Maybe<StorageKeys[Key]> {
		return window.sessionStorage.getItem(key as string) as StorageKeys[Key]
	}

	public setItem<Key extends keyof StorageKeys>(
		key: Key,
		value: StorageKeys[Key],
	): void {
		window.sessionStorage.setItem(key as string, value as string)
	}

	public removeItem<Key extends keyof StorageKeys>(key: Key): void {
		window.sessionStorage.removeItem(key as string)
	}

	public clear(): void {
		window.sessionStorage.clear()
	}
}
