import { makeAutoObservable } from "mobx"
import type { RunnerDomainContract } from "../contracts"

export class RunnerDomain implements RunnerDomainContract {
	public programName = ""

	constructor() {
		makeAutoObservable(this)
	}

	public setProgramName(programName: string): void {
		this.programName = programName
	}
}

export const runnerDomain = new RunnerDomain()
