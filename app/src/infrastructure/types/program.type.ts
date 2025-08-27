export enum Program {
	CALCULATOR = "calculator",
	CASE_CONVERTER = "case-converter",
	COLOR_GENERATOR = "color-generator",
	NOTEPAD = "notepad",
	RUNNER = "runner",
	SETTINGS = "settings",
	SHUTDOWN = "shutdown",
	TIC_TAC_TOE = "tic-tac-toe",
	TIMER = "timer",
	WEBCAM = "webcam",
}

export type ProgramManager = {
	[Key in Program]: boolean
}
