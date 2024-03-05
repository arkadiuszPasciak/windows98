export enum ELanguageLocales {
  ENGLISH = "en",
  POLISH = "pl",
}

export type TLanguageLocales =
  | ELanguageLocales.ENGLISH
  | ELanguageLocales.POLISH

export interface ILanguageLocales {
  value: TLanguageLocales
  name: string
}
