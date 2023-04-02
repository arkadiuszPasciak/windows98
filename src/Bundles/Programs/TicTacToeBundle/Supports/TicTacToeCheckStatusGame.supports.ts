export enum ETicTacToeStatusGame {
  DRAW = 'status-game.draw',
  PLAYING = 'status-game.playing',
  WINNER_O = 'status-game.winner-o',
  WINNER_X = 'status-game.winner-x',
}

export type TTicTacToeCheckStatusGame =
  | TTicTacToeStatusGameDraw
  | TTicTacToeStatusGamePlaying
  | TTicTacToeStatusGameWinner

export type TTicTacToeStatusGameDraw = ETicTacToeStatusGame.DRAW

export type TTicTacToeStatusGamePlaying = ETicTacToeStatusGame.PLAYING

export type TTicTacToeStatusGameWinner =
  | ETicTacToeStatusGame.WINNER_O
  | ETicTacToeStatusGame.WINNER_X
