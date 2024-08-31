import type { AppControllerRepositoryContract } from "../../domain/contracts"

export class AppControllerRepository
	implements AppControllerRepositoryContract
{
	restartApplication(): void {
		window.location.reload()
	}

	shutdownApplication(): void {
		window.location.href = "https://google.com"
	}
}
