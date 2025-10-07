import type {
	BlobRepositoryContract,
	FileAPIRepositoryContract,
} from "../contracts"
import { BlobRepository } from "./blob.repository"

export class FileAPIRepository implements FileAPIRepositoryContract {
	public blob: BlobRepositoryContract

	constructor() {
		this.blob = new BlobRepository()
	}
}
