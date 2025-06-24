import { useProgramManager } from "@APP/src/configs/app/hooks"
import type { VueI18nTranslation } from "vue-i18n"

export function checkAndRunProgram(value: string, t: VueI18nTranslation): void {
	if (!value || !t) {
		return
	}

	const { runProgram } = useProgramManager()
	const program = value.toLocaleLowerCase()

	switch (program) {
		case t("RunBundle.program.calculator"):
			runProgram("calculator", true)
			runProgram("run", false)
			break
		case t("RunBundle.program.notepad"):
			runProgram("notepad", true)
			runProgram("run", false)
			break
		case t("RunBundle.program.run"):
			runProgram("run", true)
			runProgram("run", false)
			break
		case t("RunBundle.program.settings"):
			runProgram("settings", true)
			runProgram("run", false)
			break
		case t("RunBundle.program.shut-down"):
			runProgram("shutDown", true)
			runProgram("run", false)
			break
		case t("RunBundle.program.tic-tac-toe"):
			runProgram("ticTacToe", true)
			runProgram("run", false)
			break
		default:
			return
	}
}
