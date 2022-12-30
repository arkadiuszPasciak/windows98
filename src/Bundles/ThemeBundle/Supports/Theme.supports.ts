export enum EThemes {
  DARK = 'dark',
  LIGHT = 'light',
}

type TThemes = EThemes.DARK | EThemes.LIGHT

export interface IThemeOptions {
  value: TThemes
  name: string
}
