import { themeDomain } from "../../domain/domains"
import { DomainContext } from "../context"
import { Wrapper } from "../modules/wrapper"

export const ThemeView = () => {
	return (
		<DomainContext.Provider value={themeDomain}>
			<Wrapper />
		</DomainContext.Provider>
	)
}
