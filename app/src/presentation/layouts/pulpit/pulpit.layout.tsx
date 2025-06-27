import { MFPulpit } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import usePulpitLayout from "./use-pulpit-layout.hook"

export const PulpitLayout: FunctionComponent = () => {
	const { items } = usePulpitLayout()

	return <MFPulpit items={items} />
}
