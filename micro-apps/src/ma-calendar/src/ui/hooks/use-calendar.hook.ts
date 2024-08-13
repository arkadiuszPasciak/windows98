import { useContext } from "react"
import { DomainContext } from "../context"

export function useCalendar() {
	const store = useContext(DomainContext)

	return {
		calendarDomain: store,
	}
}
