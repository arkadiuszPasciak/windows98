export default class TimerModalTesting {
  public checkComponent(): void {
    this.checkMainClass(true)

    this.checkText()

    this.checkTitle()

    this.clickButton()

    this.checkMainClass(false)
  }
  public checkMainClass(exist: boolean): void {
    cy.get('div.UIModal.TimerModal').should(`${exist ? 'exist' : 'not.exist'}`)
  }

  public checkText(): void {
    cy.get('p.UIText').should('have.text', 'The timer has finished')
  }

  public checkTitle(): void {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Status')
  }

  public checkButton(): void {
    cy.get('[data-test="timer-modal-button"]').should('have.text', 'Close')
  }

  public clickButton(): void {
    cy.get('[data-test="timer-modal-button"]').click()
  }
}
