import { DSText } from "@windows98/design-system"
import { useInformation } from "./use-information.hook"

export const Information = () => {
	const { translations } = useInformation()

	return (
		<DSText
			id="mf-image-converter-information"
			text={translations.text}
		/>
	)
}
