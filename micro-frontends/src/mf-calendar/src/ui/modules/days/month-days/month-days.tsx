import { getClassNames } from "@windows98/toolkit"
import { observer } from "mobx-react-lite"
import styles from "./month-days.module.css"
import { useMonthDays } from "./use-month-days.hook"

export const MonthDays = observer(() => {
	const { activeDay, firstDayOfWeek, monthDays } = useMonthDays()

	return (
		typeof monthDays === "number" && (
			<div
				className={styles["month-days"]}
				data-testid="calendar-view-days"
			>
				{Array.from({ length: firstDayOfWeek }, (_, index) => index + 1).map(
					(dayOffset) => (
						<span
							className={styles.day}
							data-testid={`calendar-month-days-empty-${dayOffset}`}
							key={`calendar-month-days-empty-${dayOffset}`}
						/>
					),
				)}

				{Array.from({ length: monthDays }, (_, index) => index + 1).map(
					(day) => (
						<button
							className={getClassNames([
								styles.day,
								day === activeDay ? styles["day-active"] : "",
							])}
							data-testid={`calendar-month-days-day-${day}`}
							type="button"
							key={`calendar-month-days-day-${day}`}
						>
							{day}
						</button>
					),
				)}
			</div>
		)
	)
})
