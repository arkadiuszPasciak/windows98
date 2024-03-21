export type TUserAgentDevices = "mobile" | "desktop"

export interface IUserAgentDevices {
  name: TUserAgentDevices
  regex: RegExp
}
