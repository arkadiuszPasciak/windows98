import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import useSelect from "./use-select.hook"

export const Select = observer(() => {
	const { handleSelectChange, theme, themes } = useSelect()

	if (!themes) return null

	return (
		<DSSelect
			id="theme"
			modelValue={theme}
			options={themes}
			onSelect={handleSelectChange}
		/>
	)
})
