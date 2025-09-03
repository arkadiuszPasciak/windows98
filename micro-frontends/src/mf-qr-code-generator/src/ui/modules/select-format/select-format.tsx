import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import useSelect from "./use-select-format.hook"

export const SelectFormat: FunctionComponent = observer(() => {
	const { handleSelectChange, formatValue, formatOptions, translations } =
		useSelect()

	return (
		<DSSelect
			id="mf-qr-code-generator-select-format"
			modelValue={formatValue}
			options={formatOptions}
			onSelect={handleSelectChange}
			labelName={translations.label}
		/>
	)
})
