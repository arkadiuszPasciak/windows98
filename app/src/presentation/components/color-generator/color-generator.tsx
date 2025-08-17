import { MFColorGenerator } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useColorGenerator } from "./use-color-generator"

export const ColorGenerator: FunctionComponent = () => {
	const { onCloseProgram } = useColorGenerator()

	return <MFColorGenerator onCloseProgram={onCloseProgram} />
}
