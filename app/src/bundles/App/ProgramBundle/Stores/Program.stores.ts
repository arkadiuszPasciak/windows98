import type {
	IProgramStoresActions,
	IProgramStoresState,
} from "@APP/src/bundles/App/ProgramBundle/Supports/ProgramStores.supports"
import { defineStore } from "pinia"

export const useProgramStore = defineStore("program", {
	state: () =>
		({
			modalCalculator: false,
			modalNotepad: false,
			modalRun: false,
			modalSettings: false,
			modalShutDown: false,
			modalTicTacToe: false,
			modalTimer: false,
		}) as IProgramStoresState,
	actions: {
		updateCalculatorModal(status) {
			this.modalCalculator = status
		},
		updateNotepadModal(status) {
			this.modalNotepad = status
		},
		updateRunModal(status) {
			this.modalRun = status
		},
		updateSettingsModal(status) {
			this.modalSettings = status
		},
		updateShutDownModal(status) {
			this.modalShutDown = status
		},
		updateTicTacToeModal(status) {
			this.modalTicTacToe = status
		},
		updateTimerModal(status) {
			this.modalTimer = status
		},
	} as IProgramStoresActions,
})
