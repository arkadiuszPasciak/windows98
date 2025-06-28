export enum Program {
	CALCULATOR = "calculator",
	NOTEPAD = "notepad",
	RUNNER = "runner",
	SETTINGS = "settings",
	SHUTDOWN = "shutdown",
	TIC_TAC_TOE = "ticTacToe",
	TIMER = "timer",
}

export type ProgramManager = {
	[Key in Program]: boolean
}
