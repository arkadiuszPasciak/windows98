import { ObserverHelper } from "@windows98/toolkit"
import type { ProgramManagerDomainContract } from "../contracts"

export class ProgramManagerDomain<Programs>
	implements ProgramManagerDomainContract<Programs>
{
	public readonly observerHelper = new ObserverHelper<Programs>()
	private programsState: Programs

	public constructor(programs: Programs) {
		this.programsState = programs
	}

	public get programs(): Programs {
		return this.programsState
	}

	public set programs(newPrograms: Programs) {
		const oldPrograms = this.programsState
		this.programsState = newPrograms
		this.observerHelper.notify(newPrograms, oldPrograms)
	}

	public runProgram<Program extends keyof Programs>(
		program: Program,
		value: Programs[Program],
	): void {
		if (this.programsState[program] === value) return

		const oldPrograms = this.programsState
		this.programsState = {
			...this.programsState,
			[program]: value,
		}

		this.observerHelper.notify(this.programsState, oldPrograms)
	}
}
