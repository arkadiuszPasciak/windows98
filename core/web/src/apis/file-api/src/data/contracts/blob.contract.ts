export interface BlobRepositoryContract {
	create(blobParts?: BlobPart[] | undefined, options?: BlobPropertyBag): Blob
}
