import { LocalStorageRepository } from "../../data/repositories"
import { StorageDomain } from "./storage.domain"

export class MSLocalStorage<
	Key extends string,
	Value extends string,
> extends StorageDomain<Key, Value> {
	constructor() {
		super(new LocalStorageRepository<Key, Value>())
	}
}
