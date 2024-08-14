import { DSSelect } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import { useTimezoneSwitcher } from "./use-timezone-switcher.hook"

export const TimezoneSwitcher = observer(() => {
	const { dictionary } = useTimezoneSwitcher()

	return (
		dictionary?.timezones && (
			<DSSelect
				id="timezone-switcher"
				modelValue={dictionary.timezones[0].value}
				options={dictionary.timezones}
				onSelect={() => {}}
			/>
		)
	)
})
