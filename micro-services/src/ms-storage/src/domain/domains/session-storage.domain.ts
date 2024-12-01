import { SessionStorageRepository } from "../../data/repositories"
import { StorageDomain } from "./storage.domain"

export class MSSessionStorage<
	Key extends string,
	Value extends string,
> extends StorageDomain<Key, Value> {
	constructor() {
		super(new SessionStorageRepository<Key, Value>())
	}
}
