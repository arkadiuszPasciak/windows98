import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useConverter() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.CASE_CONVERTER, false)
	}

	return {
		onCloseProgram,
	}
}
