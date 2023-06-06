import { ECalculatorSign } from '@APP|Bundles/CalculatorBundle/Supports/Calculator.supports'

export class Calculator {
  public isValueEqual(
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

  public isDotExist(value: string): boolean {
    if (!value) {
      return false
    }

    const array = value.split('')
    const result = array.find((element) => element === '.')

    return result ? true : false
  }

  public isMathematicalSignLast(value: string): boolean {
    if (!value) {
      return false
    }

    const lastValue = value.slice(-1)

    switch (lastValue) {
      case ECalculatorSign.ADD:
      case ECalculatorSign.DIVIDE:
      case ECalculatorSign.MINUS:
      case ECalculatorSign.MULTIPLY:
        return true
      default:
        return false
    }
  }

  public summingResult(value: string): string {
    if (!value) {
      return 'ERROR'
    }

    if (!this.isMathematicalOperation(value)) {
      return 'ERROR'
    }

    return String(eval(value))
  }

  public isMathematicalOperation(value: string): boolean {
    if (!value) {
      return false
    }

    const regex = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/

    return regex.test(value) ? true : false
  }
}
