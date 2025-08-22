import { MFWebcam } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useWebcam } from "./use-webcam.hook"

export const Webcam: FunctionComponent = () => {
	const { onCloseProgram } = useWebcam()

	return <MFWebcam onCloseProgram={onCloseProgram} />
}
