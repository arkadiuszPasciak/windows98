import { EMathematicalSign } from '@Bundles/CalculatorBundle/Supports/Calculator.supports'

export function isValueEqual(
  value: string,
  sign: string,
  direct: 'first' | 'last',
): boolean {
  if (direct === 'first') {
    return value.slice(0, sign.length) === sign ? true : false
  } else if (direct === 'last') {
    return value.slice(-1) === sign ? true : false
  } else {
    return false
  }
}

export function isDotExist(value: string): boolean {
  if (!value) {
    return false
  }

  const array = value.split('')
  const result = array.find((element) => element === '.')

  return result ? true : false
}

export function isMathematicalSignLast(value: string): boolean {
  const lastValue = value.slice(-1)

  switch (lastValue) {
    case EMathematicalSign.ADD:
    case EMathematicalSign.DIVIDE:
    case EMathematicalSign.MINUS:
    case EMathematicalSign.MULTIPLY:
      return true
    default:
      return false
  }
}

export function summingResult(value: string): string {
  if (!value) {
    return 'ERROR'
  }

  const splitString = value.match(/[+-]*(\.\d+|\d+(\.\d+)?)/g) as Array<string>

  if (!splitString) {
    return 'ERROR'
  }

  let total = 0 as number

  while (splitString.length) {
    total += parseFloat(splitString.shift()!)
  }

  return String(total)
}
