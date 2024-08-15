export enum EEnvironment {
	DEVEVELOPMENT = "development",
	PRODUCTION = "production",
	TEST = "test",
}

export type TEnvironemnt = EEnvironment

export function isEnvironment(
	environment: TEnvironemnt,
	nodeEnvironemnt: string | undefined,
) {
	return environment === nodeEnvironemnt
}
