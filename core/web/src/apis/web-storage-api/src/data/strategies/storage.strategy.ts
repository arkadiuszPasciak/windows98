import type { Maybe } from "@windows98/toolkit"
import type { StorageStrategyContract } from "../contracts"
import type { StorageType } from "../models"

export class StorageStrategy<StorageKeys>
	implements StorageStrategyContract<StorageKeys>
{
	constructor(private storage: StorageType) {}

	public getItem<Key extends keyof StorageKeys>(
		key: Key,
	): Maybe<StorageKeys[Key]> {
		return window[this.storage].getItem(key as string) as StorageKeys[Key]
	}

	public setItem<Key extends keyof StorageKeys>(
		key: Key,
		value: StorageKeys[Key],
	): void {
		window[this.storage].setItem(key as string, value as string)
	}

	public removeItem<Key extends keyof StorageKeys>(key: Key): void {
		window[this.storage].removeItem(key as string)
	}

	public clear(): void {
		window[this.storage].clear()
	}
}
