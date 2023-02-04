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

export type TCalculatorNumber =
  | ECalculatorNumber.ZERO
  | ECalculatorNumber.ONE
  | ECalculatorNumber.TWO
  | ECalculatorNumber.THREE
  | ECalculatorNumber.FOUR
  | ECalculatorNumber.FIVE
  | ECalculatorNumber.SIX
  | ECalculatorNumber.SEVEN
  | ECalculatorNumber.EIGHT
  | ECalculatorNumber.NINE

export enum ECalculatorSign {
  ADD = '+',
  DIVIDE = '/',
  DOT = '.',
  MINUS = '-',
  MULTIPLY = '*',
  RESULT = '=',
}

export type TCalculatorSign =
  | ECalculatorSign.ADD
  | ECalculatorSign.DIVIDE
  | ECalculatorSign.DOT
  | ECalculatorSign.MINUS
  | ECalculatorSign.MULTIPLY
  | ECalculatorSign.RESULT

export enum ECalculatorButton {
  DOT = 'dot',
  NUMBER = 'number',
  RESULT = 'result',
  SIGN = 'sign',
}

export type TCalculatorButton =
  | ECalculatorButton.DOT
  | ECalculatorButton.NUMBER
  | ECalculatorButton.RESULT
  | ECalculatorButton.SIGN

export type TCalculatorButtonContent = TCalculatorSign | TCalculatorNumber

export interface ICalculatorButtons {
  type: TCalculatorButton
  content: TCalculatorButtonContent
  testAttribute: string
  color: 'color-blue' | 'color-red'
}
