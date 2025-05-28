import { DSTabs } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import { useTabs } from "./use-tabs.hook"

export const Tabs: FunctionComponent = () => {
	const { tabs } = useTabs()

	return (
		<DSTabs
			id="mf-settings"
			tabs={tabs}
		/>
	)
}
