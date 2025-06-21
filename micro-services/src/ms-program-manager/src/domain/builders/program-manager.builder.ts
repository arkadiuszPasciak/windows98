import { MSErrorHandler } from "../../../../ms-error-handler/src"
import type { ProgramManagerBuilderContract } from "../contracts"

export class ProgramManagerBuilder<Programs>
	implements ProgramManagerBuilderContract<Programs>
{
	private programs: Programs

	constructor(programs: Programs) {
		this.programs = programs
	}

	public add<Program extends keyof Programs>(
		program: Program,
		value: Programs[Program],
	): this {
		this.programs[program] = value

		return this
	}

	public build(): Programs {
		this.validatePrograms()

		return this.programs
	}

	@MSErrorHandler.CatchError("ProgramManagerBuilder", "validatePrograms")
	private validatePrograms(): void {
		if (this.programs === undefined) throw new Error("missing program")

		for (const [key, value] of Object.entries(
			this.programs as Record<string, unknown>,
		)) {
			if (value === undefined) throw new Error(`missing ${key}`)
		}
	}
}
