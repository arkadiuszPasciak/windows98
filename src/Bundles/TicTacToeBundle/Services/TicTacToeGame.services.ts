import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'
import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningsStates.services'
import {
  ETicTacToeRadioPlayer,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

export class TicTacToeGame {
  private readonly dimension: TTicTacToeRadioDimension
  private readonly TicTacToeBoardService: TicTacToeBoard
  private readonly TicTacToeWinningStatesService: TicTacToeWinningStates
  private board: Array<string>

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.TicTacToeWinningStatesService = new TicTacToeWinningStates(
      this.dimension,
    )
    this.TicTacToeBoardService = new TicTacToeBoard(this.dimension)
    this.board = this.TicTacToeBoardService.board
  }

  public checkWinner() {
    // TODO make a check winner
    const winningStates =
      this.TicTacToeWinningStatesService.getAllWiningStates()

    // for (const combo of combos) {
    //   const [a, b, c] = combo
    //   if (
    //     squares[a] &&
    //     squares[a] === squares[b] &&
    //     squares[a] === squares[c]
    //   ) {
    //     return squares[a]
    //   }
    // }
    // return null
  }

  public makeMove(
    event: Event,
    playerType: TTicTacToeRadioPlayer,
    computerType: TTicTacToeRadioPlayer,
  ): void {
    this.makePlayerMove(event, playerType)

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

    this.board[dataField] = sign
  }
}
