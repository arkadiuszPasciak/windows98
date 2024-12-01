import type { Maybe } from "@windows98/toolkit"
import type {
	StorageDomainContract,
	StorageRepositoryStrategyContract,
} from "../contracts"

export class StorageDomain<Key extends string, Value extends string>
	implements StorageDomainContract<Key, Value>
{
	private storageRepository: StorageRepositoryStrategyContract<Key, Value>

	constructor(
		storageRepository: StorageRepositoryStrategyContract<Key, Value>,
	) {
		this.storageRepository = storageRepository
	}

	public set(key: Key, value: Value): void {
		this.storageRepository.setItem(key, value)
	}

	public get(key: Key): Maybe<Value> {
		return this.storageRepository.getItem(key) as Value
	}

	public exists(key: Key): boolean {
		const item = this.get(key)

		return !!item?.length
	}

	public remove(key: Key): void {
		this.storageRepository.removeItem(key)
	}
}
