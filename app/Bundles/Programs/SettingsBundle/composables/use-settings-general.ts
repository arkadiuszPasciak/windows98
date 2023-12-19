import { UserAgentMicroServices } from '@windows98/micro-services/user-agent'

export default function useSettingsGeneral() {
  const userAgentMicroServices = new UserAgentMicroServices()

  const browserName = userAgentMicroServices.getBrowserName()
  const deviceType = userAgentMicroServices.getTypeDevice()
  const operatingSystem = userAgentMicroServices.getOperatingSystem()

  return {
    browserName,
    deviceType,
    operatingSystem,
  }
}
