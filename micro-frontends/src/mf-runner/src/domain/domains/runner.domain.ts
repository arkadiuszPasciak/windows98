import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { RunnerDomainContract } from "../contracts"
import type { Programs } from "../models"

export class RunnerDomain implements RunnerDomainContract {
	public programName = ""

	constructor() {
		makeAutoObservable(this)
	}

	public setProgramName(programName: string): void {
		this.programName = programName
	}

	public runProgram<Program extends string>(
		programs: Programs,
	): Maybe<Program> {
		for (const key in programs) {
			if (
				Array.isArray(programs[key]) &&
				programs[key].includes(this.programName)
			) {
				this.clearProgramName()
				return key as Program
			}
		}

		return null
	}

	private clearProgramName(): void {
		this.programName = ""
	}
}

export const runnerDomain = new RunnerDomain()
