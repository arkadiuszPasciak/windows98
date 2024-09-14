import type { StorageRepositoryContract } from "../../domain/contracts"

export class StorageRepository<Key extends string, Value extends string>
	implements StorageRepositoryContract<Key, Value>
{
	public addItem(key: Key, value: Value): void {
		window.localStorage.setItem(key, value)
	}

	public getItem(key: Key): string | null {
		return window.localStorage.getItem(key)
	}

	public isItemExist(key: Key): boolean {
		const item = this.getItem(key)

		return !!item?.length
	}

	public removeItem(key: Key): void {
		window.localStorage.removeItem(key)
	}

	public clearAll(): void {
		window.localStorage.clear()
	}
}
