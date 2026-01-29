import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useSoundRecorder() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.SOUND_RECORDER, false)
	}

	return {
		onCloseProgram,
	}
}
