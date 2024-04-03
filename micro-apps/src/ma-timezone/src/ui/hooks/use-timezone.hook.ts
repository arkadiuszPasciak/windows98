import { useContext } from "react"
import { DomainContext } from "../context/domain.context"

export default function useTimezone() {
	const store = useContext(DomainContext)

	return {
		timezoneService: store,
	}
}
