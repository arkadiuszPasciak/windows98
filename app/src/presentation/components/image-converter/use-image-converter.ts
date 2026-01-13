import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useImageConverter() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.IMAGE_CONVERTER, false)
	}

	return {
		onCloseProgram,
	}
}
