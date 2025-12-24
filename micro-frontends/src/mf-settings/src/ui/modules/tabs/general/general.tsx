import type { FunctionComponent } from "react"
import { MFSystemInformation } from "../../../../../../mf-system-information/src/ui/views/system-information"
import { useGeneral } from "./use-general.hook"

export const GeneralTab: FunctionComponent = () => {
	const { generalInformation } = useGeneral()

	return (
		<div data-testid="mf-settings-general-tab">
			<MFSystemInformation sections={generalInformation} />
		</div>
	)
}
