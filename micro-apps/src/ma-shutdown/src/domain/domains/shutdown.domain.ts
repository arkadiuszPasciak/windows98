import { makeAutoObservable } from "mobx"
import { ShutdownRepository } from "../../data/repositories"
import type { ShutdownDomainContract } from "../contracts"
import { EShutdownPresets } from "../models"

export class ShutdownDomain implements ShutdownDomainContract {
	private shutdownRepository: ShutdownRepository
	public preset: EShutdownPresets = EShutdownPresets.SHUTDOWN

	constructor() {
		makeAutoObservable(this)

		this.shutdownRepository = new ShutdownRepository()
	}

	public changePreset(preset: EShutdownPresets): void {
		if (this.preset === preset) return

		this.preset = preset
	}

	public restartApplication(): void {
		this.shutdownRepository.restartApplication()
	}

	public shutdownApplication(): void {
		this.shutdownRepository.shutdownApplication()
	}
}

export const shutdownDomain = new ShutdownDomain()
