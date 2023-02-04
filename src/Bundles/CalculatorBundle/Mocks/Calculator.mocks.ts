import {
  ECalculatorButton,
  ECalculatorNumber,
  ECalculatorSign,
  ICalculatorButtons,
} from '@Bundles/CalculatorBundle/Supports/Calculator.supports'

export const calculatorButtons = [
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.SEVEN,
    testAttribute: `calculator-button-${ECalculatorNumber.SEVEN}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.EIGHT,
    testAttribute: `calculator-button-${ECalculatorNumber.EIGHT}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.NINE,
    testAttribute: `calculator-button-${ECalculatorNumber.NINE}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorSign.DIVIDE,
    testAttribute: `calculator-button-${ECalculatorSign.DIVIDE}`,
    color: 'color-red',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.FOUR,
    testAttribute: `calculator-button-${ECalculatorNumber.FOUR}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.FIVE,
    testAttribute: `calculator-button-${ECalculatorNumber.FIVE}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.SIX,
    testAttribute: `calculator-button-${ECalculatorNumber.SIX}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.SIGN,
    content: ECalculatorSign.MULTIPLY,
    testAttribute: `calculator-button-${ECalculatorSign.MULTIPLY}`,
    color: 'color-red',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.ONE,
    testAttribute: `calculator-button-${ECalculatorNumber.ONE}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.TWO,
    testAttribute: `calculator-button-${ECalculatorNumber.TWO}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.THREE,
    testAttribute: `calculator-button-${ECalculatorNumber.THREE}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.SIGN,
    content: ECalculatorSign.MINUS,
    testAttribute: `calculator-button-${ECalculatorSign.MINUS}`,
    color: 'color-red',
  },
  {
    type: ECalculatorButton.NUMBER,
    content: ECalculatorNumber.ZERO,
    testAttribute: `calculator-button-${ECalculatorNumber.ZERO}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.DOT,
    content: ECalculatorSign.DOT,
    testAttribute: `calculator-button-${ECalculatorSign.DOT}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.RESULT,
    content: ECalculatorSign.RESULT,
    testAttribute: `calculator-button-${ECalculatorSign.RESULT}`,
    color: 'color-blue',
  },
  {
    type: ECalculatorButton.SIGN,
    content: ECalculatorSign.ADD,
    testAttribute: `calculator-button-${ECalculatorSign.ADD}`,
    color: 'color-red',
  },
] as Array<ICalculatorButtons>
