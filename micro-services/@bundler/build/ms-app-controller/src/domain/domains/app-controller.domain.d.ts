import { AppControllerDomainContract } from '../contracts';
export declare class AppControllerDomain implements AppControllerDomainContract {
    private appControllerRepository;
    constructor();
    restartApplication(): void;
    shutdownApplication(): void;
}
