import { MSAppController } from "@windows98/micro-services"
import type { ShutdownRepositoryContract } from "../../domain/contracts"

export class ShutdownRepository implements ShutdownRepositoryContract {
	private appController: MSAppController

	constructor() {
		this.appController = new MSAppController()
	}

	restartApplication(): void {
		this.appController.restartApplication()
	}

	shutdownApplication(): void {
		this.appController.shutdownApplication()
	}
}
