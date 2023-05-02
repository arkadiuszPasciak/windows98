import {
  ICalendarElements,
  ICalendarDays,
  TCalendarYearChangeMethod,
} from '@APP|Bundles/CalendarBundle/Supports/Calendar.supports'

export class Calendar {
  private date: Date
  public year: number
  public month: number
  private firstDayMonth: number
  private lastDateMonth: number

  constructor(date: Date) {
    this.date = date
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.firstDayMonth = this.getFirstDayMonth()
    this.lastDateMonth = this.getLastDateMonth()
  }

  private getFirstDayMonth(): number {
    return new Date(this.year, this.month, 1).getDay()
  }

  private getLastDateMonth(): number {
    return new Date(this.year, this.month + 1, 0).getDate()
  }

  public generateDays(): Array<ICalendarDays> {
    const days = [] as Array<ICalendarDays>

    for (let index = this.firstDayMonth; index > 0; index--) {
      days.push({
        status: 'inactive',
        value: '',
      })
    }

    for (let index = 1; index <= this.lastDateMonth; index++) {
      const isToday =
        index === this.date.getDate() &&
        this.month === new Date().getMonth() &&
        this.year === new Date().getFullYear()

      days.push({
        status: isToday ? 'active' : 'normal',
        value: String(index),
      })
    }

    return days
  }
}

export class CalendarComponentTesting {
  public elements: ICalendarElements

  constructor() {
    this.elements = {
      calendarDaysView: '[data-test="calendar-view-days"]',
      selectDateMonths: '[data-test="ui-select-date-months"]',
      optionSelected: '[data-test="ui-select-date-months"] > option:selected',
      buttonYear: (method: TCalendarYearChangeMethod) =>
        `[data-test="calendar-year-switcher-${method}"]`,
      showYear: '[data-test="calendar-year-switcher-year"]',
    }
  }

  private checkCalendarDays(inActiveDays: number, days: number) {
    cy.get(this.elements.calendarDaysView)
      .find('.day.is-inactive')
      .should('have.length', inActiveDays)

    cy.get(this.elements.calendarDaysView)
      .find('.day.is-normal')
      .should('have.length', days)
  }

  public changeSelectAndCheckComponent(
    month: string,
    inActiveDays: number,
    days: number,
  ) {
    cy.get(this.elements.selectDateMonths).select(month)

    cy.get(this.elements.optionSelected).should('have.text', month)

    this.checkCalendarDays(inActiveDays, days)
  }

  public changeYearAndCheckComponent(
    year: string,
    method: TCalendarYearChangeMethod,
    inActiveDays: number,
    days: number,
  ) {
    cy.get(this.elements.buttonYear(method)).click()

    cy.get(this.elements.showYear).should('have.text', year)

    this.checkCalendarDays(inActiveDays, days)
  }
}
