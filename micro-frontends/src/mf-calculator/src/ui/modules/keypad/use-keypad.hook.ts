import type { Numbers, Sign } from "../../../domain/models"
import { useCalculator } from "../../hooks"
import type { OperationButtonProps } from "../operation-button"

export function useKeypad() {
	const { calculatorDomain } = useCalculator()

	const addDot = () => calculatorDomain.add(".")
	const addNumber = (number: Numbers) => calculatorDomain.add(number)
	const addSign = (sign: Sign) => calculatorDomain.add(sign)
	const summResult = () => calculatorDomain.equal()

	const buttons: OperationButtonProps[] = [
		{ id: 7, onClick: () => addNumber(7), variant: "primary" },
		{ id: 8, onClick: () => addNumber(8), variant: "primary" },
		{ id: 9, onClick: () => addNumber(9), variant: "primary" },
		{ id: "/", onClick: () => addSign("/"), variant: "secondary" },
		{ id: 4, onClick: () => addNumber(4), variant: "primary" },
		{ id: 5, onClick: () => addNumber(5), variant: "primary" },
		{ id: 6, onClick: () => addNumber(6), variant: "primary" },
		{ id: "*", onClick: () => addSign("*"), variant: "secondary" },
		{ id: 1, onClick: () => addNumber(1), variant: "primary" },
		{ id: 2, onClick: () => addNumber(2), variant: "primary" },
		{ id: 3, onClick: () => addNumber(3), variant: "primary" },
		{ id: "-", onClick: () => addSign("-"), variant: "secondary" },
		{ id: 0, onClick: () => addNumber(0), variant: "primary" },
		{ id: ".", onClick: addDot, variant: "primary" },
		{ id: "=", onClick: summResult, variant: "primary" },
		{ id: "+", onClick: () => addSign("+"), variant: "secondary" },
	]

	return { buttons }
}
