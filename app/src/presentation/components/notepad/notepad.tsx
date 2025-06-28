import { MFNotepad } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useNotepad } from "./use-notepad.hook"

export const Notepad: FunctionComponent = () => {
	const { onCloseProgram } = useNotepad()

	return <MFNotepad onCloseProgram={onCloseProgram} />
}
