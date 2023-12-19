import { ICalendarDays } from '../../domain/models/days.model'
import CalendarRepositoryContract from '../../domain/contracts/repository.contract'

export class CalendarRepository implements CalendarRepositoryContract {
	constructor(
		private date: Date = new Date(),
	) { }

	public getFullYear(): number {
		return this.date.getFullYear()
	}

	public getMonth(): number {
		return this.date.getMonth()
	}

	public generateDays(): Array<ICalendarDays> {
		const days = [] as Array<ICalendarDays>

		for (let index = this.getFirstDayMonth(); index > 0; index--) {
			days.push({
				status: 'inactive',
				value: '',
			})
		}

		for (let index = 1; index <= this.getLastDateMonth(); index++) {
			const isToday =
				index === this.date.getDate() &&
				this.getMonth() === new Date().getMonth() &&
				this.getFullYear() === new Date().getFullYear()

			days.push({
				status: isToday ? 'active' : 'normal',
				value: String(index),
			})
		}

		return days
	}

	public getFirstDayMonth(): number {
		return new Date(this.getFullYear(), this.getMonth(), 1).getDay()
	}

	public getLastDateMonth(): number {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
	}
}
