import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'
import { TicTacToeCheckStatusGame } from '@Bundles/TicTacToeBundle/Services/TicTacToeCheckStatusGame.services'
import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningsStates.services'
import {
  ETicTacToeRadioPlayer,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

export class TicTacToeGame {
  private readonly dimension: TTicTacToeRadioDimension
  private readonly TicTacToeBoardService: TicTacToeBoard
  private readonly TicTacToeCheckStatusGameService: TicTacToeCheckStatusGame
  private readonly TicTacToeWinningStatesService: TicTacToeWinningStates
  private currentBoard: Array<string>

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.TicTacToeWinningStatesService = new TicTacToeWinningStates(
      this.dimension,
    )
    this.TicTacToeCheckStatusGameService = new TicTacToeCheckStatusGame()
    this.TicTacToeBoardService = new TicTacToeBoard(this.dimension)
    this.currentBoard = this.TicTacToeBoardService.currentBoard
  }

  public makeMove(
    event: Event,
    playerType: TTicTacToeRadioPlayer,
    computerType: TTicTacToeRadioPlayer,
  ): void {
    this.makePlayerMove(event, playerType)

    const checkStatusGame =
      this.TicTacToeCheckStatusGameService.checkStatusGame(
        'x',
        this.TicTacToeWinningStatesService.winningStates,
        this.currentBoard,
      )

    if (checkStatusGame) {
      throw checkStatusGame
    }

    // TODO make a computer move
    // this.makeComputerMove(event, computerType)
  }

  private makeComputerMove(
    event: Event,
    computerType: TTicTacToeRadioPlayer,
  ): void {
    this.updateFieldOnBoard(event, computerType)
  }

  private makePlayerMove(
    event: Event,
    playerType: TTicTacToeRadioPlayer,
  ): void {
    this.updateFieldOnBoard(event, playerType)
  }

  private updateFieldOnBoard(event: Event, type: TTicTacToeRadioPlayer): void {
    const eventTarget = event.target as HTMLButtonElement
    const sign = type === ETicTacToeRadioPlayer.PLAYER_O ? 'o' : 'x'

    eventTarget.textContent = sign
    eventTarget.setAttribute('disabled', 'true')

    const dataField = (Number(eventTarget.getAttribute('data-field')) -
      1) as number

    this.currentBoard[dataField] = sign
  }
}
