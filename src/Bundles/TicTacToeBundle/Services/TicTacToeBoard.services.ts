import { TTicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import {
  ETicTacToePlayerColor,
  TTicTacToePlayerColor,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

export class TicTacToeBoard {
  public dimension: TTicTacToeRadioDimension
  public amountOfFields: number
  public amountOfColumns: number
  public amountOfRows: number
  public board: Array<string>

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.amountOfFields = this.getAmountOfFields()
    this.amountOfColumns = this.getAmountOfColumns()
    this.amountOfRows = this.getAmountOfRows()
    this.board = this.getFieldsOfBoard()
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

  public getFieldsOfBoard(): Array<string> {
    const array = [] as Array<string>

    let fieldIndex = 1 as number

    do {
      array.push('')
      fieldIndex++
    } while (fieldIndex <= this.amountOfFields)

    return array
  }

  public setColorByTextContent(event: Event): void {
    const eventTarget = event.target as HTMLButtonElement
    const textContent = eventTarget.textContent
    let colorStyle = null as null | TTicTacToePlayerColor

    switch (textContent) {
      case 'x':
        colorStyle = ETicTacToePlayerColor.RED
        break
      case 'o':
        colorStyle = ETicTacToePlayerColor.BLUE
        break
    }

    if (!colorStyle) {
      return
    }

    eventTarget.style.color = colorStyle
  }

  private getColumnAndRow(): Array<string> {
    return this.dimension.split('x')
  }
}
