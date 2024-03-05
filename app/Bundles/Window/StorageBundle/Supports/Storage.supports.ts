export enum EStorageNames {
  LANGUAGE = "language",
  THEME = "theme",
}

export type TStorageName = EStorageNames.LANGUAGE | EStorageNames.THEME

export interface IStorageNames {
  LANGUAGE: TStorageName
  THEME: TStorageName
}
