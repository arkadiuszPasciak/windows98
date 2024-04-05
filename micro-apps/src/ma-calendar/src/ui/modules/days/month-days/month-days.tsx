import { useDays } from "../use-days.hook"
import styles from "./month-days.module.scss"
import { observer } from "mobx-react-lite"

export const MonthDays = observer(() => {
	const { monthDays } = useDays()

	return monthDays && (
		<div className={styles["month-days"]} data-testid="calendar-view-days">
			{monthDays.map((day, id) => (
				day.value === "" ? 
					<span
						className={styles["day"]}
						data-testid={`calendar-month-days-empty-${id}`}
						key={id}
					>
					</span>
				
					:

					<button
						className={`
                        ${styles["day"]}
                        ${day.status === "active" ? styles["day-active"] : ""}
                    `}
						data-testid={`calendar-month-days-day-${day.value}`}
						type="button"
						key={id}
					>
						{day.value}
					</button>
			))}
		</div>
	)
})
