export type TUserAgentBrowsers =
  | 'Chrome'
  | 'Firefox'
  | 'Safari'
  | 'Opera'
  | 'Edge'

export interface IUserAgentBrowser {
  name: TUserAgentBrowsers
  regex: RegExp
}
