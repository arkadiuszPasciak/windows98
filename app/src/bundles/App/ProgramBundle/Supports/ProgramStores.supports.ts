export interface IProgramStoresState {
	modalCalculator: boolean
	modalNotepad: boolean
	modalRun: boolean
	modalSettings: boolean
	modalShutDown: boolean
	modalTicTacToe: boolean
	modalTimer: boolean
}

export interface IProgramStoresActions extends IProgramStoresState {
	updateCalculatorModal(status: boolean): void
	updateNotepadModal(status: boolean): void
	updateRunModal(status: boolean): void
	updateSettingsModal(status: boolean): void
	updateShutDownModal(status: boolean): void
	updateTicTacToeModal(status: boolean): void
	updateTimerModal(status: boolean): void
}
