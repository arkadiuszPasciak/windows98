import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useImageFormat } from "./use-image-format.hook"

export const ImageFormat: FunctionComponent = observer(() => {
	const {
		handleSelectChange,
		formatValue,
		formatOptions,
		isDisabled,
		translations,
	} = useImageFormat()
	return (
		<DSSelect
			id="mf-image-converter-image-format"
			modelValue={formatValue}
			options={formatOptions}
			onSelect={handleSelectChange}
			labelName={translations.selectLabel}
			disabled={isDisabled}
		/>
	)
})
