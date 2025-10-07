import type { BlobRepositoryContract } from "../contracts"

export class BlobRepository implements BlobRepositoryContract {
	public create(
		blobParts?: BlobPart[] | undefined,
		options?: BlobPropertyBag,
	): Blob {
		return new Blob(blobParts, options)
	}
}
