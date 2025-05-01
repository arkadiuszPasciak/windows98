import { DSFrame } from "@windows98/design-system"
import { useSyncLang } from "../../hooks/use-sync-lang.hook"
import { Days } from "../days/days"
import { MonthSwitcher } from "../month-switcher/month-switcher"
import { YearSwitcher } from "../year-switcher/year-switcher"
import { useWrapper } from "./use-wrapper.hook"
import styles from "./wrapper.module.scss"

export const Wrapper = () => {
	const { title } = useWrapper()

	useSyncLang()

	return (
		<DSFrame
			className={styles.wrapper}
			id="calculator"
			title={title}
		>
			<MonthSwitcher />
			<YearSwitcher />
			<Days />
		</DSFrame>
	)
}
