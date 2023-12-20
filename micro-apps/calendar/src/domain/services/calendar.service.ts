import { observable, action, makeObservable } from 'mobx'
import type { CalendarServiceContract } from '../contracts/service.contract'

export class CalendarService implements CalendarServiceContract {
  @observable
  calendar = null
  year = null
  month = null

  constructor() {
    makeObservable(this)
  }

  @action
  generateCurrentCalendar(): void {}

  @action
  changeCalendarByYear(): void {}

  @action
  changeCalendarByMonth(month: number): void {}

  @action
  increaseYear(): void {}

  @action
  decreaseYear(): void {}
}
