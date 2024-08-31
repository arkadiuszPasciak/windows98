import type { AppControllerRepositoryContract } from "../../domain/contracts";
export declare class AppControllerRepository implements AppControllerRepositoryContract {
    restartApplication(): void;
    turnOffApplication(): void;
}
