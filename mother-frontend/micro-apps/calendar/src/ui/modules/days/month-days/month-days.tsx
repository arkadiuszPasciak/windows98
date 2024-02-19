import { useDays } from '../use-days.hook'
import styles from './month-days.module.scss'
import { observer } from 'mobx-react-lite'

export const MonthDays = observer(() => {
	const { monthDays } = useDays()

	return monthDays && (
		<div className={styles['month-days']} data-testid="calendar-view-days">
			{monthDays.map((day, id) => (
				<button
					className={`
						${styles['day']}
						${day.status === 'active' ? styles['day-active'] : ''}
					`}
					data-test={`calendar-month-days-day-${id}`}
					type="button"
					key={id}
				>
					{day.value}
				</button>
			))}
		</div>
	)
})
