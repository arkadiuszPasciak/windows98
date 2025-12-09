import { DSInput } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useInputText } from "./use-input-text.hook"

export const InputText: FunctionComponent = observer(() => {
	const { translations, inputValue, setInputValue } = useInputText()

	return (
		<DSInput
			id="mf-qr-code-generator-text"
			labelName={translations.label}
			initialValue={inputValue}
			placeholder={translations.placeholder}
			wrapperLayout="vertical"
			onChange={setInputValue}
		/>
	)
})
