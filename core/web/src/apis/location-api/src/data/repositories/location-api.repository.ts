import type { LocationAPIRepositoryContract } from "../contracts"

export class LocationAPIRepository implements LocationAPIRepositoryContract {
	public reload(): void {
		window.location.reload()
	}

	public setHref(href: string): void {
		window.location.href = href
	}
}
