export enum Program {
	CALCULATOR = "calculator",
	COLOR_GENERATOR = "color-generator",
	NOTEPAD = "notepad",
	RUNNER = "runner",
	SETTINGS = "settings",
	SHUTDOWN = "shutdown",
	TIC_TAC_TOE = "tic-tac-toe",
	TIMER = "timer",
}

export type ProgramManager = {
	[Key in Program]: boolean
}
