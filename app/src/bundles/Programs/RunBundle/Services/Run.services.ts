import { useProgramStore } from "@APP/src/bundles/App/ProgramBundle/Stores/Program.stores"
import type { VueI18nTranslation } from "vue-i18n"

export function checkAndRunProgram(value: string, t: VueI18nTranslation): void {
	if (!value || !t || !useProgramStore) {
		return
	}

	const store = useProgramStore()
	const program = value.toLocaleLowerCase()

	switch (program) {
		case t("RunBundle.program.calculator"):
			store.updateCalculatorModal(true)
			store.updateRunModal(false)
			break
		case t("RunBundle.program.notepad"):
			store.updateNotepadModal(true)
			store.updateRunModal(false)
			break
		case t("RunBundle.program.run"):
			store.updateRunModal(true)
			store.updateRunModal(false)
			break
		case t("RunBundle.program.settings"):
			store.updateSettingsModal(true)
			store.updateRunModal(false)
			break
		case t("RunBundle.program.shut-down"):
			store.updateShutDownModal(true)
			store.updateRunModal(false)
			break
		case t("RunBundle.program.tic-tac-toe"):
			store.updateShutDownModal(true)
			store.updateRunModal(false)
			break
		default:
			return
	}
}
