import styles from "./days.module.scss"
import { MonthDays } from "./month-days/month-days"
import { WeekDays } from "./week-days/week-days"

export const Days = () => {
	return (
		<div className={styles.days}>
			<WeekDays />
			<MonthDays />
		</div>
	)
}
