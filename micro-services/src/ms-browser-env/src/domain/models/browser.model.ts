export type TBrowserName = "Chrome" | "Firefox" | "Safari" | "Opera" | "Edge"

export interface IBrowserNameRegex {
	name: TBrowserName
	regex: RegExp
}
