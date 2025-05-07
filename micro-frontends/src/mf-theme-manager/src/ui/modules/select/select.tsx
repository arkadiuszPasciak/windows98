import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import useSelect from "./use-select.hook"

export const Select: FunctionComponent = observer(() => {
	const { handleSelectChange, language, languages } = useSelect()

	return (
		<DSSelect
			id="mf-theme-manager"
			modelValue={language}
			options={languages}
			onSelect={handleSelectChange}
		/>
	)
})
