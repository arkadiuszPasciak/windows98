import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { useDownloadImage } from "./use-download-image.hook"

export const DownloadImage: FunctionComponent = observer(() => {
	const { downloadImage, isDisabled, translations } = useDownloadImage()

	return (
		<DSButton
			id="mf-image-converter-download-image"
			onClick={downloadImage}
			text={translations.buttonName}
			disabled={isDisabled}
		/>
	)
})
