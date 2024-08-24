import type { IFilesTextTypes } from "@APP/src/bundles/Window/FileBundle/Supports/File.supports"

export const MFilesTextTypes = [
	{
		value: "text/txt;charset=utf-8;",
		name: "FileBundle.text-txt",
	},
	{
		value: "text/doc;charset=utf-8;",
		name: "FileBundle.text-doc",
	},
	{
		value: "text/csv;charset=utf-8;",
		name: "FileBundle.text-csv",
	},
	{
		value: "text/rtf;charset=utf-8;",
		name: "FileBundle.text-rtf",
	},
] as Array<IFilesTextTypes>
