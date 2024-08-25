export interface IUIStepperStoresState {
	value: number
}

export interface IUIStepperStoresActions extends IUIStepperStoresState {
	increaseValue(): void
	decreaseValue(): void
}
