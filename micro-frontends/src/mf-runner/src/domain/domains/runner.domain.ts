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
		programs: Programs<Program>,
	): Maybe<Program> {
		for (const programObj of programs) {
			const [key, values] = Object.entries(programObj)[0]

			if (
				Array.isArray(values) &&
				values.includes(this.programName.toLowerCase())
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
