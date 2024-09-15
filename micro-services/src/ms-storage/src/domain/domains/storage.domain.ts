import type { Maybe } from "@windows98/toolkit"
import { StorageRepository } from "../../data/repositories"
import type { StorageDomainContract } from "../contracts"

export class StorageDomain<Key extends string, Value extends string>
	implements StorageDomainContract<Key, Value>
{
	private readonly storageRepository: StorageRepository<Key, Value>

	constructor() {
		this.storageRepository = new StorageRepository()
	}

	public addItem(key: Key, value: Value): void {
		this.storageRepository.addItem(key, value)
	}

	public getItem(key: Key): Maybe<Value> {
		return this.storageRepository.getItem(key) as Value
	}

	public isItemExist(key: Key): boolean {
		return this.storageRepository.isItemExist(key)
	}

	public updateItem(key: Key, value: Value): void {
		this.storageRepository.addItem(key, value)
	}

	public removeItem(key: Key): void {
		this.storageRepository.removeItem(key)
	}
}
