import { MFQRCodeGenerator } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useQRCodeGenerator } from "./use-qr-code-generator"

export const QRCodeGenerator: FunctionComponent = () => {
	const { onCloseProgram } = useQRCodeGenerator()

	return <MFQRCodeGenerator onCloseProgram={onCloseProgram} />
}
