import { getClassNames } from "@windows98/toolkit"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { ECalculatorNumber, ECalculatorSymbol } from "../../../domain/models"
import { OperationButton } from "../operation-button"
import styles from "./keypad.module.css"
import { useKeypad } from "./use-keypad.hook"

export const Keypad: FunctionComponent = observer(() => {
	const { addDot, addNumber, addSymbol, summResult } = useKeypad()

	return (
		<div
			className={getClassNames([styles.keypad])}
			data-testid="mf-calculator-keypad"
		>
			<OperationButton
				id={ECalculatorNumber.SEVEN}
				onClick={() => addNumber(ECalculatorNumber.SEVEN)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorNumber.EIGHT}
				onClick={() => addNumber(ECalculatorNumber.EIGHT)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorNumber.NINE}
				onClick={() => addNumber(ECalculatorNumber.NINE)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorSymbol.DIVIDE}
				onClick={() => addSymbol(ECalculatorSymbol.DIVIDE)}
				variant="secondary"
			/>
			<OperationButton
				id={ECalculatorNumber.FOUR}
				onClick={() => addNumber(ECalculatorNumber.FOUR)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorNumber.FIVE}
				onClick={() => addNumber(ECalculatorNumber.FIVE)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorNumber.SIX}
				onClick={() => addNumber(ECalculatorNumber.SIX)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorSymbol.MULTIPLY}
				onClick={() => addSymbol(ECalculatorSymbol.MULTIPLY)}
				variant="secondary"
			/>
			<OperationButton
				id={ECalculatorNumber.ONE}
				onClick={() => addNumber(ECalculatorNumber.ONE)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorNumber.TWO}
				onClick={() => addNumber(ECalculatorNumber.TWO)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorNumber.THREE}
				onClick={() => addNumber(ECalculatorNumber.THREE)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorSymbol.MINUS}
				onClick={() => addSymbol(ECalculatorSymbol.MINUS)}
				variant="secondary"
			/>
			<OperationButton
				id={ECalculatorNumber.ZERO}
				onClick={() => addNumber(ECalculatorNumber.ZERO)}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorSymbol.DOT}
				onClick={addDot}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorSymbol.RESULT}
				onClick={summResult}
				variant="primary"
			/>
			<OperationButton
				id={ECalculatorSymbol.ADD}
				onClick={() => addSymbol(ECalculatorSymbol.ADD)}
				variant="secondary"
			/>
		</div>
	)
})
