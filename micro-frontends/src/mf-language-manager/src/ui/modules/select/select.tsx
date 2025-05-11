import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import useSelect from "./use-select.hook"

export const Select: FunctionComponent = observer(() => {
	const { handleSelectChange, language, languageOptions } = useSelect()

	return (
		language && (
			<DSSelect
				id="mf-language-manager"
				modelValue={language}
				options={languageOptions}
				onSelect={handleSelectChange}
			/>
		)
	)
})
