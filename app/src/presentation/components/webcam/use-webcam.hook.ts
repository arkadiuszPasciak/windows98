import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useWebcam() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.WEBCAM, false)
	}

	return {
		onCloseProgram,
	}
}
