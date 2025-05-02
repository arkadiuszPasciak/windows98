import { default as BrowserNameRepository } from '../../data/repositories/browser-name.repository';
import { default as DeviceTypeRepository } from '../../data/repositories/device-type.repository';
import { default as OperatingSystemRepository } from '../../data/repositories/operating-system.repository';
import { default as ScreenRepository } from '../../data/repositories/screen.repository';
import { default as BrowserEnvServiceContract } from '../contracts/service.contract';
export default class BrowserEnvService implements BrowserEnvServiceContract {
    private readonly browserNameRepository;
    private readonly deviceTypeRepository;
    private readonly operatingSystemRepository;
    private readonly screenRepository;
    constructor(browserNameRepository?: BrowserNameRepository, deviceTypeRepository?: DeviceTypeRepository, operatingSystemRepository?: OperatingSystemRepository, screenRepository?: ScreenRepository);
    getBrowserName(): import('../models/browser.model').TBrowserName | null;
    getDeviceType(): import('../models/device.model').TDevices | null;
    getOperatingSystem(): import('../models/operating.model').TOperatingSystemAll | null;
    getScreenInformation(): {
        colorDepth: number;
        height: number;
        width: number;
    } | null;
}
