import { useContext } from "react"
import { GameDomainContext } from "../context"

export function useGameDomain() {
	const gameDomain = useContext(GameDomainContext)

	return { gameDomain }
}
