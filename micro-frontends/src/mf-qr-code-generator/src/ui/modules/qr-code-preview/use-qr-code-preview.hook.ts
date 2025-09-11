import type { Maybe } from "@windows98/toolkit"
import { useEffect, useState } from "react"
import { useQRCodeGenerator } from "../../hooks"

export const useQRCodePreview = () => {
	const { domain } = useQRCodeGenerator()
	const [imgSrc, setImgSrc] = useState<Maybe<string>>(null)

	useEffect(() => {
		if (domain.qrCode) {
			setImgSrc(domain.qrCode.toDataURL())
		}
	}, [domain.qrCode])

	return {
		imgSrc,
	}
}
