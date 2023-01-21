enum EFileTextTypes {
  TXT = 'text/txt;charset=utf-8;',
  DOC = 'text/doc;charset=utf-8;',
  CSV = 'text/csv;charset=utf-8;',
}

type TFileTextTypes =
  | EFileTextTypes.CSV
  | EFileTextTypes.DOC
  | EFileTextTypes.TXT

export interface IFilesTextTypes {
  value: TFileTextTypes
  name: string
}
