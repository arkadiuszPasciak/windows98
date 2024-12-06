import { LocalStorageRepository } from "../../data/repositories"
import { StorageDomain } from "./storage.domain"

export class MSLocalStorage<StorageKeys> extends StorageDomain<StorageKeys> {
	constructor() {
		super(new LocalStorageRepository<StorageKeys>())
	}
}
