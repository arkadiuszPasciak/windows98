import type { URLAPIRepositoryContract } from "../contracts"

export class URLAPIRepository implements URLAPIRepositoryContract {
	public createObjectURL(object: Blob | MediaSource): string {
		return URL.createObjectURL(object)
	}
}
