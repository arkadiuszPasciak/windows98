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
  if (!value) {
    return false
  }

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

  if (!isMathematicalOperation(value)) {
    return 'ERROR'
  }

  return String(eval(value))
}

export function isMathematicalOperation(value: string): boolean {
  if (!value) {
    return false
  }

  const regex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/

  return regex.test(value) ? true : false
}
