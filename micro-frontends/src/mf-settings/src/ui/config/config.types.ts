import type { PropsWithChildren } from "react"

export interface ConfigProps extends PropsWithChildren {
	onCloseProgram: () => void
	languages: Array<string>
	onChangeLanguage: (language: string) => void
	themes: Array<string>
	onChangeTheme: (theme: string) => void
}
