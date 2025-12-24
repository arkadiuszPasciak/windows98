import { useConfig } from "../../../hooks"

export function useGeneral() {
	const { generalInformation } = useConfig()

	return {
		generalInformation,
	}
}
