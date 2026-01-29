import { MFSoundRecorder } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useSoundRecorder } from "./use-sound-recorder.hook"

export const SoundRecorder: FunctionComponent = () => {
	const { onCloseProgram } = useSoundRecorder()

	return <MFSoundRecorder onCloseProgram={onCloseProgram} />
}
