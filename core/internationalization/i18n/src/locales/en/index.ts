import type { I18nLocaleSkeleton } from "../../types/locale-skeleton.type"
import appEN from "./app.locale.json"
import audioEN from "./audio.locale.json"
import calculatorEN from "./calculator.locale.json"
import calendarEN from "./calendar.locale.json"
import clockEN from "./clock.locale.json"
import fileEN from "./file.locale.json"
import languageEN from "./language.locale.json"
import navigationEN from "./navigation.locale.json"
import notepadEN from "./notepad.locale.json"
import programEN from "./program.locale.json"
import pulpitEN from "./pulpit.locale.json"
import runEN from "./run.locale.json"
import settingsEN from "./settings.locale.json"
import shutDownEN from "./shut-down.locale.json"
import startEN from "./start.locale.json"
import storageEN from "./storage.locale.json"
import teleportEN from "./teleport.locale.json"
import themeEN from "./theme.locale.json"
import ticTacToeEN from "./tic-tac-toe.locale.json"
import timerEN from "./timer.locale.json"
import uiModalEN from "./ui-modal.locale.json"
import uiSelectEN from "./ui-select.locale.json"

const localesEN: I18nLocaleSkeleton = {
	...appEN,
	...audioEN,
	...calculatorEN,
	...calendarEN,
	...fileEN,
	...languageEN,
	...clockEN,
	...navigationEN,
	...notepadEN,
	...programEN,
	...pulpitEN,
	...runEN,
	...settingsEN,
	...shutDownEN,
	...startEN,
	...storageEN,
	...teleportEN,
	...themeEN,
	...ticTacToeEN,
	...timerEN,
	...uiModalEN,
	...uiSelectEN,
}

export default localesEN
