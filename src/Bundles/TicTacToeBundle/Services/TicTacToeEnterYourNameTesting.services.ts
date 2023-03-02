export default class TicTacToeEnterYourNameTesting {
  public checkInputField(inputValue: string, labelName: string) {
    this.checkLabelValue(labelName)

    this.clearInput()

    this.typeValueInput(inputValue)

    this.checkValueInput(inputValue)
  }

  private checkLabelValue(labelName: string) {
    cy.get('[data-test="ui-input-label-tic-tac-toe-enter-your-name"]').contains(
      labelName,
    )
  }

  private checkValueInput(value: string) {
    cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').should(
      'have.value',
      value,
    )
  }

  private clearInput() {
    cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').clear()
  }

  private typeValueInput(value: string) {
    cy.get('[data-test="ui-input-tic-tac-toe-enter-your-name"]').type(value)
  }
}
