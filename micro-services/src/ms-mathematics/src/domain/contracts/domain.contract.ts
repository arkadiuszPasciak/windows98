import type { ErrorType, Numbers, Operation, Sign } from "../models"

export interface MathematicsDomainContract {
	add(currentOperation: Operation, value: Numbers | Sign): Operation
	clear(): Operation
	equal(currentOperation: Operation): Operation
	remove(currentOperation: Operation): Operation
	validate(currentOperation: Operation): ErrorType | true
}
