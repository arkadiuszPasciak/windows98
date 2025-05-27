import type { FunctionComponent } from "react"
import { MFSystemInformation } from "../../../../../../mf-system-information/src/ui/views/system-information"

export const GeneralTab: FunctionComponent = () => {
	return (
		<div data-testid="mf-settings-general-tab">
			<MFSystemInformation />
		</div>
	)
}
