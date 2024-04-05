export type TBrowserName =
  | "Chrome"
  | "Firefox"
  | "Safari"
  | "Opera"
  | "Edge"

export interface IBrowserName {
  name: TBrowserName
  regex: RegExp
}
