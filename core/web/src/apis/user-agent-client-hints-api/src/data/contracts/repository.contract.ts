import type { Maybe } from "@windows98/toolkit"
import type { Brands, Platform } from "../models"

export interface UserAgentClientHintsAPIRepositoryContract {
	getBrands(): Maybe<Brands>
	isMobile(): Maybe<boolean>
	getPlatform(): Maybe<Platform>
}
