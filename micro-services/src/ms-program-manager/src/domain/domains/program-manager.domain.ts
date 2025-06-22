import { SingletonFactory } from "@windows98/toolkit"
import type { ProgramManagerDomainContract } from "../contracts"

export class ProgramManagerDomain<Programs>
	implements ProgramManagerDomainContract<Programs>
{
	public constructor(programs: Programs) {
		this.programs = programs
	}

	public readonly programs: Programs

	public runProgram<Program extends keyof Programs>(
		program: Program,
		value: Programs[Program],
	): void {
		if (this.programs[program] === value) return

		this.programs[program] = value
	}

	public static getInstance<Programs>(
		programs?: Programs,
	): ProgramManagerDomain<Programs> {
		return SingletonFactory.getInstance<ProgramManagerDomain<Programs>>(
			ProgramManagerDomain,
			programs,
		)
	}
}
