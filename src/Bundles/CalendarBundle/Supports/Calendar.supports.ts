export enum EMonths {
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

export type TMonths =
  | EMonths.JANUARY
  | EMonths.FEBRUARY
  | EMonths.MARCH
  | EMonths.APRIL
  | EMonths.MAY
  | EMonths.JUNE
  | EMonths.JULY
  | EMonths.AUGUST
  | EMonths.SEPTEMBER
  | EMonths.OCTOBER
  | EMonths.NOVEMBER
  | EMonths.DECEMEBER

export interface IListOfMonths {
  value: TMonths
  name: string
}

export enum EYearChangeMethod {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}

export type TYearChangeMethod =
  | EYearChangeMethod.DECREASE
  | EYearChangeMethod.INCREASE
