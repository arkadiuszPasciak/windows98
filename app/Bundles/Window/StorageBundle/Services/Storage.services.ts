import { Nullable } from "vitest"
import { TStorageName } from "@APP|Bundles/StorageBundle/Supports/Storage.supports"

class BaseStorage {
	readonly storage: Storage

	constructor(storage: Storage) {
		this.storage = storage
	}

	public clearAll(): void {
		this.storage.clear()
	}

	public getItem(name: TStorageName): Nullable<string> {
		return this.storage.getItem(name)
	}

	public isItemExist(name: TStorageName): boolean {
		const item = this.storage.getItem(name)

		return item && item.length ? true : false
	}

	public removeItem(name: TStorageName): void {
		this.storage.removeItem(name)
	}

	public setItem(name: TStorageName, value: string): void {
		this.storage.setItem(name, value)
	}
}

export const LocalStorage = new BaseStorage(window.localStorage)

export const SessionStorage = new BaseStorage(window.sessionStorage)
