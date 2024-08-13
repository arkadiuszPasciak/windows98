import { useContext } from "react"
import { DomainContext } from "../context"

export function useTimezone() {
	const store = useContext(DomainContext)

	return {
		timezoneService: store,
	}
}
