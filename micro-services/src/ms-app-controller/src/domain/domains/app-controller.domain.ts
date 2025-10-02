import { LocationAPI } from "@windows98/web"
import type { AppControllerDomainContract } from "../contracts"

export class AppControllerDomain implements AppControllerDomainContract {
	private locationRepository: LocationAPI
	private href: string

	constructor(href: string) {
		this.locationRepository = new LocationAPI()
		this.href = href
	}

	restartApplication(): void {
		this.locationRepository.reload()
	}

	shutdownApplication(): void {
		this.locationRepository.setHref(this.href)
	}
}
