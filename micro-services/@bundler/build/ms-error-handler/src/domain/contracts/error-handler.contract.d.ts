import type { IPropertyDescriptor } from "../../models";
export interface ErrorHandlerDomainContract {
    CatchError(moduleName: string, methodName: string): (_target: object, _propertyKey: string, descriptor: IPropertyDescriptor) => void;
}
