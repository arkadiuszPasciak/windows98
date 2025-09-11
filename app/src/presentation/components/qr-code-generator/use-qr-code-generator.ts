import { useProgramManager } from "../../../application/hooks"
import { Program } from "../../../infrastructure/types"

export function useQRCodeGenerator() {
	const { runProgram } = useProgramManager()

	const onCloseProgram = () => {
		runProgram(Program.QR_CODE_GENERATOR, false)
	}

	return {
		onCloseProgram,
	}
}
