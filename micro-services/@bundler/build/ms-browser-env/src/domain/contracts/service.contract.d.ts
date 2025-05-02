import { Maybe } from '@windows98/toolkit';
import { TBrowserName } from '../models/browser.model';
import { TDevices } from '../models/device.model';
import { TOperatingSystemAll } from '../models/operating.model';
import { IScreenInformation } from '../models/screen.model';
export default interface BrowserEnvServiceContract {
    getBrowserName(): Maybe<TBrowserName>;
    getDeviceType(): Maybe<TDevices>;
    getOperatingSystem(): Maybe<TOperatingSystemAll>;
    getScreenInformation(): Maybe<IScreenInformation>;
}
