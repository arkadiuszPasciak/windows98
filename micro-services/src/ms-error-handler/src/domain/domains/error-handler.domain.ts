import type { IError } from "../../models"
import type { ErrorHandlerDomainContract } from "../contracts"

export class ErrorHandlerDomain implements ErrorHandlerDomainContract {
	private readonly UNKNOWN_ERROR_MESSAGE = "Unknown error message"

	public CatchError(moduleName: string, methodName: string) {
		const instance = this

		return (
			_target: object,
			_propertyKey: string,
			descriptor: PropertyDescriptor,
		): void => {
			const originalMethod = descriptor.value

			descriptor.value = function (...args: unknown[]) {
				try {
					return originalMethod.apply(this, args)
				} catch (error) {
					const customError = instance.createError(
						moduleName,
						methodName,
						error,
					)

					throw customError
				}
			}
		}
	}

	private createError(
		moduleName: string,
		methodName: string,
		error: Error | unknown,
	): IError {
		const errorMessage = this.generateErrorMessage(error)

		const newError = new Error(errorMessage)
		newError.name = `[${moduleName}]<${methodName}>`

		return newError
	}

	private generateErrorMessage(error: Error | unknown): string {
		return error instanceof Error && error.message.length
			? error.message
			: this.UNKNOWN_ERROR_MESSAGE
	}
}

const errorHandlerInstance = new ErrorHandlerDomain()

export const MSErrorHandler = {
	CatchError: errorHandlerInstance.CatchError.bind(errorHandlerInstance),
}
