import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import useMonthSwitcher from "./use-month-switcher.hook"

export const MonthSwitcher = observer(() => {
	const { handleSelectChange, month, dictionary } = useMonthSwitcher()

	return (
		month !== null && (
			<DSSelect
				id="month-switcher"
				modelValue={month}
				options={dictionary.months}
				onSelect={handleSelectChange}
			/>
		)
	)
})
