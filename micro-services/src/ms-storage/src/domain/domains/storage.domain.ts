import { WebStorageAPI } from "@windows98/web"
import type { StorageDomainContract } from "../contracts"

export class StorageDomain<StorageKeys>
	implements StorageDomainContract<StorageKeys>
{
	private storageRepository

	constructor() {
		this.storageRepository = new WebStorageAPI()
	}

	public set<Key extends keyof StorageKeys>(
		key: Key,
		value: StorageKeys[Key],
	): void {
		this.storageRepository.localStorage.setItem(key, value)
	}

	public get<Key extends keyof StorageKeys>(key: Key): StorageKeys[Key] {
		return this.storageRepository.localStorage.getItem(key)
	}

	public exists<Key extends keyof StorageKeys>(key: Key): boolean {
		const item = this.get(key)

		return !!item?.toString().length
	}

	public remove<Key extends keyof StorageKeys>(key: Key): void {
		this.storageRepository.localStorage.removeItem(key)
	}
}
