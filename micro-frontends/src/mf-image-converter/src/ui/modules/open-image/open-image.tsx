import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useOpenImage } from "./use-open-image.hook"

export const OpenImage: FunctionComponent = observer(() => {
	const { openImage, translations } = useOpenImage()

	return (
		<DSButton
			id="mf-image-converter-open-image"
			onClick={openImage}
			text={translations.buttonName}
		/>
	)
})
