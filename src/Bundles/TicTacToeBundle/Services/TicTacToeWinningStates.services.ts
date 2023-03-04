import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'
import { TTicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

export class TicTacToeWinningStates {
  public readonly winningStates: Array<number[]>
  private readonly dimension: TTicTacToeRadioDimension
  private readonly TicTacToeBoardService: TicTacToeBoard

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.TicTacToeBoardService = new TicTacToeBoard(this.dimension)
    this.winningStates = this.getAllWinningStates()
  }

  public getAllWinningStates(): Array<number[]> {
    const columns = this.getColumnsWinningStates()
    const diagonals = this.getDiagonalsWinningStates()
    const rows = this.getRowsWinningStates()

    return columns.concat(diagonals).concat(rows)
  }

  private getColumnsWinningStates(): Array<number[]> {
    const array = []

    const calculateColumns = (field: number): Array<number> => {
      const array = []
      let fieldIndex = field

      do {
        array.push(fieldIndex)
        fieldIndex += this.TicTacToeBoardService.amountOfRows
      } while (fieldIndex <= this.TicTacToeBoardService.amountOfFields)

      return array
    }

    for (
      let index = 1;
      index <= this.TicTacToeBoardService.amountOfColumns;
      index++
    ) {
      array.push(calculateColumns(index))
    }

    return array
  }

  private getDiagonalsWinningStates(): Array<number[]> {
    const rows = this.getRowsWinningStates()

    const leftDiagonal = rows.map((row, i) => row[i])
    const rightDiagonal = rows.map((row, i) => row[row.length - i - 1])

    const array = []

    array.push(leftDiagonal)
    array.push(rightDiagonal)

    return array
  }

  private getRowsWinningStates(): Array<number[]> {
    const array = []

    const calculateRows = (field: number): Array<number> => {
      const array = []
      const fieldIndexMax = field + this.TicTacToeBoardService.amountOfRows
      let fieldIndex = field

      do {
        array.push(fieldIndex)
        fieldIndex++
      } while (fieldIndex < fieldIndexMax)

      return array
    }

    for (
      let index = 1;
      index < this.TicTacToeBoardService.amountOfFields;
      index += this.TicTacToeBoardService.amountOfRows
    ) {
      array.push(calculateRows(index))
    }

    return array
  }
}
