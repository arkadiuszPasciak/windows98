import { MFImageConverter } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useImageConverter } from "./use-image-converter"

export const ImageConverter: FunctionComponent = () => {
	const { onCloseProgram } = useImageConverter()

	return <MFImageConverter onCloseProgram={onCloseProgram} />
}
