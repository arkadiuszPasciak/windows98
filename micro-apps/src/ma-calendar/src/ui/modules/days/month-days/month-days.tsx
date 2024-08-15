import { observer } from "mobx-react-lite"
import { useDays } from "../use-days.hook"
import styles from "./month-days.module.scss"

export const MonthDays = observer(() => {
	const { monthDays } = useDays()

	return (
		monthDays && (
			<div
				className={styles["month-days"]}
				data-testid="calendar-view-days"
			>
				{monthDays.map((day, id) =>
					day.value === "" ? (
						<span
							className={styles.day}
							data-testid={`calendar-month-days-empty-${id}`}
							key={`calendar-month-days-day-${day.id}`}
						/>
					) : (
						<button
							className={`
                        ${styles.day}
                        ${day.status === "active" ? styles["day-active"] : ""}
                    `}
							data-testid={`calendar-month-days-day-${day.value}`}
							type="button"
							key={`calendar-month-days-day-${day.id}`}
						>
							{day.value}
						</button>
					),
				)}
			</div>
		)
	)
})
