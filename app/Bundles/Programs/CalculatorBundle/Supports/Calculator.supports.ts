export enum ECalculatorNumber {
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
}

export type TCalculatorNumber = ECalculatorNumber

export enum ECalculatorSign {
  ADD = '+',
  DIVIDE = '/',
  DOT = '.',
  MINUS = '-',
  MULTIPLY = '*',
  RESULT = '=',
}

export type TCalculatorSign = ECalculatorSign

export enum ECalculatorButton {
  DOT = 'dot',
  NUMBER = 'number',
  RESULT = 'result',
  SIGN = 'sign',
}

export type TCalculatorButton = ECalculatorButton

export enum ECalculatorButtonColor {
  BLUE = 'color-blue',
  RED = 'color-red',
}

export type TCalculatorButtonColor = ECalculatorButtonColor

export enum ECalculatorDirect {
  FIRST = 'first',
  LAST = 'last',
}

export type TCalculatorDirect = ECalculatorDirect

export type TCalculatorButtonContent = TCalculatorSign | TCalculatorNumber

export interface ICalculatorButtons {
  type: TCalculatorButton
  content: TCalculatorButtonContent
  testAttribute: string
  color: TCalculatorButtonColor
}
