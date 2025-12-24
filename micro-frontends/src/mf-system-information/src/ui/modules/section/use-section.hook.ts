import { useConfig } from "../../hooks"

export function useSection() {
	const { sections } = useConfig()

	return {
		sections,
	}
}
