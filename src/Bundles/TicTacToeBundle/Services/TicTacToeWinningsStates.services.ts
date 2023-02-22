import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'

export class TicTacToeWinningStates extends TicTacToeBoard {
  // public getAllWiningStates(): Array<number[]> {
  //   const wins = []

  //   wins.push(this.getRowsWinningStates())

  //   return wins
  // }

  private calculateColumns(field: number): Array<number> {
    const array = []
    let fieldIndex = field

    do {
      array.push(fieldIndex)
      fieldIndex += this.amountOfRows
    } while (fieldIndex <= this.amountOfFields)

    return array
  }

  private calculateDiagonals(field: number): Array<number> {
    const array = []
    let fieldIndex = field

    do {
      array.push(fieldIndex)
      fieldIndex += this.amountOfRows
    } while (fieldIndex <= this.amountOfFields)

    return array
  }

  private calculateRows(field: number): Array<number> {
    const array = []
    const fieldIndexMax = field + this.amountOfRows
    let fieldIndex = field

    do {
      array.push(fieldIndex)
      fieldIndex++
    } while (fieldIndex < fieldIndexMax)

    return array
  }

  private getColumnsWinningStates(): Array<number[]> {
    const array = []

    for (let index = 1; index <= this.amountOfColumns; index++) {
      array.push(this.calculateColumns(index))
    }

    return array
  }

  private getDiagonalsWinningStates(): Array<number> {
    const array = []
    const minLength = Math.min(this.amountOfRows, this.amountOfColumns) - 1
    const rows = this.getRowsWinningStates()

    for (let index = 0; index <= minLength; index++) {
      array.push(rows[index][index])
    }

    return array
  }

  private getRowsWinningStates(): Array<number[]> {
    const array = []

    for (
      let index = 1;
      index < this.amountOfFields;
      index += this.amountOfRows
    ) {
      array.push(this.calculateRows(index))
    }

    return array
  }
}
