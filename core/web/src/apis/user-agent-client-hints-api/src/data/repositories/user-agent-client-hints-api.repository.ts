import type { Maybe } from "@windows98/toolkit"
import type { UserAgentClientHintsAPIRepositoryContract } from "../contracts"
import type { Brands, Platform } from "../models"

// TODO: It's a temporary definition because there is a lack of that in TS
declare global {
	interface Navigator {
		userAgentData?: {
			brands: Brands
			mobile: boolean
			platform: Platform
		}
	}
}

export class UserAgentClientHintsAPIRepository
	implements UserAgentClientHintsAPIRepositoryContract
{
	public getBrands(): Maybe<Brands> {
		return window.navigator.userAgentData?.brands ?? null
	}

	public isMobile(): Maybe<boolean> {
		return window.navigator.userAgentData?.mobile ?? null
	}

	public getPlatform(): Maybe<Platform> {
		return window.navigator.userAgentData?.platform ?? null
	}
}
