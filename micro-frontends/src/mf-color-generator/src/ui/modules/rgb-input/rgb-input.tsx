import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useRgbInput } from "./use-rgb-input.hook"

export const RgbInput: FunctionComponent = observer(() => {
	const { translations, rgbValue } = useRgbInput()

	return (
		<DSInput
			id="mf-color-generator-rgb-color"
			labelName={translations.label}
			initialValue={rgbValue}
			readonly={true}
			wrapperLayout="vertical"
		/>
	)
})
