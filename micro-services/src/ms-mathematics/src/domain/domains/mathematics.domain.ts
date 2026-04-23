import type {
	AddStrategyContract,
	ClearStrategyContract,
	EqualStrategyContract,
	MathematicsDomainContract,
	RemoveStrategyContract,
	ValidatorStrategyContract,
} from "../contracts"
import type { ErrorType, Numbers, Operation, Sign } from "../models"
import {
	AddStrategy,
	ClearStrategy,
	EqualStrategy,
	RemoveStrategy,
	ValidatorStrategy,
} from "./strategies"

export class MathematicsDomain implements MathematicsDomainContract {
	private addStrategy: AddStrategyContract
	private clearStrategy: ClearStrategyContract
	private equalStrategy: EqualStrategyContract
	private removeStrategy: RemoveStrategyContract
	private validatorStrategy: ValidatorStrategyContract

	constructor(
		addStrategy: AddStrategyContract,
		clearStrategy: ClearStrategyContract,
		equalStrategy: EqualStrategyContract,
		removeStrategy: RemoveStrategyContract,
		validatorStrategy: ValidatorStrategyContract,
	) {
		this.addStrategy = addStrategy
		this.clearStrategy = clearStrategy
		this.equalStrategy = equalStrategy
		this.removeStrategy = removeStrategy
		this.validatorStrategy = validatorStrategy
	}

	public add(currentOperation: Operation, value: Sign | Numbers): Operation {
		return this.addStrategy.add(currentOperation, value)
	}

	public clear(): Operation {
		return this.clearStrategy.clear()
	}

	public equal(currentOperation: Operation): Operation {
		return this.equalStrategy.equal(currentOperation)
	}

	public remove(currentOperation: Operation): Operation {
		return this.removeStrategy.remove(currentOperation)
	}

	public validate(currentOperation: Operation): true | ErrorType {
		return this.validatorStrategy.validate(currentOperation)
	}
}

export const MSMathematics = new MathematicsDomain(
	new AddStrategy(),
	new ClearStrategy(),
	new EqualStrategy(),
	new RemoveStrategy(),
	new ValidatorStrategy(),
)
