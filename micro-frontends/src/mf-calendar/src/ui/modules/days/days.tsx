import { getClassNames } from "@windows98/toolkit"
import styles from "./days.module.css"
import { MonthDays } from "./month-days/month-days"
import { WeekDays } from "./week-days/week-days"

export const Days = () => {
	return (
		<div
			className={getClassNames([styles.days])}
			data-testid="mf-calendar-days"
		>
			<WeekDays />
			<MonthDays />
		</div>
	)
}
