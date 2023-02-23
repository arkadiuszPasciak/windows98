import { TicTacToeWinningStates } from '@Bundles/TicTacToeBundle/Services/TicTacToeWinningsStates.services'
import {
  ETicTacToeRadioPlayer,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import {
  ETicTacToePlayerType,
  TTicTacToePlayerType,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToePlayers.supports'

export class TicTacToeGame {
  private readonly dimension: TTicTacToeRadioDimension
  private readonly TicTacToeWinningStatesService: TicTacToeWinningStates

  constructor(dimension: TTicTacToeRadioDimension) {
    this.dimension = dimension
    this.TicTacToeWinningStatesService = new TicTacToeWinningStates(
      this.dimension,
    )
  }

  public checkWinner() {
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

  public changePlayer(player: TTicTacToePlayerType): TTicTacToePlayerType {
    if (player === ETicTacToePlayerType.COMPUTER) {
      return ETicTacToePlayerType.USER
    } else {
      return ETicTacToePlayerType.COMPUTER
    }
  }

  public makeMove(
    event: Event,
    nowMove: TTicTacToePlayerType,
    playerType: TTicTacToeRadioPlayer,
    computerType: TTicTacToeRadioPlayer,
  ): void {
    if (nowMove === ETicTacToePlayerType.COMPUTER) {
      this.makeComputerMove(event, computerType)
    } else if (nowMove === ETicTacToePlayerType.USER) {
      this.makePlayerMove(event, playerType)
    }
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
  }
}
