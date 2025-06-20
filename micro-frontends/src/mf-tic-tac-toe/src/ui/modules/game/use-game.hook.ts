import { useGameDomain } from "../../hooks"

export function useGame() {
	const { gameDomain } = useGameDomain()

	const computerData = gameDomain.computer
	const humanData = gameDomain.human
	const statusResult = gameDomain.statusResult

	return {
		computerData,
		humanData,
		statusResult,
	}
}
