import { useColorGenerator } from "../../hooks"

export const useColorPreview = () => {
	const { domain } = useColorGenerator()

	return {
		currentColor: domain.currentColor,
	}
}
