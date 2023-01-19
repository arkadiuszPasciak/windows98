import { it, describe } from 'vitest'
import {
  getBrowserName,
  getTypeDevice,
  getOperatingSystem,
} from '@Bundles/UserAgentBundle/Services/UserAgent.services'
import { MUserAgentMocks } from '@Bundles/UserAgentBundle/Mocks/UserAgent.mocks'

describe('[UserAgentBundle]<Services>(getBrowserName)', () => {
  it('should return browser name', () => {
    const chrome = getBrowserName(MUserAgentMocks.chromeMacOSXDesktop)
    const safari = getBrowserName(MUserAgentMocks.safariIOSMobile)
    const firefox = getBrowserName(MUserAgentMocks.firefoxAndroidDesktop)

    expect(chrome).equal('Chrome')
    expect(safari).equal('Safari')
    expect(firefox).equal('Firefox')
  })
})

describe('[UserAgentBundle]<Services>(getTypeDevice)', () => {
  it('should return type of device', () => {
    const desktop = getTypeDevice(MUserAgentMocks.chromeMacOSXDesktop)
    const mobile = getTypeDevice(MUserAgentMocks.safariIOSMobile)

    expect(desktop).equal('desktop')
    expect(mobile).equal('mobile')
  })
})

describe('[UserAgentBundle]<Services>(getOperatingSystem)', () => {
  it('should return type of device', () => {
    const macOSX = getOperatingSystem(MUserAgentMocks.chromeMacOSXDesktop)
    const iOS = getOperatingSystem(MUserAgentMocks.safariIOSMobile)
    const windows = getOperatingSystem(MUserAgentMocks.edgeWindowsDesktop)
    const linux = getOperatingSystem(MUserAgentMocks.operaLinuxDesktop)

    expect(macOSX).equal('Mac OS X')
    expect(iOS).equal('iOS')
    expect(windows).equal('Windows NT 4.0')
    expect(linux).equal('Linux')
  })
})
