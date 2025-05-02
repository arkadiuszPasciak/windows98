import { ErrorHandlerDomainContract } from '../contracts';
export declare class ErrorHandlerDomain implements ErrorHandlerDomainContract {
    private readonly UNKNOWN_ERROR_MESSAGE;
    CatchError(moduleName: string, methodName: string): (_target: object, _propertyKey: string, descriptor: PropertyDescriptor) => void;
    private createError;
    private generateErrorMessage;
}
export declare const MSErrorHandler: {
    CatchError: (moduleName: string, methodName: string) => (_target: object, _propertyKey: string, descriptor: PropertyDescriptor) => void;
};
