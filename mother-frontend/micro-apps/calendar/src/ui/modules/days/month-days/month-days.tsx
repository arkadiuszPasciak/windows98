import { useDays } from '../use-days.hook'

export function MonthDays() {
	const { monthDays } = useDays()

	return monthDays && (
		<div className="month-days" data-test="calendar-view-days">
			{monthDays.map((day, id) => (
				<button
					className={`day ${day.status === 'active' ? 'is-normal' : ''}`}
					data-test={`calendar-month-days-day-${id}`}
					type="button"
				>
					{day.value}
				</button>
			))}
		</div>
	)
}
