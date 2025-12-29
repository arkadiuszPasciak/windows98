import type { PropsWithChildren } from "react"

export interface ConfigProps extends PropsWithChildren {
	generalInformation: Array<{
		name: string
		items: Array<{
			label: string
			value: string
		}>
	}>
	onChangeLanguage: (language: string) => void
	onChangeTheme: (theme: string) => void
	onCloseProgram: () => void
	languages: Array<string>
	themes: Array<string>
}
