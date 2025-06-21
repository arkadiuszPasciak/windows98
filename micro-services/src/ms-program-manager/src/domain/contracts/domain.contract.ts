export interface ProgramManagerDomainContract<Programs> {
	readonly programs: Programs

	set<Program extends keyof Programs>(
		program: Program,
		value: Programs[Program],
	): void
	get<Program extends keyof Programs>(program: Program): Programs[Program]
}
