export interface ProgramManagerBuilderContract<Programs> {
	add<Program extends keyof Programs>(
		key: Program,
		value: Programs[Program],
	): this
	build(): Programs
}
