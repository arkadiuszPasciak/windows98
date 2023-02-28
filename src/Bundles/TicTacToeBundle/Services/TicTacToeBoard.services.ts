import { TTicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import {
  ETicTacToePlayerColor,
  TTicTacToePlayerColor,
  ETicTacToePlayerSign,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

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

  public setColorByTextContent(event: Event): void {
    const eventTarget = event.target as HTMLButtonElement
    const textContent = eventTarget.textContent
    let colorStyle = null as null | TTicTacToePlayerColor

    switch (textContent) {
      case ETicTacToePlayerSign.PLAYER_X:
        colorStyle = ETicTacToePlayerColor.RED
        break
      case ETicTacToePlayerSign.PLAYER_O:
        colorStyle = ETicTacToePlayerColor.BLUE
        break
    }

    if (!colorStyle) {
      return
    }

    eventTarget.style.color = colorStyle
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
