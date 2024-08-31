import { AppControllerRepository } from "../../data/repositories"
import type {
	AppControllerDomainContract,
	AppControllerRepositoryContract,
} from "../contracts"

export class AppControllerDomain implements AppControllerDomainContract {
	private appControllerRepository: AppControllerRepositoryContract

	constructor() {
		this.appControllerRepository = new AppControllerRepository()
	}

	restartApplication(): void {
		this.appControllerRepository.restartApplication()
	}

	turnOffApplication(): void {
		this.appControllerRepository.turnOffApplication()
	}
}
