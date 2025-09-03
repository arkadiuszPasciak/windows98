import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import useButtonGenerate from "./use-button-generate.hook"

export const ButtonGenerate: FunctionComponent = observer(() => {
	const { translations, onButtonClick } = useButtonGenerate()

	return (
		<DSButton
			id="mf-qr-code-generator-button-generate"
			onClick={onButtonClick}
			text={translations.button}
		/>
	)
})
