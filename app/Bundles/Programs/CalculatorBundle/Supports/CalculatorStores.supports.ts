import {
  TCalculatorSign,
  TCalculatorNumber,
} from '@APP|Bundles/CalculatorBundle/Supports/Calculator.supports'

export interface ICalculatorStoresState {
  value: string
}

export interface ICalculatorStoresActions extends ICalculatorStoresState {
  addNumber(number: TCalculatorNumber): void
  addDot(): void
  addSign(sign: TCalculatorSign): void
  summResult(): void
}
