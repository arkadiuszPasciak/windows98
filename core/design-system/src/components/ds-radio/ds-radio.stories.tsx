import { type JSX, useState } from "react"
import { DSRadio } from "./ds-radio"
import type { DSRadioProps } from "./ds-radio.type"

export const dsRadioStoriesProps: { [key: string]: DSRadioProps } = {
	radio1: {
		id: "radio-1",
		name: "group-1",
		text: { content: "Radio 1", visible: true },
		initialChecked: true,
		onChange: () => {},
	},
	radio2: {
		id: "radio-2",
		name: "group-1",
		text: { content: "Radio 2", visible: true },
		initialChecked: false,
		onChange: () => {},
	},
	radio3: {
		id: "radio-3",
		name: "group-1",
		text: { content: "Radio 3", visible: true },
		initialChecked: false,
		onChange: () => {},
	},
}

export const DSRadioStories = (): JSX.Element => {
	const [selectedPreset, setSelectedPreset] = useState("radio-1")

	return (
		<>
			{Object.values(dsRadioStoriesProps).map((props) => (
				<DSRadio
					key={props.id}
					{...props}
					onChange={() => setSelectedPreset(props.id)}
					initialChecked={selectedPreset === props.id}
				/>
			))}
		</>
	)
}
