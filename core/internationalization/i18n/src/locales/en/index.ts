import type { I18nLocaleSkeleton } from "../../types/locale-skeleton.type"
import audioEN from "./audio.locale.json"
import calculatorEN from "./calculator.locale.json"
import fileEN from "./file.locale.json"
import languageEN from "./language.locale.json"
import notepadEN from "./notepad.locale.json"
import runEN from "./run.locale.json"
import settingsEN from "./settings.locale.json"
import shutDownEN from "./shut-down.locale.json"
import startEN from "./start.locale.json"
import themeEN from "./theme.locale.json"
import ticTacToeEN from "./tic-tac-toe.locale.json"
import timerEN from "./timer.locale.json"
import uiModalEN from "./ui-modal.locale.json"

const localesEN: I18nLocaleSkeleton = {
	...audioEN,
	...calculatorEN,
	...fileEN,
	...languageEN,
	...notepadEN,
	...runEN,
	...settingsEN,
	...shutDownEN,
	...startEN,
	...themeEN,
	...ticTacToeEN,
	...timerEN,
	...uiModalEN,
}

export default localesEN
