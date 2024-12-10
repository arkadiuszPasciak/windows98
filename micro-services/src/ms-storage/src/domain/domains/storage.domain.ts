import type { Maybe } from "@windows98/toolkit"
import type {
	StorageDomainContract,
	StorageRepositoryStrategyContract,
} from "../contracts"

export class StorageDomain<StorageKeys>
	implements StorageDomainContract<StorageKeys>
{
	private storageRepository: StorageRepositoryStrategyContract<StorageKeys>

	constructor(
		storageRepository: StorageRepositoryStrategyContract<StorageKeys>,
	) {
		this.storageRepository = storageRepository
	}

	public set<Key extends keyof StorageKeys>(
		key: Key,
		value: StorageKeys[Key],
	): void {
		this.storageRepository.setItem(key, value)
	}

	public get<Key extends keyof StorageKeys>(key: Key): Maybe<StorageKeys[Key]> {
		return this.storageRepository.getItem(key) as Maybe<StorageKeys[Key]>
	}

	public exists<Key extends keyof StorageKeys>(key: Key): boolean {
		const item = this.get(key)

		return !!item?.toString().length
	}

	public remove<Key extends keyof StorageKeys>(key: Key): void {
		this.storageRepository.removeItem(key)
	}
}
