import type BrowserEnvRepositoryContract from "../../domain/contracts/repository.contract";
import { IDevicesRegex, TDevices } from "../../domain/models/device.model";
export default class DeviceTypeRepository implements BrowserEnvRepositoryContract<TDevices> {
    private readonly devicesNames;
    constructor(devicesNames?: Array<IDevicesRegex>);
    get(): TDevices | null;
}
