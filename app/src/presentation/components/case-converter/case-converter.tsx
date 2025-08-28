import { MFCaseConverter } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useConverter } from "./use-converter"

export const CaseConverter: FunctionComponent = () => {
	const { onCloseProgram } = useConverter()

	return <MFCaseConverter onCloseProgram={onCloseProgram} />
}
