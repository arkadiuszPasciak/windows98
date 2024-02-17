import { useWeekDays } from './use-week-days.hook'
import styles from './week-days.module.scss'

export function WeekDays() {
	const { dictionary } = useWeekDays()

	return (
		<div className={styles['week-days']}>
			{dictionary.map((day, id) => (
				<span className={styles['day']} data-testid={`calendar-week-days-day-${id}`}>
					{day}
				</span>
			))}
		</div>
	)
}
