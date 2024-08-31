import type { AppControllerRepositoryContract } from "../../domain/contracts"

export class AppControllerRepository
	implements AppControllerRepositoryContract
{
	restartApplication(): void {
		window.location.reload()
	}

	turnOffApplication(): void {
		window.location.href = "https://google.com"
	}
}
