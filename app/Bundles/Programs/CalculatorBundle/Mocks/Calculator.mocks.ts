import {
	ECalculatorButton,
	ECalculatorButtonColor,
	ECalculatorNumber,
	ECalculatorSign,
	ICalculatorButtons,
} from "@APP|Bundles/CalculatorBundle/Supports/Calculator.supports"

export const MCalculatorButtons = [
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.SEVEN,
		testAttribute: `calculator-button-${ECalculatorNumber.SEVEN}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.EIGHT,
		testAttribute: `calculator-button-${ECalculatorNumber.EIGHT}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.NINE,
		testAttribute: `calculator-button-${ECalculatorNumber.NINE}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorSign.DIVIDE,
		testAttribute: `calculator-button-${ECalculatorSign.DIVIDE}`,
		color: ECalculatorButtonColor.RED,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.FOUR,
		testAttribute: `calculator-button-${ECalculatorNumber.FOUR}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.FIVE,
		testAttribute: `calculator-button-${ECalculatorNumber.FIVE}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.SIX,
		testAttribute: `calculator-button-${ECalculatorNumber.SIX}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.SIGN,
		content: ECalculatorSign.MULTIPLY,
		testAttribute: `calculator-button-${ECalculatorSign.MULTIPLY}`,
		color: ECalculatorButtonColor.RED,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.ONE,
		testAttribute: `calculator-button-${ECalculatorNumber.ONE}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.TWO,
		testAttribute: `calculator-button-${ECalculatorNumber.TWO}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.THREE,
		testAttribute: `calculator-button-${ECalculatorNumber.THREE}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.SIGN,
		content: ECalculatorSign.MINUS,
		testAttribute: `calculator-button-${ECalculatorSign.MINUS}`,
		color: ECalculatorButtonColor.RED,
	},
	{
		type: ECalculatorButton.NUMBER,
		content: ECalculatorNumber.ZERO,
		testAttribute: `calculator-button-${ECalculatorNumber.ZERO}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.DOT,
		content: ECalculatorSign.DOT,
		testAttribute: `calculator-button-${ECalculatorSign.DOT}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.RESULT,
		content: ECalculatorSign.RESULT,
		testAttribute: `calculator-button-${ECalculatorSign.RESULT}`,
		color: ECalculatorButtonColor.BLUE,
	},
	{
		type: ECalculatorButton.SIGN,
		content: ECalculatorSign.ADD,
		testAttribute: `calculator-button-${ECalculatorSign.ADD}`,
		color: ECalculatorButtonColor.RED,
	},
] as Array<ICalculatorButtons>
