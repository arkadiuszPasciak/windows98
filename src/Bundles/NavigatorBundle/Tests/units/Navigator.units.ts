import { it, describe } from 'vitest'
import {
  getBrowserName,
  getTypeDevice,
  getOperatingSystem,
} from '@Bundles/NavigatorBundle/Services/Navigator.services'
import { navigatorUserAgentMocks } from '@Bundles/NavigatorBundle/Mocks/Navigator.mocks'

describe('[NavigatorBundle]<Services>(getBrowserName)', () => {
  it('should return browser name', () => {
    const chrome = getBrowserName(navigatorUserAgentMocks.chromeMacOSXDesktop)
    const safari = getBrowserName(navigatorUserAgentMocks.safariIOSMobile)
    const firefox = getBrowserName(
      navigatorUserAgentMocks.firefoxAndroidDesktop,
    )

    expect(chrome).equal('Chrome')
    expect(safari).equal('Safari')
    expect(firefox).equal('Firefox')
  })
})

describe('[NavigatorBundle]<Services>(getTypeDevice)', () => {
  it('should return type of device', () => {
    const desktop = getTypeDevice(navigatorUserAgentMocks.chromeMacOSXDesktop)
    const mobile = getTypeDevice(navigatorUserAgentMocks.safariIOSMobile)

    expect(desktop).equal('desktop')
    expect(mobile).equal('mobile')
  })
})

describe('[NavigatorBundle]<Services>(getOperatingSystem)', () => {
  it('should return type of device', () => {
    const macOSX = getOperatingSystem(
      navigatorUserAgentMocks.chromeMacOSXDesktop,
    )
    const iOS = getOperatingSystem(navigatorUserAgentMocks.safariIOSMobile)
    const windows = getOperatingSystem(
      navigatorUserAgentMocks.edgeWindowsDesktop,
    )
    const linux = getOperatingSystem(navigatorUserAgentMocks.operaLinuxDesktop)

    expect(macOSX).equal('Mac OS X')
    expect(iOS).equal('iOS')
    expect(windows).equal('Windows NT 4.0')
    expect(linux).equal('Linux')
  })
})
