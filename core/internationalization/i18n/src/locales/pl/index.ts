import type { I18nLocaleSkeleton } from "../../types/locale-skeleton.type"
import audioPL from "./audio.locale.json"
import calculatorPL from "./calculator.locale.json"
import languagePL from "./language.locale.json"
import runPL from "./run.locale.json"
import settingsPL from "./settings.locale.json"
import shutDownPL from "./shut-down.locale.json"
import startPL from "./start.locale.json"
import themePL from "./theme.locale.json"
import ticTacToePL from "./tic-tac-toe.locale.json"
import timerPL from "./timer.locale.json"
import uiModalPL from "./ui-modal.locale.json"

const localesPL: I18nLocaleSkeleton = {
	...audioPL,
	...calculatorPL,
	...languagePL,
	...runPL,
	...settingsPL,
	...shutDownPL,
	...startPL,
	...themePL,
	...ticTacToePL,
	...timerPL,
	...uiModalPL,
}

export default localesPL
