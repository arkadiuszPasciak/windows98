import { observable, action, makeObservable } from 'mobx'
import CalendarRepository from '../../data/repositories/calendar.repository'
import type { CalendarServiceContract } from '../contracts/service.contract'
import type { Maybe } from '@windows98/toolkit/src/types'
import type { ICalendarDays } from '../models/days.model'

export class CalendarService implements CalendarServiceContract {
  @observable
  calendar: Maybe<Array<ICalendarDays>> = null
  year: Maybe<number> = null
  month: Maybe<number> = null

  constructor() {
    makeObservable(this)
  }

  @action
  generateCurrentCalendar(date: Date): void {
    const calendar = new CalendarRepository(date)
    const days = calendar.generateDays()

    if (this.calendar !== days) this.calendar = days

    if (this.year !== calendar.year) this.year = calendar.year

    if (this.month !== calendar.month) this.month = calendar.month
  }

  @action
  changeCalendarByYear(): void {
    if ((!this.month && this.month !== 0) || !this.year) {
      return
    }

    const date = new Date(this.year, this.month)

    this.generateCurrentCalendar(date)
  }

  @action
  changeCalendarByMonth(month: number): void {
    if (!this.year) {
      return
    }

    const date = new Date(this.year, month)

    this.generateCurrentCalendar(date)
  }

  @action
  increaseYear(): void {
    if (!this.year) return

    this.year += 1
  }

  @action
  decreaseYear(): void {
    if (!this.year) return

    this.year -= 1
  }
}
