import { SessionStorageRepository } from "../../data/repositories"
import { StorageDomain } from "./storage.domain"

export class MSSessionStorage<StorageKeys> extends StorageDomain<StorageKeys> {
	constructor() {
		super(new SessionStorageRepository<StorageKeys>())
	}
}
