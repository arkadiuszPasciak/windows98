import { DSButton, DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useHexInput } from "./use-hex-input.hook"

export const HexInput: FunctionComponent = observer(() => {
	const { currentColor, translations, copyHexColor } = useHexInput()

	return (
		<>
			<DSInput
				id="mf-color-generator-hex-color"
				labelName={translations.label}
				initialValue={currentColor.hex}
				readonly={true}
				wrapperLayout="vertical"
			/>
			<DSButton
				id="mf-color-generator-copy-hex"
				text={translations.copy}
				onClick={copyHexColor}
			/>
		</>
	)
})
