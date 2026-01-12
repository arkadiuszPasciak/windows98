import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useConvertImage } from "./use-convert-image.hook"

export const ConvertImage: FunctionComponent = observer(() => {
	const { convertImage, isDisabled, translations } = useConvertImage()

	return (
		<DSButton
			id="mf-image-converter-convert-image"
			onClick={convertImage}
			text={translations.buttonName}
			disabled={isDisabled}
		/>
	)
})
