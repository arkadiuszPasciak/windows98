import type { I18nLocaleSkeleton } from "../../types/locale-skeleton.type"
import audioDE from "./audio.locale.json"
import calculatorDE from "./calculator.locale.json"
import fileDE from "./file.locale.json"
import languageDE from "./language.locale.json"
import notepadDE from "./notepad.locale.json"
import runDE from "./run.locale.json"
import settingsDE from "./settings.locale.json"
import shutDownDE from "./shut-down.locale.json"
import startDE from "./start.locale.json"
import themeDE from "./theme.locale.json"
import ticTacToeDE from "./tic-tac-toe.locale.json"
import timerDE from "./timer.locale.json"
import uiModalDE from "./ui-modal.locale.json"

const localesDE: I18nLocaleSkeleton = {
	...audioDE,
	...calculatorDE,
	...fileDE,
	...languageDE,
	...notepadDE,
	...runDE,
	...settingsDE,
	...shutDownDE,
	...startDE,
	...themeDE,
	...ticTacToeDE,
	...timerDE,
	...uiModalDE,
}

export default localesDE
