import { observer } from "mobx-react-lite"
import styles from "./month-days.module.scss"
import { useMonthDays } from "./use-month-days.hook"

export const MonthDays = observer(() => {
	const { activeDay, firstDayOfWeek, monthDays } = useMonthDays()

	return (
		typeof monthDays === "number" && (
			<div
				className={styles["month-days"]}
				data-testid="calendar-view-days"
			>
				{Array.from({ length: firstDayOfWeek }).map((_, index) => (
					<span
						className={styles.day}
						data-testid={`calendar-month-days-empty-${index + 1}`}
						key={`calendar-month-days-empty-${index + 1}`}
					/>
				))}

				{Array.from({ length: monthDays }).map((_, index) => (
					<button
						className={`
                            ${styles.day}
                            ${index + 1 === activeDay ? styles["day-active"] : ""}
                        `}
						data-testid={`calendar-month-days-day-${index + 1}`}
						type="button"
						key={`calendar-month-days-day-${index + 1}`}
					>
						{index + 1}
					</button>
				))}
			</div>
		)
	)
})
