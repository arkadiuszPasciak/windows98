export enum ELanguagesLocales {
  ENGLISH = 'en',
  POLISH = 'pl',
}

type TLanguagesLocal = ELanguagesLocales.ENGLISH | ELanguagesLocales.POLISH

interface ILanguageLocal {
  value: TLanguagesLocal
  name: string
}

export type TLanguagesLocales = Array<ILanguageLocal>
