import { UserAgentMicroServices } from '@windows98/micro-services/user-agent'

export default function useSettingsGeneral() {
  const userAgentMicroServices = new UserAgentMicroServices()

  const userAgent = window.navigator.userAgent

  const browserName = userAgentMicroServices.getBrowserName(userAgent)
  const deviceType = userAgentMicroServices.getTypeDevice(userAgent)
  const operatingSystem = userAgentMicroServices.getOperatingSystem(userAgent)

  return {
    browserName,
    deviceType,
    operatingSystem,
  }
}
