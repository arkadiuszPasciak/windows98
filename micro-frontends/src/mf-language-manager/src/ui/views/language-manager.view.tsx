import type { FunctionComponent } from "react"
import { languageManagerDomain } from "../../domain/domains"
import { Config } from "../config"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"
import type { LanguageManagerViewProps } from "./language-manager.types"

export const LanguageManagerView: FunctionComponent<
	LanguageManagerViewProps
> = ({ languages, onChangeLanguage }) => {
	return (
		<Config
			languages={languages}
			onChangeLanguage={onChangeLanguage}
		>
			<DomainContext.Provider value={languageManagerDomain}>
				<Wrapper />
			</DomainContext.Provider>
		</Config>
	)
}
