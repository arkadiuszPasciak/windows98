import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper/wrapper"
import { clockService } from "../../domain/services/clock.service"

export const ClockView = () => {
	console.log("123")

	return (
		<DomainContext.Provider value={clockService}>
			<p>12345</p>
			<Wrapper />
		</DomainContext.Provider>
	)
}
