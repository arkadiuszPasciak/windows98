import { DSButton } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { useGenerateButton } from "./use-generate-button.hook"

export const GenerateButton: FunctionComponent = () => {
	const { handleGenerateColor, translations } = useGenerateButton()

	return (
		<DSButton
			id="mf-color-generator-generate-color"
			text={translations.buttonText}
			onClick={handleGenerateColor}
			size="medium"
		/>
	)
}
