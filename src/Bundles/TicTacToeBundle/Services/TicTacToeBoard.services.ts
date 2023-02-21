import { TTicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

export class TicTacToeBoard {
  public dimension: TTicTacToeRadioDimension
  public amountOfFields: number
  public amountOfColumns: number
  public amountOfRows: number

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.amountOfFields = this.getAmountOfFields()
    this.amountOfColumns = this.getAmountOfColumns()
    this.amountOfRows = this.getAmountOfRows()
  }

  public getAmountOfFields(): number {
    const columnAndRow = this.getColumnAndRow()

    return Number(columnAndRow[0]) * Number(columnAndRow[1])
  }

  public getAmountOfColumns(): number {
    const columnAndRow = this.getColumnAndRow()

    return Number(columnAndRow[0])
  }

  public getAmountOfRows(): number {
    const columnAndRow = this.getColumnAndRow()

    return Number(columnAndRow[1])
  }

  private getColumnAndRow(): Array<string> {
    return this.dimension.split('x')
  }
}
