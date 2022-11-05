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

export enum EMathematicalSign {
  ADD = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

export type TMathematicalSign =
  | EMathematicalSign.ADD
  | EMathematicalSign.MINUS
  | EMathematicalSign.MULTIPLY
  | EMathematicalSign.DIVIDE
