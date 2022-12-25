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

    expect(chrome).equal('Chrome')
    expect(safari).equal('Safari')
  })
})

describe('[NavigatorBundle]<Services>(getTypeDevice)', () => {
  it('should return type of device', () => {
    const desktop = getTypeDevice(navigatorUserAgentMocks.chromeMacOSXDesktop)
    const mobile = getTypeDevice(navigatorUserAgentMocks.safariIOSMobile)

    console.log(mobile)

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

    expect(macOSX).equal('Mac OS X')
    expect(iOS).equal('iOS')
  })
})
