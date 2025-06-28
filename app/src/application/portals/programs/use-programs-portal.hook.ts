import { useProgramManager } from "../../hooks"

export function useProgramsPortal() {
	const { programs } = useProgramManager()

	return {
		programs,
	}
}
