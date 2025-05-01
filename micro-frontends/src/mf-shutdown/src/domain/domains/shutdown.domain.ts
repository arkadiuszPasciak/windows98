import { MSAppController } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { ShutdownDomainContract } from "../contracts"
import { EShutdownPresets } from "../models"

export class ShutdownDomain implements ShutdownDomainContract {
	private appController: MSAppController
	public preset: EShutdownPresets = EShutdownPresets.SHUTDOWN

	constructor() {
		makeAutoObservable(this)

		this.appController = new MSAppController()
	}

	public changePreset(preset: EShutdownPresets): void {
		if (this.preset === preset) return

		this.preset = preset
	}

	public restartApplication(): void {
		this.appController.restartApplication()
	}

	public shutdownApplication(): void {
		this.appController.shutdownApplication()
	}
}

export const shutdownDomain = new ShutdownDomain()
