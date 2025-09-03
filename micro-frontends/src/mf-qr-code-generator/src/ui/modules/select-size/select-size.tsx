import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import useSelect from "./use-select-size.hook"

export const SelectSize: FunctionComponent = observer(() => {
	const { handleSelectChange, sizeValue, sizeOptions, translations } =
		useSelect()

	return (
		<DSSelect
			id="mf-qr-code-generator-select-size"
			modelValue={sizeValue}
			options={sizeOptions}
			onSelect={handleSelectChange}
			labelName={translations.label}
		/>
	)
})
