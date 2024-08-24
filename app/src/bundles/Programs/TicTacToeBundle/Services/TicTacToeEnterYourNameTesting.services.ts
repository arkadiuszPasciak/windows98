export default class TicTacToeEnterYourNameTesting {
	public checkInputField(inputValue: string, labelName: string): void {
		this.isMainElementRender()

		this.checkLabelValue(labelName)

		this.clearInput()

		this.typeValueInput(inputValue)

		this.checkInputValue(inputValue)
	}

	private checkInputValue(value: string): void {
		cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').should(
			"have.value",
			value,
		)
	}

	private checkLabelValue(labelName: string): void {
		cy.get('[data-test="ui-input-label-tic-tac-toe-enter-your-name"]').contains(
			labelName,
		)
	}

	private clearInput(): void {
		cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').clear()
	}

	private isMainElementRender(): void {
		cy.get(".TicTacToeEnterYourName")
	}

	private typeValueInput(value: string): void {
		cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').type(value)
	}
}
