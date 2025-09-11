import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./qr-code-preview.module.css"
import { useQRCodePreview } from "./use-qr-code-preview.hook"

export const QRCodePreview: FunctionComponent = observer(() => {
	const { imgSrc } = useQRCodePreview()

	return (
		<div
			className={styles["qr-code-preview"]}
			data-testid="mf-qr-code-generator-qr-code-preview-box"
		>
			{imgSrc && (
				<img
					src={imgSrc}
					alt="QR Code Preview"
				/>
			)}
		</div>
	)
})
