export default class TicTacToeChooseDimensionTesting {
  public checkInputRadio3x3(): void {
    this.isMainElementRender()

    this.checkLabelValue()

    this.checkInputValue()

    this.chooseInput()

    this.isInputChecked()
  }

  private checkLabelValue(): void {
    cy.get('.UIText.title').contains('Choose a dimension of the field')
  }

  private checkInputValue(): void {
    cy.get(
      '[data-test="ui-radio-label-tic-tac-toc-choose-dimension-3x3"]',
    ).contains(' 3 x 3 ')
  }

  private chooseInput(): void {
    cy.get(
      '[data-test="ui-radio-input-tic-tac-toc-choose-dimension-3x3"]',
    ).click()
  }

  private isInputChecked(): void {
    cy.get(
      '[data-test="ui-radio-input-tic-tac-toc-choose-dimension-3x3"]',
    ).should('be.checked')
  }

  private isMainElementRender(): void {
    cy.get('.TicTacToeChooseDimension')
  }
}
