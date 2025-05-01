import { useContext } from "react"
import { DomainContext } from "../context"

export function useCalendar() {
	const calendarDomain = useContext(DomainContext)

	return calendarDomain
}
