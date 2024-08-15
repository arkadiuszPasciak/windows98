import { useState } from "react"
import { DSInput } from "./index"

export function DSInputStories(): JSX.Element {
	const [value, setValue] = useState<string>("this is value")

	return (
		<DSInput
			type="text"
			id="first-name"
			disabled={true}
			initialValue={value}
			labelName="Label"
			onChange={(value) => setValue(String(value))}
		/>
	)
}
