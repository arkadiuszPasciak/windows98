export enum EFileTextTypes {
	CSV = "text/csv;charset=utf-8;",
	DOC = "text/doc;charset=utf-8;",
	RTF = "text/rtf;charset=utf-8;",
	TXT = "text/txt;charset=utf-8;",
}

export type TFileTextTypes =
	| EFileTextTypes.CSV
	| EFileTextTypes.DOC
	| EFileTextTypes.TXT
	| EFileTextTypes.RTF

export interface IFilesTextTypes {
	value: TFileTextTypes
	name: string
}

export type TFileTextFileReader = string | ArrayBuffer | null

export interface IFilesElements {
	labelFileSaveName: string
	labelFileTypes: string
	selectTypeFile: string
	optionSelected: string
}
