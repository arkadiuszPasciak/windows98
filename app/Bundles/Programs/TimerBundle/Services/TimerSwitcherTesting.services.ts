import {
	ETimerSwitcherMethod,
	TTimerSwitcherType,
	TTimerSwitcherMethod,
} from "@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports"

export default class TimerSwitcherTesting {
	private type: TTimerSwitcherType
	private id: string
	private mainNameClass: string

	constructor(type: TTimerSwitcherType) {
		this.type = type
		this.id = `timer-${type}`
		this.mainNameClass = `Timer${
			this.type.charAt(0).toUpperCase() + this.type.slice(1)
		}Switcher`
	}

	public checkMainClass(): void {
		cy.get(`div.UIStepper.${this.mainNameClass}`)
	}

	public isDisabled(): void {
		cy.get(`div.UIStepper.${this.mainNameClass}.is-disabled`)
	}

	public increaseNumber(): void {
		cy.get(`[data-test="${this.id}-stepper-increase"]`).click()
	}

	public decreaseNumber(): void {
		cy.get(`[data-test="${this.id}-stepper-decrease"]`).click()
	}

	public checkInputValue(text: string): void {
		cy.get(`[data-test="${this.id}-stepper-input"]`).should("have.text", text)
	}

	public changeNumberAndCheckInput(
		method: TTimerSwitcherMethod,
		currentValue: string,
	): void {
		if (method === ETimerSwitcherMethod.INCREASE) {
			this.increaseNumber()
		} else if (method === ETimerSwitcherMethod.DECREASE) {
			this.decreaseNumber()
		}

		this.checkInputValue(currentValue)
	}

	public checkBelowZeroValue(): void {
		this.checkMainClass()

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.INCREASE, "1")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.INCREASE, "2")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.DECREASE, "1")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.DECREASE, "0")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.DECREASE, "0")
	}

	public checkAboveFiftyNineValue(): void {
		this.checkMainClass()

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.DECREASE, "58")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.DECREASE, "57")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.INCREASE, "58")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.INCREASE, "59")

		this.changeNumberAndCheckInput(ETimerSwitcherMethod.INCREASE, "59")
	}
}
