import { MFCalculator } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useCalculator } from "./use-calculator"

export const Calculator: FunctionComponent = () => {
	const { onCloseProgram } = useCalculator()

	return <MFCalculator onCloseProgram={onCloseProgram} />
}
