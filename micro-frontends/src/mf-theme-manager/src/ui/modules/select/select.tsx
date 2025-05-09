import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import useSelect from "./use-select.hook"

export const Select: FunctionComponent = observer(() => {
	const { handleSelectChange, theme, themeOptions } = useSelect()

	return (
		theme && (
			<DSSelect
				id="mf-theme-manager"
				modelValue={theme}
				options={themeOptions}
				onSelect={handleSelectChange}
			/>
		)
	)
})
