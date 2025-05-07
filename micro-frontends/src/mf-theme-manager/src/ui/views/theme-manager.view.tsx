import { themeManagerDomain } from "../../domain/domains"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"

export const ThemeManagerView = () => {
	return (
		<DomainContext.Provider value={themeManagerDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
