import { observer } from 'mobx-react-lite'
import { useDays } from '../use-days.hook'
import styles from './week-days.module.scss'

export const WeekDays = observer(() => {
	const { weekDays } = useDays()

	return (
		<div className={styles['week-days']}>
			{weekDays.map((day, id) => (
				<span
					className={styles['day']}
					data-testid={`calendar-week-days-day-${id}`}
					key={id}
				>
					{day}
				</span>
			))}
		</div>
	)
})
