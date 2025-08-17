import { Program } from "../types"

export const searchProgramsList = [
	{ [Program.CALCULATOR]: ["calculator", "kalkulator", "taschenrechner"] },
	{
		[Program.COLOR_GENERATOR]: [
			"color generator",
			"generator kolorów",
			"farbgenerator",
		],
	},
	{ [Program.NOTEPAD]: ["notepad", "notatnik", "notizblock"] },
	{ [Program.SETTINGS]: ["settings", "ustawienia", "einstellungen"] },
	{ [Program.SHUTDOWN]: ["shutdown", "wyłącz", "abschalten"] },
	{ [Program.TIC_TAC_TOE]: ["tic tac toe", "kółko i krzyżyk"] },
	{ [Program.TIMER]: ["timer", "minutnik", "stoppuhr"] },
]
