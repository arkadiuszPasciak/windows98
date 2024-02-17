import { useWeekDays } from './use-week-days.hook'

export function WeekDays() {
	const { dictionary } = useWeekDays()

	return (
		<div className="week-days">
			{dictionary.map((day, id) => (
				<span className="day" data-testid={`calendar-week-days-day-${id}`}>
					{day}
				</span>
			))}
		</div>
	)
}
