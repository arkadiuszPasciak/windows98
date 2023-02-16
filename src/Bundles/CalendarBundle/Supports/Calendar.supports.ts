export enum ECalendarMonths {
  JANUARY = 0,
  FEBRUARY = 1,
  MARCH = 2,
  APRIL = 3,
  MAY = 4,
  JUNE = 5,
  JULY = 6,
  AUGUST = 7,
  SEPTEMBER = 8,
  OCTOBER = 9,
  NOVEMBER = 10,
  DECEMEBER = 11,
}

export type TCalendarMonths =
  | ECalendarMonths.JANUARY
  | ECalendarMonths.FEBRUARY
  | ECalendarMonths.MARCH
  | ECalendarMonths.APRIL
  | ECalendarMonths.MAY
  | ECalendarMonths.JUNE
  | ECalendarMonths.JULY
  | ECalendarMonths.AUGUST
  | ECalendarMonths.SEPTEMBER
  | ECalendarMonths.OCTOBER
  | ECalendarMonths.NOVEMBER
  | ECalendarMonths.DECEMEBER

export interface IListOfMonths {
  value: TCalendarMonths
  name: string
}

export enum ECalendarYearChangeMethod {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

export type TCalendarYearChangeMethod =
  | ECalendarYearChangeMethod.DECREASE
  | ECalendarYearChangeMethod.INCREASE

export enum ECalendarStatusDay {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  NORMAL = 'normal',
}

export interface ICalendarDays {
  status: 'active' | 'inactive' | 'normal'
  value: string
}

export interface ICalendarElements {
  calendarDaysView: string
  selectDateMonths: string
  optionSelected: string
  buttonYear: (method: TCalendarYearChangeMethod) => string
  showYear: string
}
