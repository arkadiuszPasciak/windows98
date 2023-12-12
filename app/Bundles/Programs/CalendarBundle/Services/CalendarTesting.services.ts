import {
  ICalendarElements,
  TCalendarYearChangeMethod,
} from '@APP|Bundles/CalendarBundle/Supports/Calendar.supports'

export class CalendarTesting {
  public elements: ICalendarElements

  constructor() {
    this.elements = {
      calendarDaysView: '[data-test="calendar-view-days"]',
      selectDateMonths: '[data-test="ui-select-date-months"]',
      optionSelected: '[data-test="ui-select-date-months"] > option:selected',
      buttonYear: (method: TCalendarYearChangeMethod) =>
        `[data-test="calendar-year-stepper-${method}"]`,
      showYear: '[data-test="calendar-year-stepper-input"]',
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
