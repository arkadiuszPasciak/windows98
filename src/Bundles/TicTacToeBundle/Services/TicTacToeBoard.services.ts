import { TTicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

export class TicTacToeBoard {
  public dimension: TTicTacToeRadioDimension
  public columnAndRow: Array<string>
  public amountOfColumns: number
  public amountOfFields: number
  public amountOfRows: number
  public currentBoard: Array<string>

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.columnAndRow = this.getColumnAndRow()
    this.amountOfColumns = this.getAmountOfColumns()
    this.amountOfFields = this.getAmountOfFields()
    this.amountOfRows = this.getAmountOfRows()
    this.currentBoard = this.getFieldsOfBoard()
  }

  private getAmountOfColumns(): number {
    return Number(this.columnAndRow[0])
  }

  private getAmountOfFields(): number {
    return Number(this.columnAndRow[0]) * Number(this.columnAndRow[1])
  }

  private getAmountOfRows(): number {
    return Number(this.columnAndRow[1])
  }

  private getColumnAndRow(): Array<string> {
    return this.dimension.split('x')
  }

  private getFieldsOfBoard(): Array<string> {
    const array = [] as Array<string>

    let fieldIndex = 1 as number

    do {
      array.push('')
      fieldIndex++
    } while (fieldIndex <= this.amountOfFields)

    return array
  }
}
