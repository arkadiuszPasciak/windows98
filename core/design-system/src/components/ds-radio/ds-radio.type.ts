import type { State } from "@windows98/toolkit"
import { DSDefaultProps } from "../../types/component.type"

export interface DSRadioProps extends DSDefaultProps {
	id: string
	initialValue: boolean
	name: string
	state: State
	checked?: boolean
	text: {
		content: string
		visible: boolean
	}
	onChange: (value: boolean) => void
}

export interface UseDSRadioProps {
	initialValue: DSRadioProps["initialValue"]
	onChange: DSRadioProps["onChange"]
	state: State
}
