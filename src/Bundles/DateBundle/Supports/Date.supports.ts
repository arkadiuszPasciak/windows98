export enum EMonths {
  JANUARY = 'jan',
  FEBRUARY = 'feb',
  MARCH = 'mar',
  APRIL = 'apr',
  MAY = 'may',
  JUNE = 'jun',
  JULY = 'jul',
  AUGUST = 'aug',
  SEPTEMBER = 'sep',
  OCTOBER = 'oct',
  NOVEMBER = 'nov',
  DECEMEBER = 'dev',
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
