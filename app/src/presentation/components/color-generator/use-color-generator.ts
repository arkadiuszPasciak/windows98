import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useColorGenerator() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.COLOR_GENERATOR, false)
	}

	return {
		onCloseProgram,
	}
}
