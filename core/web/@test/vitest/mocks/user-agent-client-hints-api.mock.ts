interface UserAgentClientHints {
	brands: { brand: string; version: string }[]
	mobile: boolean
	platform: string
}

class UserAgentClientHintsAPIMock {
	public createMock({ brands, mobile, platform }: UserAgentClientHints) {
		return {
			brands,
			mobile,
			platform,
		}
	}

	public implementMock(userAgentDataMock: UserAgentClientHints) {
		Object.defineProperty(window.navigator, "userAgentData", {
			value: userAgentDataMock,
			configurable: false,
		})
	}
}

export const userAgentClientHintsAPIMock = new UserAgentClientHintsAPIMock()
