import { useContext } from "react"
import { DomainContext } from "../context/domain.context"

export default function useClock() {
	const store = useContext(DomainContext)

	return {
		clockService: store,
	}
}
