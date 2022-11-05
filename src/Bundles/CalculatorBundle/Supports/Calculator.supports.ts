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
