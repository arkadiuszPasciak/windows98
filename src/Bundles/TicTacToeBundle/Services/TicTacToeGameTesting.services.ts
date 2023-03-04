export default class TicTacToeGameTesting {
  public clickAutomaticallyToEndGame(): void {
    let index = 1 as number
    let isBlock = false as boolean

    while (index <= 9 && !isBlock) {
      index++
      const isBoardBlock = this.isBoardBlocked()

      if (isBoardBlock) {
        isBlock = true
        return
      } else {
        this.clickOnAvailableField()
      }
    }
  }

  private clickOnAvailableField(): void {
    cy.document().then((document: Document) => {
      const availableFields = [] as Array<number>
      const currentFields = document.querySelectorAll(
        '.UIButton',
      ) as NodeListOf<HTMLButtonElement>

      if (!currentFields || !currentFields.length) {
        return
      }

      const gameBoard = this.getGameBoardElement(document)

      if (gameBoard) {
        return
      }

      for (let index = 1; index <= 9; index++) {
        if (currentFields[index].textContent === '') {
          availableFields.push(index)
        }
      }

      const randomNumber = Math.floor(
        Math.random() * availableFields.length,
      ) as number

      cy.get(
        `.TicTacToeBoard > .UIButton[data-field="${availableFields[randomNumber]}"]`,
      ).click()
    })
  }

  private getGameBoardElement(document: Document): boolean {
    const gameBoard = document.querySelector(
      'div.TicTacToeBoard.is-blocked',
    ) as Element

    return gameBoard ? true : false
  }

  private isBoardBlocked(): boolean {
    let isBlock = false

    cy.document().then((document: Document) => {
      const gameBoard = this.getGameBoardElement(document)

      if (gameBoard) {
        isBlock = true
      }
    })

    return isBlock
  }
}
