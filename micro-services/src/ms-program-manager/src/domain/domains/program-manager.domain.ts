import type { ProgramManagerDomainContract } from "../contracts"

export class ProgramManagerDomain<Programs>
	implements ProgramManagerDomainContract<Programs>
{
	// biome-ignore lint/suspicious/noExplicitAny: any is used to store the instance of the class
	private static instance: ProgramManagerDomain<any> | undefined = undefined
	private static lock = false
	readonly programs: Programs

	private constructor(programs: Programs) {
		this.programs = programs
	}

	public static getInstance<Programs>(
		programs: Programs,
	): ProgramManagerDomain<Programs> {
		while (ProgramManagerDomain.lock) {
			/* Busy-wait until the lock is released */
		}

		ProgramManagerDomain.lock = true

		if (!ProgramManagerDomain.instance) {
			ProgramManagerDomain.instance = new ProgramManagerDomain(programs)
		}

		ProgramManagerDomain.lock = false

		return ProgramManagerDomain.instance
	}

	public set<Program extends keyof Programs>(
		program: Program,
		value: Programs[Program],
	): void {
		if (this.programs[program] === value) return

		this.programs[program] = value
	}

	public get<Program extends keyof Programs>(
		program: Program,
	): Programs[Program] {
		return this.programs[program]
	}
}
