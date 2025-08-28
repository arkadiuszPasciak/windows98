class ErrorCatcher {
	private readonly UNKNOWN_ERROR_MESSAGE = "Unknown error message"

	public Catch() {
		const instance = this

		return (
			target: object,
			propertyKey: string,
			descriptor: PropertyDescriptor,
		): void => {
			const originalMethod = descriptor.value

			descriptor.value = function (...args: unknown[]) {
				try {
					return originalMethod.apply(this, args)
				} catch (error) {
					const className = target.constructor.name
					const methodName = propertyKey
					const customError = instance.createError(className, methodName, error)

					throw customError
				}
			}
		}
	}

	private createError(
		className: string,
		methodName: string,
		error: Error | unknown,
	): Error {
		const errorMessage = this.generateErrorMessage(error)

		const newError = new Error(errorMessage)
		newError.name = `[${className}]<${methodName}>`

		return newError
	}

	private generateErrorMessage(error: Error | unknown): string {
		return error instanceof Error && error.message.length
			? error.message
			: this.UNKNOWN_ERROR_MESSAGE
	}
}

const errorCatcherInstance = new ErrorCatcher()

export const CatchError = errorCatcherInstance.Catch.bind(errorCatcherInstance)
